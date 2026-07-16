# Design

## Context

`ReadyToGetStarted` mounts in `app/routes/layout.tsx:54`, so it appears on every
page just above the footer. It is a centered band: `bg #060e0a` (near-black
green), `overflow: hidden`, `position: relative`, content at `z-index: 2`. It
already uses framer-motion `m` + `useReducedMotion` for a scroll-in reveal.

Icons in this codebase are `<span className="material-symbols-outlined ...">`
(e.g. `sms`, `send`, `link`, `terminal`). `Button` is polymorphic (`as="a"` /
`Link`) and passes `children` through, so icon + text both render as children.

## Goals / Non-Goals

- Goals: ambient glow + bokeh dust, desktop cursor halo, availability pill,
  button icons. All motion respects reduced-motion. Mote count parametric.
- Non-Goals: real live-data counter (no data yet), canvas/RAF particle system,
  varying the effect per page.

## Decisions

1. **Single idea: "light in the dark."** Glow gives depth; motes are bokeh
   caught in that light; cursor halo adds desktop life. Coherent, not a pile.
2. **CSS-only motes.** ~24 `<span>` motes, absolutely positioned, blurred,
   low-opacity, accent-tinted, animated with a shared drift keyframe and
   per-mote `animation-delay`/`duration` for organic feel. Count lives in one
   constant so it is a one-line future tweak.
3. **Cursor halo** = a radial-gradient `<div>` whose `--x/--y` custom props are
   set from a `pointermove` listener on the section; hidden on touch / reduced
   motion via CSS / guard.
4. **Availability pill** copy: `Now booking — Q3 2026` (urgent + dated;
   staleness accepted as a simple copy update later).
5. **Icons**: `sms` (matches the `sms:+63...` href) and `send` (matches
   "Send us a Message" → `/contact`), inline-left.

## Risks

- Mote count / perf: 24 blurred DOM nodes is cheap; keep blur via
  `filter: blur()` modest. If it ever janks, drop count (parametric).
- Stale quarter in pill copy — accepted; trivial to update.
- Pointer listener leak — attach in `useEffect` with cleanup.
