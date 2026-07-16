# Design

## Context

`app/routes/pricing.tsx` renders plan benefits, some with a `tooltip` string
shown via a native `title` attribute on an info-icon span. The native tooltip
suppresses the site's custom cursor (CustomCursor component) while visible, and
looks off-brand. The component already has a `.tooltipWrapper` / `.tooltipIcon`
structure to extend.

## Goals / Non-Goals

- Goals: replace native title tooltip with a styled pop-out, keep custom cursor
  active, support keyboard focus, stay on-theme (dark/light).
- Non-Goals: new tooltip library, positioning library, or global tooltip
  primitive (scoped to pricing only).

## Decisions

1. Drop `title` attr (root cause of cursor disable + unstyled tip).
2. Render a `.tooltipBubble` span inside `.tooltipWrapper`, shown on
   `:hover`/`:focus` via CSS (fade + rise). `role="tooltip"` for a11y.
3. Keep `aria-label` on wrapper; add `tabIndex={0}` so focus reveals it.
4. Theme via existing `--bg-dark` / `--border-color` tokens; light theme
   override for bubble bg.

## Risks

- Bubble could overflow card edge on long text → capped `max-width: 240px`
  and `width: max-content`. If it clips at viewport edge, can switch to
  left-aligned; verify visually.
