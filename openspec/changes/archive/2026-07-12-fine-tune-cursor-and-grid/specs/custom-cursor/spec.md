## ADDED Requirements

### Requirement: Interactive Cursor Hover States
The custom cursor component SHALL dynamically adjust its dimensions, visual borders, and blending mode when hovering over interactive elements. It SHALL scale up by exactly 1.4x (instead of 2.0x) and apply a difference mix-blend-mode during the hovered state to keep text readable without overwhelming the screen.

#### Scenario: Hovering over an interactive element
- **WHEN** the mouse pointer hovers over a button or theme toggle
- **THEN** the custom cursor container performs a spring scale transition of 1.4x, adjusts its border thickness, and applies a `difference` mix-blend-mode for readability

### Requirement: Theme Adaptive Cursor Visibility
The custom cursor component SHALL dynamically adapt its background opacity, border styling, and CSS blending mode based on the active color theme, preventing it from screening out to white over light-colored backdrops.

#### Scenario: Rendering in Light Mode (Not Hovered)
- **WHEN** the website active theme is set to Light Mode
- **THEN** the custom cursor renders as a translucent dark-emerald circle in `normal` blending mode with a high-contrast outline to ensure visibility
