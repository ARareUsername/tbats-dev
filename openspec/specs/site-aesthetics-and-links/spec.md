# site-aesthetics-and-links Specification

## Purpose
TBD - created by archiving change improve-process-aesthetics-and-links. Update Purpose after archive.
## Requirements
### Requirement: High-Res Grain Background
The website background SHALL feature a sharp, high-resolution grainy noise overlay.

#### Scenario: Rendering noise
- **WHEN** the page is loaded
- **THEN** the body displays a subtle, crisp, repeating grain pattern that does not stretch or look blurry.

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

### Requirement: Pampanga Location
The footer SHALL display Pampanga as the agency location.

#### Scenario: Verification of location
- **WHEN** the user views the Footer
- **THEN** the text reads "Pampanga, Philippines".

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

### Requirement: Dropdown Menu Visual Icons
The global navigation bar dropdown links under "Services" and "Our Work" SHALL display a corresponding inline Material Symbols icon next to each link label. Each icon SHALL have a unique styling color.

#### Scenario: Interacting with the header dropdown
- **WHEN** the user opens the "Services" or "Our Work" desktop navigation dropdown menu
- **THEN** each submenu option renders its designated colorful icon to the left of the text label

### Requirement: Unified Component Theme Consistency
All UI buttons and call-to-action (element) SHALL use highly rounded capsule layouts (`border-radius: 9999px`). Primary CTA buttons SHALL be colorized in the brand's emerald green accent (`var(--color-accent)`) with a text color of dark theme (`var(--bg-dark)`), and support smooth glassmorphic hover animations.

#### Scenario: Visual inspection of elements
- **WHEN** the user views any button component
- **THEN** the button renders with capsule-like rounded corners
- **AND** primary CTA buttons display in a glowing green background

### Requirement: Centered Dropdowns with Descriptions
The navigation dropdown boxes SHALL be positioned with a left-biased offset underneath their toggle links (Services, Our Work) to ensure the dropdown menu remains balanced and fully within the viewport boundaries on smaller screens. Each item inside the dropdown SHALL render a main link title and a short descriptive caption.

#### Scenario: Displaying dropdowns with descriptions
- **WHEN** the user hovers over a dropdown link in the header
- **THEN** the dropdown menu container renders with a left-biased offset under the toggle word

### Requirement: Local Peso Pricing Packages
The pricing page SHALL showcase three distinct packages priced in Philippine Peso (PHP) with setup fees:
1. Starter Plan: ₱1,499/mo (₱2,999 setup) for single-page landing site, domain, hosting, and 1 hour of monthly support.
2. Growth Plan (Most Popular): ₱2,999/mo (₱4,999 setup) for a standard 5-to-8 page business website and 3 hours of monthly support. The Growth Plan list SHALL declare "Everything in Starter Plan" as its first feature and declare improved multi-page features.
3. Merchant Plan: ₱5,999/mo (₱9,999 setup) for e-commerce, payment gateways, and 5 hours of monthly support.
The Growth Plan card SHALL be visually emphasized with a glowing border outline, a different highlighting color, and a taller/larger vertical size. Price headers SHALL utilize a tall serif font face (`Playfair Display`). All feature checklist items containing technical terminology SHALL provide plain-language, non-technical explanatory descriptions inside hoverable tooltips. The pricing page introduction header copy SHALL compare costs referencing a ₱15,000 to ₱30,000 upfront agency range.

#### Scenario: Viewing the pricing plans
- **WHEN** the user visits the `/pricing` route
- **THEN** the system displays the three tiers (Starter, Growth, Merchant) with their respective PHP pricing
- **AND** the prices render in a tall serif font face
- **AND** the first benefit of the Growth Plan lists "Everything in Starter Plan"
- **AND** hovering over the info tooltips reveals a plain-language explanation of terms
- **AND** the intro text references a ₱15,000 to ₱30,000 upfront fee range

### Requirement: Standard Inclusions Grid
The pricing page SHALL display a standard inclusions section labeled "Every Plan Includes" presenting Custom Design, Domain/Hosting/Security, Mobile Responsive, and Ongoing Support with short description cards.

#### Scenario: Inclusions section visibility
- **WHEN** the user scrolls down the pricing page
- **THEN** the system displays the "Every Plan Includes" section outlining standard items included in all subscription packages

### Requirement: Custom Package and Modal CTA
The pricing page SHALL display a "Need Something Different?" custom pricing block with an action link "Get Started" that triggers the global blurred Contact Modal.

#### Scenario: Clicking Get Started under custom pricing
- **WHEN** the user clicks "Get Started" under the custom pricing block
- **THEN** the system launches the global Contact Modal with a blurred background

### Requirement: Bottom Slogan Conversion Section
The pricing page bottom SHALL render a separately colored slogan section displaying: "Every day you wait is a day your competitors win. Get your website preview within 5 business days." with "Text Us" (SMS link) and "Send us a Message" (opens Contact Modal) buttons.

#### Scenario: Clicking bottom slogan CTA
- **WHEN** the user clicks "Send us a Message" at the bottom of the pricing page
- **THEN** the system launches the global Contact Modal

### Requirement: About Page Overhaul and Multilingual Team
The `/about` route page SHALL showcase our agency story and profile. At the top of the header, the page SHALL display a "Since 2026" marker badge. The page header title and subtitle SHALL introduce the team using a paraphrased message focusing on high-converting websites. The team section title and subtitle SHALL introduce our multilingual strategist builders. The page SHALL render a responsive 4-column card grid for the developers of the company. Each developer card SHALL display:
1. Custom 3D character avatar image positioned on top.
2. Developer name.
3. Developer role.
4. List of spoken languages representing a multilingual strategist team.
The bottom of the About page SHALL render an "Our Story" section with detailed narrative placeholder paragraphs.

