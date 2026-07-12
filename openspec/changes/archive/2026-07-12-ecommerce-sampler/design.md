## Context

The TBATS landing page currently showcases agency capabilities through static portfolio cards (Aether Finance, Kroma Studio, Novus Retail). This change adds an interactive e-commerce sampler that visitors can access from portfolio projects. The sampler demonstrates the team's ability to build production-quality e-commerce experiences with multiple design personalities.

**Current State:**
- Single-page React + Vite app (`tbats-landing-page/`)
- Framer Motion for scroll animations
- Custom cursor + dot-matrix grid background (global in `App.jsx`)
- Dark/Light theme with CSS variables in `index.css`
- No routing (SPA with anchor links)
- EmailJS for contact form

**Constraints:**
- Must not break existing landing page
- Custom cursor and dot-matrix must disable on sampler routes
- Sampler must feel like a distinct "mode" while sharing design system tokens
- Mobile-first responsive design required
- Zero new external dependencies beyond `react-router-dom`

---

## Goals / Non-Goals

**Goals:**
1. Add client-side routing with `react-router-dom` v6
2. Create `/demo/:projectId` route for e-commerce sampler
3. Build 5 preset personalities (Minimal, Dark Luxury, Editorial, Bold, Playful)
4. Each preset = complete theme + component variant set
5. Full cart drawer + multi-step checkout flow (mock)
6. Preset switching via fixed left sidebar (desktop) / drawer (mobile)
7. URL-synced preset state (`?preset=dark-luxury`) for shareability
8. Portfolio cards link to sampler with project-specific default preset
9. Global custom cursor + dot-matrix disable on sampler routes
10. Preset-specific backgrounds replace dot-matrix on sampler

**Non-Goals:**
- Real payment processing (mock only)
- Backend API / database
- User accounts / order history
- SSR / SSG (remains SPA)
- Visual regression testing setup
- Admin panel for preset management

---

## Decisions

### 1. Routing: React Router v6 with Hash Fallback
**Decision:** Use `react-router-dom` v6 with `BrowserRouter`. No hash fallback.
**Rationale:** Modern hosting (Vercel, Netlify) supports SPA rewrites. Cleaner URLs. Hash router adds `#/` which looks less professional for a demo.
**Alternative considered:** `wouter` (smaller) — rejected because team knows React Router, better DevTools, nested routes support for future.

### 2. Preset System: CSS Variables + Component Composition
**Decision:** Each preset defines CSS variable overrides + component variant map. Preset applied by setting `[data-preset="X"]` on demo root.
**Rationale:**
- CSS variables enable instant theme switch without re-render
- Component variants allow structural differences (masonry vs grid, editorial vs centered hero)
- No CSS-in-JS runtime; works with existing `index.css` token system
- Easy to add new presets: add entry to registry, create component variants

**Preset Registry Structure:**
```js
// src/demo/presets/registry.js
export const presets = {
  minimal: {
    id: 'minimal',
    label: 'Minimal',
    cssVars: { /* --color-*, --font-*, --radius, --spacing */ },
    components: {
      Header: 'HeaderMinimal',
      Hero: 'HeroMinimal',
      ProductGrid: 'ProductGridMasonry',
      ProductCard: 'ProductCardMinimal',
      Footer: 'FooterMinimal',
    },
  },
  // ...
}
```

**CSS Variable Injection:**
```jsx
// In EcommerceDemo root
useEffect(() => {
  const root = document.documentElement;
  Object.entries(preset.cssVars).forEach(([key, val]) => 
    root.style.setProperty(key, val)
  );
  root.setAttribute('data-preset', preset.id);
}, [preset]);
```

### 3. Component Variants: Separate Files per Variant
**Decision:** Each component variant is its own file (e.g., `HeaderMinimal.jsx`, `HeaderLuxury.jsx`) not a single component with `variant` prop.
**Rationale:**
- Cleaner separation: each variant can have completely different structure
- Easier to showcase "we build different architectures" to clients
- Smaller bundle per preset if we code-split later
- Matches agency portfolio narrative: "we don't just swap colors, we restructure"

