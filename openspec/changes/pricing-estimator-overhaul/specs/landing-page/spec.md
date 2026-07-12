# Capability: Landing Page

## Purpose
TBD

## Requirements

### Requirement: Bento-Box Agency Services
The system SHALL display agency services, process, and pricing in a modern, interactive CSS Grid bento-box layout. The pricing section SHALL render the finalized, strategy-backed model: **Starter ₱20,000** (hero), **Growth ₱49,000** (highlighted "Most Popular"), **Custom** ("let's scope together", no fixed price), plus a separate recurring **Care Plan ₱2,500/mo** add-on. Each tier SHALL show its real price and a full, outcome-framed benefit breakdown, and the section SHALL surface 50%-down/50%-on-launch installment terms and a first-3-clients case-study offer. Pricing values displayed here MUST match the contact-form budget dropdown.

#### Scenario: Hovering over a service
- **WHEN** the user hovers over a service grid item
- **THEN** the item slightly scales up and its borders illuminate

#### Scenario: Viewing the pricing tiers
- **WHEN** the user views the pricing section
- **THEN** they see Starter ₱20,000, Growth ₱49,000 (marked Most Popular), and Custom with no fixed price, each with a real price and outcome-framed benefits

#### Scenario: Viewing the care plan
- **WHEN** the user views the pricing section
- **THEN** a separated Care Plan element shows ₱2,500/mo with its scope and is not bundled into any project price

#### Scenario: Reading payment and launch terms
- **WHEN** the user reads the pricing section
- **THEN** they see 50%-down/50%-on-launch installment terms and the first-3-clients case-study offer
