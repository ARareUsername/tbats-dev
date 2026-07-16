## ADDED Requirements

### Requirement: Dropdown Navigation Behavior
The navigation bar SHALL support dropdown menus for elements with multiple destinations: Services (Web Design, SEO, AI Solutions, 1-on-1 Website Help) and Our Work (Case Studies, Portfolio).

#### Scenario: Dropdown interaction on desktop
- **WHEN** the user hovers or clicks on the "services" or "our work" menu items on a desktop viewport
- **THEN** a dropdown menu containing the respective sub-links is displayed with a smooth animation

#### Scenario: Dropdown interaction on mobile
- **WHEN** the user opens the mobile menu and taps "services" or "our work"
- **THEN** the menu expands vertically to reveal the sub-links

### Requirement: Dropdown Appearance
The desktop navigation dropdown menus SHALL display with a solid, opaque background (no transparency or glassmorphic blur) and SHALL align left with the first letter of the parent nav item.

#### Scenario: Visual validation of dropdowns
- **WHEN** the user hovers over a dropdown menu item
- **THEN** the dropdown menu renders with a solid background and left-aligns with the first letter of the nav item

### Requirement: Underline Prevention
Hovering over the brand logo text ("tbats.dev") or its icon SHALL NOT apply any underline styling.

#### Scenario: Hovering over the logo
- **WHEN** the user hovers over the brand logo or its icon
- **THEN** no underline text-decoration is applied

### Requirement: Smooth Page Transitions
Changing routes anywhere on the site SHALL trigger a smooth fade and slide transition animation.

#### Scenario: Navigating pages
- **WHEN** the user navigates to another page
- **THEN** the transition renders a smooth fade and slide animation

### Requirement: Client-Side Theme Selection
Toggling the light/dark mode theme SHALL execute instantly on the client side via CSS class modification and persist the user's choice in a local cookie.

#### Scenario: Toggling the theme
- **WHEN** the user clicks the theme toggle button
- **THEN** the theme transitions instantly on the client side without flash and sets a cookie

## MODIFIED Requirements

### Requirement: Working Navigation Anchors
The global navigation bar links SHALL be ordered as: about, services, our work, pricing, contact. Selecting these links or their dropdown elements SHALL navigate the user to their respective dedicated pages/routes.

#### Scenario: Navigating to About
- **WHEN** the user clicks "about" in the navigation bar
- **THEN** the system navigates to the `/about` route

#### Scenario: Navigating to Services Sub-links
- **WHEN** the user selects "Web Design" under the services dropdown
- **THEN** the system navigates to `/services/web-design`

#### Scenario: Clicking CTA buttons
- **WHEN** the user clicks "Start a Project" in the header
- **THEN** the system opens the Contact Modal overlay showing the get in touch box with a blurred background
