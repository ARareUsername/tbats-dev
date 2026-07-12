## Context

The TBATS landing page currently has a flat black background and lacks complex interactive animations, making the glassmorphism UI feel less immersive. The user also requested mobile compatibility refinements. This change introduces `framer-motion` for scroll and staggered animations, updates the root CSS for a premium grey vignette background, and refines the mobile layout.

## Goals / Non-Goals

**Goals:**
- Implement a deep grey radial vignette background to enhance depth.
- Add declarative, physics-based scroll animations using `framer-motion`.
- Ensure components like the code playground and charts are responsive and usable on mobile devices.

**Non-Goals:**
- Rewriting the mathematical logic or underlying state of the interactive decomposition chart.
- Complete redesign of the layout or component hierarchy.
- Backend or hosting changes.

## Decisions

- **Animation Library:** We chose `framer-motion` over GSAP or raw Intersection Observer. Framer Motion integrates tightly with React, provides declarative `motion.div` components, and makes scroll-linked animations (`useScroll`, `useTransform`) very easy to implement without massive boilerplate.
- **Background Styling:** We will replace `--bg-dark` and `--bg-dark-end` with a `radial-gradient` in `index.css` to create the vignette effect, centering the lighter grey in the middle and fading to near-black on the edges.
- **Mobile Refinements:** 
  - Code Playgrounds will adjust tab layouts to be horizontally scrollable or wrap.
  - Interactive SVG charts will adjust viewboxes or scale down elegantly to prevent breaking out of mobile viewports.
  - Touch targets for sliders will be ensured to be at least 44px.

## Risks / Trade-offs

- **Bundle Size:** `framer-motion` adds some weight to the JavaScript bundle. 
  - *Mitigation:* This is a landing page, and the visual payoff is worth the marginal load time increase.
- **Performance:** Overuse of scroll-linked animations can cause jank on lower-end mobile devices.
  - *Mitigation:* We will use `framer-motion`'s optimized properties (like `opacity`, `transform`) which are GPU-accelerated.
