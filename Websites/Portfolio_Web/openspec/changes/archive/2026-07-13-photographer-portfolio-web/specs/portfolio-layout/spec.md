## ADDED Requirements

### Requirement: Page shell layout
The page SHALL consist of three stacked sections: Navbar at top, main content in the middle, Footer at bottom. The Navbar SHALL be fixed to the viewport top and remain visible during scroll.

#### Scenario: Layout renders correctly
- **WHEN** the page loads
- **THEN** the Navbar appears at the top, main content fills the remaining viewport space, and Footer appears at the bottom after scrolling

#### Scenario: Navbar stays fixed on scroll
- **WHEN** the user scrolls the page
- **THEN** the Navbar remains fixed at the top of the viewport

### Requirement: Responsive breakpoints
The layout SHALL support three breakpoints: mobile (< 640px), tablet (640px–1024px), desktop (> 1024px). Components SHALL stack vertically on all breakpoints with appropriate spacing.

#### Scenario: Mobile layout
- **WHEN** the viewport is less than 640px wide
- **THEN** all sections stack full-width with 16px padding on each side

### Requirement: Dark theme
The page SHALL use a dark color scheme by default. CSS custom properties SHALL define all theme colors.

#### Scenario: Dark theme applied
- **WHEN** the page renders
- **THEN** the background is dark (#0a0a0a or similar), text is light (#f5f5f5 or similar)
