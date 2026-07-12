# Capability: Care Plan Refinement

## Purpose
Fix the redundant benefit copy and visual styling of the Care Plan card in the pricing section.

## ADDED Requirements

### Requirement: Non-redundant Care Plan benefit text
The Care Plan benefits SHALL NOT duplicate the card's description text.

#### Scenario: First benefit renders
- **WHEN** the Care Plan card renders
- **THEN** the first benefit line conveys a distinct message from the card description

### Requirement: Care Plan card visual consistency
The Care Plan card SHALL visually align with the tier cards above it — using left-aligned benefits, solid border styling, and matching border radius.

#### Scenario: Care Plan card renders
- **WHEN** the pricing section renders
- **THEN** the Care Plan card uses border-radius matching the tier cards, left-aligned benefit items, and a solid border instead of dashed
