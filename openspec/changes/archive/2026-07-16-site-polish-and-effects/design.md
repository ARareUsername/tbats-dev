# Design

## Decision: Centralize effects in GlobalFeatures
`GlobalFeatures` is already the single mount point for global, cursor-aware UI (`CustomCursor`, `dot-matrix-grid`) and already computes `isTouchDevice` via `window.matchMedia('(pointer: coarse)')` plus `prefersReducedMotion`. New effects plug into the same gate — no new hooks, no new context.

```
GlobalFeatures (mounted once in root.tsx)
├── isTouchDevice = matchMedia('(pointer: coarse)')
├── prefersReducedMotion
├── if (isDemoRoute) return null
├── <CustomCursor />
├── <dot-matrix-grid />              (existing)
├── <ScrollProgress />               (NEW, returns null if touch/reduced)
└── card spotlight via CSS var        (NEW, CSS-only, auto-off on touch)
```

## Decision: Spotlight is CSS-only
Reuse the existing `--mouse-x` / `--mouse-y` CSS variables already set by `GlobalFeatures` on `document.documentElement`. Cards get a `::before` radial-gradient positioned at those vars. Zero JS per card, automatically inert on touch (no mousemove fires). This is the laziest viable path — the plumbing already exists.

## Decision: Scroll-progress bar
A fixed thin bar at `top: 0` whose width = `scrollY / (scrollHeight - innerHeight)`. Implemented with a single scroll listener + rAF in `ScrollProgress` (returns null when `isTouchDevice || prefersReducedMotion`). Mounted in `GlobalFeatures`. Theme-aware color (`var(--accent)`).

## Decision: Section spacing standardization
Adopt the existing token convention: desktop `var(--space-xl)` (8rem), mobile `var(--space-lg)` (4rem), already defined in `src/styles/tokens.css`. Replace hardcoded `8rem 0` / `6rem` / `3.5rem` paddings with the shared `section` rule or a `--section-gap` token. No new spacing scale invented.

## Decision: About avatars → initials
Mirror `Team.tsx` which uses `Avatar` with `initials`. Remove `/images/avatar-*.jpg` `<img>` tags from `about.tsx`. Languages become `Badge variant="outline"` pills, so `developers[].languages` changes from a string to `string[]`.

## Color fix
`ReadyToGetStarted.module.css` light bg `#f0f7f4` (mint, reads "off" next to dark `#060e0a`) → `#f8fafc` (neutral slate-50, matches footer-neutral palette).
