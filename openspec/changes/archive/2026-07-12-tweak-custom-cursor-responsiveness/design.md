## Context

The custom cursor currently uses a linear interpolation factor (`ease = 0.15`) within its requestAnimationFrame rendering loop. While this provides a smooth trailing effect, it is perceived as too floaty and laggy by the user.

## Goals / Non-Goals

**Goals:**
- Make the custom cursor feel snappier, less floaty, and much faster.
- Keep the CPU/GPU footprint identical to the current high-performance implementation.

**Non-Goals:**
- Removing the interpolation entirely (which would remove the smooth custom cursor experience completely).

## Decisions

### Decision: Increase the Easing Coefficient to 0.35
We will update the `ease` variable inside `CustomCursor.jsx`'s `updatePosition` loop to `0.35`.
- **Why**: An easing factor of `0.35` strikes the perfect balance: it catches up to the native mouse position in fewer frames (less float/delay), yet retains enough sub-frame smoothing to prevent harsh jitter.

## Risks / Trade-offs

- **[Risk]** The cursor might feel too direct (losing its "custom custom cursor trail" appeal).
  - *Mitigation*: If `0.35` feels too snap-like, it can be adjusted slightly (e.g. to `0.30`).
