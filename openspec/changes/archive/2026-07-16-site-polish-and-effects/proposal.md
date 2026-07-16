# Proposal: Site Polish & Modern Effects

## Summary
A focused polish pass plus two signature motion effects applied site-wide (desktop only). No new pages, no new routes — purely visual/aesthetic and content updates to existing components.

## Changes
1. **Team / About rework** — `app/routes/about.tsx` shows the 4 devs only; replace AI `<img>` avatars with initials `Avatar` (icons); render `languages` as pill `Badge`s instead of a comma string; set every member's `role` to `"Web Developer"`. `src/components/Team.tsx` (landing) is unified to the same 4 people, same role.
2. **Remove redundant pricing CTA** — delete the `bottomSloganSection` (the "Every day you wait…" block) from `app/routes/pricing.tsx`. In-card "Get Started" plan buttons stay.
3. **ReadyToGetStarted light-mode fix + footer lock** — change light bg from mint `#f0f7f4` to neutral `#f8fafc`; remove the 4rem `margin-top` on `Footer` so the section's bottom border meets the footer's top border with no gap.
4. **Standardize section spacing** — rely on the existing `section { padding: var(--space-xl) 0 }` token (8rem desktop / 4rem mobile via `var(--space-lg)`) and remove one-off inline paddings (`our-work/index.tsx`, `about.module.css`, pricing hardcoded padding) so vertical rhythm is consistent.
5. **Site-wide effects (mobile-disabled)** — add a cursor-following **spotlight** on cards and a thin **scroll-progress bar** at the top, both gated on `(pointer: coarse)` / `prefers-reduced-motion` (reusing the existing `CustomCursor` gate), centralized in `GlobalFeatures`.

## Non-Goals
- No new routes, no new pages, no backend changes.
- No parallax, route transitions, or magnetic buttons (out of scope for this pass).
- The 4 members' real roles/bios are not finalized here ("Web Developer" is a placeholder per user).

## Impact
- Files: `app/routes/about.tsx`, `app/routes/about.module.css`, `src/components/Team.tsx`, `src/components/Team.module.css`, `app/routes/pricing.tsx`, `app/routes/pricing.module.css`, `src/components/ReadyToGetStarted.module.css`, `src/components/Footer.module.css`, `src/components/GlobalFeatures.tsx`, `src/index.css` / `src/styles/globals.css`, `src/styles/animations.css`.
- Effects are pointer-coarse / reduced-motion aware → zero cost on mobile and for a11y users.
