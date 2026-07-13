## 1. Accessibility & Keyboard

- [x] 1.1 Create SkipLink component (visually hidden, visible on focus via CSS)
- [x] 1.2 Render SkipLink as first element in app root layout
- [x] 1.3 Add `:focus-visible` global outline rule using `--color-accent` in index.css
- [x] 1.4 Add `aria-hidden="true"` to all decorative `material-symbols-outlined` spans across all components
- [x] 1.5 Add `aria-label` to FAQ accordion toggle button (with open/closed state)
- [x] 1.6 Replace Hero `Button as="a"` anchor links with semantic `<a>` tags

## 2. FAQ Accordion Performance

- [x] 2.1 Refactor FAQ answer wrapper from `height` animation to `grid-template-rows: 0fr / 1fr` with `overflow: hidden`

## 3. Testimonials & Icon Polish

- [x] 3.1 Replace Unicode star characters with accessible inline SVG star component
- [x] 3.2 Add proper `aria-label` to star rating for screen readers

## 4. Form & Interaction Fixes

- [x] 4.1 Remove auto-dismiss `setTimeout` from ConsultationForm success state (keep persistent until next action)
- [x] 4.2 Move Button disabled inline `style={{ opacity }}` to CSS `:disabled` pseudo-class in Button.module.css

## 5. Back-to-Top & Structure

- [x] 5.1 Create BackToTop component (scroll-based visibility, scroll listener)
- [x] 5.2 Add BackToTop to landing page layout
- [x] 5.3 Ensure InteractiveEstimator has a proper h2 heading for heading hierarchy
