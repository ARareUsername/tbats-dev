## ADDED Requirements

### Requirement: Project gallery section
The landing page SHALL display a gallery of client projects in place of the sandbox demo.

#### Scenario: Gallery renders 3 project cards
- **WHEN** the landing page renders
- **THEN** 3 project cards are displayed in a grid layout

#### Scenario: Third card spans full width
- **WHEN** viewing on mobile (≤768px)
- **THEN** cards stack in a single column, third card spans full width

#### Scenario: Cards link externally
- **WHEN** a user clicks a project card
- **THEN** they are navigated to an external URL in a new tab

### Requirement: Demo code removed
The `/demo/:projectId` route and all demo components SHALL be removed.

#### Scenario: Demo route returns 404
- **WHEN** a user navigates to `/demo/e-commerce`
- **THEN** they see a 404 page (or the app shows its standard not-found fallback)

#### Scenario: Demo CSS is removed
- **WHEN** the app CSS is loaded
- **THEN** no demo-specific CSS classes are present
