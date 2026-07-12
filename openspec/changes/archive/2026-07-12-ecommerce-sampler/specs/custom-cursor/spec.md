## MODIFIED Requirements

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