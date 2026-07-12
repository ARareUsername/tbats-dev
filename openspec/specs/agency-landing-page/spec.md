# agency-landing-page Specification

## Purpose
TBD - created by archiving change tbats-dev-redesign. Update Purpose after archive.
## Requirements
### Requirement: Interactive Layout & Price Estimator
The landing page SHALL render a dynamic, interactive "Layout & Price Estimator" component that updates a visual wireframe and estimated price in real-time.

#### Scenario: Selecting features updates price and mockup
- **WHEN** the user selects "E-Commerce" (adds ₱40,000) and "Custom Animations" (adds ₱15,000)
- **THEN** the estimated price dynamically updates to include these costs
- **AND** the mock browser display updates, rendering visual indicators (like a shopping cart or animation badge) representing the selected modules.

### Requirement: Client Journey Timeline
The page SHALL display a structured 5-step website development process (Specs -> Design -> Develop -> Optimize -> Launch).

#### Scenario: Viewing process steps
- **WHEN** a client scrolls to the process section
- **THEN** they see an animated timeline beginning with "Specs & Discovery" and concluding with "Launch & Support"
- **AND** each step highlights its importance in clear, business-friendly terms.

### Requirement: Philippine Pesos (PHP) Pricing Tiers
The page SHALL feature 3 distinct pricing cards with transparent scopes.

#### Scenario: Reading pricing options
- **WHEN** the user views the pricing section
- **THEN** they see three tiers: "Starter" (₱29,000), "Grow" (₱69,000), and "Scale" (₱129,000+)
- **AND** each card lists exactly what is included (e.g. pages, turnaround time, features) and contains a "Get Started" CTA button.

### Requirement: Consultation Contact Form
The page SHALL contain a contact form to request a consultation call.

#### Scenario: Submitting a valid consultation request
- **WHEN** the user enters their Name, Email, and Project Details, selects a budget tier, and clicks "Schedule Call"
- **THEN** the form validates inputs, triggers a success animation/toast message, and resets the form fields.

### Requirement: Testimonials Section
The page SHALL feature a beautiful layout showing client testimonials.

#### Scenario: Displaying testimonials
- **WHEN** a user reaches the testimonials area
- **THEN** they see a grid of review cards, each displaying a client name, business, star rating, and quote.

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

### Requirement: Top Navigation Contact Link
The header navigation bar (both desktop and mobile drawer layouts) SHALL include a working "Contact" link mapped to the `#contact` anchor.

#### Scenario: Clicking Contact in desktop nav
- **WHEN** the user clicks the "Contact" link in the header navigation
- **THEN** the window scrolls smoothly to the Contact & Consultation section

#### Scenario: Clicking Contact in mobile nav
- **WHEN** the user clicks the "Contact" link in the mobile navigation drawer
- **THEN** the mobile navigation drawer closes
- **AND** the window scrolls smoothly to the Contact & Consultation section

### Requirement: Contact Information Panel
The Contact section SHALL render the agency's primary contact details alongside the consultation form in a responsive split layout.

#### Scenario: Viewing contact details
- **WHEN** the user views the contact section
- **THEN** they see the official agency email (`hello@tbats.dev`) with a clickable mailto link
- **AND** they see the physical studio location (`Pampanga, Philippines`)
- **AND** they see the timezone-aware availability hours (`Mon – Fri, 9:00 AM – 6:00 PM (GMT+8)`)

#### Scenario: Stacking on mobile viewports
- **WHEN** the viewport width is 900px or less
- **THEN** the contact details panel stacks vertically relative to the form

### Requirement: High-Contrast Input Text
All form controls inside the contact form (input, textarea, select) SHALL render input text using the theme-adaptive variable `var(--text-primary)` (resolving to zinc-900 in Light Mode and white in Dark Mode).

#### Scenario: Visual validation of typed text in Light Mode
- **WHEN** the user sets the active theme to Light Mode and clicks inside any contact form field and types text
- **THEN** the typed text renders in a dark, high-contrast, fully visible color

### Requirement: Opaque Form Containers & Input Backdrops
The contact form card and individual textbox elements SHALL render with opaque backgrounds (`var(--bg-dark-end)` and `--bg-input` respectively) to block the background dot matrix grid from showing through.

#### Scenario: Inspecting background grid behind form controls
- **WHEN** the user types inside any form control in either Dark or Light mode
- **THEN** no grid dots are visible inside the textbox, preventing any text readability interference

### Requirement: Visible Section Headings in Light Mode
All section headers, titles, and subheadings (specifically competencies titles in Services List and skill tags in Team Roster) SHALL utilize theme-adaptive text and backgrounds to remain fully visible.

#### Scenario: Navigating capabilities in Light Mode
- **WHEN** the user views the capabilities section in Light Mode
- **THEN** the "Core Competencies" heading is rendered in a readable, contrast-compliant color

