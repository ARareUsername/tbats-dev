## Context

The TBATS landing page currently presents pricing in two places that disagree: `src/components/InteractiveEstimator.tsx` shows Starter ₱15,000 / Growth ₱30,000 / Scale "Custom", while `src/components/ConsultationForm.tsx` offers a budget dropdown of ₱29k–50k / ₱50k–100k / ₱100k+. Neither was grounded in a pricing strategy, the "benefits" are feature lists, there is no recurring revenue path, and the copy does not express the studio's actual positioning (experienced developers shipping premium sites fast, then managing them for non-technical owners).

The studio is launching its first clients in Pampanga, Philippines. The target buyer is the Facebook-page owner (barbershops, small cafés, thrift stores) who wants to look like a bigger, more trusted brand without learning tech. The pricing must be transparent (helps this segment self-qualify), anchored on Growth as the "Most Popular" tier, and leave a flexible escape hatch (Custom) for larger e-commerce work the studio does not yet deliver.

## Goals / Non-Goals

**Goals:**
- A single, coherent pricing model used consistently across the estimator and the contact form.
- Estimator cards that show real prices and full, outcome-framed benefit breakdowns.
- A recurring Care Plan (₱2,500/mo) as a separate add-on — the monetized "we manage it for you" differentiator.
- Transparent installment (50% down / 50% on launch) and a first-3-clients case-study offer on the page.
- Positioning copy that speaks to Facebook-page owners leveling up to a real brand.

**Non-Goals:**
- Building e-commerce / platform capabilities now (Custom tier stays a conversation; e-commerce is roadmap).
- A full CMS, auth, or client dashboard (Care Plan is a managed service, not self-serve tooling).
- Changing the broader landing-page visual system, theming, or animation behavior.
- A/B price testing infrastructure.

## Decisions

1. **Centralize tier data in a single module** (`src/data/pricing.ts`) exporting `starter`, `growth`, `custom`, and `carePlan` objects (price, label, benefits[], highlight). Both the estimator and the contact form import from it.
   - *Rationale:* Eliminates the current drift between the two files; one source of truth.
   - *Alternative considered:* Keep prices inline in each component — rejected because it is the root cause of today's contradiction.

2. **Care Plan is a separate UI element, not a 4th tier.** Rendered below the one-time tiers, labeled monthly recurring.
   - *Rationale:* Different mental/math model (recurring vs once); bundling it into ₱20k would either starve margin or overpromise.

3. **Growth is the highlighted anchor; Starter is the hero entry.** Starter carries the real ₱20,000 price (the primary segment); Growth is marked "Most Popular" to pull buyers upward.
   - *Rationale:* Aligns with the Good/Better/Best pattern where most should land on "Better."

4. **Custom shows no fixed price** ("let's scope together").
   - *Rationale:* Studio has no e-commerce delivery experience yet; a hard ₱120k would overpromise. A floor-less escape hatch preserves flexibility and trust.

5. **Benefits are outcome-framed (JTBD "What After"), not feature lists.**
   - *Rationale:* Feature lists ("Self-Editable Content") don't communicate value; outcome framing ("Update your own site in minutes") does, and supports the premium positioning.

6. **Transparent installment + launch offer on the page.**
   - *Rationale:* 50% down is the near-universal PH service norm and lowers the ₱20k entry bite; the case-study offer substitutes for missing testimonials at launch.

## Risks / Trade-offs

- **[Unproven ₱20k local demand]** → Mitigated by installments, the first-clients discount, and Facebook-targeted outreach. Treat early demand as a learning signal.
- **[Care Plan margin unknown]** → ₱2,500/mo is intentionally conservative for a province launch; review after the first 1–2 projects and raise if the managed scope justifies it.
- **[Cost-to-serve not yet measured]** → If Starter costs >₱12–14k in time, lean on the Care Plan for margin or nudge Starter up. Monitor post-launch; not a launch blocker.
- **[Copy tone]** → Positioning must stay "plain language, no jargon" to match the non-technical buyer; avoid agency-speak in the benefit wording.

## Migration Plan

1. Add `src/data/pricing.ts` with the four tier objects and benefit arrays.
2. Rewrite `InteractiveEstimator.tsx` to map over the pricing data, rendering Starter/Growth/Custom cards + a separated Care Plan element, with installment and launch-offer copy.
3. Update `ConsultationForm.tsx` budget `<select>` options to match (Starter ₱20,000 / Growth ₱49,000 / Custom), removing the old ₱29k–100k+ ranges.
4. Validate visually (desktop + mobile) and confirm no remaining reference to the old prices.

**Rollback:** Pricing is content-only; reverting the `pricing.ts` values or the two component edits restores prior behavior. No schema/migration risk.

## Open Questions

- Exact cost-to-serve per tier (to be measured after first projects).
- Whether to eventually split Care Plan into Basic ₱1,500 / Premium ₱3,500 tiers.
- Exact first-3-clients discount amount (proposed: Starter at ₱15,000 or 20% off).
