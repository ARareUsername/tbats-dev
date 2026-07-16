## ADDED Requirements

### Requirement: Custom tooltip pop-out on pricing info icons
The pricing plan benefit info icons MUST show a custom, on-brand pop-out
tooltip (not the native `title` tooltip) on hover and keyboard focus.

#### Scenario: Custom pop-out shows
- **WHEN** a user hovers or focuses an info icon on a pricing benefit
- **THEN** a styled pop-out bubble with the benefit description is shown
- **AND** no native OS tooltip appears (custom cursor stays active)

### Requirement: Tooltip accessible via keyboard
The pricing info icon tooltip MUST be reachable and triggerable via keyboard
focus.

#### Scenario: Keyboard reveal
- **WHEN** a keyboard user tabs to an info icon
- **THEN** the pop-out tooltip is shown
