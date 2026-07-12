## MODIFIED Requirements

### Requirement: Dot Matrix Grid Disabled on Sampler
The spotlight dot-matrix background SHALL be disabled when viewing the e-commerce sampler page.

#### Scenario: Dot matrix hidden on sampler route
- **GIVEN** user navigates to `/demo/*`
- **THEN** `.dot-matrix-grid` element sets `display: none` or is removed from DOM
- **AND** no radial-gradient mask tracking mouse position
- **AND** sampler uses its own background per preset

#### Scenario: Dot matrix returns on main site
- **GIVEN** user navigates from sampler back to `/`
- **THEN** dot-matrix-grid reappears
- **AND** mouse tracking resumes
- **AND** spotlight effect works on main site sections

### Requirement: Preset-Specific Backgrounds
Each sampler preset SHALL define its own background treatment.

#### Scenario: Minimal preset background
- **GIVEN** `minimal` preset
- **THEN** background: clean white/light gray, subtle noise texture optional

#### Scenario: Dark Luxury preset background
- **GIVEN** `dark-luxury` preset
- **THEN** background: deep near-black, subtle gold geometric pattern or gradient

#### Scenario: Editorial preset background
- **GIVEN** `editorial` preset
- **THEN** background: off-white, subtle paper texture, asymmetric accent line

#### Scenario: Bold preset background
- **GIVEN** `bold` preset
- **THEN** background: high-contrast, large geometric shapes, vibrant accent

#### Scenario: Playful preset background
- **GIVEN** `playful` preset
- **THEN** background: soft pastel gradient, floating organic shapes