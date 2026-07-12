## Why

The current TBATS portfolio section displays static project cards with limited interactivity. Potential clients cannot experience the team's full e-commerce capabilities — responsive layouts, theme systems, cart/checkout flows, and design versatility. An interactive e-commerce sampler page, accessible from each portfolio project with a context-appropriate default theme, demonstrates technical depth and design range in a way static screenshots cannot. This directly supports conversion by letting prospects "test drive" the team's skills before engaging.

## What Changes

- **New Route**: `/demo/:projectId` — dedicated e-commerce sampler page with isolated theming
- **Portfolio Integration**: Each portfolio card gains a "View Live Demo" link navigating to `/demo/:id?preset=<default>`
- **Preset System**: 5 distinct e-commerce design presets (Minimal, Dark Luxury, Editorial, Bold/Expressive, Playful/Soft) with per-preset component variants
- **Theme Isolation**: Custom cursor and dot-matrix background disabled on demo page; demo uses its own theme system via CSS variables scoped to `[data-preset]`
- **Mobile Sidebar**: Hamburger-triggered drawer (not fixed sidebar) for preset switching on mobile
- **Cart/Checkout Flow**: Functional cart drawer + checkout modal with form validation and success state
- **URL State**: Active preset persisted in query params (`?preset=dark-luxury`) for shareable links
- **Product Data**: 20+ realistic products across 6 categories with images, variants, pricing

## Capabilities

### New Capabilities
- `ecommerce-sampler`: Complete interactive e-commerce demo page with preset switching, product catalog, cart, and checkout
- `preset-system`: Theme/design preset registry with component variant mapping and CSS variable injection
- `cart-checkout`: Client-side cart state (Context + useReducer) with drawer UI and multi-step checkout modal

### Modified Capabilities
- `portfolio`: Portfolio cards now include "View Live Demo" action linking to sampler with project-specific default preset
- `custom-cursor`: Disabled on `/demo/*` routes (main-site only feature)
- `dot-matrix-grid`: Disabled on `/demo/*` routes (main-site only feature)

## Impact

- **Dependencies**: Adds `react-router-dom` (routing), no other new dependencies
- **Routes**: New `/demo/:projectId` route in `App.jsx` with lazy-loaded demo bundle
- **Components**: New `src/pages/EcommerceSampler/`, `src/components/EcommerceDemo/`, `src/context/CartContext.jsx`
- **Styling**: Extended `index.css` with preset CSS variable system and component variant utilities
- **Data**: New `src/data/` folder (products, categories, presets, project-preset mapping)
- **Portfolio**: `Portfolio.jsx` updated with demo links and default preset mapping
- **App**: `App.jsx` routes updated, cursor/dot-matrix conditional rendering