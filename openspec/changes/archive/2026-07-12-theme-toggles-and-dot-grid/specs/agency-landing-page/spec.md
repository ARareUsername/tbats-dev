## ADDED Requirements

### Requirement: Interactive Style Controllers
The landing page SHALL feature dynamic controls in the header bar allowing users to switch the heading font family (Serif vs. Sans-Serif) and toggle the visual theme (Light vs. Dark Mode) in real-time.

#### Scenario: Switching typography theme
- **WHEN** the user selects the "Sans-Serif" font option in the header style tuner
- **THEN** the application transitions all heading elements (`h1` through `h6`) to the modern geometric `Outfit` sans-serif font family

#### Scenario: Toggling color theme
- **WHEN** the user clicks the theme controller button
- **THEN** the application transitions the active color palette and variables between light and dark modes

### Requirement: Spotlight Dot Matrix Background
The landing page SHALL feature a repeating dot-matrix blueprint background pattern overlaid with a radial gradient mask that creates a soft spotlight effect centered on the mouse cursor on desktop devices.

#### Scenario: Cursor tracking on the dot grid
- **WHEN** the user moves their mouse across the viewport
- **THEN** the center coordinates of the background radial mask smoothly follow the mouse position to illuminate the underlying dot grid pattern
