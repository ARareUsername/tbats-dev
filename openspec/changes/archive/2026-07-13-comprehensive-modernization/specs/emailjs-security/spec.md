## ADDED Requirements

### Requirement: Serverless email proxy
Contact form SHALL submit to backend endpoint that forwards to EmailJS.

#### Scenario: API endpoint at /api/contact
- **WHEN** POST to `/api/contact`
- **THEN** validates payload, calls EmailJS server-side, returns success/error

#### Scenario: EmailJS credentials not in client bundle
- **WHEN** inspecting production JS bundle
- **THEN** no `VITE_EMAILJS_*` or hardcoded service/template/public keys

#### Scenario: Rate limiting enforced
- **WHEN** > 5 requests/minute from same IP
- **THEN** returns 429 with retry-after header

#### Scenario: Honeypot field validated
- **WHEN** form includes hidden `website` field
- **THEN** if filled, request rejected silently (spam prevention)

#### Scenario: Input sanitization
- **WHEN** processing form data
- **THEN** HTML escaped, length limited, XSS prevented

### Requirement: Content Security Policy
Production SHALL serve strict CSP headers.

#### Scenario: CSP allows only necessary sources
- **WHEN** loading page
- **THEN** `script-src 'self' 'unsafe-inline'` (for inline styles), `style-src 'self' 'unsafe-inline'`, `font-src 'self' data:`, `img-src 'self' data: https:`, `connect-src 'self' https://api.emailjs.com` (or proxy domain)

#### Scenario: CSP in headers or meta tag
- **WHEN** deploying to Netlify/Vercel
- **THEN** CSP via `_headers` file or middleware

### Requirement: Environment validation
All required env vars SHALL be validated at build and runtime.

#### Scenario: Build fails if env missing
- **WHEN** running `npm run build`
- **THEN** `@t3-oss/env-core` validates `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY` (server), `EMAILJS_PRIVATE_KEY` (server only)

#### Scenario: Runtime validation in serverless
- **WHEN** serverless function starts
- **THEN** validates env vars before handling requests