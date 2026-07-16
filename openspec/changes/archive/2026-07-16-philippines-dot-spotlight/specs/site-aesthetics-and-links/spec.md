# site-aesthetics-and-links Specification

## ADDED Requirements
### Requirement: Philippines Dot-Grid Spotlight
The BentoServices section SHALL display a dot-grid arranged in the shape of the Philippines, revealed by a soft cursor-following spotlight, instead of a flat static grid or a filled silhouette image.

#### Scenario: Dots confined to Philippines shape
- **WHEN** the BentoServices section is rendered
- **THEN** the background dot pattern is masked to the Philippines silhouette so dots appear only within the country's outline.

#### Scenario: Soft spotlight reveal
- **WHEN** the user moves the cursor over the BentoServices section
- **THEN** a soft radial glow (matching the global dot-matrix feel, ~250px falloff) reveals the Philippines-shaped dots near the cursor, while dots outside the glow remain faint.

#### Scenario: Reuses global pointer tracking
- **WHEN** the section spotlight is computed
- **THEN** it uses the existing global `--mouse-x` / `--mouse-y` CSS variables and adds no new JavaScript mouse listener.

#### Scenario: Theme awareness
- **WHEN** the theme switches between light and dark
- **THEN** the dot color follows `--grid-dot-color` (light gray in dark mode, dark gray in light mode) with no additional color logic.
