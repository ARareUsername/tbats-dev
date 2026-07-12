## MODIFIED Requirements

### Requirement: Portfolio Project Links to Sampler
The portfolio section SHALL link each project to the e-commerce sampler with a project-appropriate default preset.

#### Scenario: Project card links to sampler with preset
- **WHEN** the user selects a project format (Personal Blog, E-Commerce, Portfolio) and theme preset on the launcher and clicks "Launch Sandbox Demo"
- **THEN** navigation goes to the corresponding category route `/demo/personal-blog`, `/demo/e-commerce`, or `/demo/portfolio`
- **AND** the sandbox is themed with the selected preset

#### Scenario: Default preset mapping per project
- **GIVEN** the available project formats on the launcher
- **THEN** default starting preset mappings are:
  - Personal Blog → `editorial`
  - E-Commerce → `minimal`
  - Portfolio → `dark-luxury`

#### Scenario: URL preserves preset on refresh
- **GIVEN** the user is on a category route (e.g. `/demo/e-commerce?preset=minimal`)
- **WHEN** the page is refreshed
- **THEN** the sandbox initializes with the correct preset active
