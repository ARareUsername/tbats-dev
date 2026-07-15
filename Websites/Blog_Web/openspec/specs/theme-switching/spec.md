## Purpose

Define the light/dark theme switching behavior, persistence, transition animations, and accessibility considerations for the blog's dual-mode experience.

## Requirements

### Requirement: Theme toggle button is persistently visible
The system SHALL display a theme toggle button in the navbar at all viewport widths. The button SHALL use an icon indicating the current theme — a sun icon in dark mode (suggesting "switch to shore") and a moon/water icon in light mode (suggesting "dive into depths").

#### Scenario: Toggle shows sun in dark mode
- **WHEN** `data-theme="dark"` is active
- **THEN** the toggle button displays a sun icon

#### Scenario: Toggle shows moon/water in light mode
- **WHEN** `data-theme` is not set (light mode)
- **THEN** the toggle button displays a moon or water-drop icon

### Requirement: Toggle switches theme immediately
Clicking the toggle SHALL immediately switch between `tropical-shore` (light) and `ocean-depths` (dark) modes. The theme SHALL persist across page loads via `localStorage`.

#### Scenario: Click toggles theme
- **WHEN** user clicks the theme toggle
- **THEN** the theme switches from light to dark (or dark to light) immediately

#### Scenario: Theme persists on reload
- **WHEN** user toggles theme and refreshes the page
- **THEN** the last-selected theme is restored

### Requirement: Theme transition animates smoothly
When switching themes, colors SHALL transition with a smooth animation (0.4-0.6s ease). This creates the physical sensation of submerging (light→dark) or surfacing (dark→light).

#### Scenario: Light to dark transitions smoothly
- **WHEN** user switches from light to dark mode
- **THEN** colors animate over ~0.5s rather than snapping instantly

### Requirement: Depth-scroll and theme-switching compose together
When the user switches themes while scrolled to a given depth zone, the zone palette SHALL also switch to its dark-mode equivalent. The depth zone and theme mode are independent axes that compose.

#### Scenario: Dark mode at reef zone shows dark-reef palette
- **WHEN** user is scrolled to the reef zone in dark mode
- **THEN** the colors use the dark-mode variant of the reef palette

### Requirement: System respects prefers-reduced-motion
If the user's system has `prefers-reduced-motion: reduce` set, the theme transition animation SHALL be disabled (instant swap). Depth-scroll transitions MAY remain active but SHOULD be simplified.

#### Scenario: Reduced motion disables transition animation
- **WHEN** `prefers-reduced-motion: reduce` is set
- **THEN** theme switch is instant with no animation

### Requirement: Theme state is reflected in URL or early DOM
To prevent flash of unstyled content, the theme SHALL be applied synchronously before the first paint. A script in `<head>` SHALL read `localStorage` and set `data-theme` before the page renders.

#### Scenario: No flash of wrong theme
- **WHEN** the page loads with a saved dark theme preference
- **THEN** no flash of light mode occurs before the dark mode is applied
