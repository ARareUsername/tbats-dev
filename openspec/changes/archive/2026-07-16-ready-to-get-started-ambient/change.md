# Change: Ready to Get Started — Ambient Enhancement

## Why

`ReadyToGetStarted` is the final conversion close, mounted on every page via
`app/routes/layout.tsx`. It is currently a flat dark-green band with headline,
copy, and two buttons — no depth, no life. We want it to feel premium and
alive (without lying about "live" metrics we don't have yet) by adding an
ambient layer system plus an availability pill and button icons.

Decisions (from explore):
- Dust = bokeh motes inside a breathing accent glow (not a fine particle field).
- CSS-only implementation (no canvas/RAF), ~24 motes, count parametric for
  easy future tuning.
- Ambient effects everywhere; cursor halo is desktop-pointer-only (touch gets
  ambient only). All motion frozen under `prefers-reduced-motion` (already
  wired in the component).
- Add an availability pill as the honest stand-in for a "live counter".
- Add Material Symbols icons inline-left on both buttons.

## What Changes

- `src/components/ReadyToGetStarted.tsx`
  - Add an ambient layer (glow + motes) behind content, and a desktop-only
    cursor halo driven by a pointer listener.
  - Add an availability pill (`● Now booking — Q3 2026`) above the buttons.
  - Add `sms` icon to "Text Us" and `send` icon to "Send us a Message",
    inline-left via `material-symbols-outlined`.
  - Keep existing `whileInView` reveal + `useReducedMotion` handling; freeze
    ambient animation when reduced motion is preferred.
- `src/components/ReadyToGetStarted.module.css`
  - Add `.glow`, `.motes`/`.mote`, `.cursorHalo`, `.pill`/`.pillDot`, and
    `.btnIcon` styles. Motes are absolutely positioned, blurred, low-opacity,
    accent-tinted, with a slow drift keyframe; glow breathes via opacity/scale.
  - Keep `overflow: hidden` + `position: relative` so effects stay contained.

## Impact

- Affected: `ReadyToGetStarted` component + its CSS module (mounted on every
  page via layout). No route/API/data changes. No new dependencies.
- Users: the CTA band gains depth and life on scroll-in, an honest
  availability signal, and clearer button affordances with icons.
- Touch devices: ambient only (no cursor halo). Reduced-motion: static.
