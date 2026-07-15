## Purpose

Define the visual design system for the blog: color palettes, typography, spacing, and depth-zone theming for the dual-mode Tropical Shore (light) / Ocean Depths (dark) identity.

## Requirements

### Requirement: Color palettes define two distinct atmospheric modes
The system SHALL define two complete color palettes — `tropical-shore` (light mode) and `ocean-depths` (dark mode) — as CSS custom properties on `:root` and `[data-theme="dark"]` respectively. The light palette SHALL use warm sand, coral, turquoise, and golden-hour tones. The dark palette SHALL use abyssal blue, bioluminescent cyan, deep coral, and moonlight silver.

#### Scenario: Light mode is the default
- **WHEN** the page loads with no saved theme preference
- **THEN** the `tropical-shore` palette is active

#### Scenario: Dark mode applies via attribute
- **WHEN** `[data-theme="dark"]` is set on the document element
- **THEN** the `ocean-depths` palette is applied

#### Scenario: All color tokens are available as CSS custom properties
- **WHEN** inspecting computed styles
- **THEN** every color value references a `--*` custom property (no hardcoded colors)

### Requirement: Typography uses two typefaces — one display, one body
The system SHALL use a rounded, friendly sans-serif for headings (display) and an elegant, readable serif for body text. Typefaces MUST be self-hosted or loaded via performance-conscious `@font-face`.

#### Scenario: Headings use display font
- **WHEN** inspecting an `h1`, `h2`, or `h3` element
- **THEN** it uses the designated display typeface

#### Scenario: Body text uses serif font
- **WHEN** inspecting a paragraph or article body
- **THEN** it uses the designated body typeface

### Requirement: Spacing scale inherits from a token system
The system SHALL define a consistent spacing scale (`--space-xs` through `--space-3xl`) and a container max-width as CSS custom properties.

#### Scenario: Consistent spacing throughout
- **WHEN** inspecting any section or component padding/margin
- **THEN** it uses a value from the spacing scale

### Requirement: Depth-scroll zones define progressive palette shifts
The system SHALL define at least three depth zones (`surface`, `reef`, `abyss`), each with its own sub-palette. As the user scrolls, the active zone SHALL blend smoothly into the next.

#### Scenario: Surface zone at top of page
- **WHEN** the page is at scroll position 0
- **THEN** the `surface` color zone is active (warm, golden-hour tones)

#### Scenario: Reef zone activates mid-scroll
- **WHEN** the user scrolls past 33% of the page
- **THEN** the `reef` zone's palette begins blending in (coral/turquoise transition)

#### Scenario: Abyss zone at bottom of page
- **WHEN** the user scrolls past 66% of the page
- **THEN** the `abyss` zone's palette begins blending in (deep blue, bioluminescent accents)
