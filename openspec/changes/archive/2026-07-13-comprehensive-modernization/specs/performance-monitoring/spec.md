## ADDED Requirements

### Requirement: Core Web Vitals optimization
Landing page SHALL meet Core Web Vitals thresholds.

#### Scenario: LCP < 2.5s
- **WHEN** measuring on 3G Fast / Moto G4
- **THEN** Largest Contentful Paint (hero image/text) < 2.5s

#### Scenario: CLS < 0.1
- **WHEN** measuring layout stability
- **THEN** Cumulative Layout Shift < 0.1 (no font swap jumps, no image dimension shifts)

#### Scenario: INP < 200ms
- **WHEN** measuring interaction to next paint
- **THEN** all interactions (theme toggle, menu, form, demo launch) < 200ms

### Requirement: Font optimization
Fonts SHALL load efficiently without flash or layout shift.

#### Scenario: Fonts self-hosted as WOFF2
- **WHEN** building
- **THEN** Playfair Display, Inter, Outfit served as WOFF2 from `/fonts/`

#### Scenario: Font subsetting for Playfair Display
- **WHEN** generating font files
- **THEN** latin subset only (~40kb vs 200kb full)

#### Scenario: Preload critical fonts
- **WHEN** rendering HTML
- **THEN** `<link rel="preload" as="font" crossorigin>` for Playfair Display, Inter

#### Scenario: font-display: swap
- **WHEN** defining @font-face
- **THEN** `font-display: swap` prevents invisible text

#### Scenario: Fallback fonts match metrics
- **WHEN** defining font stacks
- **THEN** fallback fonts use `size-adjust`, `ascent-override`, `descent-override` to match primary

### Requirement: Image optimization
Images SHALL be optimized at build time.

#### Scenario: Hero image converted to WebP/AVIF
- **WHEN** building
- **THEN** `hero.png` → `hero.webp`, `hero.avif` with `<picture>` fallback

#### Scenario: Images have explicit dimensions
- **WHEN** rendering `<img>`
- **THEN** `width` and `height` attributes present to prevent CLS

#### Scenario: Lazy loading for below-fold images
- **WHEN** image not in viewport
- **THEN** `loading="lazy"` attribute

### Requirement: Resource hints
Critical resources SHALL be hinted for faster loading.

#### Scenario: Preconnect to external origins
- **WHEN** using Google Fonts (if not self-hosted)
- **THEN** `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

#### Scenario: DNS prefetch for EmailJS
- **WHEN** contact form present
- **THEN** `<link rel="dns-prefetch" href="https://api.emailjs.com">`

### Requirement: Performance monitoring
Build and runtime SHALL include performance observability.

#### Scenario: Lighthouse CI in PR checks
- **WHEN** PR opened
- **THEN** Lighthouse runs, fails if any CWV threshold missed

#### Scenario: Bundle size budget in CI
- **WHEN** building
- **THEN** total JS < 150kb gzipped, CSS < 30kb gzipped