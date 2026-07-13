## 1. Branch + Scaffold

- [x] 1.1 Create git branch `feat/hero-build-pipeline` from master
- [x] 1.2 Create `src/components/HeroBackground.tsx` and `src/components/HeroBackground.module.css`

## 2. Canvas Animation Core

- [x] 2.1 Implement canvas setup: ref, 2D context, DPI-aware sizing, resize handler
- [x] 2.2 Define 4 pipeline nodes with positions, labels (lint/typecheck/build/deploy), and pulsing glow
- [x] 2.3 Draw curved connecting paths between nodes with low-opacity glowing lines
- [x] 2.4 Implement particle system (15-25 particles) with bezier-path following and motion trails
- [x] 2.5 Implement continuous animation loop via `requestAnimationFrame` with delta-time

## 3. Reduced Motion + Cleanup

- [x] 3.1 Integrate `useReducedMotion` to skip rendering entirely when preferred
- [x] 3.2 Implement proper cleanup: cancel rAF, clear canvas, remove resize listener on unmount
- [x] 3.3 Respect reduced-motion dynamic changes during component lifecycle

## 4. Responsive Layout

- [x] 4.1 Reduce to 2 nodes on viewport ≤ 768px
- [x] 4.2 Adjust node positions and particle paths for mobile layout

## 5. Integration

- [x] 5.1 Add `<HeroBackground />` import to `Hero.tsx` — render before `<Container>`
- [x] 5.2 Update `Hero.module.css` to ensure z-index stack (canvas behind content)

## 6. Verification

- [x] 6.1 Run `npm run typecheck` — zero errors
- [x] 6.2 Run `npm run lint` — zero warnings
- [x] 6.3 Run `npm run build` — builds cleanly
- [ ] 6.4 Verify animation renders in dev server at correct opacity and position
- [ ] 6.5 Verify `prefers-reduced-motion: reduce` disables canvas entirely
- [ ] 6.6 Verify removing `<HeroBackground />` line has zero side effects
