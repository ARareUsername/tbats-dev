# Tasks

- [x] In `src/components/BentoServices.module.css`, remove the Philippines `::before` block (lines 8–18) and the `:global(.theme-light) .section::before` opacity override (lines 24–26).
- [x] Add a new static dot-grid `::before` on `.section`: `background-image: radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)`, `background-size: 24px 24px`, `opacity: 0.4`, `pointer-events: none`, no mask. Keep `position: absolute; inset: 0;`.
- [x] Delete the now-unused `public/images/philippines.png`.
- [x] `npm run lint`, `npm run typecheck`, `npm run build` clean in `tbats-landing-page/`.
