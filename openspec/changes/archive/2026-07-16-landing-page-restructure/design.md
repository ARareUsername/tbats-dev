## Context

The TBATS website is a React Router + Vite Single Page Application (SPA). Currently, all navigation occurs via hash scrolling on a single page, and some sections contain long or nested content (like the full project list and services). The user wants to:
1. Transition the site to a multi-page structure with dedicated route pages.
2. Reorganize the landing page into specific sections (Hero, Bento Box for services, 3x2 Our Work preview, Why Choose Us, and Ready to Get Started).
3. Introduce dropdown menus in the global navigation bar for items with multiple destinations.
4. Implement standard SMS links and a glassmorphic aesthetic for the Bento graphics.

## Goals / Non-Goals

**Goals:**
- Configure route-based navigation in `app/routes.ts` and create page routes for `/about`, `/services/*`, `/our-work/*`, `/pricing`, and `/contact`.
- Implement hover/click animated dropdown menus in the navigation bar using Framer Motion.
- Restructure the landing page component sequence to match the requested layout.
- Build the Bento Box services component with glassmorphic cards and minimalist graphics.
- Add an interactive 3x2 portfolio preview on the landing page with a route link button.
- Integrate standard `sms:` links and contact route links.

**Non-Goals:**
- Modifying the contact form endpoint backend or API behaviors.
- Deep redesign of pages outside of header navigation and landing page flow.
- Modifying the interactive sandbox/sampler layout itself.

## Decisions

### 1. Multi-Page Routing Architecture
We will configure explicit routes in [routes.ts](file:///home/rare/Dev/TBATS/tbats-landing-page/app/routes.ts):
- `/about` -> `routes/about.tsx`
- `/services/web-design` -> `routes/services/web-design.tsx`
- `/services/seo` -> `routes/services/seo.tsx`
- `/services/ai-solutions` -> `routes/services/ai-solutions.tsx`
- `/services/1-on-1-help` -> `routes/services/help.tsx`
- `/our-work` -> `routes/our-work/index.tsx`
- `/our-work/case-studies` -> `routes/our-work/case-studies.tsx`
- `/our-work/portfolio` -> `routes/our-work/portfolio.tsx`
- `/pricing` -> `routes/pricing.tsx`
- `/contact` -> `routes/contact.tsx`

This ensures SEO compliance, deep-linking, and clean page isolation.

### 2. Dropdown Header with Framer Motion
- Create a hover/focus-based dropdown layout using Framer Motion's `AnimatePresence`.
- Standardize ARIA roles (`aria-haspopup="menu"`, `aria-expanded={isOpen}`) for accessibility.

### 3. Glassmorphic Bento Grid Component
- Design a new component `BentoServices.tsx` replacing `ServicesList.tsx`.
- Use a CSS Grid layout with custom card elements styled with `backdrop-filter: blur()`, semi-transparent borders, and modern inline SVGs or Material Symbols icons representing each service capability.

### 4. SMS URI Integration
- The "Text Us" button will render a standard anchor `href="sms:+639171234567"` (or the agency phone number) to trigger native messaging clients.

### 5. Solid Left-Aligned Dropdown Layout
- Update Header.module.css dropdownMenu rules to set `left: 0` and `transform: none`, aligning the menu to start directly from the first letter of the nav item.
- Remove transparency / glass styling and use solid custom background colors for readability.

### 6. Global Contact Modal Overlay
- Build a custom modal layout directly in layout.tsx that wraps ConsultationForm. Expose `openContactModal()` through context.
- Style the backdrop overlay with `backdrop-filter: blur(8px)` and a dark backdrop color.

### 7. Smooth Layout Page Transitions
- Integrate AnimatePresence keyed by `location.pathname` around the Outlet element to support fade and slide transitions between routes.

### 8. Client-Side Theme Toggle State
- Move theme toggling logic entirely to client-side cookie assignment and class manipulation on the document.documentElement / document.body to ensure speed and bypass route action limits.

## Risks / Trade-offs

- **[Risk]**: Navigating between routes creates full component mounts instead of smooth scroll transitions.
  - **[Mitigation]**: Ensure components share a persistent layout frame (e.g. standard outer grid and scroll containers) to minimize UI layout shifts.
- **[Risk]**: Dropdown navigation menus might break on mobile viewports.
  - **[Mitigation]**: Implement a responsive accordion menu inside the mobile header overlay that expands vertically when sub-menus are toggled.
