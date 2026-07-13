## ADDED Requirements

### Requirement: Hero section covers full viewport
The hero section SHALL occupy 100% of the viewport height (100vh) with a background that fills the entire area. It SHALL include a gradient overlay for text readability.

#### Scenario: Hero fills viewport
- **WHEN** the page loads
- **THEN** the hero section is exactly 100vh tall with a dark gradient background

### Requirement: Hero text content
The hero section SHALL display a headline (photographer's name), a tagline/subtitle describing the service, and a call-to-action button.

#### Scenario: Hero text renders
- **WHEN** the hero section is visible
- **THEN** the user sees a headline, a subtitle underneath, and a CTA button

#### Scenario: CTA button is interactive
- **WHEN** the user clicks the CTA button
- **THEN** the page scrolls smoothly to the next section (or opens a contact modal — TBD)

### Requirement: Hero responsive text sizing
Hero text SHALL scale appropriately across breakpoints. Headline SHALL be at least 2.5rem on mobile and 4rem on desktop.

#### Scenario: Text scales on desktop
- **WHEN** the viewport is wider than 1024px
- **THEN** the headline font size is at least 4rem
