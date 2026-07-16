# site-aesthetics-and-links Specification

## ADDED Requirements
### Requirement: BentoServices Static Grid Background
The BentoServices section SHALL display a subtle, static, neutral-gray dot-grid background instead of a Philippines silhouette image.

#### Scenario: No silhouette image
- **WHEN** the BentoServices section is rendered
- **THEN** no Philippines image (`philippines.png`) is used as a background layer.

#### Scenario: Neutral grid texture
- **WHEN** the BentoServices section is rendered
- **THEN** a static dot grid is shown using `var(--grid-dot-color)` (neutral gray), evenly across the section at low opacity, with no cursor-based mask.

#### Scenario: Theme awareness
- **WHEN** the theme switches between light and dark
- **THEN** the grid color follows `--grid-dot-color` (light gray in dark mode, dark gray in light mode) without additional color logic.
