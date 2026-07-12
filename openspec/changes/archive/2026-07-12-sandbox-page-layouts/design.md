## Context

The sandbox sidebar typography changes style based on active preset settings, which degrades control panel visual consistency. We also need to introduce layouts for Blog and Portfolio profiles, and add direct anchor links on the main navigation bar to redirect users to the sandbox launcher widget.

## Goals / Non-Goals

**Goals:**
- Freeze sidebar and header controls typography in `demo.css` to standard sans-serif.
- Integrate a "Sandbox" navigation shortcut inside `Header.jsx` pointing to the `#portfolio` launcher block.
- Create mock databases `articles.js` and `portfolioItems.js`.
- Make the e-commerce client polymorphic so it dynamically changes categories and card metadata based on the active path parameter.

**Non-Goals:**
- Implementing real database syncs (mock data is sufficient).

## Decisions

- **Decision 1: Sidebar Font Styling Isolation**
  - *Approach*: Explicitly set `font-family: var(--font-sans) !important;` for `.demo-sidebar`, its children, and sandbox controls in `demo.css`.
  - *Rationale*: Prevents active styling engines (like Editorial playfair serif) from overriding the sidebar control font.
- **Decision 2: Polymorphic Sandbox Fills**
  - *Approach*: Read `projectId` path parameter and load:
    - `personal-blog`: Load mock articles data. Show `excerpt` and `Read Time • Date` tags. Replaces add-to-cart actions with `Read Article →` text triggers.
    - `portfolio`: Load mock case studies data. Show `client` and `year`. Replaces actions with `View Case Study`.
    - `e-commerce`: Default catalog details.
  - *Rationale*: Integrates Blog and Portfolio layouts using existing visual presets without creating ten duplicate card files.

## Risks / Trade-offs

*(None)*
