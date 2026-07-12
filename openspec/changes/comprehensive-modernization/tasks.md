## 1. Foundation & Tooling Setup

- [x] 1.1 Initialize TypeScript with strict config (`tsconfig.json`, `tsconfig.node.json`)
- [x] 1.2 Add TypeScript dependencies: `typescript`, `@types/react`, `@types/react-dom`, `@types/node`
- [x] 1.3 Convert `vite.config.js` → `vite.config.ts` with proper types
- [x] 1.4 Add Vitest + React Testing Library + `@testing-library/jest-dom` + `jsdom`
- [x] 1.5 Add Playwright for E2E testing
- [x] 1.6 Add `vite-plugin-visualizer`, `vite-plugin-imagemin`, `rollup-plugin-visualizer`
- [x] 1.7 Add ESLint + Prettier + TypeScript ESLint + `eslint-plugin-jsx-a11y`
- [x] 1.8 Add Husky + lint-staged + commitlint
- [x] 1.9 Add `@t3-oss/env-core` for env validation
- [x] 1.10 Configure `package.json` scripts: `typecheck`, `lint`, `lint:fix`, `format`, `test`, `test:watch`, `test:coverage`, `test:e2e`, `build:analyze`, `storybook`
- [x] 1.11 Create `.eslintrc.cjs`, `.prettierrc`, `.husky/pre-commit`, `commitlint.config.cjs`
- [x] 1.12 Create GitHub Actions workflow (`.github/workflows/ci.yml`) with typecheck, lint, test, build jobs
- [x] 1.13 Add `netlify.toml` or `vercel.json` for CSP headers and serverless functions

## 2. TypeScript Migration (Bottom-Up)

- [x] 2.1 Type `src/demo/presets/registry.ts` — Preset, ComponentMap, CSS vars interfaces
- [x] 2.2 Type `src/demo/context/PresetContext.tsx` — Context values, URL sync logic
- [x] 2.3 Type `src/demo/context/CartContext.tsx` — Reducer actions, state, localStorage sync
- [x] 2.4 Type `src/demo/components/index.ts` — ComponentMap with proper component types
- [x] 2.5 Type `src/demo/data/*.js` — Products, articles, portfolio items, categories
- [x] 2.6 Type `src/components/GlobalFeatures.tsx` — Theme, location, cursor refs
- [x] 2.7 Type `src/components/CustomCursor.tsx` — Motion values, event handlers
- [x] 2.8 Type `src/components/Hero.tsx`, `Header.tsx`, `Footer.tsx`
- [x] 2.9 Type `src/components/ServicesList.tsx`, `Team.tsx`, `Testimonials.tsx`
- [x] 2.10 Type `src/components/Portfolio.tsx` — Complex state, preset switching
- [x] 2.11 Type `src/components/ClientTimeline.tsx`, `InteractiveEstimator.tsx`
- [x] 2.12 Type `src/components/FAQAccordion.tsx`, `ConsultationForm.tsx`
- [x] 2.13 Type `src/pages/MainLandingPage.tsx`, `EcommerceSamplerPage.tsx`
- [x] 2.14 Type `src/App.tsx`, `src/main.tsx`
- [x] 2.15 Run `npm run typecheck` — fix all errors, zero `any` in production code
- [x] 2.16 Add `global.d.ts` for module declarations (CSS Modules, SVG, env)

## 3. Component System & Design Tokens

