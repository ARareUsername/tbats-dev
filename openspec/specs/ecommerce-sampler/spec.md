# Capability: E-Commerce Sampler Page

## Purpose
Specifies the sandbox page route, initialization behavior, dynamic rendering of layout variants per preset, catalog display, filtering, and isolation from landing page configurations.
## Requirements
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

### Requirement: Product Catalog Display
The sampler SHALL display a realistic product catalog with categories, filtering, and product cards, using Peso (₱) pricing and abstract visual fills.

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
- **THEN** it displays: styled abstract visual placeholder matching the active preset, name, price in Pesos (₱), add-to-cart button
- **AND** on hover: quick-view or secondary placeholder effects (per preset variant)
- **AND** all monetary figures on product cards, cart items, drawer totals, and checkout pages render with the `₱` symbol

#### Scenario: Dynamic layouts for blog and portfolio profiles
- **GIVEN** the URL matches `/demo/personal-blog` or `/demo/portfolio`
- **WHEN** the page loads
- **THEN** the categories list adjusts (e.g., Design, Tech for Blog; Branding, Dev for Portfolio)
- **AND** product cards dynamically display matching content (excerpt, dates, read times for Blog; client names, years for Portfolio)
- **AND** add-to-cart actions change to read-article or view-project links respectively
- **AND** all header, hero, and footer layouts adjust their branding copy, navigation lists, and call-to-actions to match the active category, omitting shopping bag elements on non-commerce pages

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

