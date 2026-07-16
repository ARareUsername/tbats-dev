## ADDED Requirements

### Requirement: Plain nav links underline on hover
Header nav links without a dropdown (About, Pricing, Contact) MUST show a
subtle underline on hover to signal they are pressable.

#### Scenario: Hover underline
- **WHEN** the user hovers a plain nav link
- **THEN** an underline appears under the link text

### Requirement: Dropdown menus render as word-centered speech bubbles
Desktop dropdown menus MUST render as speech bubbles whose tail is horizontally
centered on the trigger word (not the arrow).

#### Scenario: Bubble tail centers on word
- **WHEN** a desktop dropdown is open
- **THEN** the menu is a rounded speech bubble with a tail
- **AND** the tail's center aligns to the horizontal center of the trigger word

## MODIFIED Requirements

### Requirement: Dropdown toggle hover affordance
Dropdown toggles MUST NOT show an underline on hover (the speech bubble is
their affordance); the arrow may still indicate expansion.

#### Scenario: No underline on toggle
- **WHEN** the user hovers a dropdown toggle
- **THEN** no underline appears on the toggle label
