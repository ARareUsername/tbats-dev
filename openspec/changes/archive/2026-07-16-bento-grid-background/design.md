# Design

## Decision: Reuse --grid-dot-color, don't invent a color
The cursor-following `.dot-matrix-grid` already uses `radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)` at `background-size: 24px 24px`. The token is theme-aware: `rgba(255,255,255,0.35)` (dark) / `rgba(0,0,0,0.14)` (light) — both neutral gray. The new static grid copies that exact pattern minus the cursor mask, so it is neutral gray in both themes with zero new color logic.

## Decision: Static, no mask
The global grid is masked to a circle around the cursor (`mask-image: radial-gradient(...)`). The section grid must NOT be masked — it should be evenly present. So the new `::before` reuses the gradient + size but omits `mask-image`.

## Decision: Low starting opacity
Token alpha is already faint (0.35 / 0.14). A static full-section layer at full token alpha would be more present than the cursor one. Start the `::before` at `opacity: 0.4` (scales the already-faint token down further) for a subtle texture. Easy to bump later.

## Before / After
```
BEFORE (fought for 15 rounds):
  .section::before { url(philippines.png) size:100% 100% opacity:.35/.15 }
  → contrast war, eats section or invisible

AFTER:
  .section::before {
    radial-gradient(var(--grid-dot-color) 1.5px, transparent 1.5px)
    background-size: 24px 24px
    opacity: 0.4
    no mask
  }
  → calm, theme-aware, neutral gray, never invisible-or-dominant
```
