## Context

The current landing page uses a modern design with large typography and dynamic components (framer-motion, SVG grain, custom cursors). However, these styles break on smaller viewports, specifically:
- The top navigation lacks a mobile layout (hamburger menu or hidden links).
- The hero section's padding and typography are too large, pushing content off-screen.
- Grid layouts in the Portfolio, Services, and Process sections do not stack properly on mobile.
- Form inputs and interactive buttons are not touch-friendly or properly sized.

## Goals / Non-Goals

**Goals:**
- Implement responsive CSS media queries (or Tailwind breakpoints if applicable) across all existing components.
- Introduce a mobile-friendly Header/Navigation pattern.
- Ensure text, images, and cards scale gracefully without horizontal scrollbars.
- Verify touch targets and spacing are comfortable on small screens.

**Non-Goals:**
- Completely redesigning the desktop experience.
- Introducing new complex features not related to responsiveness.
- Changing the underlying framework or design aesthetic.

## Decisions

- **Media Queries Approach:** Use standard CSS media queries (`@media (max-width: 768px)`) in `index.css` and/or inline styles to adjust padding, font sizes, and flex/grid direction.
- **Header Navigation:** Implement a simple hamburger menu toggle for mobile viewports to prevent link crowding, utilizing React state to manage the menu's open/closed status.
- **Framer Motion Adjustments:** Ensure animations still perform well on mobile, potentially simplifying them if they cause layout shifts on smaller screens.

## Risks / Trade-offs

- [Risk] Mobile animations might be janky or cause overflow. → Disable or simplify `framer-motion` `ScrollReveal` on very small screens if necessary.
- [Risk] Custom cursor might interfere with touch devices. → Disable the custom cursor component on touch devices (via CSS pointer-events or JS media query detection).
