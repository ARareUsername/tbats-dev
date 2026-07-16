# Capability: Portfolio

## Purpose
Specifies the project cards, tags, link routing structures, and default preset configurations to connect landing projects to their respective interactive samplers.
## Requirements
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

### Requirement: Sampler Context in Sidebar
The sampler sidebar SHALL display which portfolio project is being demonstrated.

#### Scenario: Sidebar shows project context
- **GIVEN** user enters sampler via portfolio project link
- **THEN** sidebar header shows: "Demo: Novus Retail" (project name)
- **AND** subtitle: "E-commerce Platform — Dark Luxury Preset"
- **AND** "Back to Portfolio" link returns to main site portfolio section

### Requirement: Redesigned Theme Preset Selection
The website launcher SHALL display the styling presets in a stacked vertical card grid to balance the widget height and feature palette colors.

#### Scenario: Preset buttons show swatches and badges
- **GIVEN** the launcher renders styling presets
- **THEN** each preset button renders in a vertical row
- **AND** displays two color swatch circles representing the preset colors
- **AND** displays the preset's layout badge

### Requirement: Header Sandbox Navigation Link
The main landing page navbar header SHALL display a direct shortcut linking users to the interactive sandbox launcher console section.

#### Scenario: Header navigation contains Sandbox link
- **GIVEN** the user views the main landing page header
- **THEN** the navbar renders a "Sandbox" menu option
- **AND** clicking this link moves viewport scroll position to the launcher widget section (#portfolio)

### Requirement: Portfolio Grid
The landing page SHALL display a short 3x2 preview grid of premium web projects, immediately followed by a "See Our Work" CTA button that links to the dedicated `/our-work` page.

#### Scenario: User hovers over portfolio items
- **WHEN** the user hovers over a project card in the Portfolio section
- **THEN** the card reveals additional project metadata or tags with smooth animation.

#### Scenario: See Our Work navigation
- **WHEN** the user clicks the "See Our Work" button
- **THEN** the application redirects the user to the dedicated `/our-work` route

### Requirement: Portfolio Sub-routing
The system SHALL support sub-routes for showcasing work: `/our-work`, `/our-work/case-studies`, and `/our-work/portfolio`.

#### Scenario: Navigate to our work sub-routes
- **WHEN** the user visits `/our-work/case-studies` or `/our-work/portfolio`
- **THEN** the system renders the appropriate case study list or full portfolio grid

