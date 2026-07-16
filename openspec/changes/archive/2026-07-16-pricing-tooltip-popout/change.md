# Change: Pricing Tooltip Custom Pop-out

## Why

The pricing plan benefits use the native HTML `title` attribute for the info
("ⓘ") tooltips. Two problems:
1. The OS-native tooltip appears on hover, which disables the site's custom
   cursor while it is shown (the custom cursor is suppressed over native
   tooltips / `title` elements).
2. The native tooltip is unstyled, delayed, and inconsistent with the site's
   design system.

We replace the native `title` tooltip with a custom CSS pop-out bubble that
matches the design, and is shown on hover **and** keyboard focus.

## What Changes

- `app/routes/pricing.tsx`
  - Remove the `title={benefit.tooltip}` attribute from the tooltip wrapper.
  - Render a custom `.tooltipBubble` span (with `role="tooltip"`) inside the
    wrapper, containing the tooltip text.
  - Keep `aria-label` on the wrapper for screen readers; add `tabIndex={0}`
    so the bubble is reachable by keyboard.
- `app/routes/pricing.module.css`
  - Add `.tooltipBubble` styles: absolutely positioned above the icon,
    themed (bg/border/shadow per theme), fade+rise on hover/focus.
  - Show it via `.tooltipWrapper:hover .tooltipBubble` and
    `:focus .tooltipBubble`.

## Impact

- Affected: pricing route + its CSS module only. No new dependencies, no
  route/API changes.
- Users: hovering/focusing the ⓘ shows an on-brand pop-out and the custom
  cursor stays active (no native title tooltip).
