## Why

The current landing page background is a stark black (#000000) which makes the glassmorphic cards lack depth and separation. Additionally, the page lacks captivating interactive elements to engage users. We need to upgrade the design to a more premium feel with a grey vignette background, smooth physics-based animations (via Framer Motion), and refine the mobile experience to ensure all components are accessible on smaller screens.

## What Changes

- Replace the solid black background with a deep grey radial vignette gradient.
- Add Framer Motion to the project for declarative, physics-based scroll animations.
- Implement parallax effects and staggered reveals for page sections.
- Refine mobile compatibility (e.g., touch target sizes, adjusting complex layouts like the code playground and SVG charts for small screens).

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `landing-page`: Update requirements to include Framer Motion animations, a grey vignette background, and specific mobile responsiveness refinements.

## Impact

- Project dependencies: will add `framer-motion` package.
- Root CSS: `index.css` for background changes.
- React components: `App.jsx`, `FeaturesGrid.jsx`, `CodePlayground.jsx`, `DecompositionDemo.jsx` to integrate animation wrappers and mobile styling adjustments.
