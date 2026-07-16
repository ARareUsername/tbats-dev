## ADDED Requirements

### Requirement: Contact form phone field with PH formatting
The contact form MUST replace the plan dropdown with an optional phone input
using Philippine formatting: a pre-filled `+63 ` prefix and a client mask that
groups entered digits as `+63 9XX XXX XXXX`.

#### Scenario: Phone field masks input
- **WHEN** a user types digits into the phone field
- **THEN** the field shows a `+63 ` prefix and groups the digits in PH format
- **AND** the field is optional (submitting without it is allowed)

### Requirement: Contact page Google-reviews block
The contact page MUST show a reviews block with a "5.0 on Google" header, a
"See Why Clients Choose Us" subtitle, a Google disclaimer line, and two
placeholder review cards each with a star rating and a Google badge.

#### Scenario: Reviews block renders
- **WHEN** the contact page is viewed
- **THEN** a reviews block with the Google header, disclaimer, and two cards
  is shown above the contact CTA

### Requirement: Contact-specific CTA replaces global CTA on contact page
On the contact route, the global Ready to Get Started CTA MUST be hidden and a
contact-specific CTA ("Prefer to Text? We're Here") with Text Us / Send Us a
Message buttons MUST be shown instead.

#### Scenario: Bespoke CTA on contact
- **WHEN** the user is on the /contact route
- **THEN** the global Ready to Get Started section is not rendered
- **AND** the contact-specific "Prefer to Text?" CTA is shown

## MODIFIED Requirements

### Requirement: Contact form name label
The contact form name field label MUST read "Full Name".

#### Scenario: Label updated
- **WHEN** the contact form is rendered
- **THEN** the name field shows the label "Full Name"

### Requirement: Contact form field alignment
The Name and Email inputs in the contact form MUST be vertically top-aligned
and share an identical box model so they align with the full-width fields
below.

#### Scenario: Inputs aligned
- **WHEN** the contact form is rendered
- **THEN** the Name and Email inputs are top-aligned and equal in size
