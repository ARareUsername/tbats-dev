# Design

## Decision: Philippines as a MASK on a dot-grid, not a filled image
Prior attempts filled the map with a color and stretched it (`100% 100%`), causing the contrast war. The fix: keep the dot-grid aesthetic, but clip it to the Philippines shape via `mask-image: url(philippines.png)`. The map is expressed as *dots arranged in the country's outline*, never a flat fill.

## Decision: Reuse global pointer vars for the spotlight
`GlobalFeatures` already sets `--mouse-x` / `--mouse-y` on `document.documentElement` from a global mousemove listener (used by `.dot-matrix-grid`). The section layer reuses those exact vars for its cursor radial mask — **no new JS, no new listener**.

## Decision: Soft glow, matching global
The global `.dot-matrix-grid` uses:
```
mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 250px)
```
The PH-dot layer uses the same shape (soft ~250px falloff) so the reveal feels consistent with the rest of the site. Two masks combine: Philippines shape AND cursor radial. CSS applies multiple masks; both must pass (intersection) for a dot to show — i.e. dots appear only inside the map AND inside the spotlight.

## Layer composition
```
.section::before
  background: radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)
  background-size: 24px 24px
  -webkit-mask-image:
     url(/images/philippines.png),                              /* PH shape */
     radial-gradient(circle at var(--mouse-x) var(--mouse-y),    /* spotlight */
        black 0%, transparent 250px)
  -webkit-mask-composite: source-in        /* intersection */
  mask-composite: intersect
  opacity: low (dots faint until lit)
```
Note: when masks are comma-listed they composite via `mask-composite: intersect` (standard) / `-webkit-mask-composite: source-in` (webkit). Both must be set for cross-browser intersection.

## Before / After
```
BEFORE (flat grid):        NOW (PH dot spotlight):
  dots everywhere, static    dots only inside PH shape,
  neutral gray               revealed by soft cursor glow,
                              glass cards on top
```
