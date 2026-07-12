## Context

The TBATS landing page is a React 19 + Vite 8 + React Router 7 single-page application with two routes:
- **Main landing page** (`/`) — Marketing site with 10 sections (Hero, Services, Team, Portfolio sandbox launcher, Process timeline, Pricing estimator, Testimonials, FAQ, Contact form, Footer)
- **Demo sandbox** (`/demo/:projectId`) — Interactive e-commerce/blog/portfolio preview with 5 swappable design presets (Minimal, Dark Luxury, Editorial, Bold, Playful) using dynamic component composition

Current state:
- 100% JavaScript (no TypeScript)
- Heavy inline styles (400+ lines in `index.css`, components use inline `style={{}}` objects)
- No testing infrastructure
- EmailJS credentials exposed client-side
- Minimal Vite config (12 lines)
- Custom cursor + dot-matrix grid animation on every frame
- Dynamic component system with 30+ demo components composed via string-keyed map

Constraints:
- Must maintain visual parity with current design
- Demo sandbox preset system must remain functional
- Framer Motion animations must preserve current feel
- React Router v7 currently used in SPA mode only
- Deployment target: static hosting (Netlify/Vercel/Cloudflare Pages)

## Goals / Non-Goals

**Goals:**
1. **TypeScript migration** — Full type safety across app, demo system, and preset registry
2. **Build optimization** — Code splitting, bundle analysis, modern Vite config with rollup-plugin-visualizer
3. **Component architecture** — Extract UI primitives, replace inline styles with CSS Modules, establish design token system
4. **Security hardening** — Move EmailJS to serverless function, add CSP headers, validate env vars
5. **Testing foundation** — Vitest + React Testing Library for unit/integration, Playwright for E2E
6. **React Router v7 Framework Mode** — Enable SSR for landing page SEO, keep demo as client-only
7. **Performance** — Font optimization, image optimization, cursor animation throttling, reduced-motion support
8. **Accessibility** — WCAG 2.1 AA compliance, focus management, ARIA, skip links

**Non-Goals:**
- Visual redesign or brand changes
- Backend API development (beyond serverless form handler)
- CMS integration
- Internationalization (i18n)
- Micro-frontend architecture
- State management library (Zustand/Redux) — Context + useReducer is sufficient

## Decisions

### 1. TypeScript Migration Strategy

**Decision:** Incremental migration with `strict: true`, starting with shared types → demo system → landing components → app shell

**Rationale:**
- Demo system (`src/demo/`) has the most complex types (preset registry, component map, context) — typing it first catches cascading errors
- Landing page components are mostly presentational — easier to type after core types exist
- `strict: true` from day one prevents `any` leakage

**Alternatives Considered:**
- Big bang migration: Too risky for 2000+ lines of JS
- Loose mode first: Creates technical debt

### 2. Styling Approach: CSS Modules + CSS Custom Properties

**Decision:** Keep CSS custom properties (design tokens) for theming, migrate inline styles to CSS Modules per component

**Rationale:**
- CSS variables already power light/dark theme + 5 demo presets — proven pattern
- CSS Modules provide scoped styles without runtime overhead (vs styled-components/emotion)
- Preserves current `var(--token)` usage in demo preset system
- Zero runtime cost, works with Vite's CSS code splitting

**Alternatives Considered:**
- Tailwind CSS v4: Would require rewriting all classNames, breaks demo preset CSS variable system
- Styled Components: Adds 15kb runtime, SSR complexity
- Plain CSS: No scoping, maintenance burden

### 3. Component Architecture

**Decision:** Extract `src/components/ui/` primitives (Button, Card, Input, Badge, Avatar, Section, Container, SkipLink) + compose landing sections from them

**Rationale:**
- 400+ lines of duplicate inline styles across Hero, ServicesList, Team, Portfolio, etc.
- UI primitives enable consistent design system
- Demo sandbox can reuse primitives (Button, Card) reducing demo component size

**Alternatives Considered:**
- Keep inline styles: Technical debt compounds
- Full design system package: Over-engineered for single project

### 4. React Router v7 Framework Mode (Hybrid SSR)

**Decision:** Enable framework mode with SSR for `/` route only; `/demo/*` remains SPA

**Rationale:**
- Landing page needs SEO (meta tags, OG images, semantic HTML)
- Demo sandbox is interactive tool — no SEO value, requires client-only APIs (localStorage cart, URL search params for presets)
- React Router v7 supports per-route SSR configuration

**Alternatives Considered:**
- Full SSR: Demo sandbox breaks (localStorage, dynamic imports)
- Full SPA: Poor landing page SEO
- Next.js migration: Massive rewrite, React Router v7 framework mode is purpose-built for this

### 5. EmailJS → Serverless Function

**Decision:** Create Netlify Function / Vercel Edge Function / Cloudflare Worker at `/api/contact` that proxies to EmailJS with secret keys

