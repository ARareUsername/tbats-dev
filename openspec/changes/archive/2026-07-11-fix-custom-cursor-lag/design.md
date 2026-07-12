## Context

The current `CustomCursor` component uses Framer Motion's `useSpring` and `useMotionValue` combined with a `<motion.div>`. While Framer Motion is fantastic for complex animations, updating a cursor coordinate via spring physics on every `mousemove` event triggers high overhead. Since the landing page runs multiple `ScrollReveal` components (which trigger scroll-bound animations), the main thread gets saturated, leading to dropped frames, lag, and latency in cursor rendering.

## Goals / Non-Goals

**Goals:**
- Eliminate custom cursor lag and latency during mouse movement.
- Bypass React state updates and component re-renders completely during mouse tracking.
- Utilize hardware-accelerated CSS transforms (`translate3d`) for cursor positioning.
- Retain the visual design (glassmorphic circle, neon green border/glow, mix blend mode) from the original custom cursor.

**Non-Goals:**
- Removing the custom cursor entirely (it is a desired aesthetic feature).
- Customizing cursor behavior on touch devices (it will remain hidden/disabled on touch).

## Decisions

### Decision: Direct DOM Manipulation with `useRef` + `requestAnimationFrame`
Instead of using React state or Framer Motion values, we will use a React `useRef` referencing the cursor DOM element.
- **Why**: React re-renders are asynchronous and can be batched, introducing micro-delays. Modifying style attributes directly in a `requestAnimationFrame` loop is synchronous with the display refresh rate.
- **Alternatives Considered**: 
  - *Keep Framer Motion but tune springs*: This still incurs library overhead and React render-cycle alignment.
  - *CSS-only cursor*: A CSS cursor cannot easily implement custom HTML markup like multiple blended divs or complex glow shadows without some script helper, and native `cursor: url()` has sizing/scaling constraints.

### Decision: Custom Low-overhead Lerp (Linear Interpolation) Easing
To maintain a smooth trailing effect without the heavy physics calculation of `useSpring`, we will calculate cursor position using a lightweight linear interpolation formula in the animation frame handler:
```js
currentX += (targetX - currentX) * 0.15;
currentY += (targetY - currentY) * 0.15;
```
- **Why**: This provides a smooth, fluid spring-like trail with negligible CPU/GPU cost, keeping frame-budget usage well below 0.1ms per frame.

## Risks / Trade-offs

- **[Risk]** The cursor could get stuck off-screen if the mouse leaves the browser window.
  - *Mitigation*: Listen to `mouseleave` / `mouseenter` events on the `document` to smoothly fade/hide or show the custom cursor element.
