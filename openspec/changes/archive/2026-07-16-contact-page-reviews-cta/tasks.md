# Tasks

## 1. Form edits
- [ ] `ConsultationForm.tsx`: label "Name" → "Full Name" (keep name attr).
- [ ] `ConsultationForm.module.css`: `formRow { align-items: start }` + ensure
      equal box model for the Name/Email row.
- [ ] Replace `<Select name="project_budget">` with
      `<Input type="tel" name="user_phone" />` + PH mask (prefix `+63 `,
      group 10 digits). Optional.

## 2. API action
- [ ] `app/routes/api.contact.ts`: read `user_phone` instead of
      `project_budget`; forward `user_phone` in template_params; drop
      `project_budget`.

## 3. Contact reviews + CTA
- [ ] Create `ContactReviews.tsx` + `.module.css`: Google header (5.0 on
      Google, See Why Clients Choose Us, disclaimer), 2 fake placeholder cards
      (stars + Google badge), slim CTA (Prefer to Text? We're Here / Send us a
      quick message — we respond fast / Text Us + Send Us a Message).
- [ ] Reuse `Testimonials` star-SVG pattern.

## 4. Mounting
- [ ] `app/routes/contact.tsx`: render `<ConsultationForm />` then
      `<ContactReviews />`.
- [ ] `app/routes/layout.tsx`: import `useLocation`; skip
      `<ReadyToGetStarted />` when `pathname === '/contact'`.

## 5. Validate
- [ ] `npm run typecheck`, `npm run lint`, `npm run build`.
- [ ] Manual: form aligned, phone masks, reviews + CTA show on /contact,
      global CTA absent there but present elsewhere.