- [x] 3.1 Create `src/styles/tokens.css` — all CSS custom properties from index.css + demo presets
- [x] 3.2 Create `src/styles/globals.css` — reset, base, utilities, reduced-motion media query
- [x] 3.3 Create `src/components/ui/Button.tsx` + `Button.module.css` — variants: primary, secondary, ghost
- [x] 3.4 Create `src/components/ui/Card.tsx` + `Card.module.css` — editorial, demo, team variants
- [x] 3.5 Create `src/components/ui/Input.tsx` + `Input.module.css` — text, email, select, textarea
- [x] 3.6 Create `src/components/ui/Badge.tsx` + `Badge.module.css` — tags, preset badges
- [x] 3.7 Create `src/components/ui/Avatar.tsx` + `Avatar.module.css` — team, testimonial
- [x] 3.8 Create `src/components/ui/Section.tsx` + `Section.module.css` — consistent padding
- [x] 3.9 Create `src/components/ui/Container.tsx` — max-width wrapper
- [x] 3.10 Create `src/components/ui/SkipLink.tsx` — accessibility skip to main
- [ ] 3.11 Refactor `Hero.tsx` to use `Section`, `Container`, `Button` primitives
- [ ] 3.12 Refactor `Header.tsx` to use `Button`, `Container`, CSS Modules
- [ ] 3.13 Refactor `Footer.tsx` to use `Container`, CSS Modules
- [ ] 3.14 Refactor `ServicesList.tsx` to use `Card`, `Section`, `Container`
- [ ] 3.15 Refactor `Team.tsx` to use `Card`, `Avatar`, `Badge`, `Section`
- [ ] 3.16 Refactor `Testimonials.tsx` to use `Card`, `Avatar`, `Section`
- [ ] 3.17 Refactor `ClientTimeline.tsx` to use `Card`, `Section`, `Container`
- [ ] 3.18 Refactor `InteractiveEstimator.tsx` to use `Card`, `Button`, `Section`
- [ ] 3.19 Refactor `FAQAccordion.tsx` to use `Section`, CSS Modules
- [ ] 3.20 Refactor `ConsultationForm.tsx` to use `Input`, `Button`, `Section`
- [ ] 3.21 Refactor `Portfolio.tsx` to use `Button`, `Card`, `Section`, `Container`
- [ ] 3.22 Update `index.css` → import `tokens.css` + `globals.css`, remove duplicate utilities
- [ ] 3.23 Verify visual parity with original design (manual + Storybook)

## 4. React Router v7 Framework Mode (Hybrid SSR)

- [ ] 4.1 Install `@react-router/dev`, `@react-router/node`, `@react-router/serve`, `isbot`
- [ ] 4.2 Create `app/routes.ts` with route definitions
- [ ] 4.3 Create `app/root.tsx` — root layout with providers, scripts, meta
- [ ] 4.4 Create `app/entry.client.tsx` — hydration entry
- [ ] 4.5 Create `app/entry.server.tsx` — SSR entry with `renderToPipeableStream`
- [ ] 4.6 Create `app/routes/landing.tsx` — SSR landing page (moved from MainLandingPage)
- [ ] 4.7 Create `app/routes/demo.$projectId.tsx` — SPA demo sandbox route
- [ ] 4.8 Configure `vite.config.ts` for React Router dev server (`@react-router/dev/vite`)
- [ ] 4.9 Add `ssr: false` to demo route for client-only rendering
- [ ] 4.10 Add loader to landing route for initial theme (from cookie/header)
- [ ] 4.11 Add action to landing route for theme preference (sets cookie)
- [ ] 4.12 Add action to landing route for contact form submission
- [ ] 4.13 Update `ConsultationForm` to use `<Form method="post" action="/">`
- [ ] 4.14 Test SSR: `npm run build && npm run preview` — verify HTML streamed
- [ ] 4.15 Test demo sandbox still works as SPA (no hydration errors)

## 5. Framer Motion Performance & Accessibility

- [ ] 5.1 Add `useReducedMotion` hook (`src/hooks/useReducedMotion.ts`)
- [ ] 5.2 Refactor `CustomCursor.tsx`:
  - [ ] 5.2.1 Replace manual RAF with `motionValue` + `useTransform`
  - [ ] 5.2.2 Add `prefers-reduced-motion` guard (return null)
  - [ ] 5.2.3 Add `pointer: coarse` guard (return null)
  - [ ] 5.2.4 Throttle to 60fps max
  - [ ] 5.2.5 Clean up motion values on unmount
