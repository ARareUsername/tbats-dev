## ADDED Requirements

### Requirement: True Black Background
The system SHALL display a true black background (#000000) with a subtle static noise overlay to provide a premium tactile feel.

#### Scenario: Page load
- **WHEN** the user visits the landing page
- **THEN** the background renders as black with a 3% opacity SVG noise filter

### Requirement: Glowing Cursor Trailer
The system SHALL implement a custom cursor trailer that smoothly follows the mouse position.

#### Scenario: Moving the mouse
- **WHEN** the user moves their mouse across the page
- **THEN** a soft, glowing orb follows the cursor with slight spring physics

### Requirement: Bento-Box Agency Services
The system SHALL display agency services, process, and pricing in a modern, interactive CSS Grid bento-box layout.

#### Scenario: Hovering over a service
- **WHEN** the user hovers over a service grid item
- **THEN** the item slightly scales up and its borders illuminate

### Requirement: Start a Project Conversion Flow
The system SHALL provide a sleek "Start a Project" button replacing generic quote buttons, linking to an interactive strategy call booking flow.

#### Scenario: Clicking Start a Project
- **WHEN** the user clicks "Start a Project"
- **THEN** a modal or full-page booking form is presented

## REMOVED Requirements

### Requirement: Interactive Decomposition Chart
**Reason**: Reverting to web agency portfolio, no longer explaining TBATS algorithm.
**Migration**: Remove `DecompositionDemo.jsx` component.

### Requirement: Code Integration Tabs
**Reason**: Reverting to web agency portfolio, no longer showing algorithm code.
**Migration**: Remove `CodePlayground.jsx` component.

### Requirement: T-B-A-T-S Explanatory Grid
**Reason**: Reverting to web agency portfolio, no longer explaining TBATS.
**Migration**: Remove `FeaturesGrid.jsx` component.
