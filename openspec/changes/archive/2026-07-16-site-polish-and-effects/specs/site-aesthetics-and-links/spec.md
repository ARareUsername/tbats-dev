# site-aesthetics-and-links Specification

## ADDED Requirements

### Requirement: Team / About Member Display
The About page SHALL display exactly four team members. Each member SHALL be represented by an initials `Avatar` (no AI-generated photographic images) and SHALL list their spoken languages as pill `Badge`s rather than a comma-separated string. Every member's role SHALL display as "Web Developer".

#### Scenario: Rendering team members
- **WHEN** the About page is loaded
- **THEN** four member cards render with initials avatars, language pills, and the role "Web Developer" for each.

#### Scenario: No AI imagery
- **WHEN** the About page is loaded
- **THEN** no `<img>` tags referencing photographic or AI-generated avatar files are rendered.

### Requirement: Redundant Pricing CTA Removal
The Pricing page SHALL NOT render the bottom "Every day you wait…" slogan conversion section, as its call-to-action duplicates the per-plan "Get Started" buttons.

#### Scenario: Pricing page end state
- **WHEN** the user navigates to `/pricing`
- **THEN** the page ends at the FAQ section with no additional bottom slogan CTA.

### Requirement: ReadyToGetStarted Light-Mode Background
In light mode, the Ready to Get Started section SHALL use a neutral background (slate-50 `#f8fafc`), not a mint/green tint.

#### Scenario: Light-mode background
- **WHEN** the theme is light
- **THEN** the section background is `#f8fafc`.

### Requirement: ReadyToGetStarted Footer Lock
The Ready to Get Started section SHALL visually lock directly against the Footer with no intervening margin gap.

#### Scenario: No gap between section and footer
- **WHEN** the Ready to Get Started section is followed by the Footer
- **THEN** the section's bottom border meets the footer's top border with zero margin between them.

### Requirement: Standardized Section Spacing
All page sections SHALL use a single shared vertical spacing rhythm (desktop `var(--space-xl)`, mobile `var(--space-lg)`), with no inconsistent one-off inline paddings.

#### Scenario: Consistent rhythm
- **WHEN** the user scrolls between sections
- **THEN** vertical spacing between sections is uniform across landing, about, our-work, and pricing pages.

### Requirement: Site-Wide Cursor Spotlight
On pointer-capable (non-touch) devices, cards SHALL display a cursor-following spotlight highlight driven by the existing `--mouse-x` / `--mouse-y` CSS variables.

#### Scenario: Desktop spotlight
- **WHEN** a user moves the cursor over a card on a desktop (fine-pointer) device
- **THEN** a radial spotlight follows the cursor within the card bounds.

#### Scenario: Touch devices
- **WHEN** the device reports `(pointer: coarse)`
- **THEN** no spotlight effect is rendered.

### Requirement: Scroll Progress Bar
On pointer-capable, non-reduced-motion devices, a thin progress bar SHALL render at the top of the viewport reflecting page scroll percentage.

#### Scenario: Progress tracking
- **WHEN** the user scrolls down the page on a desktop device
- **THEN** the top bar width grows proportionally to scroll position.

#### Scenario: Accessibility / mobile gating
- **WHEN** the device is touch or `prefers-reduced-motion` is set
- **THEN** the scroll progress bar is not rendered.