- [ ] 5.3 Refactor `GlobalFeatures.tsx`:
  - [ ] 5.3.1 Dot matrix grid uses CSS variables only (no React state)
  - [ ] 5.3.2 Single RAF updates `--mouse-x`, `--mouse-y` on document
- [ ] 5.4 Add `prefers-reduced-motion` support to all `motion` components:
  - [ ] 5.4.1 `ScrollReveal` / `useScrollReveal` hook
  - [ ] 5.4.2 `ClientTimeline` step animations
  - [ ] 5.4.3 `Portfolio` preset transitions
  - [ ] 5.4.4 Demo sandbox `AnimatePresence` transitions
- [ ] 5.5 Add `will-change: transform` to animated cards via CSS
- [ ] 5.6 Lazy-load heavy Framer Motion features (layout, gesture animations)
- [ ] 5.7 Test with Chrome DevTools Performance: 60fps on Moto G4 throttle
- [ ] 5.8 Test with `prefers-reduced-motion: reduce` — all animations disabled/simplified

## 6. Security: EmailJS Proxy & CSP

- [ ] 6.1 Create serverless function `api/contact.ts` (Netlify Functions / Vercel Edge / Cloudflare Worker)
- [ ] 6.2 Move `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, `EMAILJS_PRIVATE_KEY` to server env
- [ ] 6.3 Implement validation: required fields, email format, length limits, honeypot
- [ ] 6.4 Implement rate limiting (5 req/min/IP) with in-memory store or KV
- [ ] 6.5 Call EmailJS server-side with private key
- [ ] 6.6 Return standardized response: `{ success: boolean, message: string }`
- [ ] 6.7 Update `ConsultationForm` to POST to `/api/contact` via `<Form action="/api/contact">`
- [ ] 6.8 Add CSP headers via `_headers` (Netlify) or middleware (Vercel):
  - [ ] 6.8.1 `script-src 'self' 'unsafe-inline'` (for inline styles)
  - [ ] 6.8.2 `style-src 'self' 'unsafe-inline'`
  - [ ] 6.8.3 `font-src 'self' data:`
  - [ ] 6.8.4 `img-src 'self' data: https:`
  - [ ] 6.8.5 `connect-src 'self' https://api.emailjs.com` (if direct) or proxy domain
- [ ] 6.9 Add `@t3-oss/env-core` schema for client + server env validation
- [ ] 6.10 Test form submission end-to-end (local + deployed)

## 7. Performance: Fonts, Images, Bundle

- [ ] 7.1 Download Playfair Display, Inter, Outfit as WOFF2 (latin subset for Playfair)
- [ ] 7.2 Place fonts in `public/fonts/`
- [ ] 7.3 Add `@font-face` declarations in `tokens.css` with `font-display: swap`
- [ ] 7.4 Add font metric overrides (`size-adjust`, `ascent-override`, `descent-override`) for fallbacks
- [ ] 7.5 Add `<link rel="preload" as="font" crossorigin>` for critical fonts in `app/root.tsx`
- [ ] 7.6 Convert `public/hero.png` → `hero.webp`, `hero.avif` via `vite-plugin-imagemin`
- [ ] 7.7 Update Hero to use `<picture>` with WebP/AVIF sources + PNG fallback
- [ ] 7.8 Add explicit `width`/`height` to all `<img>` elements
- [ ] 7.9 Add `loading="lazy"` to below-fold images
- [ ] 7.10 Configure Vite manual chunks: `vendor-react`, `vendor-router`, `vendor-motion`, `vendor-email`, `demo-presets`
- [ ] 7.11 Add `dns-prefetch` for external origins in `app/root.tsx`
- [ ] 7.12 Run `npm run build:analyze` — verify chunk sizes, no duplicate deps
- [ ] 7.13 Set bundle size budgets in CI: JS < 150kb gzipped, CSS < 30kb gzipped

