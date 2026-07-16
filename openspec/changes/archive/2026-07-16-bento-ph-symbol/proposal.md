# Proposal: BentoServices — Regular Grid + Philippines Symbol

## Summary
Revert the BentoServices background to a plain static neutral-gray dot grid (the regular dot-matrix design, no Philippines mask), and add a Philippines/Pampanga symbol in the section header as a small location chip ("Pampanga, Philippines" with a `location_on` icon). Removes the Philippines-shaped spotlight mask.

## Changes
1. In `src/components/BentoServices.module.css`, replace the layered Philippines-spotlight `::before` with a plain static dot-grid `::before` (dot pattern, `background-size: 24px 24px`, low opacity, no masks). Keep `background-color: var(--bg-dark-end)` on `.section`.
2. In `src/components/BentoServices.tsx`, add a location chip in the header (after the subtitle or near the heading) with a `location_on` Material Symbol and the text "Pampanga, Philippines".
3. Add chip styles in `BentoServices.module.css` (pill, accent icon, subtle border).
4. Delete the now-unused `public/images/philippines.png` (no longer used as a mask).

## Non-Goals
- No spotlight/cursor interaction on the background.
- No Philippines-shaped mask.
- No change to the global `.dot-matrix-grid`.

## Impact
- Files: `src/components/BentoServices.tsx`, `src/components/BentoServices.module.css`, delete `public/images/philippines.png`.
- The chip echoes the existing footer "Pampanga, Philippines" text and the "in Pampanga" h2.
