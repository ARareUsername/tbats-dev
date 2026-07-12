## 1. UI Polish & Anchors

- [x] 1.1 Add direct navigation links to the Sandbox section (`#portfolio`) inside `src/components/Header.jsx` for desktop and mobile menus
- [x] 1.2 Lock the font family of `.demo-sidebar`, its inner buttons, and general controls to standard sans-serif (`var(--font-sans) !important`) in `demo.css`

## 2. Mock Databases Creation

- [x] 2.1 Create `src/demo/data/articles.js` with mock articles data (Design/Technology categories, dates, excerpts, read times)
- [x] 2.2 Create `src/demo/data/portfolioItems.js` with mock project case studies data (Branding/Development categories, descriptions, clients, years)

## 3. Sandbox Polymorphism & Category Filters

- [x] 3.1 Refactor CategoryBar variants to receive a custom categories array as a prop rather than hardcoding E-Commerce categories
- [x] 3.2 Refactor `EcommerceSamplerPage.jsx` to dynamically load active items list and categories list based on `projectId` route parameter
- [x] 3.3 Update all 5 ProductCard variants (Minimal, Luxury, Editorial, Bold, Playful) to dynamically format metadata, subtext, and action buttons depending on whether it is E-Commerce, Blog, or Portfolio

## 4. Build Verification

- [x] 4.1 Run build checks (`npm run build`) to ensure zero bundling errors
