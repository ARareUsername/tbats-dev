## 1. Navigation Enhancements

- [x] 1.1 Create `src/hooks/useActiveSection.ts` — IntersectionObserver hook that observes sections by ID and returns the currently active one
- [x] 1.2 Add `scroll-behavior: smooth` to `<html>` in `src/styles/globals.css`
- [x] 1.3 Update `src/components/Header.tsx` — wire `useActiveSection`, remove About link from desktop and mobile nav
- [x] 1.4 Update `src/components/Header.module.css` — add `.navLinkActive` style, fix `fontsize` → `font-size` on `.logoIcon`

## 2. Care Plan Refinement

- [x] 2.1 Rewrite first Care Plan benefit in `src/data/pricing.ts` to be distinct from the description
- [x] 2.2 Update `src/components/InteractiveEstimator.module.css` — restyle `.carePlanCard` with solid border, left-aligned benefits, matching border-radius to tier cards
- [x] 2.3 Update `src/components/InteractiveEstimator.tsx` — adjust Care Plan card layout if needed for left alignment

## 3. Verification

- [x] 3.1 Run `npm run typecheck` — zero errors
- [x] 3.2 Run `npm run lint` — zero errors/warnings
- [x] 3.3 Run `npm run build` — successful production build
