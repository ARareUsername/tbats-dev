## 1. Setup

- [x] 1.1 Install `framer-motion` package in the `tbats-landing-page` directory

## 2. Background Updates

- [x] 2.1 Update `index.css` to replace `--bg-dark` and `--bg-dark-end` with a deep grey radial vignette gradient

## 2.5. Build Missing Components

- [x] 2.5.1 Build `FeaturesGrid.jsx` displaying glassmorphic T-B-A-T-S informational cards
- [x] 2.5.2 Build `CodePlayground.jsx` featuring toggleable tabs for Python and R code with a copy-to-clipboard feature
- [x] 2.5.3 Build `DecompositionDemo.jsx` with slider inputs and real-time SVG charting paths for seasonality, trend, and combined forecast
- [x] 2.5.4 Update `App.jsx` to import and render these new components

## 3. Framer Motion Animations

- [x] 3.1 Wrap root sections in `App.jsx` with Framer Motion `motion` components and `initial`/`whileInView` properties for scroll reveals
- [x] 3.2 Update `FeaturesGrid.jsx` to use staggered Framer Motion children for the component cards
- [x] 3.3 Add parallax or smooth entry effects to the title and subtitle in `App.jsx` and `DecompositionDemo.jsx`

## 4. Mobile Refinements

- [x] 4.1 Update `@media (max-width: 900px)` rules in `index.css` or inline styles for `CodePlayground.jsx` to make tabs wrap or horizontally scrollable
- [x] 4.2 Ensure SVG charts in `DecompositionDemo.jsx` scale appropriately for mobile viewports without overflowing
- [x] 4.3 Verify touch targets (buttons, sliders) have minimum 44px height and adequate spacing

## 5. Verification

- [x] 5.1 Run Vite dev server and verify the vignette background, scroll animations, and mobile responsiveness
