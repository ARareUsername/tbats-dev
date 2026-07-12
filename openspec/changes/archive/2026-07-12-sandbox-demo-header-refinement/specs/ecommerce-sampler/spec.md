## MODIFIED Requirements

### Requirement: E-Commerce Sampler Page
The website SHALL provide a dedicated e-commerce sampler page accessible via `/demo/:projectId` route, featuring a collapsible visual preset control sidebar.

#### Scenario: User navigates from portfolio to sampler
- **GIVEN** a user views the Portfolio section
- **WHEN** the user clicks "View Live Demo" on a project card
- **THEN** the browser navigates to `/demo/:projectId?preset=<default-preset>`
- **AND** the sampler page loads with the project's default preset applied

#### Scenario: Sampler page loads with correct initial preset
- **GIVEN** a URL `/demo/e-commerce?preset=dark-luxury`
- **WHEN** the page loads
- **THEN** the Dark Luxury preset is active
- **AND** all visual components reflect the preset's design language
- **AND** the URL query param `preset=dark-luxury` is present

#### Scenario: User switches presets via sidebar
- **GIVEN** the sampler page is loaded
- **WHEN** the user selects a different preset from the sidebar
- **THEN** the URL updates to `?preset=<new-preset>` without full page reload
- **AND** the new preset's CSS variables are applied immediately
- **AND** component variants swap to match the new preset

#### Scenario: User shares sampler URL
- **GIVEN** a user copies the sampler URL with a specific preset
- **WHEN** another user opens the link
- **THEN** the page loads with that preset pre-selected
- **AND** the sidebar reflects the active preset

#### Scenario: Collapsing the sidebar on desktop
- **GIVEN** the user is viewing the sandbox on a desktop screen
- **WHEN** the user clicks the minimize toggle button on the sidebar
- **THEN** the sidebar slides left off-screen and collapses to 0 width
- **AND** a small floating button remains visible to expand the sidebar back
- **AND** the storefront canvas expands smoothly to fill the screen width

#### Scenario: Sidebar font styling remains stable
- **GIVEN** the user changes presets in the sidebar
- **THEN** the font-family of the sidebar text is unaffected by the active preset
- **AND** it remains styled in the standard sans-serif font family
- **AND** all Material Symbols icons render as active glyphs instead of literal ligature texts (e.g. check_circle, arrow_back)
- **AND** the viewport top-right shopping bag trigger is hidden dynamically on Blog and Portfolio views
