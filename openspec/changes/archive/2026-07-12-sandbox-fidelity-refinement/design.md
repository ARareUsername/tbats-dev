## Context

The sandbox sidebar wildcard CSS reset broke Google Material Symbols by overwriting the icon font-family with the standard sans-serif font. Additionally, layout variants still display hardcoded e-commerce terms ("The Shop", "Shop Collection", shopping cart trigger) on Blog and Portfolio routes.

## Goals / Non-Goals

**Goals:**
- Fix Material Symbols icon rendering inside the sidebar by excluding icon classes from the CSS override.
- Update all 5 headers, 5 footers, and 5 heroes to dynamically display contextual links and hide the cart drawer button for Blogs and Portfolios.
- Replace the Unsplash image in `HeroEditorial.jsx` with an abstract grid canvas block.
- Write a quality-assurance custom agent skill file to prevent future layout legibility regressions.

**Non-Goals:**
- Creating a separate checkout system for blogs or portfolios.

## Decisions

- **Decision 1: Icon Font Protection**
  - *Approach*: Refactor `demo.css` font reset:
    ```css
    .demo-sidebar,
    .demo-sidebar *:not(.material-symbols-outlined) {
      font-family: var(--font-sans) !important;
    }
    ```
  - *Rationale*: Protects the Google Material Symbols font-family mapping, allowing ligatures to resolve into glyphs.
- **Decision 2: Polymorphic Layout Content**
  - *Approach*: Check `projectId` in header, hero, and footer subcomponents to dynamically alter arrays (links, descriptors) and hide cart buttons for non-commerce pages.
- **Decision 3: Custom Quality Skill**
  - *Approach*: Write a custom skill file `.agent/skills/sandbox-high-fidelity-checks/SKILL.md`.

## Risks / Trade-offs

*(None)*
