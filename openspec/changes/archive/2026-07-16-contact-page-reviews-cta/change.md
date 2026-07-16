# Change: Contact Page — Reviews Block & Bespoke CTA

## Why

The contact page currently reuses the global `ReadyToGetStarted` CTA (mounted in
`layout.tsx`) and a consultation form whose first row has a misaligned email
input, a "Name" label, and a "Subscription Plan Interest" dropdown that doesn't
fit the contact intent. We want the contact page to:
- fix the form (Full Name label, aligned email box, phone field with PH
  formatting instead of the plan dropdown),
- add a Google-reviews style block (placeholder content) above a contact-
  specific CTA ("Prefer to Text? We're Here"), and
- show that bespoke CTA instead of the global one on the contact page only.

## What Changes

- `src/components/ConsultationForm.tsx` + `.module.css`
  - Label "Name" → "Full Name" (keep `name="user_name"`, no API change).
  - Fix the Name/Email row alignment: `align-items: start` + equal box model so
    both inputs match the full-width fields below.
  - Replace the `Subscription Plan Interest` `<Select name="project_budget">`
    with `<Input type="tel" name="user_phone">` (PH format, optional): a
    pre-filled `+63 ` prefix and a client mask grouping 10 digits as
    `+63 9XX XXX XXXX`.
- `app/routes/api.contact.ts`
  - Read `user_phone` instead of `project_budget`; forward `user_phone` into the
    EmailJS `template_params` (drop `project_budget`). Phone is optional.
  - Note: the EmailJS dashboard template variable rename
    (`project_budget` → `user_phone`) happens outside this repo.
- New component `src/components/ContactReviews.tsx` + `.module.css`
  - Google-reviews header: `★★★★★ 5.0 on Google`, "See Why Clients Choose Us",
    disclaimer "Real reviews from real clients. Every word is from Google."
  - Two placeholder review cards (obviously-fake names/quotes), each with star
    row (reuse `Testimonials` star-SVG pattern) + Google badge.
  - Below: slim CTA "Prefer to Text? We're Here" / "Send us a quick message —
    we respond fast." with `Text Us` (sms link, sms icon) and
    `Send Us a Message` (→ /contact, send icon) buttons.
- `app/routes/contact.tsx`
  - Render `<ConsultationForm />` then `<ContactReviews />` (reviews + CTA).
- `app/routes/layout.tsx`
  - Hide the global `<ReadyToGetStarted />` on the `/contact` route (via
    `useLocation`) so the bespoke CTA shows instead.

## Impact

- Affected: contact route, layout, ConsultationForm, api.contact.ts, new
  ContactReviews component. No new dependencies.
- Users: contact page has an aligned form with a PH phone field, a reviews
  block, and a text-focused CTA. Other pages keep the existing global CTA.
