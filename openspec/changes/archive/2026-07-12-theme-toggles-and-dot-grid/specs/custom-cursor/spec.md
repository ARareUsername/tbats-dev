## ADDED Requirements

### Requirement: Interactive Cursor Hover States
The custom cursor component SHALL dynamically adjust its dimensions, visual borders, and blending mode when hovering over interactive elements (e.g., buttons, anchor links, form inputs, accordion headers, and theme toggles) to provide feedback.

#### Scenario: Hovering over an interactive element
- **WHEN** the mouse pointer hovers over a button or theme toggle
- **THEN** the custom cursor container performs a spring scale transition, adjusts its border thickness, and applies a `difference` mix-blend-mode for readability
