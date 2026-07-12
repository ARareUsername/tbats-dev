## ADDED Requirements

### Requirement: SSR for landing page
The landing page route SHALL render on server for SEO and performance.

#### Scenario: Landing page returns HTML on first request
- **WHEN** requesting `GET /`
- **THEN** server returns fully rendered HTML with meta tags, OG tags, JSON-LD

#### Scenario: Meta tags include SEO data
- **WHEN** rendering landing page
- **THEN** `<title>`, `<meta name="description">`, `<meta property="og:*">`, `<meta name="twitter:*">`, `<script type="application/ld+json">`

#### Scenario: Hydration succeeds without mismatch
- **WHEN** client hydrates SSR HTML
- **THEN** no hydration warnings in console

### Requirement: Demo sandbox remains client-only
The `/demo/*` routes SHALL NOT use SSR.

#### Scenario: Demo route marked SPA
- **WHEN** configuring route
- **THEN** `ssr: false` or equivalent for `/demo/:projectId`

#### Scenario: Demo uses client-only APIs
- **WHEN** demo loads
- **THEN** `localStorage`, `window.matchMedia`, dynamic imports work without SSR errors

### Requirement: Framework mode file structure
Codebase SHALL follow React Router v7 framework conventions.

#### Scenario: Routes defined in app/routes.ts
- **WHEN** listing routes
- **THEN** uses `route()`, `index()`, `layout()` helpers

#### Scenario: Server entry point exists
- **WHEN** building for production
- **THEN** `server.ts` or `entry.server.tsx` exports request handler

#### Scenario: Client entry hydrates
- **WHEN** client loads
- **THEN** `entry.client.tsx` calls `hydrateRoot` with `RouterProvider`

### Requirement: Data loading patterns
Landing page SHALL use loader for any dynamic data (future-proofing).

#### Scenario: Loader exports for landing route
- **WHEN** defining landing route
- **THEN** exports `loader` function (can be empty initially)

#### Scenario: Typed loader data
- **WHEN** using `useLoaderData()`
- **THEN** returns typed data matching loader return type