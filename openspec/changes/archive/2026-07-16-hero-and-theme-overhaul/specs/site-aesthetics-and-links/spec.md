## ADDED Requirements

### Requirement: Dropdown Menu Visual Icons
The global navigation bar dropdown links under "Services" and "Our Work" SHALL display a corresponding inline Material Symbols icon next to each link label. Each icon SHALL have a unique styling color:
- Web Design: desktop_windows (Emerald Green)
- SEO & Growth: query_stats (Ocean Blue)
- AI & Automations: psychology (Violet Purple)
- 1-on-1 Support: support_agent (Amber Gold)
- Case Studies: menu_book (Rose Pink)
- Portfolio: grid_view (Teal)

#### Scenario: Interacting with the header dropdown
- **WHEN** the user opens the "Services" or "Our Work" desktop navigation dropdown menu
- **THEN** each submenu option renders its designated colorful icon to the left of the text label

### Requirement: Unified Component Theme Consistency
All UI components, cards, inputs, and buttons SHALL follow consistent tokens for borders, border-radii, backgrounds, and hover transitions across both light and dark modes to maintain ultimate visual coherence.

#### Scenario: Visual inspection of elements
- **WHEN** the user navigates across different sections of the website
- **THEN** all cards render with `--radius-lg` (16px) corners
- **AND** borders utilize standard color tokens `--border-color` with smooth transition speeds
- **AND** hover highlight colors utilize theme-compliant glows
