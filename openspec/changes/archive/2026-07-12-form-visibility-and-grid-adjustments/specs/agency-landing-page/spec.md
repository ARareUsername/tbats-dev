## ADDED Requirements

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
