## Context

We need to implement localized Philippine Peso pricing plans (Starter, Growth, Merchant), update standard feature lists, and create an engaging layout for the pricing route. Additionally, we are polishing the header's navigation layout to feature centered descriptive dropdowns, scroll-floating headers, sans-display hero titles, balanced floats, and a Philippine landscape bento grid background.

## Goals / Non-Goals

**Goals:**
- Revert the Hero header font to sans display (`var(--font-sans-display)`).
- Reposition floating cards diagonally and update traffic surge count to `+67%`.
- Switch services bento backdrop to the Philippines map asset.
- Implement centered descriptive navbar dropdown menus.
- Build a scroll listener to float and round the header on scroll.
- Redesign the pricing route with PHP subscription cards, glowing Growth card, cancellation policy, Need Something Different CTA, inclusions, and a bottom slogan block.
- Update the footer to display separate Services and Company link grids.

**Non-Goals:**
- Modifying e-commerce checkout paths.

## Decisions

### 1. Typography & Visual Position Updates
- **Hero Title**: We will set `font-family: var(--font-heading)` in `Hero.module.css` (which is Outfit).
- **Repositioning Overlapping Cards**: 
  - Card 1 (Google): `top: 15%; left: 0;`
  - Card 2 (Traffic): `top: 40%; right: 0; left: auto;`
  - Card 3 (Sales): `bottom: 15%; left: 8%;`
  This creates a balanced diagonal staircase layout.

### 2. Scroll-Detached Navbar
- We will add a scroll listener in `Header.tsx` to monitor `window.scrollY`. When `scrollY > 50`, we set `isScrolled` to `true`.
- We will add a `.scrolled` class inside `Header.module.css` that transitions `top: 1.5rem`, `left: 50%`, `transform: translateX(-50%)`, `width: calc(100% - 2rem)`, `max-width: 1200px`, and applies `border-radius: 20px`, a dark translucent background with a border, and a shadow.

### 3. Header Dropdowns with Descriptions
- **Centering**: The dropdown menu wrapper will use `left: 50%` and `transform: translateX(-50%)` to align centered under the Services / Our Work buttons.
- **Sizing**: Increase `min-width` to `360px` to accommodate description captions.
- **Layout**: Under each dropdown link, we will display a vertical flex block containing:
  - Title (`font-size: 0.9rem`, `font-weight: 600`, color `var(--text-primary)`)
  - Description (`font-size: 0.75rem`, color `var(--text-secondary)`, `margin-top: 0.15rem`)

### 4. Philippines Bento Backdrop
- The generated map image `philippines_map_bg.jpg` will be copied to `public/images/philippines-bg.jpg`.
- `BentoServices.module.css` will load this image with linear-gradient overlays (adaptive colors for light/dark themes).

### 5. Local Peso Pricing Page Overhaul
- **Pricing Data**: We will overhaul `src/data/pricing.ts` to export three PHP packages:
  - **Starter**: ₱1,499/mo (₱2,999 setup) for a single-page landing site.
  - **Growth**: ₱2,999/mo (₱4,999 setup) for a 5-to-8 page site.
  - **Merchant**: ₱5,999/mo (₱9,999 setup) for e-commerce stores.
- **Visuals**:
  - We will render these packages in a three-column grid inside `app/routes/pricing.tsx`.
  - The **Growth** package card will be designed with a glowing border and different accent highlights, and will have an offset taller height.
- **Sections in pricing.tsx**:
  - Header: Cost-comparison text.
  - Grid: Three package cards.
  - Cancellation Note: Cancel anytime policy.
  - "Need Something Different?" custom CTA block with "Get Started" triggering the contact modal context.
  - "Every Plan Includes": 4 standard feature grid items.
  - FAQAccordion section.
  - Bottom Slogan Section: Centered banner with slogan, Text Us button, and Send us a Message button.

### 6. Footer.tsx Columns
- We will organize the footer link structure into two columns:
  - **Services**: Web Design, SEO & Growth, AI Solutions, 1-on-1 Help.
  - **Company**: About Us, Case Studies, Portfolio.

## Risks / Trade-offs

- **[Risk]**: Dropdown centering could push menu options off-screen on narrow laptop viewports.
  - **[Mitigation]**: Ensure that the menu wraps or falls back to simpler left-alignments on viewports below 1024px, and check margins.
