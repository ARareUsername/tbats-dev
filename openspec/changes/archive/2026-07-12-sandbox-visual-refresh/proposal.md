## Why

Enhancing the interactive sandbox launcher and storefront elements will improve the user experience by aligning the launcher with standard client website projects (Blog, Shop, Portfolio), correcting light-theme readability bugs, showing pricing in localized Pesos (₱), eliminating external image loading overhead with beautiful abstract fills, and providing full-screen preview functionality via collapsible sidebars.

## What Changes

- **Launcher Profile Swap**: Change the portfolio selection choices in `Portfolio.jsx` from specific business brands to standard categories: *Personal Blog*, *E-Commerce*, and *Portfolio*.
- **Theming & Legibility Refactoring**: Re-style card containers, descriptions, active tags, and the "sandbox ready" status elements in `Portfolio.jsx` to dynamically adapt to Light/Dark mode changes using CSS variables rather than hardcoded white opacities.
- **Peso Currency Conversion**: Convert the pricing estimator starter package on the landing page and the e-commerce sandbox client (cards, grids, item info, cart, and checkout sheets) to display prices in Pesos (₱) instead of dollars ($).
- **Stylized Abstract Image Placeholders**: Replace catalog product images with stylized, theme-appropriate CSS/SVG empty spaces that adapt to the active preset styling.
- **Collapsible Sidebar**: Introduce a minimize square toggle button on the sandbox sidebar to let users slide it off-screen for a full-screen storefront preview.
- **Sidebar Layout Polish**: Refactor the header area of the sidebar to stack the back-to-portfolio link and status badge vertically, preventing text clipping.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `portfolio`: Modify the launcher selection options, fix light-theme readability, and adjust price package thresholds.
- `ecommerce-sampler`: Modify the catalog currency symbol to Pesos (₱), replace product thumbnails with stylized abstract placeholders, and add a sidebar minimize toggle button with mobile-friendly layouts.

## Impact

- `src/components/Portfolio.jsx`: Updated selections and text properties.
- `src/components/InteractiveEstimator.jsx`: Updated Starter package price.
- `src/demo/components/ProductCard/*`: Pricing currency change and image-to-placeholder refactoring.
- `src/demo/components/Cart/*` & `src/demo/components/Checkout/*`: Pricing currency changes.
- `src/demo/components/Layout/DemoSidebar.jsx` & `src/demo/components/Layout/DemoLayout.jsx`: Collapsible sidebar implementation and header layout adjustments.
