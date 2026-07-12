---
name: sandbox-high-fidelity-checks
description: "Verifies high-fidelity rules for TBATS sandbox layouts (Blog, E-Commerce, Portfolio) including dynamic text context, icon rendering, and light mode legibility. Triggers when modifying demo headers, heroes, footers, CSS files, or theme settings."
category: quality
risk: safe
source: community
date_added: "2026-07-12"
---

# Sandbox High Fidelity Checks

Ensures clean typography protection, dynamic copy context mapping, and light-theme contrast standards are fully met in the live sandbox.

## When to Use This Skill

- Modifying visual presets or layouts inside `src/demo/components/`
- Refactoring `src/pages/EcommerceSamplerPage.jsx` or layout routes
- Adjusting CSS styles or theme toggles in `src/demo/demo.css`
- Modifying custom styling variables or typography scales

## Quality Control Checklist

### 1. Icon CSS Safety (Ligature Protection)
- **Rule**: Never use a blanket CSS reset (like `.selector *`) that overrides `font-family` on Google Material Symbols classes (`.material-symbols-outlined`).
- **Fix**: Exclude icon elements explicitly:
  ```css
  .selector,
  .selector *:not(.material-symbols-outlined) {
    font-family: var(--font-sans) !important;
  }
  ```
- **Symptom**: If icons are rendered as literal fallback texts like "check_circle", "arrow_back", or "menu_open", this rule was violated.

### 2. Polymorphic Content Consistency
- **Rule**: Content on headers, heroes, footers, grids, and cards must strictly match the active `projectId` layout context.
  - **Personal Blog** (`personal-blog`):
    - Nav links: Stories, Articles, Archive, newsletter signup.
    - CTAs: "Subscribe", "Read Article →", "Read 📖".
    - Details: Articles dataset (`articles.js`), date, read time metadata.
    - Cart Trigger: **HIDDEN**.
  - **Creative Portfolio** (`portfolio`):
    - Nav links: Work, Services, Contact.
    - CTAs: "Let's Talk", "View Case Study", "Open 📂".
    - Details: Work items dataset (`portfolioItems.js`), client name, release year.
    - Cart Trigger: **HIDDEN**.
  - **E-Commerce** (`e-commerce`):
    - Nav links: New In, Catalog, Our Story.
    - CTAs: "Add to Bag", "Order Object", "BUY NOW".
    - Details: Products dataset (`products.js`), prices (₱).
    - Cart Trigger: **VISIBLE**.

### 3. Light Mode Contrast Standards
- **Rule**: Switch themes to Light Mode and verify text and component boundaries.
  - Do not use absolute white/gray translucent overlays that wash out text against white backgrounds.
  - Rely on system variables like `var(--bg-card)`, `var(--text-secondary)`, and `var(--bg-input)` to adapt automatically to theme states.
