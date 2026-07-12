## ADDED Requirements

### Requirement: E-Commerce Sampler Page
The website SHALL provide a dedicated e-commerce sampler page accessible via `/demo/:projectId` route.

#### Scenario: User navigates from portfolio to sampler
- **GIVEN** a user views the Portfolio section
- **WHEN** the user clicks "View Live Demo" on a project card
- **THEN** the browser navigates to `/demo/:projectId?preset=<default-preset>`
- **AND** the sampler page loads with the project's default preset applied

#### Scenario: Sampler page loads with correct initial preset
- **GIVEN** a URL `/demo/aether-finance?preset=dark-luxury`
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

### Requirement: Product Catalog Display
The sampler SHALL display a realistic product catalog with categories, filtering, and product cards.

#### Scenario: Products render in preset-appropriate grid
- **GIVEN** the active preset defines a product grid layout (masonry/grid/list)
- **WHEN** the product catalog loads
- **THEN** products render in the preset's specified layout
- **AND** product cards use the preset's card variant (image ratio, typography, hover effects)

#### Scenario: Category filtering works
- **GIVEN** products have assigned categories
- **WHEN** the user clicks a category filter
- **THEN** only products in that category display
- **AND** the active category is visually highlighted

#### Scenario: Product cards show essential info
- **GIVEN** a product card renders
- **THEN** it displays: product image, name, price, add-to-cart button
- **AND** on hover: quick-view or secondary image (per preset variant)

### Requirement: Route Isolation
The sampler page SHALL be visually isolated from the main site's global features.

#### Scenario: Custom cursor disabled on sampler
- **GIVEN** the user is on `/demo/*` route
- **THEN** the custom cursor component does not render
- **AND** native browser cursor is used

#### Scenario: Dot-matrix grid disabled on sampler
- **GIVEN** the user is on `/demo/*` route
- **THEN** the dot-matrix background grid does not render

#### Scenario: Sampler has independent theming
- **GIVEN** the sampler page loads
- **THEN** it does not inherit the main site's theme (light/dark)
- **AND** it uses only the active preset's color system
- **AND** changing preset does not affect main site theme