**Rationale:**
- Current: `PUBLIC_KEY` exposed in bundle, `SERVICE_ID`/`TEMPLATE_ID` in source
- Serverless: Secrets stay server-side, rate limiting possible, CORS controlled
- Minimal code change: Frontend posts to `/api/contact` instead of `emailjs.sendForm()`

**Alternatives Considered:**
- Formspree/Netlify Forms: Vendor lock-in, less control
- Custom backend: Overkill for contact form

### 6. Testing Stack

**Decision:** Vitest (unit/integration) + React Testing Library + Playwright (E2E) + Storybook (visual regression via Chromatic)

**Rationale:**
- Vitest: Native Vite integration, fast, TypeScript-first
- RTL: User-centric testing, accessibility by default
- Playwright: Cross-browser, mobile, network interception for demo sandbox flows
- Storybook: Documents UI primitives, enables visual regression

**Alternatives Considered:**
- Jest: Requires babel/ts-jest config, slower than Vitest
- Cypress: Heavier, less flexible for multi-tab demo flows

### 7. Performance: Cursor Animation Optimization

**Decision:** Refactor `CustomCursor` to use `requestAnimationFrame` with `will-change: transform`, add `prefers-reduced-motion` guard, throttle to 60fps max

**Rationale:**
- Current: `mousemove` listener + `requestAnimationFrame` on every frame = 2 RAF loops
- Throttled RAF + CSS `will-change` reduces layout thrashing
- Reduced motion: Disable custom cursor entirely for accessibility

### 8. Font Optimization

**Decision:** Self-host WOFF2 fonts with `preload` + `font-display: swap`, subset Playfair Display (latin only)

**Rationale:**
- Current: 3 Google Fonts requests, blocks rendering
- Self-hosted: 1 connection, cacheable, subset reduces Playfair from ~200kb to ~40kb
- `font-display: swap` prevents invisible text

### 9. Image Optimization

**Decision:** Add `vite-plugin-imagemin` + convert `hero.png` to WebP/AVIF with `<picture>` fallback

**Rationale:**
- Hero image loaded on every visit
- WebP/AVIF 30-50% smaller than PNG
- Vite plugin handles at build time, no runtime cost

### 10. Bundle Analysis & Code Splitting

**Decision:** Configure manual chunks: `vendor-react`, `vendor-router`, `vendor-motion`, `vendor-email`, `demo-presets`; enable `visualizer` in CI

**Rationale:**
- Current: Single ~200kb JS bundle (estimated)
- Demo preset system (registry + 30 components) only needed on `/demo/*` — lazy load via route
- Framer Motion heavy — separate chunk
- Visualizer in CI catches regressions

## Risks / Trade-offs

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| TypeScript migration breaks demo preset dynamic imports | Medium | High | Type `ComponentMap` with `Record<string, ComponentType<any>>`, use `// @ts-expect-error` temporarily |
| CSS Modules conflict with demo preset CSS variables | Low | Medium | Demo preset root uses `.demo-preset-root` class; CSS Modules scope prevents leakage |
| React Router SSR breaks demo sandbox hydration | Medium | High | Explicitly mark `/demo/*` as `ssr: false` in route config |
| Serverless function CORS blocks frontend | Low | Medium | Configure `Access-Control-Allow-Origin` to production domain only |
| Bundle size increases with TypeScript + testing deps | Low | Low | Dev deps only; production bundle unchanged |
| Visual regression false positives (animations) | Medium | Low | Disable animations in Storybook tests via `prefers-reduced-motion` media query |
| Font subsetting breaks glyphs in testimonials | Low | Medium | Test with actual content; fallback to full font via `font-family` stack |

## Migration Plan

### Phase 1: Foundation (Week 1)
1. Add TypeScript, strict config, `tsconfig.json` + `vite.config.ts`
2. Add Vitest, React Testing Library, Playwright, `@testing-library/jest-dom`
3. Add `vite-plugin-visualizer`, `vite-plugin-imagemin`, `rollup-plugin-visualizer`
4. Configure manual chunks in Vite
5. Add ESLint + Prettier with TypeScript support
6. Add `@t3-oss/env-core` for env validation

### Phase 2: TypeScript Migration (Week 1-2)
1. Type `src/demo/presets/registry.ts` → `registry.ts`
2. Type `src/demo/context/PresetContext.tsx`, `CartContext.tsx`
3. Type `src/demo/components/index.ts` ComponentMap
4. Type landing page components (bottom-up: leaf → parent)
5. Type `App.tsx`, `main.tsx`, `GlobalFeatures.tsx`

### Phase 3: Component System (Week 2)
1. Create `src/components/ui/` primitives (Button, Card, Input, Badge, Avatar, Section, Container, SkipLink)
2. Migrate `index.css` utilities to `src/styles/tokens.css` + component CSS Modules
3. Refactor landing sections to use primitives
4. Add `prefers-reduced-motion` support to `GlobalFeatures`

