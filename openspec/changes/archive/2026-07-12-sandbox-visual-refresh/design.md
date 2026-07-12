## Context

To enhance the visual integration of the landing page and sandbox preview elements, we need a cohesive update addressing light-theme readability, localized currencies, static abstract product placeholders, and collapsible control columns.

## Goals / Non-Goals

**Goals:**
- Update Portfolio launcher categories to *Personal Blog*, *E-Commerce*, and *Portfolio* routes.
- Address light mode text legibility on the Control Deck widget.
- Convert estimators and the e-commerce client to Peso (₱) pricing, scaling numeric product prices accordingly.
- Swap external Unsplash image loads for preset-styled CSS/SVG placeholder grids.
- Implement collapsible sidebar columns with smooth off-screen slide-outs.
- Correct layout wrapping inside the sidebar header to prevent text clipping.

**Non-Goals:**
- Creating actual content pages for Blog or Portfolio (they will map to route placeholders for now).

## Decisions

- **Decision 1: Scoped Theme-Adaptive Variables**
  - *Approach*: Refactor hardcoded translucents (`rgba(255,255,255,0.4)`) inside `Portfolio.jsx` to use theme variables (`var(--text-secondary)`).
  - *Rationale*: Guarantees high-contrast readability regardless of the system background theme.
- **Decision 2: Global Peso Currency Formatting**
  - *Approach*: Replace the dollar symbol `$` with the Peso symbol `₱` globally in storefront cards, totals, and checkout layers.
  - *Rationale*: Creates a localized commercial catalog that correlates with the agency package pricing.
- **Decision 3: Abstract CSS/SVG Card Placeholders**
  - *Approach*: Create a reusable product card placeholder component that uses pure CSS variables to draw custom geometric visual shapes (lines, gradients, circular accents) mapped to the active preset style.
  - *Rationale*: Eliminates third-party image load latency and creates a highly cohesive visual language.
- **Decision 4: Flex-Column Sidebar Headers & Collapsed Layout States**
  - *Approach*: Set up state in the layout provider (`isSidebarMinimized`) that triggers sidebar off-screen sliding and sets main content width to 100% with a slide animation. Stack sidebar headers vertically to prevent clipping.
  - *Rationale*: Gives users a clean full-screen catalog viewing canvas while retaining simple expand buttons.

## Risks / Trade-offs

- **[Risk]** Scaling prices in Pesos might throw off estimated cart tax or totals math.
  - *Mitigation*: Ensure all lines update multipliers (tax, shipping limits) to adapt to expanded values (e.g. free shipping limit moves from $150 to ₱8,000).
