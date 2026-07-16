# Tasks

- [x] Regenerate `public/images/philippines.png` as a clean white silhouette (national boundary only) for use as a mask. Source: SimpleMaps `ph/all/ph.svg` (`/tmp/ph-simple.svg`), rendered white, optimized.
- [x] In `src/components/BentoServices.module.css`, replace the static `::before` with the layered PH dot-grid: dot pattern + `mask-image` = Philippines PNG AND cursor radial (`var(--mouse-x)/var(--mouse-y)`, soft ~250px), with `mask-composite: intersect` / `-webkit-mask-composite: source-in`. Keep `position: absolute; inset: 0; pointer-events: none;`.
- [x] Set low base `opacity` so dots are faint until the spotlight reveals them.
- [x] Keep `.section` `background-color: var(--bg-dark-end)` (already theme-matched); remove any now-redundant light-mode override if present.
- [x] `npm run lint`, `npm run typecheck`, `npm run build` clean in `tbats-landing-page/`.
