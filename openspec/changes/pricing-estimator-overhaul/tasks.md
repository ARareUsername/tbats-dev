## 1. Pricing Data Source of Truth

- [x] 1.1 Create `src/data/pricing.ts` exporting `starter` (₱20,000, hero), `growth` (₱49,000, highlight), `custom` (no price), and `carePlan` (₱2,500/mo) objects with `label`, `price`, `desc`, `benefits: string[]`, and `highlight?` fields
- [x] 1.2 Add the installment copy ("50% down / 50% on launch") and first-3-clients case-study offer copy as exported constants in `src/data/pricing.ts`

## 2. Estimator Component

- [x] 2.1 Rewrite `InteractiveEstimator.tsx` to import tier data from `src/data/pricing.ts` and render Starter / Growth / Custom cards
- [x] 2.2 Render each card with its real price and full outcome-framed benefit breakdown (map over `benefits`)
- [x] 2.3 Mark Growth as "Most Popular" (highlight styling + badge)
- [x] 2.4 Render Custom with no fixed price and a "let's scope together" invitation
- [x] 2.5 Add a separated Care Plan element below the tiers showing "₱2,500/mo" with its scope, clearly distinct from one-time tiers
- [x] 2.6 Add installment terms and first-3-clients case-study offer copy to the pricing section

## 3. Contact Form Consistency

- [x] 3.1 Update `ConsultationForm.tsx` budget `<select>` options to Starter ₱20,000 / Growth ₱49,000 / Custom, removing the old ₱29k–100k+ ranges
- [x] 3.2 Confirm no remaining references to the old prices (₱15,000 / ₱30,000 / ₱29k–50k / ₱100k+) anywhere in `src/`

## 4. Validation

- [x] 4.1 Run `npm run typecheck` and confirm zero errors
- [x] 4.2 Run `npm run build` and confirm a successful production build
- [x] 4.3 Visually verify the pricing section on desktop and mobile (≤900px) for layout, benefit readability, and Care Plan separation
