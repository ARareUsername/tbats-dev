## ADDED Requirements

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
