## ADDED Requirements

### Requirement: HeroBackground renders a build pipeline animation on canvas
The system SHALL render an ambient animated build pipeline visualization on a `<canvas>` element behind the hero section content. The animation SHALL depict a multi-stage build pipeline with flowing particles between nodes.

#### Scenario: Canvas element exists
- **WHEN** `HeroBackground` component mounts and reduced motion is not preferred
- **THEN** a `<canvas>` element SHALL be present in the DOM as a child of the hero `<Section>`

#### Scenario: Canvas is positioned behind content
- **WHEN** the canvas element renders
- **THEN** it SHALL have `position: absolute`, `inset: 0`, `z-index: 0`, and `pointer-events: none`
- **AND** the hero content container SHALL have `position: relative` with `z-index` above the canvas

#### Scenario: Pipeline nodes display
- **WHEN** the canvas animation is running
- **THEN** it SHALL display 3-4 pipeline stage nodes with terminal-style labels (e.g., "lint", "typecheck", "build", "deploy")
- **AND** each node SHALL have a subtle pulsing glow effect

#### Scenario: Particles flow between nodes
- **WHEN** the canvas animation is running
- **THEN** particles SHALL travel along curved paths between consecutive pipeline nodes
- **AND** particles SHALL leave faint motion trails as they move

#### Scenario: Animation loops continuously
- **WHEN** the animation is running
- **THEN** particles SHALL loop back to the first node after reaching the last
- **AND** the full cycle SHALL complete in approximately 8-12 seconds

### Requirement: Reduced motion support
The system SHALL respect the user's `prefers-reduced-motion` preference and render no animation when it is active.

#### Scenario: Reduced motion disables animation
- **WHEN** `prefers-reduced-motion: reduce` is set
- **THEN** no `<canvas>` SHALL be rendered
- **AND** no animation loop SHALL start

#### Scenario: Dynamic preference change
- **WHEN** the user changes their reduced-motion preference while the component is mounted
- **THEN** the component SHALL respond by starting or stopping the animation loop accordingly

### Requirement: Zero side effects on removal
The system SHALL ensure that removing the `HeroBackground` component from the render tree causes no errors, warnings, or layout shifts.

#### Scenario: Component removal
- **WHEN** `HeroBackground` is removed from `Hero.tsx`
- **THEN** the hero section SHALL render identically to its previous state except without the canvas background
- **AND** no console errors or warnings SHALL appear

#### Scenario: Unmount cleanup
- **WHEN** `HeroBackground` unmounts
- **THEN** the `requestAnimationFrame` loop SHALL be cancelled
- **AND** the canvas SHALL be cleared

### Requirement: Opacity and styling
The animation SHALL be rendered at low opacity to serve as ambient background, not compete with hero content.

#### Scenario: Low opacity rendering
- **WHEN** the canvas draws pipeline paths and particles
- **THEN** the paths SHALL have opacity ≤ 0.25
- **AND** the particles SHALL have opacity ≤ 0.6

### Requirement: Responsive layout
The animation SHALL adapt to different screen sizes.

#### Scenario: Mobile layout
- **WHEN** the viewport width is ≤ 768px
- **THEN** the animation SHALL display 2 pipeline nodes instead of 4
- **AND** all nodes SHALL be positioned along a single horizontal line
