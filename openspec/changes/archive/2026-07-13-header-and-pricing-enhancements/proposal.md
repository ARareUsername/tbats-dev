## Why

The nav bar has a dead "About" link pointing to a section that isn't rendered on the page, no smooth scrolling for anchor links, and no visual feedback for which section is currently in view. The Care Plan pricing card has a redundant benefit line that wraps awkwardly and its visual styling is inconsistent with the tier cards above it.

## What Changes

- Remove the dead "About" link from the nav bar (Team component not rendered on landing page)
- Add `scroll-behavior: smooth` to enable smooth anchor scrolling
- Add active section highlighting via `IntersectionObserver` so the current nav link is visually indicated while scrolling
- Fix CSS typo `fontsize` → `font-size` in `Header.module.css`
- Rewrite the redundant first Care Plan benefit to be distinct from the description
- Restyle the Care Plan card to match the tier cards (left-aligned benefits, solid card styling instead of centered/dashed)

## Capabilities

### New Capabilities
- `navigation-enhancements`: Smooth scrolling, active section tracking, and nav cleanup
- `care-plan-refinement`: Fix redundant copy and visual consistency with tier cards

### Modified Capabilities
<!-- No spec-level requirement changes — purely UI polish -->

## Impact

- `src/components/Header.tsx` — add active section state, remove About link
- `src/components/Header.module.css` — add active link styles, fix `fontsize` typo
- `src/components/InteractiveEstimator.tsx` — update Care Plan card structure
- `src/components/InteractiveEstimator.module.css` — restyle Care Plan card
- `src/data/pricing.ts` — rewrite redundant benefit text
- `src/styles/globals.css` — add `scroll-behavior: smooth`
- New file: `src/hooks/useActiveSection.ts` — IntersectionObserver hook
