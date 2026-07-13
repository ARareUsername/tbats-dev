## Why

The hero section is the first thing potential clients see, yet it's currently static text with basic CSS animations. For a premium web development studio, the hero should *demonstrate* technical sophistication, not just claim it. A subtle animated build pipeline visualization in the background visually proves we build and ship real software, making the hero memorable and confidence-inspiring — without relying on stock imagery.

## What Changes

- **New** `HeroBackground` component — a self-contained canvas animation behind the hero text
- **Modified** `Hero.tsx` — integrate `HeroBackground` as a single import
- **Modified** `Hero.module.css` — ensure proper z-index stacking so the canvas sits behind content

## Capabilities

### New Capabilities
- `hero-background`: Ambient animated build pipeline visualization rendered on a `<canvas>` behind the hero section. Shows a 3-4 stage build pipeline (lint → typecheck → build → deploy) with particle flow between nodes. Fully self-contained, zero props, easy to remove.

### Modified Capabilities

None.

## Impact

- **New files**: `src/components/HeroBackground.tsx`, `src/components/HeroBackground.module.css`
- **Modified files**: `src/components/Hero.tsx`, `src/components/Hero.module.css`
- **Dependencies**: None beyond React + canvas API (native)
- **Side effects**: None — component is `pointer-events: none`, renders nothing on `prefers-reduced-motion`, and can be removed by deleting one line
