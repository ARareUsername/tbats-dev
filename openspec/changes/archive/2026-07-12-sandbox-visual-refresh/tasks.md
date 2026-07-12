## 1. Landing Page Refinements & Pricing

- [x] 1.1 Update `Portfolio.jsx` selection options from specific business brands to standard categories: *Personal Blog*, *E-Commerce*, and *Portfolio*
- [x] 1.2 Replace hardcoded opacities and colors in `Portfolio.jsx` with theme-adaptive styles (fixing Light Mode legibility)
- [x] 1.3 Update Starter package price in `InteractiveEstimator.jsx` to `₱12,000` (from `₱29,000`)
- [x] 1.4 Update e-commerce route registrations in `App.jsx` and `projectPresets.js` to map to the new categories

## 2. Localized Pricing in Pesos (₱)

- [x] 2.1 Convert currency symbol from `$` to `₱` in all ProductCard variants (Minimal, Luxury, Editorial, Bold, Playful)
- [x] 2.2 Convert currency symbol from `$` to `₱` in CartItem, CartDrawer, and CheckoutStepConfirm
- [x] 2.3 Scale numeric product prices in `products.js` to match realistic Peso amounts

## 3. Abstract Image Placeholders

- [x] 3.1 Implement a theme-adaptive `<ProductPlaceholder>` CSS card background system in place of Unsplash image loads
- [x] 3.2 Clean up unused image parameters and references in the product card components

## 4. Collapsible Sidebar & Header Polish

- [x] 4.1 Refactor sidebar header in `DemoSidebar.jsx` to stack the exit/back link and badge vertically, preventing clipping
- [x] 4.2 Add minimize state toggler `[ < ]` and expand button `[ > ]` triggers in `DemoSidebar.jsx` and `DemoLayout.jsx`
- [x] 4.3 Add CSS slide transition variables and styles to `demo.css` to collapse/minimize the sidebar panel smoothly
- [x] 4.4 Run build check (`npm run build`) to ensure zero bundling errors
