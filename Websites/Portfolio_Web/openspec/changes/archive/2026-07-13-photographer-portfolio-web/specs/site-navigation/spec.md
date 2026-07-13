## ADDED Requirements

### Requirement: Navbar with logo and links
The Navbar SHALL display a logo/brand name on the left and navigation links (Portfolio, About, Contact) on the right. It SHALL maintain a semi-transparent background to preserve scroll content visibility.

#### Scenario: Navbar renders with links
- **WHEN** the page loads
- **THEN** the user sees a brand/logo on the left and at least three navigation links on the right

### Requirement: Mobile hamburger menu
On viewports narrower than 640px, the Navbar SHALL collapse navigation links into a hamburger toggle button. Clicking the toggle SHALL show/hide a vertical menu overlay.

#### Scenario: Hamburger visible on mobile
- **WHEN** the viewport is less than 640px
- **THEN** navigation links are hidden and a hamburger icon is displayed

#### Scenario: Mobile menu opens
- **WHEN** the user clicks the hamburger icon
- **THEN** a vertical menu slides in with the navigation links

#### Scenario: Mobile menu closes
- **WHEN** the user clicks a navigation link or clicks the hamburger again
- **THEN** the mobile menu closes

### Requirement: Navbar scroll appearance
The Navbar SHALL have a transparent background at the very top of the page and transition to a solid dark background after scrolling past the hero section.

#### Scenario: Background changes on scroll
- **WHEN** the page is scrolled past 100px from the top
- **THEN** the Navbar background becomes solid dark
