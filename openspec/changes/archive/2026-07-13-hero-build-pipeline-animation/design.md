## Context

The hero section currently displays static text on a single-color background. For a premium dev studio, the hero should demonstrate technical capability visually. A build pipeline animation communicates "we build software" without photos or video assets.

The codebase uses React 19 + TypeScript strict mode, CSS modules, and framer-motion (`m` import). Several existing components use `requestAnimationFrame` for animation loops (e.g., `CustomCursor.tsx`). The `useReducedMotion` hook is available at `@hooks/useReducedMotion`.

## Goals / Non-Goals

**Goals:**
- Add a self-contained canvas-based animated background to the hero section
- The animation depicts a build pipeline (lint → typecheck → build → deploy) as a node graph with flowing particles
- Must be calm & premium — slow movement, low opacity, brand-aligned colors
- Must be trivially removable (one line delete, no broken state)
- Must respect `prefers-reduced-motion`
- Must not block mouse/keyboard interaction with hero content

**Non-Goals:**
- Not an interactive demo — strictly decorative background
- No new external dependencies (canvas API is native)
- No data fetching or state management integration
- No server-side rendering concerns (canvas renders client-only)

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| **Rendering technology** | `<canvas>` with 2D context | Particle systems with trails are expensive in DOM; canvas gives full pixel control at 60fps |
| **Component architecture** | Zero-prop component rendered inside `<Section>` but before `<Container>` in the DOM | Makes removal a one-line delete; canvas sits behind all content via z-index |
| **Animation loop** | `requestAnimationFrame` with delta-time | Existing codebase pattern (see `CustomCursor`, `GlobalFeatures`); avoids animation drift from variable frame rates |
| **Reduced motion** | Check `prefers-reduced-motion` via `useReducedMotion` hook; render nothing if true | Existing codebase pattern; meets a11y best practices |
| **Pipeline stages** | 4 nodes: `lint`, `typecheck`, `build`, `deploy` | Reflects actual TBATS workflow; enough stages for visual interest without clutter |
| **Particle count** | 15-25 particles at any time | Enough for visible flow path without visual noise |
| **Mobile** | Reduce to 2 nodes; position along a single horizontal line | Hero height is smaller on mobile; fewer nodes prevent visual crowding |
| **Colors** | Brand accent (`#10b981` green) + muted teal (`#14b8a6`) + dim white | Matches existing brand palette in dark theme; calm, premium feel |
| **Opacity** | 0.15–0.25 for lines, 0.3–0.6 for particles | Keeps effect fully ambient — visitor notices subconsciously |

### Alternative: CSS-only approach
Rejected — smooth particle trails and bezier-path following are extremely difficult in pure CSS. Canvas gives full control with minimal overhead.

### Alternative: SVG approach
Rejected — SVG animation would require JS updates anyway for the particle system; canvas reduces DOM overhead and is the standard approach for particle effects.

### Alternative: External library (tsParticles, etc.)
Rejected — tsParticles is 60KB+ gzipped. A custom implementation is ~3-5KB and directly matches our specific visual needs. No dependency risk.

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| **Performance on low-end devices** | Canvas is 2D (not WebGL), uses small particle count (15-25), low opacity reduces fill cost; `prefers-reduced-motion` disables entirely |
| **Canvas sizing on resize** | Debounced resize handler recalculates canvas dimensions + rebakes node positions |
| **Battery drain from continuous rAF** | Immediately stop rAF loop when component unmounts; `prefers-reduced-motion` prevents it from starting |
| **Memory leak** | Clean up rAF handle in `useEffect` return; clear canvas before unmount |
| **Text readability over animation** | Canvas runs at z-index 0 with max 0.25 opacity; hero content is z-index 10; text-shadow on hero text provides contrast |

## Implementation Outline

```
HeroBackground (self-contained)
├── Canvas ref → useEffect mount/unmount
├── State: canvas dimensions, node positions, particle array
├── ResizeObserver → recalculate on layout change
├── Animation loop (rAF):
│   ├── Clear canvas with semi-transparent rect (trail effect)
│   ├── Draw connecting paths between nodes (low opacity)
│   ├── Draw terminal labels on each node (very low opacity text)
│   ├── Update particle positions along bezier curves
│   └── Draw particles (small glowing circles)
├── Reduced motion → skip entire loop
└── cleanup → cancel rAF, clear canvas
```
