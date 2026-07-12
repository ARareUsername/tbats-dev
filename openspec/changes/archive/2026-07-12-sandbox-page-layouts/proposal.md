## Why

To expand the landing page website categories, we will introduce dynamic layouts inside the sandbox for Blog and Portfolio profiles (showing mock articles and projects themed by the active preset), stabilize the sidebar typography styles so they do not inherit active preset font variations, and include a direct navigation link to the Sandbox Control Deck on the landing page header.

## What Changes

- **Sandbox Layout Variations**: Modify the sandbox rendering code to display a blog catalog (mock articles with dates and excerpts) for `personal-blog` routes, a creative showcase grid (mock projects with clients and years) for `portfolio` routes, and keep standard storefront items for `e-commerce` routes.
- **Header Anchor Navigation**: Add a direct **"Sandbox"** link in `Header.jsx` pointing to the `#portfolio` launcher console section for desktop and mobile menus.
- **Sidebar Typography Lock**: Fix the font style inside `demo.css` for `.demo-sidebar` using a stable sans-serif override (`var(--font-sans) !important`), preventing it from updating when presets modify body typography.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `portfolio`: Add landing page navbar link to the launcher section.
- `ecommerce-sampler`: Modify the dynamic card and grid rendering to support Blog and Portfolio website types, and freeze the sidebar font styles.

## Impact

- `src/components/Header.jsx`: Nav link additions.
- `src/demo/demo.css`: Sidebar typography overrides.
- `src/pages/EcommerceSamplerPage.jsx`: Dynamic item loading and CategoryBar properties.
- `src/demo/components/ProductCard/*`: Polymorphic item card formatting supporting Blogs, Shops, and Portfolios.
