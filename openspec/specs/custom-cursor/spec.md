# custom-cursor Specification

## Purpose
TBD - created by archiving change fix-custom-cursor-lag. Update Purpose after archive.
## Requirements
### Requirement: High Performance Mouse Tracking
The custom cursor component SHALL track mouse movements directly using a React ref and a `requestAnimationFrame` handler to update styles without triggering React state updates or component re-renders, using a high-responsiveness interpolation coefficient of at least 0.35 to minimize trailing delay and floatiness.

#### Scenario: Mouse movement tracking
- **WHEN** the mouse pointer moves across the screen
- **THEN** the custom cursor element updates its position on the next animation frame using 3D hardware-accelerated transforms (`translate3d`) with negligible trailing latency

### Requirement: Automatic Touch Device Bypass
The custom cursor SHALL automatically detect touch-based pointers and completely bypass rendering to prevent unnecessary overhead and allow the native mobile/touch pointer experience.

#### Scenario: Touch device detection
- **WHEN** the user visits the page on a touch-capable device matching the media query `(pointer: coarse)`
- **THEN** the custom cursor component returns null and does not mount event listeners

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

### Requirement: Removal of Typography Swapper
The typography font mode switch capability SHALL be fully removed. The application SHALL default to the Sans-serif layout styling for headings, while retaining specific Serif features on targeted brand components.

#### Scenario: Inspecting typography controls
- **WHEN** the user views the header or mobile nav bar
- **THEN** they see no Serif/Sans toggle slider controls, and all section headings render in the Sans-serif font Outfit by default

### Requirement: Custom Cursor Disabled on Sampler
The custom cursor SHALL be disabled when viewing the e-commerce sampler page.

#### Scenario: Cursor hidden on sampler route
- **GIVEN** user navigates to `/demo/*`
- **THEN** custom cursor component unmounts or sets `display: none`
- **AND** native browser cursor restored for all elements
- **AND** no cursor trail or hover morphing occurs

#### Scenario: Cursor returns on main site
- **GIVEN** user navigates from sampler back to `/`
- **THEN** custom cursor re-initializes
- **AND** hover morphing on interactive elements resumes

### Requirement: Cursor Variant Per Preset (Optional)
If cursor is kept on sampler, it SHALL adapt to preset aesthetic.

#### Scenario: Minimal preset uses minimal cursor
- **GIVEN** `minimal` preset active
- **THEN** cursor: small dot, neutral color, no glow, `mix-blend-mode: difference`

#### Scenario: Dark Luxury preset uses gold cursor
- **GIVEN** `dark-luxury` preset active
- **THEN** cursor: gold accent, subtle glow, `mix-blend-mode: screen`

#### Scenario: Playful preset uses soft cursor
- **GIVEN** `playful` preset active
- **THEN** cursor: larger, pastel accent, bouncy scale on hover

