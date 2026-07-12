## 1. Cleanup & Setup

- [x] 1.1 Remove `FeaturesGrid.jsx`, `DecompositionDemo.jsx`, and `CodePlayground.jsx` files from `src/components/`.
- [x] 1.2 Update `App.jsx` to remove imports and render references for the deleted components.

## 2. Global Styling & Background

- [x] 2.1 Update `index.css` to use true black (`#000000`) for the background and add a full-screen pseudo-element with a static SVG noise filter at 3% opacity.

## 3. Visual Effects

- [x] 3.1 Build `CustomCursor.jsx` using Framer Motion to create a glowing orb that tracks `useMotionValue` mouse coordinates.
- [x] 3.2 Inject the `CustomCursor` into `App.jsx` and add `@media (pointer: fine)` checks to disable native cursor where appropriate.

## 4. Component Redesign

- [x] 4.1 Refactor "Get a quote" buttons in `Header.jsx`, `Hero.jsx`, and `ConsultationForm.jsx` into sleek "Start a Project" buttons.
- [x] 4.2 Redesign `ClientTimeline.jsx` and `InteractiveEstimator.jsx` (the Services/Process/Pricing areas) into a CSS Grid "Bento Box" layout with Framer Motion `whileHover` states.

## 5. Verification

- [x] 5.1 Run Vite dev server to verify the true black background, noise overlay, custom cursor, and the new bento box layouts.
