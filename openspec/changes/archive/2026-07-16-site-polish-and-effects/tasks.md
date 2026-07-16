# Tasks

## 1. Team / About rework
- [x] In `app/routes/about.tsx`, set all 4 `developers[].role` to `"Web Developer"`.
- [x] Change `developers[].languages` from a comma string to `string[]` and render each as a `Badge variant="outline"` pill (language bubbles).
- [x] Replace the `<img src="/images/avatar-*.jpg">` avatar block with `<Avatar initials=... size="lg" />` (icon/initials, no AI image).
- [x] In `src/components/Team.tsx`, trim to the same 4 members and set all `role` to `"Web Developer"` (data-only change).
- [x] Update `about.module.css` / `Team.module.css` spacing for the new avatar + pill layout.

## 2. Remove redundant pricing CTA
- [x] Delete `bottomSloganSection` (lines ~262–298) from `app/routes/pricing.tsx`.
- [x] Remove now-unused `bottomSloganSection` / `slogan*` CSS from `pricing.module.css`.
- [x] Confirm each plan card's in-card "Get Started" `<Link>` keeps `text-decoration: none` (no underline).

## 3. ReadyToGetStarted color + footer lock
- [x] Change `ReadyToGetStarted.module.css` light bg `#f0f7f4` → `#f8fafc`.
- [x] Remove `margin-top: 4rem` from `Footer.module.css` (lines 3 and 75) so the section's `border-bottom` meets footer's `border-top` with no gap.

## 4. Standardize section spacing
- [x] Audit one-off inline paddings (`our-work/index.tsx:58`, `about.module.css`, pricing sections) and replace with the shared `section` token spacing (`--space-xl` desktop / `--space-lg` mobile).

## 5. Site-wide effects (mobile-disabled)
- [x] Add `ScrollProgress` component (fixed top bar, width = scroll %), returns null when `isTouchDevice || prefersReducedMotion`.
- [x] Mount `ScrollProgress` inside `GlobalFeatures` (reuse existing gate).
- [x] Add CSS-only card spotlight: `.card::before` radial-gradient at `var(--mouse-x)/var(--mouse-y)`; auto-inert on touch (no mousemove). Scope to editorial/team/plan cards.
- [x] Verify effects are OFF on `(pointer: coarse)` and under `prefers-reduced-motion`.

## 6. Verification
- [x] `npm run lint`, `npm run typecheck`, `npm run test` clean inside `tbats-landing-page/`.
- [x] Build compiles with no warnings (removed now-unused avatar images). Manual checks: light/dark ReadyToGetStarted, footer lock, about 4 initials + pills, pricing ends at FAQ, effects desktop-only.