## 8. Accessibility (WCAG 2.1 AA)

- [ ] 8.1 Add `SkipLink` component at top of `app/root.tsx`
- [ ] 8.2 Ensure heading hierarchy: h1 → h2 → h3 across all sections
- [ ] 8.3 Add `aria-label` to icon-only buttons (theme toggle, social links, mobile menu)
- [ ] 8.4 Add `aria-expanded`, `aria-controls` to mobile menu toggle
- [ ] 8.5 Add `aria-live="polite"` to form success/error messages
- [ ] 8.6 Ensure focus visible styles on all interactive elements (`:focus-visible`)
- [ ] 8.7 Test color contrast: all text ≥ 4.5:1, large text ≥ 3:1 (use tokens)
- [ ] 8.8 Add `role="dialog"` + `aria-modal="true"` to checkout modal
- [ ] 8.9 Trap focus in mobile menu and checkout modal
- [ ] 8.10 Ensure form labels associated with inputs (`htmlFor`/`id`)
- [ ] 8.11 Add `lang="en"` to `<html>`
- [ ] 8.12 Test with NVDA/VoiceOver: landing page, demo sandbox, form submission
- [ ] 8.13 Run `npm run lint` — verify `eslint-plugin-jsx-a11y` catches violations

## 9. Testing Implementation

- [ ] 9.1 Create `vitest.config.ts` with React Testing Library, jsdom, coverage thresholds
- [ ] 9.2 Write tests for `Button`, `Card`, `Input`, `Badge`, `Avatar` (render, variants, a11y)
- [ ] 9.3 Write tests for `useReducedMotion`, `useScrollReveal`, `useTheme` hooks
- [ ] 9.4 Write tests for `PresetContext`: preset switching, URL sync, CSS var application
- [ ] 9.5 Write tests for `CartContext`: add/remove/update, localStorage persistence
- [ ] 9.6 Write tests for `ConsultationForm`: validation, submission states, error handling
- [ ] 9.7 Write tests for `InteractiveEstimator`: tier selection, highlight logic
- [ ] 9.8 Configure `playwright.config.ts`: Chromium, Firefox, WebKit, mobile viewports
- [ ] 9.9 Write E2E: Landing page loads, anchor navigation, theme toggle persists
- [ ] 9.10 Write E2E: Contact form submits, shows success, resets
- [ ] 9.11 Write E2E: Demo sandbox launches, switches presets, URL updates
- [ ] 9.12 Write E2E: Cart add → drawer → checkout → success
- [ ] 9.13 Write E2E: Mobile menu open/close, navigation
- [ ] 9.14 Configure Storybook 8 with Vite builder
- [ ] 9.15 Write stories for all UI primitives with controls
- [ ] 9.16 Add Chromatic GitHub Action for visual regression
- [ ] 9.17 Run `npm run test:coverage` — verify ≥ 80% statements/branches/functions/lines

## 10. Developer Experience & Documentation

- [ ] 10.1 Update `README.md` with: dev setup, scripts, architecture overview, deployment
- [ ] 10.2 Create `CONTRIBUTING.md` with: branch naming, commit format, PR checklist
- [ ] 10.3 Create `.env.example` with all required variables documented
- [ ] 10.4 Add `CHANGELOG.md` (Keep a Changelog format)
- [ ] 10.5 Configure dependabot for npm + GitHub Actions
- [ ] 10.6 Add Lighthouse CI GitHub Action (budget: LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] 10.7 Verify CI pipeline: typecheck → lint → test → build → e2e → deploy preview
- [ ] 10.8 Test production build locally: `npm run build && npm run preview`
- [ ] 10.9 Deploy to staging, verify all features work
- [ ] 10.10 Document known issues / follow-up items in `NEXT_STEPS.md`