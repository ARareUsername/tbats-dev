## Context

The TBATS landing page project drifted into showcasing an algorithmic time-series model. The client wishes to revert to the original concept: a sleek, ultra-dark web development agency portfolio. The design needs to be highly striking, focusing on conversion (e.g., booking a strategy call) rather than technical demonstrations.

## Goals / Non-Goals

**Goals:**
- Completely remove TBATS-related components (`FeaturesGrid`, `CodePlayground`, `DecompositionDemo`).
- Transition the visual theme to True Black (`#000000`) with a subtle static noise overlay for a premium texture.
- Overhaul the conversion strategy: Replace the generic "Get a quote" buttons with a "Schedule Strategy Call" or "Start a Project" interactive flow.
- Redesign the "Services", "Process", and "Pricing" sections using modern, interactive bento-box grid layouts and sleek accordion components.
- Implement striking visual effects: a custom glowing cursor trailer and cinematic text-reveal animations.

**Non-Goals:**
- Backend integration for the booking flow (we will use a mailto link or mock a Calendly pop-up for now).
- Complete routing overhaul (this remains a single-page application).

## Decisions

- **True Black & Noise Overlay:** Instead of a raster image for noise, we will use a pure CSS/SVG noise filter (`<filter id="noise">`) applied via a fixed full-screen pseudo-element (`::before`) with low opacity (`0.03`). This ensures maximum performance and infinite scaling without bandwidth overhead.
- **Glowing Cursor:** We will build a custom cursor component using Framer Motion that tracks mouse coordinates (`useMotionValue`). To ensure it doesn't degrade mobile UX, it will be wrapped in a `@media (pointer: fine)` CSS check or explicitly disabled on touch devices.
- **Bento-Box Redesign:** The outdated sections will be refactored into CSS Grid (`display: grid`) layouts with varying column/row spans to create the popular "Bento Box" aesthetic. We will use Framer Motion's `whileHover` to create subtle scaling and border-glow interactions on these boxes.
- **Conversion Flow:** The "Get a quote" buttons will be restyled as prominent, glowing "Start a Project" buttons that trigger a sleek, full-screen consultation modal (or link to a scheduling tool).

## Risks / Trade-offs

- **Risk: Custom cursors causing accessibility or usability issues.**
  - *Mitigation:* The custom cursor will only be active on desktop devices (`pointer: fine`), falling back to default OS cursors on mobile/tablets. We will also ensure it doesn't obscure click targets by using `pointer-events: none`.
- **Risk: Noise overlay causing rendering jank on low-end devices.**
  - *Mitigation:* We will keep the noise overlay static (not animated) and use a very simple SVG turbulence filter to minimize GPU strain.
