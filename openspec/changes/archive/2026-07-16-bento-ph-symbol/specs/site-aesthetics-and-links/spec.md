# site-aesthetics-and-links Specification

## ADDED Requirements
### Requirement: BentoServices Static Grid Background
The BentoServices section SHALL display a plain static neutral-gray dot-grid background (no Philippines-shaped mask, no cursor spotlight).

#### Scenario: Static grid only
- **WHEN** the BentoServices section is rendered
- **THEN** the background is a static dot grid using `var(--grid-dot-color)`, with no image mask and no cursor-based reveal.

#### Scenario: Theme awareness
- **WHEN** the theme switches between light and dark
- **THEN** the dot color follows `--grid-dot-color` with no additional color logic.

### Requirement: Philippines Location Symbol in Header
The BentoServices section header SHALL include a location chip showing a `location_on` icon and the text "Pampanga, Philippines".

#### Scenario: Location chip present
- **WHEN** the BentoServices section header is rendered
- **THEN** a chip with a `location_on` Material Symbol and the text "Pampanga, Philippines" is displayed near the heading.
