## ADDED Requirements

### Requirement: Transparent Section Backgrounds
The landing page's main layout sections, specifically the Services list and Client Timeline components, SHALL have transparent background properties to reveal the fixed background spotlight dot-matrix grid.

#### Scenario: Scrolling past Services or Timeline
- **WHEN** the user scrolls past the Services or Process timeline sections
- **THEN** the background dot-matrix grid and spotlight highlight remain visible and un-obscured behind the text and cards

### Requirement: Horizontal Section Separators
The landing page layout SHALL render thin, low-opacity horizontal separator lines between sections to establish clear visual boundaries when using a uniform background.

#### Scenario: Visual separation check
- **WHEN** the user views the space between the Services, Portfolio, and Process timeline sections
- **THEN** they see a 1px border line aligned with the container width separating each block

### Requirement: Layman Pricing Feature Lists
The pricing card elements in the pricing calculator SHALL translate technical parameters into clear business benefits.

#### Scenario: Inspecting pricing features
- **WHEN** the user views the pricing cards
- **THEN** they see feature details written in customer-focused language (e.g. "5-Page brochure website", "Self-editable content", "Google Search ready") rather than technical labels

### Requirement: Team Profile Section
The landing page SHALL feature an "About Us" profile section mapped to anchor `#about` that introduces the core 5-member studio team to build professional credibility.

#### Scenario: Viewing team member cards
- **WHEN** the user navigates or scrolls to the `#about` section
- **THEN** they see profile cards for the core 5 developers:
  1. Karl Bondoc (Lead Web Engineer)
  2. Emmanuel Ken Almendra (Lead UI/UX Architect)
  3. Mark Angelo Mendoza (React Platform Specialist)
  4. Daile Paragas (Performance & SEO Analyst)
  5. Kyle Cyrill Lumacad (Systems & Backend Developer)
- **AND** each card contains their name, role title, professional bio, and links to LinkedIn/GitHub
