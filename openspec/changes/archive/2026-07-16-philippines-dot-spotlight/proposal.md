# Proposal: Philippines Dot-Grid Spotlight

## Summary
Replace the flat static grid on the BentoServices section with a dot-grid shaped like the Philippines, revealed by a soft cursor-following spotlight (matching the global `.dot-matrix-grid` feel). Glassmorphic cards stay on top.

## Changes
1. Regenerate `public/images/philippines.png` as a clean white silhouette (national boundary only, no text/stars) — used as a **mask**, not a visible image.
2. In `src/components/BentoServices.module.css`, replace the static `::before` grid with a layered effect:
   - Base: dot-grid pattern (`radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)`, `background-size: 24px 24px`).
   - Mask 1: `mask-image: url('/images/philippines.png')` so dots appear only inside the Philippines shape.
   - Mask 2: cursor radial using existing `--mouse-x` / `--mouse-y` vars (soft, ~250px) so the map is revealed only where the light hits — matching the global soft-glow behavior.
   - Low base opacity; glass cards on top remain unaffected.
3. Keep `background-color: var(--bg-dark-end)` (theme-matched) on `.section`.

## Non-Goals
- No change to the global `.dot-matrix-grid` (stays site-wide as-is).
- No flat silhouette image fill — the Philippines is expressed purely as a dot-grid revealed by spotlight.
- No new JS — reuses the existing global `--mouse-x/--mouse-y` CSS variables.

## Impact
- Files: `src/components/BentoServices.module.css` (replace `::before`), add `public/images/philippines.png`.
- Reuses: existing dot-grid pattern, existing global pointer tracking vars, existing glassmorphic cards.
- Behavior: in dark mode dots are light-gray (token), in light mode dark-gray (token) — theme-aware automatically.
