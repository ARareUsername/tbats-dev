# Tasks

## 1. Ambient glow + bokeh motes (CSS + JSX)
- [ ] In `ReadyToGetStarted.module.css`, add `.glow` (breathing accent radial,
      behind content) and `.motes` / `.mote` (absolutely positioned, blurred,
      accent-tinted, drifting keyframe).
- [ ] In `ReadyToGetStarted.tsx`, render a `.glow` and a `.motes` layer with
      ~24 `.mote` spans (count from one constant), behind `.fluidContent`.
- [ ] Freeze glow/mote animation under `prefersReducedMotion`.

## 2. Desktop cursor halo
- [ ] Add `.cursorHalo` style (radial accent, follows `--x/--y`).
- [ ] In the component, `useEffect` attaches a `pointermove` listener (guarded
      to non-touch / non-reduced-motion) setting `--x/--y`; cleans up on unmount.
- [ ] Touch devices / reduced motion: no halo (CSS or guard hides it).

## 3. Availability pill
- [ ] Add `.pill` / `.pillDot` styles (accent dot with soft pulse).
- [ ] Render `● Now booking — Q3 2026` above the buttons.

## 4. Button icons
- [ ] Add `.btnIcon` style (inline-left, sized to button).
- [ ] Add `<span className="material-symbols-outlined">sms</span>` to "Text Us"
      and `send` to "Send us a Message".

## 5. Validate
- [ ] `npm run typecheck`, `npm run lint`, `npm run build`.
- [ ] Manual: glow + motes visible & contained, halo follows pointer on desktop
      only, pill shows, icons present, reduced-motion freezes animation.
