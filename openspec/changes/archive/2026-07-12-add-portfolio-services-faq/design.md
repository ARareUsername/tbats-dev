## Context

The current `tbats.dev` landing page needs three new sections to complete the agency portfolio: Portfolio/Case Studies, Services/Tech Stack, and FAQ. We will create three modular components (`Portfolio.jsx`, `ServicesList.jsx`, `FAQAccordion.jsx`) in React and integrate them into `App.jsx` with the same premium black, editorial, minimalist design system already established.

## Goals / Non-Goals

**Goals:**
- Implement `Portfolio.jsx` to showcase premium project cards.
- Implement `ServicesList.jsx` to outline the agency's specialties and tech stack.
- Implement `FAQAccordion.jsx` as an interactive accordion for common questions.
- Integrate them seamlessly into the main page with reveal animations.

**Non-Goals:**
- Creating separate routing pages for each case study (they will remain on the landing page as dynamic popups or detailed overlays/cards).

## Decisions

- **Interactive FAQ Accordion**: Will use React state to track the active question index and animate expansion using height transitions (with Framer Motion or clean CSS).
- **Portfolio Grid**: A premium-looking CSS Grid layout featuring customized cards that scale on hover.
- **Tech Stack/Services**: A clean modular showcase grouping capabilities into logical pillars (e.g., Design, Custom Dev, SEO & Speed).

## Risks / Trade-offs

- **Risk**: Landing page becomes too cluttered.
  - **Mitigation**: Use spacing and consistent scroll-reveal transitions (`ScrollReveal` component) to maintain breathing room.
