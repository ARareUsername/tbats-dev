## 1. Setup & Routing

- [x] 1.1 Install react-router-dom dependency
- [x] 1.2 Refactor App.jsx: wrap with BrowserRouter, define Routes
- [x] 1.3 Extract main landing page to src/pages/MainLandingPage.jsx
- [x] 1.4 Create src/pages/EcommerceSamplerPage.jsx (lazy-loaded)
- [x] 1.5 Add route: `/` → MainLandingPage, `/demo/:projectId` → EcommerceSamplerPage
- [x] 1.6 Update index.css: ensure no global styles conflict with demo route

## 2. Preset System Foundation

- [x] 2.1 Create src/demo/presets/registry.js with 5 preset definitions (minimal, dark-luxury, editorial, bold, playful)
- [x] 2.2 Each preset: id, label, cssVars object, components mapping
- [x] 2.3 Create src/demo/hooks/usePreset.js: reads URL preset, provides changePreset fn
- [x] 2.4 Create src/demo/context/PresetContext.jsx: provides active preset + setter
- [x] 2.5 Extend index.css: add CSS variable definitions for all preset tokens (colors, fonts, spacing, radius, shadows, transitions, layout tokens)
- [x] 2.6 Create src/demo/components/PresetProvider.jsx: wraps demo, applies `[data-preset]` + CSS vars on change

## 3. Demo Layout & Sidebar

- [x] 3.1 Create src/demo/components/Layout/DemoLayout.jsx: sidebar + viewport structure
- [x] 3.2 Create src/demo/components/Layout/DemoSidebar.jsx: preset list, active highlight, project context header
- [x] 3.3 Create src/demo/components/Layout/DemoHeader.jsx: hamburger (mobile), cart icon with badge, back-to-portfolio link
- [x] 3.4 Implement mobile drawer: state, overlay, slide animation, body scroll lock
- [x] 3.5 Responsive CSS: fixed sidebar ≥1024px, drawer <1024px
- [x] 3.6 Sidebar preset click: calls changePreset, updates URL via useSearchParams

## 4. Component Variants (Phase 1: Minimal Preset Complete)

### 4.1 Header Variants
- [x] 4.1.1 Create src/demo/components/Header/HeaderMinimal.jsx
- [x] 4.1.2 Create HeaderLuxury, HeaderEditorial, HeaderBold, HeaderPlayful
- [x] 4.1.3 Each: logo, nav, cart icon, preset-aware styling

### 4.2 Hero Variants
- [x] 4.2.1 Create src/demo/components/Hero/HeroMinimal.jsx (centered, simple)
- [x] 4.2.2 Create HeroLuxury, HeroEditorial, HeroBold, HeroPlayful

### 4.3 CategoryBar
- [x] 4.3.1 Create src/demo/components/CategoryBar/CategoryBarMinimal.jsx (horizontal scroll)
- [x] 4.3.2 Create CategoryBar variants for other presets
- [x] 4.3.3 Category filter logic: filter products by category, highlight active

### 4.4 ProductGrid Variants
- [x] 4.4.1 Create src/demo/components/ProductGrid/ProductGridMasonry.jsx (CSS columns)
- [x] 4.4.2 Create ProductGridGrid.jsx (uniform grid)
- [x] 4.4.3 Create ProductGridList.jsx (single column)
- [x] 4.4.4 Create ProductGridCarousel.jsx (horizontal scroll)

### 4.5 ProductCard Variants
- [x] 4.5.1 Create src/demo/components/ProductCard/ProductCardMinimal.jsx
- [x] 4.5.2 Create ProductCardLuxury, ProductCardEditorial, ProductCardBold, ProductCardPlayful
- [x] 4.5.3 Each: image, name, price, variant selectors, add-to-cart, hover effect per preset

### 4.6 Footer Variants
- [x] 4.6.1 Create src/demo/components/Footer/FooterMinimal.jsx
- [x] 4.6.2 Create FooterLuxury, FooterEditorial, FooterBold, FooterPlayful

## 5. Product Data & Catalog

- [x] 5.1 Create src/demo/data/products.js: 20 products, 6 categories, variants, images (Unsplash URLs)
- [x] 5.2 Create src/demo/data/categories.js: category list with slugs
- [x] 5.3 Create src/demo/data/projectPresets.js: portfolio project → default preset mapping
- [x] 5.4 Product images: use optimized Unsplash URLs with w=400&h=500&fit=crop

