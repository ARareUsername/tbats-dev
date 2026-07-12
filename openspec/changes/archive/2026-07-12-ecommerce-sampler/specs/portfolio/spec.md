## MODIFIED Requirements

### Requirement: Portfolio Project Links to Sampler
The portfolio section SHALL link each project to the e-commerce sampler with a project-appropriate default preset.

#### Scenario: Project card links to sampler with preset
- **GIVEN** a portfolio project card (e.g., "Novus Retail")
- **WHEN** user clicks "View Project" or the card itself
- **THEN** navigation goes to `/demo/novus-retail?preset=dark-luxury`
- **AND** the sampler loads with the specified preset active
- **AND** the sidebar shows the project name/context

#### Scenario: Default preset mapping per project
- **GIVEN** the portfolio projects and their categories
- **THEN** default preset mappings:
  - Aether Finance (Fintech) → `minimal`
  - Kroma Studio (Creative) → `editorial`
  - Novus Retail (E-commerce) → `dark-luxury`
  - Future projects map to most relevant preset

#### Scenario: URL preserves preset on refresh
- **GIVEN** user is at `/demo/novus-retail?preset=dark-luxury`
- **WHEN** user refreshes page
- **THEN** sampler loads with `dark-luxury` preset active
- **AND** sidebar selector reflects active preset

### Requirement: Sampler Context in Sidebar
The sampler sidebar SHALL display which portfolio project is being demonstrated.

#### Scenario: Sidebar shows project context
- **GIVEN** user enters sampler via portfolio project link
- **THEN** sidebar header shows: "Demo: Novus Retail" (project name)
- **AND** subtitle: "E-commerce Platform — Dark Luxury Preset"
- **AND** "Back to Portfolio" link returns to main site portfolio section