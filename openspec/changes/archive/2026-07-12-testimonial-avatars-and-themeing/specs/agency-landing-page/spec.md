## ADDED Requirements

### Requirement: High-Contrast Testimonial Avatars
The testimonial card elements SHALL render circular initials avatar badges next to the client author name. These badges SHALL dynamically adapt their background fill, border contrast, and text color based on the active color theme to remain highly visible.

#### Scenario: Visual validation of testimonial name icons
- **WHEN** the user navigates to the Testimonials section in either Light Mode or Dark Mode
- **THEN** they see circular initials avatars next to each client name rendering with high-contrast outlines and readable text colors

### Requirement: Theme Adaptive Step Bubble Shadows
The timeline step numbering bubbles SHALL utilize a theme-adaptive drop shadow variable that reduces shadow opacity in Light Mode to prevent a dark smudged appearance on light backdrops.

#### Scenario: Inspecting timeline step numbers
- **WHEN** the user switches the active theme to Light Mode and views the timeline
- **THEN** the step numbering bubbles display a very light, soft shadow or thin border without harsh dark gradients

### Requirement: Neutral Slate-Free Light Mode Accents
The primary buttons and dark text elements in Light Mode SHALL utilize a neutral gray/zinc color scheme to eliminate any blue slate tint.

#### Scenario: Inspecting button colors in Light Mode
- **WHEN** the active theme is Light Mode
- **THEN** the primary buttons and dark text elements render in neutral charcoal/gray (#18181b / #4b5563) instead of blueish slate (#0f172a / #475569)

### Requirement: Thicker Theme Toggle Switch Borders
The Light/Dark mode toggle buttons in the header SHALL have a border weight of exactly 1.5px to improve visual definition.

#### Scenario: Inspecting toggle switches
- **WHEN** the user views the header menu
- **THEN** the Light/Dark toggle buttons display a clear 1.5px outline

### Requirement: Branded Contact Email Dispatch via EmailJS
The consultation request form SHALL connect to EmailJS to dispatch submissions directly to `tbats.bondoc.karl@gmail.com`. The submitted payload SHALL include the sender name, email, budget selection, and project description, formatted in an HTML email template matching the website's dark grid branding.

#### Scenario: Submitting a valid consultation request
- **WHEN** the user inputs all required fields and clicks "Start a Project"
- **THEN** the button shifts to a disabled loading state
- **AND** the payload is dispatched via EmailJS to `tbats.bondoc.karl@gmail.com`
- **AND** a success overlay is displayed to the user
