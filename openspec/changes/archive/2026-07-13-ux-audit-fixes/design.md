## Context

Eleven UX fixes were identified across the landing page components. All are self-contained, component-level changes — no cross-cutting architecture, new dependencies, or behavioral shifts.

## Goals / Non-Goals

**Goals:**
- Fix all high/medium priority issues from the UX audit in ~one session
- Each fix is independently revertable in its own commit

**Non-Goals:**
- No visual redesign, layout changes, or content changes
- No spec-level requirement changes
- No new features beyond the back-to-top button

## Decisions

- **Skip link**: Single lightweight component (`SkipLink`) rendered first in the root layout. Becomes visible on `:focus-within` via CSS. No JS needed.
- **FAQ animation**: Replace `height` animation with `grid-template-rows: 0fr / 1fr` on the wrapper + `overflow: hidden`. Uses CSS grid's intrinsic sizing — no JS height calculation, no CLS.
- **Focus outline**: Single `:focus-visible` rule in `index.css` using `--color-accent` (so it works in both dark and light mode). 2px offset, 2px width.
- **SVG stars**: Inline SVG `<path>` for a 5-point star. Simple component `StarIcon` or inline. Avoids icon library dependency.
- **Back-to-top**: Fixed-position button that appears after scrolling past the fold. Uses `IntersectionObserver` or scroll listener with `useState`. Renders at bottom-right.
- **Form success**: Remove the `setTimeout` reset; let user dismiss manually or on next form interaction.
- **Button disabled style**: Move inline `style={{ opacity }}` to CSS `&:disabled { opacity: 0.7 }` in Button's module CSS.
- **Hero anchor buttons**: These link to sections (`#contact`, `#process`). They should use native `<a>` tags with `href` rather than `<button>` elements — this fixes keyboard expectations (Enter works the same, but screen readers treat anchors and buttons differently). Currently using `<Button as="a">` which renders `<a>` but adds button semantics.

## Risks / Trade-offs

- FAQ grid row animation: requires CSS grid on the container (currently `div`). The wrapper already exists — just needs `display: grid` and the row track transition. Test on narrow screens.
- Back-to-top button on mobile: must not overlap content or block touch targets near the bottom of the page. Use safe-area-aware positioning, 44px minimum touch target.
- Skip-to-content link: Must be the very first focusable element. Ensure it's rendered before the nav in the DOM tree.
