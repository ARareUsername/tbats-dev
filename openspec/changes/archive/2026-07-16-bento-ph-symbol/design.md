# Design

## Decision: Revert to plain static grid
The Philippines-spotlight `::before` combined a dot pattern with two masks (PH shape + cursor radial). We drop both masks and keep only the dot pattern as a calm, static, theme-aware (`--grid-dot-color`) grid — the "regular dot matrix design" the user referred to.

## Decision: Symbol lives in the header, not the background
Per user choice (Option 2), the Philippines identity moves from the background into a small **location chip** in the section header: `location_on` icon + "Pampanga, Philippines". This pairs with the footer's "Pampanga, Philippines" and the "in Pampanga" h2, reinforcing local identity without cluttering cards.

## Layer composition (after)
```
.section
  background-color: var(--bg-dark-end)        /* theme-matched */
  ::before: static dot grid (no mask)          /* calm texture */
  header:
    badge "What We Do"
    h2 "Web Design Services in Pampanga"
    subtitle
    chip: [location_on] Pampanga, Philippines  /* NEW */
  grid of glass cards
```