#### Scenario: Viewing the About Us page
- **WHEN** the user visits the `/about` path
- **THEN** the header displays "Since 2026" and the paraphrased title
- **AND** the page displays a 4-column grid of developers showing their avatars on top, name, role, and languages spoken
- **AND** the bottom section displays "Our Story" with detailed placeholders

### Requirement: BentoServices Static Grid Background
The BentoServices section SHALL display a subtle, static, neutral-gray dot-grid background instead of a Philippines silhouette image.

#### Scenario: No silhouette image
- **WHEN** the BentoServices section is rendered
- **THEN** no Philippines image (`philippines.png`) is used as a background layer.

#### Scenario: Neutral grid texture
- **WHEN** the BentoServices section is rendered
- **THEN** a static dot grid is shown using `var(--grid-dot-color)` (neutral gray), evenly across the section at low opacity, with no cursor-based mask.

#### Scenario: Theme awareness
- **WHEN** the theme switches between light and dark
- **THEN** the grid color follows `--grid-dot-color` (light gray in dark mode, dark gray in light mode) without additional color logic.

### Requirement: Philippines Dot-Grid Spotlight
The BentoServices section SHALL display a dot-grid arranged in the shape of the Philippines, revealed by a soft cursor-following spotlight, instead of a flat static grid or a filled silhouette image.

#### Scenario: Dots confined to Philippines shape
- **WHEN** the BentoServices section is rendered
- **THEN** the background dot pattern is masked to the Philippines silhouette so dots appear only within the country's outline.

#### Scenario: Soft spotlight reveal
- **WHEN** the user moves the cursor over the BentoServices section
- **THEN** a soft radial glow (matching the global dot-matrix feel, ~250px falloff) reveals the Philippines-shaped dots near the cursor, while dots outside the glow remain faint.

#### Scenario: Reuses global pointer tracking
- **WHEN** the section spotlight is computed
- **THEN** it uses the existing global `--mouse-x` / `--mouse-y` CSS variables and adds no new JavaScript mouse listener.

#### Scenario: Theme awareness
- **WHEN** the theme switches between light and dark
- **THEN** the dot color follows `--grid-dot-color` (light gray in dark mode, dark gray in light mode) with no additional color logic.

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

### Requirement: Team / About Member Display
The About page SHALL display exactly four team members. Each member SHALL be represented by an initials `Avatar` (no AI-generated photographic images) and SHALL list their spoken languages as pill `Badge`s rather than a comma-separated string. Every member's role SHALL display as "Web Developer".

#### Scenario: Rendering team members
- **WHEN** the About page is loaded
- **THEN** four member cards render with initials avatars, language pills, and the role "Web Developer" for each.

#### Scenario: No AI imagery
- **WHEN** the About page is loaded
- **THEN** no `<img>` tags referencing photographic or AI-generated avatar files are rendered.

### Requirement: Redundant Pricing CTA Removal
The Pricing page SHALL NOT render the bottom "Every day you wait…" slogan conversion section, as its call-to-action duplicates the per-plan "Get Started" buttons.

#### Scenario: Pricing page end state
- **WHEN** the user navigates to `/pricing`
- **THEN** the page ends at the FAQ section with no additional bottom slogan CTA.

### Requirement: ReadyToGetStarted Light-Mode Background
In light mode, the Ready to Get Started section SHALL use a neutral background (slate-50 `#f8fafc`), not a mint/green tint.

#### Scenario: Light-mode background
- **WHEN** the theme is light
- **THEN** the section background is `#f8fafc`.

### Requirement: ReadyToGetStarted Footer Lock
The Ready to Get Started section SHALL visually lock directly against the Footer with no intervening margin gap.

#### Scenario: No gap between section and footer
- **WHEN** the Ready to Get Started section is followed by the Footer
- **THEN** the section's bottom border meets the footer's top border with zero margin between them.

### Requirement: Standardized Section Spacing
All page sections SHALL use a single shared vertical spacing rhythm (desktop `var(--space-xl)`, mobile `var(--space-lg)`), with no inconsistent one-off inline paddings.

#### Scenario: Consistent rhythm
- **WHEN** the user scrolls between sections
- **THEN** vertical spacing between sections is uniform across landing, about, our-work, and pricing pages.

### Requirement: Site-Wide Cursor Spotlight
On pointer-capable (non-touch) devices, cards SHALL display a cursor-following spotlight highlight driven by the existing `--mouse-x` / `--mouse-y` CSS variables.

#### Scenario: Desktop spotlight
- **WHEN** a user moves the cursor over a card on a desktop (fine-pointer) device
- **THEN** a radial spotlight follows the cursor within the card bounds.

#### Scenario: Touch devices
- **WHEN** the device reports `(pointer: coarse)`
- **THEN** no spotlight effect is rendered.

### Requirement: Scroll Progress Bar
On pointer-capable, non-reduced-motion devices, a thin progress bar SHALL render at the top of the viewport reflecting page scroll percentage.

#### Scenario: Progress tracking
- **WHEN** the user scrolls down the page on a desktop device
- **THEN** the top bar width grows proportionally to scroll position.

#### Scenario: Accessibility / mobile gating
- **WHEN** the device is touch or `prefers-reduced-motion` is set
- **THEN** the scroll progress bar is not rendered.

