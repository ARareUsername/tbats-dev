## MODIFIED Requirements

### Requirement: Portfolio Project Links to Sampler
The portfolio section SHALL display a unified interactive Control Deck launcher that lets users select a project and a preset style, routing directly to the e-commerce sampler with the selected combination.

#### Scenario: User clicks launch sandbox
- **WHEN** the user selects a project and preset on the Control Deck and clicks "Launch Live Demo"
- **THEN** navigation goes to `/demo/:selectedProject?preset=:selectedPreset`
- **AND** the sampler loads with the specified preset active

#### Scenario: Selecting different projects and presets
- **WHEN** the user clicks a project tab or a preset selection pill on the Control Deck
- **THEN** the active selection is visually highlighted
- **AND** the dynamic description text updates to explain the selected combination
- **AND** the launch button link updates its target route parameters

#### Scenario: Default preset mapping per project
- **GIVEN** the portfolio projects on the Control Deck
- **THEN** default starting preset mappings are:
  - Aether Finance (Fintech) → `minimal`
  - Kroma Studio (Creative) → `editorial`
  - Novus Retail (E-commerce) → `dark-luxury`
