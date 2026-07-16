# Tasks

- [x] In `src/components/BentoServices.module.css`, replace the layered Philippines-spotlight `::before` (dot pattern + PH mask + cursor mask) with a plain static dot-grid `::before`: `radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)`, `background-size: 24px 24px`, `opacity: 0.4`, `pointer-events: none`, no masks. Keep `position: absolute; inset: 0;`.
- [x] In `src/components/BentoServices.tsx`, add a location chip in the header with a `location_on` Material Symbol and text "Pampanga, Philippines".
- [x] Add chip styles (`.locationChip`, `.locationIcon`) in `BentoServices.module.css`: pill, accent icon, subtle border, centered with the header.
- [x] Delete the now-unused `public/images/philippines.png`.
- [x] `npm run lint`, `npm run typecheck`, `npm run build` clean in `tbats-landing-page/`.
- [x] Add cursor-following spotlight mask to the `::before` grid (reuse global `--mouse-x/--mouse-y`, soft ~250px radial) so dots are revealed only near the cursor, matching the global dot-matrix feel.
