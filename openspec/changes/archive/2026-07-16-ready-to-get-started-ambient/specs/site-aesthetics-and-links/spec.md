## ADDED Requirements

### Requirement: Ambient glow and dust on the final CTA
The Ready to Get Started section MUST render an ambient layer behind its
content: a slowly breathing accent radial glow and ~24 drifting accent-tinted
bokeh motes contained within the section.

#### Scenario: Ambient layer is present and contained
- **WHEN** the section is rendered
- **THEN** a breathing accent glow and drifting motes are visible behind the
  content
- **AND** the effects are clipped to the section (no overflow)

#### Scenario: Reduced motion disables ambient animation
- **WHEN** the user prefers reduced motion
- **THEN** the glow and motes are static (no drift/breathe)

### Requirement: Desktop cursor halo on the final CTA
On pointer-capable devices, the section MUST show an accent halo that follows
the pointer; touch devices show ambient only (no cursor halo).

#### Scenario: Cursor halo on desktop
- **WHEN** a pointer moves over the section on a non-touch device
- **THEN** an accent halo tracks the pointer position

#### Scenario: No cursor halo on touch
- **WHEN** the section is viewed on a touch device
- **THEN** no pointer-following halo is shown (ambient remains)

### Requirement: Availability pill on the final CTA
The section MUST display an availability pill (e.g. "Now booking — Q3 2026")
with an accent dot above the buttons, as an honest momentum/status signal.

#### Scenario: Pill is visible
- **WHEN** the section is rendered
- **THEN** an availability pill with an accent dot is shown above the buttons

### Requirement: Icons on the final CTA buttons
Both buttons MUST include a Material Symbols icon inline-left of the label:
`sms` on "Text Us" and `send` on "Send us a Message".

#### Scenario: Button icons present
- **WHEN** the buttons are rendered
- **THEN** "Text Us" shows an `sms` icon and "Send us a Message" shows a
  `send` icon, inline-left of the label
