## ADDED Requirements

### Requirement: Featured Projects Background Gradient
The Project Gallery section background on the landing page SHALL display a gentle gradient transitioning from the primary background (white in light mode, dark-bg in dark mode) to a subtle green hue.

#### Scenario: Visual inspection of projects gallery background
- **WHEN** the user views the Featured Projects section on the homepage
- **THEN** the section background displays a soft, eye-strain-friendly green-accented gradient

### Requirement: Global Full-Width Ready CTA
The "Ready to Get Started" call-to-action section SHALL display at the bottom of every single route page directly above the footer. The section SHALL span the full width of the screen, styled in a distinct background color (deep forest black in dark mode, light sage in light mode), and feature matching typography.

#### Scenario: Navigating across routes
- **WHEN** the user views the homepage, About, Pricing, Services, or Case Studies pages
- **THEN** the "Ready to Get Started" block is persistently visible at the bottom of the page content
- **AND** the block fills the entire screen width with a distinctive background tint

## MODIFIED Requirements

### Requirement: Start a Project Conversion Flow
The system SHALL support conversion redirects. All "Start a Project" and "Get Started" buttons SHALL route directly to the `/contact` page. The contact form on the contact page SHALL have its left column (contact details) blending into the page background, while ONLY the right column (form inputs) is enclosed inside a glassmorphic card container. The headers on the contact page SHALL utilize serif typography with gradient color-accented text.

#### Scenario: Clicking Start a Project
- **WHEN** the user clicks "Start a Project" or "Get Started" in the Hero, Pricing, or Navbar
- **THEN** the system redirects the user to the `/contact` path

#### Scenario: Contact page form layout
- **WHEN** the user views the `/contact` page
- **THEN** the contact details display directly on the section background
- **AND** the form fields are wrapped in a rounded, bordered card container
- **AND** the form headers display in a gradient color-shifting serif font

### Requirement: Hero Overlapping Floating Cards
The Hero section SHALL render three separate floating cards on the right side of the screen with a floating translation animation:
1. Google Ranking: Star icon badge showing "#1 Google Ranking"
2. Website Traffic: Custom SVG trend chart indicating "+67% Traffic Surge"
3. Sales volume: Cart icon badge showing "+12 Sales"
The cards SHALL display at enlarged dimensions (e.g., width 300px or larger for badges, and 340px or larger for charts) with increased padding.

#### Scenario: Floating card elements check
- **WHEN** the user views the Hero section on a desktop viewport
- **THEN** the system displays the Google, Traffic, and Sales cards on the right side of the main content
- **AND** the traffic card contains a "+67% Visitors" label
- **AND** the cards are rendered larger than previous designs
