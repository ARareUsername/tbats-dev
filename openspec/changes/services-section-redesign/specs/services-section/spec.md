## ADDED Requirements

### Requirement: Client-outcome messaging

The services section SHALL present each service pillar using client-outcome language rather than technical stack descriptions.

#### Scenario: Pillar taglines are outcome-focused
- **WHEN** a visitor reads the three service pillar titles
- **THEN** each title describes a business outcome ("A Brand That Stands Out", "A Website That Works for You", "Customers Who Find You Online")

### Requirement: Bento grid layout

The services section SHALL render service cards in an asymmetric bento grid where the third card spans the full width below the first two.

#### Scenario: Desktop bento layout
- **WHEN** viewed on viewport width > 768px
- **THEN** the first two cards appear side by side and the third card spans the full row below them

#### Scenario: Mobile stacking
- **WHEN** viewed on viewport width ≤ 768px
- **THEN** all three cards stack vertically as full-width cards

### Requirement: Metaphor icons

Each service pillar SHALL display a Material Symbols icon that reinforces its outcome metaphor.

#### Scenario: Icons render
- **WHEN** a visitor views the services section
- **THEN** each card displays an icon (palette, rocket_launch, trending_up) within a brand-colored container

### Requirement: Client-language competencies

The competency list under each pillar SHALL use plain language understandable by a non-technical business owner.

#### Scenario: Competencies are plain language
- **WHEN** a visitor reads the bullet list under a service pillar
- **THEN** each item describes a benefit in plain terms without technical jargon (e.g., "A fast, modern website" instead of "React & Next.js Builds")

### Requirement: Narrative section header

The services section SHALL display a narrative section header with badge, title, and subtitle.

#### Scenario: Header hierarchy
- **WHEN** a visitor scrolls to the services section
- **THEN** they see a small "Design · Code · Grow" badge, followed by "What We Build" as the main heading, followed by "From Concept to Conversion" as the subtitle
