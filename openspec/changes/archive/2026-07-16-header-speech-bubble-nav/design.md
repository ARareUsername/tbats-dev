# Design

## Context

`Header.tsx` renders `.desktopNav` with plain `<Link>`s (About, Pricing,
Contact) and two `.dropdownContainer` blocks (Services, Our Work) each with a
`.dropdownToggle` button + arrow icon and an `m.div.dropdownMenu` positioned
`top: calc(100% + 5px); left: 0; transform: translateX(-35%)`. Mobile uses
accordions (no bubble).

## Goals / Non-Goals

- Goals: hover underline on plain links; dropdown menus as speech bubbles with
  tail centered on the trigger word.
- Non-Goals: mobile bubble (accordions stay), changing dropdown contents.

## Decisions

1. **Underline**: scope to `.navLink:hover` but exclude `.dropdownToggle`
   (use a separate selector or `:not`). 1px, `var(--color-accent)`.
2. **Word-centered tail**: wrap label text in `.navLinkLabel` span. Measure its
   center x relative to `.dropdownContainer` via `getBoundingClientRect` in a
   `useEffect` (run on mount + window resize) and set `--word-center` (px) as a
   CSS var on the container. Position `.dropdownMenu` with
   `left: var(--word-center); transform: translateX(-50%)`; tail (CSS triangle
   `::after`, plus `::before` for border) at `left: 50%` of the bubble → tail
   sits exactly on the word center.
3. **Tail color**: triangle filled with bubble bg (`var(--bg-dark)` /
   `#ffffff` in light); a second slightly larger triangle behind it carries the
   border color so the tail reads as bordered.
4. **Desktop only**: bubble styles are inside the desktop nav; mobile unchanged.

## Risks

- Measuring on resize: cheap (two containers); add resize listener with cleanup.
- Long words vs bubble width: bubble is `width: max-content` and centered on the
  word, so it may extend past the container on the right edge — acceptable; if
  it clips, nudge with `min-width`/`max-width`. Verify visually.
