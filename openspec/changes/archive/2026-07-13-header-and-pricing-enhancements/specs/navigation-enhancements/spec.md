# Capability: Navigation Enhancements

## Purpose
Improve the landing page navigation with smooth scrolling, active section tracking, and removal of the dead anchor link.

## ADDED Requirements

### Requirement: Smooth scroll anchoring
The page SHALL scroll smoothly when the user clicks any anchor link.

#### Scenario: Click anchor link
- **WHEN** the user clicks a nav link (e.g., `#services`)
- **THEN** the page scrolls smoothly to the target section

### Requirement: Active section indicator
The nav bar SHALL visually highlight the link corresponding to the section currently visible in the viewport.

#### Scenario: Scrolling past sections
- **WHEN** the user scrolls past multiple sections
- **THEN** the corresponding nav link is styled as active

#### Scenario: Page load
- **WHEN** the page loads at the top
- **THEN** no nav link is highlighted (user is at the hero, which has no nav link)

### Requirement: Remove dead anchor link
The nav bar SHALL NOT include a link to `#about` since the Team section is not rendered on the landing page.

#### Scenario: Nav bar renders
- **WHEN** the Header component renders
- **THEN** no "About" link appears in desktop or mobile nav
