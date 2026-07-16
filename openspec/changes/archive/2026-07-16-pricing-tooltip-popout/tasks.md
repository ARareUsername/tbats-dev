# Tasks

## 1. Markup
- [ ] `app/routes/pricing.tsx`: remove `title` attr; add `.tooltipBubble`
      span with `role="tooltip"`; keep `aria-label`; add `tabIndex={0}`.

## 2. Styles
- [ ] `app/routes/pricing.module.css`: add `.tooltipBubble` (positioned above
      icon, themed, fade+rise); show on `.tooltipWrapper:hover/:focus`.

## 3. Validate
- [ ] `npm run typecheck`, `npm run lint`, `npm run build`.
- [ ] Manual: hover/focus ⓘ → custom pop-out; custom cursor stays active;
      no native tooltip.
