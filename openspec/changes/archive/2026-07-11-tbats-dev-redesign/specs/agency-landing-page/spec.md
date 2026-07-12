## ADDED Requirements

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
