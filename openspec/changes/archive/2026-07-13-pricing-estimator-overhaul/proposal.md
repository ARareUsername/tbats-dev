## Why

The landing page's pricing is inconsistent and under-developed: the public estimator (`InteractiveEstimator.tsx`) shows Starter ₱15,000 / Growth ₱30,000 / Scale "Custom", while the contact-form intake dropdown lists ₱29k–50k / ₱50k–100k / ₱100k+ — the two contradict each other. More importantly, the tiers were never grounded in a pricing strategy, the "benefits" are feature lists rather than customer outcomes, there is no recurring revenue path, and the pricing does not reflect the studio's actual positioning (experienced devs delivering premium sites fast, then managing them for non-technical owners).

We are launching the studio's first clients in Pampanga and need a single, coherent, transparent pricing model that: targets ₱20k solopreneurs (barbershops, cafés, thrift stores) while leaving an escape hatch for larger e-commerce work; monetizes ongoing management via a Care Plan; and expresses the "real developers, done-for-you, stays with you" differentiation.

## What Changes

- Replace the three inconsistent price points with a finalized, strategy-backed model:
  - **Starter — ₱20,000** (one-time, hero tier for solopreneurs)
  - **Growth — ₱49,000** (one-time, "Most Popular" anchor)
  - **Custom — "let's scope together"** (no hard price; e-commerce/platform work on the roadmap)
  - **Care Plan — ₱2,500/mo** (recurring add-on: hosting, backend management, updates, scaling)
- Rewrite the estimator cards to show **real prices** plus a **full benefit breakdown** per tier, framed as customer outcomes (JTBD "What After"), not feature lists.
- Add launch mechanics to the page copy/positioning: **50% down / 50% on launch** installment terms, and a **first-3-clients case-study offer** (discount in exchange for a testimonial/showcase permission).
- Update the contact-form budget dropdown to match the new tiers (resolve the existing contradiction).
- Add the differentiated positioning copy targeting Facebook-page owners leveling up to a real brand.

## Capabilities

### New Capabilities
- `pricing-estimator`: The pricing model, tier definitions, benefit copy, Care Plan, installment terms, and the estimator UI that displays them. Owns the source of truth for prices shown on the site.

### Modified Capabilities
- `landing-page`: The pricing/estimator section of the landing page now renders the finalized tiers and benefit breakdowns (visual/section change only; the broader landing-page requirements are unchanged).

## Impact

- **Source files**: `src/components/InteractiveEstimator.tsx` (tiers, prices, benefit copy, Care Plan card), `src/components/ConsultationForm.tsx` (budget dropdown values), and any shared pricing-constants module if introduced.
- **Content**: All PHP (₱) prices, benefit wording, and positioning copy.
- **Dependencies**: None new; builds on the existing React 19 + Vite + Framer Motion stack.
- **Risk**: ₱20k local demand is unproven — mitigated by installments, the first-clients discount, and Facebook-targeted outreach. Care Plan margin should be reviewed after the first 1–2 projects.
