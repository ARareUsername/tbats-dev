# Proposal: BentoServices Static Grid Background

## Summary
Remove the Philippines silhouette `::before` from the BentoServices section and replace it with a subtle, static, neutral-gray dot grid. The grid reuses the existing `--grid-dot-color` token (already theme-aware: light gray in dark mode, dark gray in light mode) so no new color decisions are needed and there is no contrast war.

## Changes
1. Delete the Philippines `::before` block in `src/components/BentoServices.module.css` (background-image url, background-size 100% 100%, opacity rules) and remove the now-unused `public/images/philippines.png`.
2. Add a static dot-grid `::before` on `.section` using `radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)` with `background-size: 24px 24px` (matching the existing `.dot-matrix-grid` pattern) and **no cursor mask**, so it shows evenly across the section.
3. Start at **low** opacity (e.g. `0.4` on the token alpha) so it reads as a subtle texture, not foreground. Tunable later.

## Non-Goals
- No change to the global cursor-following `dot-matrix-grid` (stays site-wide).
- No accent-green tint — grid stays neutral gray per user request.
- No other section backgrounds touched.

## Impact
- Files: `src/components/BentoServices.module.css` (replace `::before`), delete `public/images/philippines.png`.
- The section keeps `background-color` per theme (`#0a0f0d` / `#f8fafc`).
- The global fixed `dot-matrix-grid` (cursor spotlight) remains on top as a separate layer.
