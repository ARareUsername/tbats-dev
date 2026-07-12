## 1. Navigation & Typography swapper removal

- [x] 1.1 Remove the `fontMode` / `setFontMode` state and related `useEffect` bindings from `App.jsx`
- [x] 1.2 Refactor `Header.jsx` to remove the typography font selector slider container from the desktop navigation layout
- [x] 1.3 Add a working `#about` nav link pointing to the Team section in `Header.jsx` desktop links
- [x] 1.4 Remove the typography font selectors from the mobile nav menu and add the working mobile `#about` link in `Header.jsx`

## 2. Section & Colors polishing

- [x] 2.1 Refactor `FAQAccordion.jsx` to set its section wrapper background to transparent and question buttons color to `var(--text-primary)`
- [x] 2.2 Update `InteractiveEstimator.jsx` pricing cards to include Framer Motion tap spring bounce states (`whileTap` and `transition`)

## 3. CSS Tokens & Spotlight Grid adjustments

- [x] 3.1 Update `--font-heading` to `var(--font-sans-display)` under `:root` and delete the `body.theme-sans` block in `index.css`
- [x] 3.2 Define `--gradient-text` variables under `:root` and `body.theme-light` to transition into emerald green, and make `.text-gradient` reference it in `index.css`
- [x] 3.3 Boost `--grid-dot-color` opacity values under `:root` and `body.theme-light` in `index.css`
- [x] 3.4 Update `.dot-matrix-grid` masking parameters to simplified coordinates, set opacity to `1.0`, and specify repeat parameters in `index.css`
- [x] 3.5 Run linter checks and local builds to verify code correctness, layout navigation, and grid visibility