### Phase 4: Router v7 Framework Mode (Week 2-3)
1. Install `@react-router/dev`, `@react-router/node`, `@react-router/serve`
2. Create `app/routes.ts` with hybrid SSR config
3. Move landing page to `app/routes/landing.tsx` (SSR)
4. Move demo to `app/routes/demo.$projectId.tsx` (SPA)
4. Add server entry point, build config
5. Configure meta tags, OG images for landing route

### Phase 5: Security & Forms (Week 3)
1. Create serverless function `api/contact.ts`
2. Move EmailJS credentials to server env vars
3. Update `ConsultationForm` to POST to `/api/contact`
4. Add CSP headers via `_headers` (Netlify) or `middleware.ts` (Vercel)

### Phase 6: Performance & Accessibility (Week 3)
1. Self-host fonts, add preload links
2. Convert hero image to WebP/AVIF, add `<picture>`
3. Optimize `CustomCursor` (throttle, reduced motion)
4. Add skip link, focus management, ARIA labels
5. Audit heading hierarchy, color contrast

### Phase 7: Testing & CI (Week 3-4)
1. Unit tests: UI primitives, hooks, context providers
2. Integration tests: Form submission, demo preset switching, cart flow
3. E2E tests: Landing page load, demo sandbox launch, contact form
4. Storybook stories for UI primitives
5. GitHub Actions: typecheck → test → build → visual regression

### Phase 8: Monitoring & Polish (Week 4)
1. Bundle analysis baseline
2. Lighthouse CI in PR checks
3. Error boundary for demo sandbox
4. 404 page, loading states
5. Documentation: `README.md` update, `CONTRIBUTING.md`

## Open Questions

1. **Hosting platform for serverless function?** — Netlify Functions, Vercel Edge Functions, or Cloudflare Workers? Decision affects function syntax and deployment config.
2. **OG image generation?** — Static images per preset or dynamic `@vercel/og`? Dynamic adds dependency but enables preset-specific social cards.
3. **Analytics?** — Add Plausible/Umami/GA? Not in current scope but should plan for consent management.
4. **Error tracking?** — Sentry? Current code has no error boundaries.
5. **Demo sandbox persistence?** — CartContext uses localStorage — survives preset switch but not browser clear. Acceptable?

---

## Appendix: File Structure After Migration

```
src/
├── app/
│   ├── routes.ts                    # React Router v7 route config
│   ├── routes/
│   │   ├── landing.tsx              # SSR landing page
│   │   └── demo.$projectId.tsx      # SPA demo sandbox
│   ├── entry.server.tsx             # SSR entry
│   └── entry.client.tsx             # Client hydration
├── components/
│   ├── ui/                          # Design system primitives
│   │   ├── Button.tsx
│   │   ├── Button.module.css
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Avatar.tsx
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   └── SkipLink.tsx
│   ├── landing/                     # Landing page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ServicesList.tsx
│   │   ├── Team.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ClientTimeline.tsx
│   │   ├── InteractiveEstimator.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── ConsultationForm.tsx
│   │   └── Footer.tsx
│   └── demo/                        # Demo sandbox (kept separate)
│       ├── components/              # 30+ preset components
│       ├── context/
│       ├── data/
│       └── hooks/
├── styles/
│   ├── tokens.css                   # CSS custom properties (design tokens)
│   ├── globals.css                  # Reset, base, utilities
│   └── animations.css               # Keyframes, reduced-motion
├── hooks/
│   ├── useScrollReveal.ts
│   ├── useReducedMotion.ts
│   └── useTheme.ts
├── utils/
│   ├── env.ts                       # Validated env (t3-env)
│   └── cn.ts                        # clsx + tailwind-merge alternative
├── types/
│   ├── demo.ts                      # Preset, ComponentMap types
│   ├── landing.ts                   # Landing section types
│   └── global.d.ts                  # Module declarations
└── main.tsx                         # Client entry (hydration)
```

---

## Appendix: Key Type Definitions

```ts
// src/types/demo.ts
export interface Preset {
  id: string;
  label: string;
  description: string;
  cssVars: Record<string, string>;
  components: ComponentMapKeys;
}

export interface ComponentMapKeys {
  Header: HeaderVariant;
  Hero: HeroVariant;
  CategoryBar: CategoryBarVariant;
  ProductGrid: ProductGridVariant;
  ProductCard: ProductCardVariant;
  Footer: FooterVariant;
}

export type HeaderVariant = 'HeaderMinimal' | 'HeaderLuxury' | 'HeaderEditorial' | 'HeaderBold' | 'HeaderPlayful';
// ... similar for other variants

export interface ProjectPreset {
  name: string;
  category: string;
  accentText: string;
  defaultPreset: PresetId;
  tags: string[];
  pitch: string;
}
```

```ts
// src/types/landing.ts
export interface ServicePillar {
  id: number;
  title: string;
  icon: string;
  description: string;
  capabilities: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  bio: string;
  focus: string[];
  spanClass: 'span-3' | 'span-2';
  socials: { linkedin: string; github: string };
}

export interface PricingTier {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
}
```