# Capability: Pricing Estimator

## Purpose
Defines the studio's pricing model, the estimator UI that displays it, and the recurring Care Plan — the single source of truth for any price shown on the site.

## Requirements

### Requirement: Defined Pricing Tiers
The system SHALL expose exactly these pricing tiers:
- **Starter** — ₱20,000 one-time (hero tier for solopreneurs)
- **Growth** — ₱49,000 one-time (highlighted as "Most Popular")
- **Custom** — no fixed price; displayed as "let's scope together" (e-commerce/platform work on the roadmap)
- **Care Plan** — ₱2,500/month recurring add-on (hosting, backend management, updates, scaling support)

#### Scenario: Tier values are fixed
- **WHEN** the pricing model is rendered anywhere on the site
- **THEN** the displayed values are exactly Starter ₱20,000, Growth ₱49,000, Custom (no price), and Care Plan ₱2,500/mo

#### Scenario: Growth is the highlighted anchor
- **WHEN** the estimator renders the tiers
- **THEN** Growth is visually marked as "Most Popular"

### Requirement: Estimator Shows Real Prices and Benefit Breakdowns
The estimator SHALL display each tier's real price and a full benefit breakdown framed as customer outcomes (not feature lists).

#### Scenario: Starter benefits
- **WHEN** a visitor views the Starter card
- **THEN** they see "₱20,000" and outcome-framed benefits (e.g. "Look like an established brand, not just a Facebook page"; "Live in 2–3 weeks"; "Customers reach you 24/7 through a real contact form"; "We set up your Google Business Profile")

#### Scenario: Growth benefits
- **WHEN** a visitor views the Growth card
- **THEN** they see "₱49,000" and outcome-framed benefits (e.g. "Update your own site in minutes"; "See which pages bring customers"; "Rank higher on Google with local SEO"; "Room to grow — up to 10 pages, a blog, and more")

#### Scenario: Custom benefits
- **WHEN** a visitor views the Custom card
- **THEN** they see no fixed price and an invitation to scope e-commerce/platform work together

### Requirement: Care Plan Displayed as Separate Recurring Add-On
The Care Plan SHALL be shown as a distinct element below the one-time project tiers, clearly labeled as a monthly recurring cost, not bundled into any project price.

#### Scenario: Care Plan presentation
- **WHEN** the estimator renders the Care Plan
- **THEN** it shows "₱2,500/mo" with scope (hosting, backend management, updates, scaling) and is visually separated from the one-time tiers

### Requirement: Installment and Launch Offers Shown
The estimator SHALL surface the payment and launch terms: **50% down / 50% on launch** installment, and a **first-3-clients case-study offer** (discount in exchange for testimonial/showcase permission).

#### Scenario: Installment terms visible
- **WHEN** a visitor reads the pricing section
- **THEN** they see the 50%-down / 50%-on-launch terms stated plainly

#### Scenario: Launch offer visible
- **WHEN** a visitor reads the pricing section
- **THEN** they see the first-3-clients case-study discount offer

### Requirement: Pricing Consistency Across the Site
The contact-form budget dropdown SHALL use the same tier values as the estimator. Existing values (₱29k–50k / ₱50k–100k / ₱100k+) SHALL be replaced.

#### Scenario: Form matches estimator
- **WHEN** a visitor opens the contact form budget selector
- **THEN** the options align with Starter ₱20,000 / Growth ₱49,000 / Custom, with no contradictory price ranges