## 6. Cart & Checkout System

- [x] 6.1 Create src/demo/context/CartContext.jsx: useReducer, actions (ADD, UPDATE_QTY, REMOVE, CLEAR, TOGGLE_DRAWER)
- [x] 6.2 Create src/demo/components/Cart/CartDrawer.jsx: slide-in panel, item list, quantity controls, subtotal, checkout button
- [x] 6.3 Create src/demo/components/Cart/CartItem.jsx: displays product, variants, qty, line total, remove
- [x] 6.4 Create src/demo/components/Checkout/CheckoutModal.jsx: 3-step stepper (Shipping → Payment → Confirm)
- [x] 6.5 Create CheckoutStepShipping.jsx: form with validation (name, email, address, city, zip, country, phone)
- [x] 6.6 Create CheckoutStepPayment.jsx: mock credit card / PayPal radio, mock card input
- [x] 6.7 Create CheckoutStepConfirm.jsx: order summary, place order button, loading state
- [x] 6.8 Create src/demo/components/Checkout/CheckoutSuccess.jsx: order number, email confirmation, continue shopping
- [x] 6.9 Create src/demo/components/UI/Toaster.jsx: toast notifications for add-to-cart, checkout success
- [x] 6.10 Cart persists across preset switches (context at Layout level, not remounted)

## 7. EcommerceSamplerPage Assembly

- [x] 7.1 Wire EcommerceSamplerPage: PresetProvider → CartProvider → DemoLayout
- [x] 7.2 Read projectId from route params, lookup default preset from projectPresets
- [x] 7.3 Initialize preset from URL search param or project default
- [x] 7.4 Render dynamic components based on active preset's component map
- [x] 7.5 Pass filtered products to ProductGrid (by active category)
- [x] 7.6 SEO meta tags: title, description, Open Graph per project

## 8. Portfolio Integration

- [x] 8.1 Update src/components/Portfolio.jsx: add "View Live Demo" button/link on each card
- [x] 8.2 Links: `/demo/aether-finance?preset=minimal`, `/demo/kroma-studio?preset=editorial`, `/demo/novus-retail?preset=dark-luxury`
- [x] 8.3 Ensure Portfolio project IDs match projectPresets mapping keys

## 9. Global Feature Route Guards

- [x] 9.1 Create src/components/GlobalFeatures.jsx: uses useLocation, conditionally renders CustomCursor + dot-matrix-grid
- [x] 9.2 Hide CustomCursor on `/demo/*` routes
- [x] 9.3 Hide dot-matrix-grid on `/demo/*` routes
- [x] 9.4 Verify main site cursor + dot-matrix work normally on `/`
- [x] 9.5 Verify no layout shift when navigating between routes

## 10. Preset-Specific Backgrounds

- [x] 10.1 Add background CSS variables to each preset in registry
- [x] 10.2 Minimal: clean white/light gray, subtle noise
- [x] 10.3 Dark Luxury: near-black, gold geometric pattern
- [x] 10.4 Editorial: off-white, paper texture, asymmetric accent
- [x] 10.5 Bold: high contrast, large geometric shapes
- [x] 10.6 Playful: soft pastel gradient, floating organic shapes
- [x] 10.7 Apply via `[data-preset]` scoped background in demo root

## 11. Polish & QA

- [x] 11.1 Framer Motion AnimatePresent for preset component transitions
- [x] 11.2 Add loading skeleton for product grid
- [x] 11.3 Form validation: inline errors, focus management, accessible labels
- [x] 11.4 Keyboard navigation: sidebar, drawer, modal, form fields
- [x] 11.5 Mobile testing: sidebar drawer, product grid, checkout modal, cart drawer
- [x] 11.6 Cross-preset cart persistence verification
- [x] 11.7 Shareable URL test: copy `/demo/novus-retail?preset=dark-luxury`, open in new tab
- [x] 11.8 Performance: lazy load EcommerceSamplerPage, optimize images, check bundle size
- [x] 11.9 Verify main landing page unchanged: animations, cursor, dot-matrix, theme toggle
- [x] 11.10 Build production: `npm run build`, verify no errors, preview