# Design

## Context

Contact form posts to `/api/contact` (action in `app/routes/api.contact.ts`),
which reads `user_name`, `user_email`, `project_budget`, `project_desc` and
forwards them as EmailJS `template_params`. The plan dropdown is optional.

`ReadyToGetStarted` is mounted globally in `layout.tsx:54`, so it appears on
every page including `/contact`. `Testimonials.tsx` already renders a star-SVG
pattern + `Avatar` + `Card` (unused anywhere) — reuse its star markup.

## Goals / Non-Goals

- Goals: aligned form, Full Name label, PH phone field (optional), contact
  reviews block (placeholder), contact-specific text CTA, hide global CTA on
  /contact.
- Non-Goals: real review data (placeholder only), changing EmailJS dashboard
  template (out of repo), mobile dropdown bubble (mobile uses accordions).

## Decisions

1. **Phone**: `type="tel"` + `name="user_phone"`, optional. Client mask:
   keep `+63 ` prefix, strip non-digits, cap at 10, group as `9XX XXX XXXX`.
   Simple (mobile-first), not strict landline detection.
2. **api.contact.ts**: read `user_phone`, drop `project_budget`, forward
   `user_phone`. Validation unchanged (name/email/desc required).
3. **Reviews block**: new `ContactReviews` component; reuse star-SVG markup
   from `Testimonials`. Two obviously-fake placeholder cards.
4. **CTA swap**: `layout.tsx` uses `useLocation()` to skip
   `<ReadyToGetStarted />` when `pathname === '/contact'`; contact route renders
   `<ContactReviews />` (reviews + slim CTA) after the form.
5. **Alignment**: `formRow` gains `align-items: start`; both `Input`s share
   identical padding/box-sizing (already do) so they match fields below.

## Risks

- EmailJS template var rename (`project_budget`→`user_phone`) is in the
  EmailJS dashboard, outside repo — emails may show stale/empty until updated.
- Placeholder reviews are fake; swap for real later.