**File Structure:**
```
src/demo/components/
├── Header/
│   ├── HeaderMinimal.jsx
│   ├── HeaderLuxury.jsx
│   ├── HeaderEditorial.jsx
│   ├── HeaderBold.jsx
│   └── HeaderPlayful.jsx
├── Hero/
│   ├── HeroMinimal.jsx
│   └── ...
├── ProductGrid/
│   ├── ProductGridMasonry.jsx
│   ├── ProductGridGrid.jsx
│   └── ProductGridList.jsx
├── ProductCard/
│   ├── ProductCardMinimal.jsx
│   └── ...
└── Footer/
    └── ...
```

### 4. Sidebar: Fixed Desktop, Drawer Mobile
**Decision:** 280px fixed left sidebar on ≥1024px. Mobile: hamburger in demo header → slide-in drawer from left.
**Rationale:**
- Desktop: always visible for easy preset switching during demo
- Mobile: 280px fixed would consume too much viewport; drawer is standard pattern
- Hamburger in demo header (not main site header) avoids confusion

**Responsive Breakpoint:**
```css
/* Desktop: sidebar + viewport */
@media (min-width: 1024px) {
  .demo-layout { display: flex; }
  .demo-sidebar { width: 280px; flex-shrink: 0; position: sticky; top: 0; height: 100vh; }
  .demo-viewport { flex: 1; overflow-y: auto; }
}

/* Mobile: full width, drawer for sidebar */
@media (max-width: 1023px) {
  .demo-sidebar { position: fixed; left: -280px; width: 280px; height: 100vh; transition: left 0.3s; z-index: 50; }
  .demo-sidebar.open { left: 0; }
  .demo-overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40; }
  .demo-overlay.open { display: block; }
}
```

### 5. URL Sync: useSearchParams for Preset
**Decision:** Preset stored in URL search params (`?preset=dark-luxury`). Synced via `useSearchParams` from React Router.
**Rationale:**
- Shareable links: stakeholders can send `/demo/novus-retail?preset=editorial`
- Browser back/forward works naturally
- No custom history management needed
- SSR-compatible if we ever migrate

**Implementation:**
```jsx
function EcommerceSamplerPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const presetId = searchParams.get('preset') || 'minimal';
  
  const changePreset = (id) => {
    setSearchParams({ preset: id }, { replace: true });
  };
  
  return <EcommerceDemo presetId={presetId} onPresetChange={changePreset} />;
}
```

### 6. Cart State: React Context + useReducer
**Decision:** `CartContext` with `useReducer` for cart state. No external state library.
**Rationale:**
- Zero dependencies
- Simple state shape: `{ items: [], isOpen: false }`
- Actions: `ADD_ITEM`, `UPDATE_QUANTITY`, `REMOVE_ITEM`, `CLEAR`, `TOGGLE_DRAWER`
- Persists in memory only (session), which is fine for demo

**Context Structure:**
```jsx
const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], isOpen: false });
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
      <CartDrawer />
      <CheckoutModal />
      <Toaster />
    </CartContext.Provider>
  );
}
```

### 7. Product Data: Static JSON Module
**Decision:** Products in `src/demo/data/products.js` as ES module exporting array of 20 products with categories, variants, images.
**Rationale:**
- No CMS needed for demo
- TypeScript-friendly (can add JSDoc types)
- Easy to swap for API later
- Images from placeholder service (Unsplash Source or generated)

**Product Schema:**
```js
{
  id: 'prod-1',
  name: 'Merino Wool Sweater',
  category: 'knitwear',
  price: 180,
  images: ['https://images.unsplash.com/.../1.jpg', '.../2.jpg'],
  variants: {
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['Oat', 'Charcoal', 'Navy', 'Forest']
  },
  description: '...',
  inStock: true
}
```

### 8. Masonry Grid: CSS Columns (Zero Dep)
**Decision:** Use CSS `columns` for masonry layout in `ProductGridMasonry`.
**Rationale:**
- Zero JavaScript layout library
- Performant, native browser layout
- `break-inside: avoid` on cards prevents splitting
- Framer Motion `AnimatePresence` for enter/exit animations

