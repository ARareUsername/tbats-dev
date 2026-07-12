## ADDED Requirements

### Requirement: Semantic HTML structure
All pages SHALL use proper semantic HTML5 elements with correct heading hierarchy.

#### Scenario: Landing page has single h1
- **WHEN** rendering landing page
- **THEN** exactly one `<h1>` exists (Hero title), followed by `<h2>` for sections

#### Scenario: Demo sandbox uses semantic structure
- **WHEN** rendering demo page
- **THEN** it uses `<header>`, `<main>`, `<section>`, `<footer>` appropriately

#### Scenario: No heading levels skipped
- **WHEN** inspecting heading hierarchy
- **THEN** no level jumps (h1 → h3 without h2)

### Requirement: Keyboard navigation and focus management
All interactive elements SHALL be keyboard accessible with visible focus indicators.

#### Scenario: Tab order follows visual order
- **WHEN** tabbing through page
- **THEN** focus moves left-to-right, top-to-bottom matching visual layout

#### Scenario: Focus indicator meets contrast
- **WHEN** element receives focus
- **THEN** focus ring has 3:1 contrast against adjacent colors

#### Scenario: Skip link bypasses navigation
- **WHEN** pressing Tab first time on page
- **THEN** "Skip to main content" link appears and jumps to `<main>`

#### Scenario: Modal traps focus
- **WHEN** CheckoutModal opens
- **THEN** Tab cycles within modal, Escape closes modal, focus returns to trigger

#### Scenario: Mobile menu focus management
- **WHEN** mobile menu opens
- **THEN** focus moves to first menu item, Trap focus within menu

### Requirement: ARIA labels and roles
All non-text content and complex widgets SHALL have appropriate ARIA attributes.

#### Scenario: Icon buttons have accessible names
- **WHEN** button contains only icon (theme toggle, social links)
- **THEN** it has `aria-label` describing action

#### Scenario: Form inputs have associated labels
- **WHEN** rendering form fields
- **THEN** each `<input>`/`<select>`/`<textarea>` has `<label htmlFor>` or `aria-labelledby`

#### Scenario: Error messages announced
- **WHEN** form validation fails
- **THEN** error message has `role="alert"` and is linked via `aria-describedby`

#### Scenario: Accordion uses proper ARIA
- **WHEN** FAQAccordion renders
- **THEN** each trigger has `aria-expanded`, `aria-controls`, panel has `role="region"`, `aria-labelledby`

#### Scenario: Carousel has live region
- **WHEN** ProductGridCarousel advances
- **THEN** slide change announced via `aria-live="polite"` region

#### Scenario: Toast notifications are live regions
- **WHEN** Toaster shows message
- **THEN** container has `role="status"` or `aria-live="polite"`

### Requirement: Color contrast meets WCAG 2.1 AA
All text and UI elements SHALL meet minimum contrast ratios.

#### Scenario: Body text contrast
- **WHEN** measuring text on background
- **THEN** ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text (18pt+)

#### Scenario: UI component contrast
- **WHEN** measuring borders, icons, focus rings
- **THEN** ratio ≥ 3:1 against adjacent colors

#### Scenario: Both themes compliant
- **WHEN** testing light and dark themes
- **THEN** all contrast requirements met in both

### Requirement: Reduced motion support
Animations SHALL respect `prefers-reduced-motion` (covered in framer-motion-performance spec).

### Requirement: Form validation and error handling
Forms SHALL provide accessible validation with clear error messages.

#### Scenario: Required fields indicated
- **WHEN** field is required
- **THEN** label includes `aria-required="true"` and visual indicator

#### Scenario: Error message linked to field
- **WHEN** validation fails
- **THEN** error message `id` referenced by field's `aria-describedby`

#### Scenario: Error message is descriptive
- **WHEN** showing error
- **THEN** message explains what is wrong and how to fix (not just "Invalid input")

### Requirement: Language and internationalization
Page SHALL declare language and support RTL when needed.

#### Scenario: HTML lang attribute
- **WHEN** rendering page
- **THEN** `<html lang="en">` present

#### Scenario: Direction support
- **WHEN** adding RTL language
- **THEN** CSS uses logical properties (`margin-inline-start` not `margin-left`)