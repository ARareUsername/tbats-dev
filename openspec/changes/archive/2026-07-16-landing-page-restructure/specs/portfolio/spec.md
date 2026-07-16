## ADDED Requirements

### Requirement: Portfolio Sub-routing
The system SHALL support sub-routes for showcasing work: `/our-work`, `/our-work/case-studies`, and `/our-work/portfolio`.

#### Scenario: Navigate to our work sub-routes
- **WHEN** the user visits `/our-work/case-studies` or `/our-work/portfolio`
- **THEN** the system renders the appropriate case study list or full portfolio grid

## MODIFIED Requirements

### Requirement: Portfolio Grid
The landing page SHALL display a short 3x2 preview grid of premium web projects, immediately followed by a "See Our Work" CTA button that links to the dedicated `/our-work` page.

#### Scenario: User hovers over portfolio items
- **WHEN** the user hovers over a project card in the Portfolio section
- **THEN** the card reveals additional project metadata or tags with smooth animation.

#### Scenario: See Our Work navigation
- **WHEN** the user clicks the "See Our Work" button
- **THEN** the application redirects the user to the dedicated `/our-work` route

