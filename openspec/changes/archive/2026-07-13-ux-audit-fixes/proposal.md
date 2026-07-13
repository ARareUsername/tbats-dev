## Why

A UX audit identified several accessibility, performance, and polish issues across the landing page. Fixing these improves WCAG compliance, keyboard navigation, screen reader support, and overall perceived quality with minimal effort.

## What Changes

- Add skip-to-content link for keyboard users
- Fix FAQ accordion height animation to eliminate CLS
- Add `aria-hidden="true"` to all decorative Material Symbols icons
- Add `aria-label` to FAQ toggle button
- Add global `:focus-visible` outline for keyboard navigation
- Replace Unicode stars in Testimonials with accessible SVG stars
- Make form success state persistent (remove auto-dismiss)
- Move Button disabled styling from inline style to CSS class
- Add back-to-top button for long-page navigation
- Add h2 heading to InteractiveEstimator section
- Fix Hero anchor buttons (`Button as="a"`) for proper semantics

## Capabilities

### New Capabilities
*(none — all changes are implementation-level UX polish)*

### Modified Capabilities
*(none — no spec-level behavior or requirement changes)*

## Impact

- **Components**: Header, Hero, ServicesList, Testimonials, FAQAccordion, InteractiveEstimator, ConsultationForm, Button, and global styles
- **New files**: Skip-link component, BackToTop component, SVG Star icon component, global focus styles
- **Dependencies**: None