```css
.product-grid-masonry {
  columns: 1 280px;
  gap: 1.5rem;
}
@media (min-width: 768px) { columns: 2; }
@media (min-width: 1200px) { columns: 3; }
@media (min-width: 1600px) { columns: 4; }

.product-card { break-inside: avoid; }
```

### 9. Global Feature Guards: Route-Based Conditional Rendering
**Decision:** Custom cursor and dot-matrix wrapped in `<Routes>`-aware component that checks `useLocation()`.
**Rationale:**
- Clean separation: demo page doesn't need to know about main site features
- No prop drilling through App.jsx
- Easy to add more route-specific features later

```jsx
function GlobalFeatures() {
  const location = useLocation();
  const isDemo = location.pathname.startsWith('/demo');
  
  return (
    <>
      {!isDemo && <CustomCursor />}
      {!isDemo && <div className="dot-matrix-grid" />}
    </>
  );
}
```

### 10. Checkout: Modal with Stepper
**Decision:** Checkout as modal (not full page) with 3 steps: Shipping → Payment → Confirmation.
**Rationale:**
- Keeps user in context of demo
- Modal matches premium UX pattern
- Easier to implement than multi-page flow
- Stepper component reusable

**Step Data:**
```js
const steps = [
  { id: 'shipping', label: 'Shipping', fields: [...] },
  { id: 'payment', label: 'Payment', fields: [...] },
  { id: 'confirm', label: 'Confirm', fields: [] },
];
```

---

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|------------|
| Bundle size increase (router + demo components) | Medium | Code-split demo route with `React.lazy`; main page unchanged |
| CSS variable collision between main site + presets | High | Scoped `[data-preset]` on demo root; main site uses `:root` only |
| Preset switch causes layout shift (diff component structure) | Medium | Use `AnimatePresence` exit animations; reserve space for sidebar |
| Mobile sidebar drawer conflicts with main site mobile nav | Medium | Demo has own header with hamburger; main site header hidden on demo route |
| Custom cursor cleanup on route change | Low | `useEffect` cleanup in `CustomCursor` + route guard unmounts it |
| Framer Motion animations on preset switch (diff components) | Medium | `AnimatePresence mode="wait"` + keyed components by preset ID |
| Image loading performance (20 products × presets) | Medium | Use `loading="lazy"`, proper `sizes`, WebP from Unsplash |
| Checkout form accessibility | High | Semantic `<form>`, labels, `aria-describedby` for errors, focus management |

---

## Migration Plan

1. **Add dependency:** `npm i react-router-dom`
2. **Refactor `App.jsx`:** Wrap with `BrowserRouter`, define routes, extract main page to `MainLandingPage.jsx`
3. **Create demo route structure:** `EcommerceSamplerPage.jsx` + layout components
4. **Build preset registry + CSS variable system**
5. **Implement 5 preset component variants** (start with Minimal fully)
6. **Build product data + cart/checkout context**
7. **Wire portfolio links to demo route with preset params**
8. **Add route guards for custom cursor + dot-matrix**
9. **Mobile responsive QA + preset switch animation polish**
10. **Verify: main site unaffected, demo shareable, cart persists preset switch**

**Rollback:** Revert `App.jsx` to single-page, remove `react-router-dom`, delete `src/demo/` folder. No database migrations.

---

## Open Questions

1. **Preset-specific fonts:** Should we load Playfair Display / Outfit only when needed (preload on preset switch) or load all upfront? Current `index.css` loads both. → **Decision: Load all upfront** (already in main site, negligible cost).

2. **Demo header:** Should sampler have its own header (with cart icon, back link) or reuse main site header (minus cursor/dot-matrix)? → **Decision: Own header** — cleaner separation, includes cart badge, preset-aware styling.

3. **Analytics:** Track preset switches? → **Decision: No** for MVP. Can add `data-layer` events later.

4. **SEO for demo pages:** Add meta tags? → **Decision: Yes**, basic Open Graph tags per project for social sharing.

5. **Preset persistence:** localStorage fallback if URL param missing? → **Decision: URL only** — simpler, shareable. If no param, default to `minimal`.