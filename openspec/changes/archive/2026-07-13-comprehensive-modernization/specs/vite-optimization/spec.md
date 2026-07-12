## ADDED Requirements

### Requirement: Vite production build optimization
The Vite configuration SHALL produce optimized production bundles.

#### Scenario: Manual chunk splitting configured
- **WHEN** building for production
- **THEN** output contains: `vendor-react-[hash].js`, `vendor-router-[hash].js`, `vendor-motion-[hash].js`, `vendor-email-[hash].js`, `demo-presets-[hash].js`

#### Scenario: CSS code splitting enabled
- **WHEN** building
- **THEN** each route/page loads only its CSS

#### Scenario: Minification with esbuild
- **WHEN** building
- **THEN** `minify: 'esbuild'` (default), `cssMinify: true`

#### Scenario: Source maps generated
- **WHEN** building
- **THEN** `.js.map` files output for production debugging

#### Scenario: Asset hashing for cache busting
- **WHEN** building
- **THEN** all assets include content hash in filename

### Requirement: PWA support
The landing page SHALL be installable as a PWA.

#### Scenario: Web app manifest generated
- **WHEN** building
- **THEN** `manifest.webmanifest` with name, icons, theme_color, display: standalone

#### Scenario: Service worker registered
- **WHEN** loading in supported browser
- **THEN** SW caches static assets for offline viewing

#### Scenario: Offline fallback for landing page
- **WHEN** offline
- **THEN** landing page loads from cache (demo sandbox shows offline notice)

### Requirement: Build analysis
Bundle size SHALL be monitored in CI.

#### Scenario: Visualizer report in CI
- **WHEN** running `npm run build:analyze`
- **THEN** `dist/stats.html` generated with treemap

#### Scenario: Budget enforcement
- **WHEN** bundle exceeds budget
- **THEN** CI fails with specific chunk size violation

### Requirement: Development server optimization
Dev server SHALL be fast and support external access.

#### Scenario: HMR optimized
- **WHEN** editing component
- **THEN** HMR updates in < 100ms

#### Scenario: External access configured
- **WHEN** running `npm run dev`
- **THEN** accessible via LAN IP (current config preserved)