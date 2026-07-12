## ADDED Requirements

### Requirement: Premium Vignette Background
The system SHALL display a deep grey radial vignette background across the landing page to provide visual depth.

#### Scenario: Page load
- **WHEN** the user visits the landing page
- **THEN** the background renders as a radial gradient transitioning from a lighter deep grey in the center to a darker near-black grey on the edges

### Requirement: Physics-Based Scroll Animations
The system SHALL use Framer Motion to apply declarative, physics-based scroll animations (such as staggered reveals and parallax effects) to page elements as they enter the viewport.

#### Scenario: Scrolling down the page
- **WHEN** the user scrolls down to a new section
- **THEN** the elements within that section fade and slide in smoothly using Framer Motion physics

### Requirement: Mobile Responsiveness Refinements
The system SHALL ensure that interactive components, code playgrounds, and touch targets adapt to mobile viewports (<= 900px) for usability.

#### Scenario: Viewing on a small screen
- **WHEN** the user views the application on a mobile device
- **THEN** code tabs become horizontally scrollable and SVG charts scale to prevent breaking the layout, with touch targets >= 44px
