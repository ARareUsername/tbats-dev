## ADDED Requirements

### Requirement: Portfolio section background matches site palette
The Featured Projects section background MUST use the same flat
`var(--bg-dark-end)` token as sibling sections, with no green gradient wash.

#### Scenario: Section renders without green tint
- **WHEN** the Featured Projects section is rendered
- **THEN** its background is the flat `var(--bg-dark-end)` color
- **AND** no green/teal gradient overlay is present

### Requirement: Portfolio cards use real placeholder images
Each project card MUST display a real abstract landing-page placeholder image
instead of a rainbow gradient, sourced from a license-free provider.

#### Scenario: Card shows image not gradient
- **WHEN** a project card is rendered
- **THEN** it renders an `<img>` with a project-specific image source
- **AND** it does not render a CSS rainbow gradient background

### Requirement: Portfolio card images are accessible and performant
Project card images MUST include descriptive `alt` text, `loading="lazy"` for
below-fold cards, and a fixed `aspect-ratio` with `object-fit: cover` to
prevent layout shift.

#### Scenario: Image has alt and lazy loading
- **WHEN** a project card image is rendered
- **THEN** it has non-empty descriptive `alt` text
- **AND** it has `loading="lazy"`
- **AND** it declares a fixed `aspect-ratio` with `object-fit: cover`

### Requirement: Portfolio cards animate in with scroll-reveal stagger
The 6 project cards MUST fade and rise into view on scroll with a stagger
delay, consistent with the motion used by other landing sections, and respect
reduced-motion preferences.

#### Scenario: Cards reveal on scroll
- **WHEN** the Featured Projects section scrolls into view
- **THEN** each card fades and rises into view
- **AND** cards are staggered in sequence
- **AND** if the user prefers reduced motion, the reveal is near-instant

## MODIFIED Requirements

### Requirement: Featured Projects palette consistency
The Featured Projects section MUST NOT introduce colors outside the brand
palette (no rainbow gradients, no green-tinted background wash).

#### Scenario: No off-palette colors
- **WHEN** the Featured Projects section is rendered
- **THEN** card media uses real on-palette placeholder images
- **AND** the section background uses `var(--bg-dark-end)`
