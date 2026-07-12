## ADDED Requirements

### Requirement: High Contrast Background Dot-Matrix Grid
The fixed background dot-matrix grid SHALL use high-contrast color values in both Light and Dark modes and a simplified radial spotlight mask to guarantee grid visibility on all devices.

#### Scenario: Visual validation of grid visibility
- **WHEN** the user is in either Light Mode or Dark Mode and moves their mouse on the screen
- **THEN** they clearly see the spotlight radial grid glow tracking the cursor, without it being washed out or obscured

### Requirement: Theme Adaptive FAQ Accordion Themeing
The FAQ accordion section SHALL utilize transparent background properties and dynamic text primary color variables so it renders correctly in both Light and Dark modes.

#### Scenario: Switching color theme inside FAQ
- **WHEN** the user switches the active theme to Light Mode and views the FAQ section
- **THEN** the section background becomes transparent, and the question texts render in high-contrast dark slate color

### Requirement: Unifying Logo Green Text Gradient
The text-gradient CSS styles SHALL transition from white (or dark slate) into the brand logo's emerald green to unify brand presentation.

#### Scenario: Viewing header and hero texts
- **WHEN** the user views gradient text elements
- **THEN** they see colors fade smoothly from primary text colors into the brand logo's signature green

### Requirement: Spring Tap Bounce Interactions for Pricing
The pricing option cards in the Interactive Estimator SHALL bounce using Framer Motion spring physics when tapped/pressed.

#### Scenario: Tapping a pricing card
- **WHEN** the user taps or clicks on a pricing option card
- **THEN** the card performs a spring-loaded scale bounce animation

### Requirement: Active About Navigation Anchor
The header navigation bar (both desktop and mobile layouts) SHALL include a working "About" link mapped to the `#about` anchor that scrolls the user smoothly to the Team section.

#### Scenario: Clicking About in desktop nav
- **WHEN** the user clicks the "About" link in the header navigation
- **THEN** the window scrolls smoothly to the Team section
