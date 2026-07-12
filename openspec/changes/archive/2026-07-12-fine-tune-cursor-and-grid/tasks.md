## 1. Custom Cursor Tuning

- [x] 1.1 Pass the active `theme` prop from `App.jsx` to `CustomCursor`
- [x] 1.2 Modify `scale(2)` to `scale(1.4)` inside `CustomCursor.jsx`'s position handler
- [x] 1.3 Update cursor style properties (background, border, mixBlendMode, boxShadow) inside `CustomCursor.jsx` to adapt dynamically when `theme === 'light'`

## 2. Section Layout & Separation

- [x] 2.1 Refactor `ServicesList.jsx` to change its section background styling to transparent
- [x] 2.2 Refactor `ClientTimeline.jsx` to change its section background styling to transparent
- [x] 2.3 Define the `.section-divider` CSS class in `index.css` with a horizontal linear-gradient fade
- [x] 2.4 Create a new React component at `tbats-landing-page/src/components/Team.jsx` rendering profiles for the 5 developers (Karl, Emmanuel, Mark, Daile, Kyle) in a responsive asymmetric grid layout
- [x] 2.5 Import `Team` in `App.jsx` and render it mapped to the `#about` anchor
- [x] 2.6 Render `.section-divider` divs in `App.jsx` between layout sections to establish distinct visual bounds

## 3. Pricing Jargon Translation

- [x] 3.1 Refactor `InteractiveEstimator.jsx` package features to translate technical terms (CMS, SEO, pages) into layman business benefits

## 4. Grid Contrast & Validation

- [x] 4.1 Define a `--grid-dot-color` variable under `:root` and `.theme-light` in `index.css` to support high-contrast theme-specific grid colors
- [x] 4.2 Update `.dot-matrix-grid` styling in `index.css` to use the new `--grid-dot-color` variable and elevate container opacity to `0.45`
- [x] 4.3 Run linter checks and local builds to verify code correctness, layout spacing, and cursor visibility in Light Mode
