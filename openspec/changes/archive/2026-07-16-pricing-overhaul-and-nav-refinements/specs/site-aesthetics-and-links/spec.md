## ADDED Requirements

### Requirement: Centered Dropdowns with Descriptions
The navigation dropdown boxes SHALL be centered below their toggle links (Services, Our Work) so that the toggle word is directly above the dropdown container. Each item inside the dropdown SHALL render a main link title and a short descriptive caption underneath the title. The dropdown box width SHALL be expanded to display descriptions legibly.

#### Scenario: Displaying dropdowns with descriptions
- **WHEN** the user hovers over a dropdown link in the header
- **THEN** the dropdown menu container renders center-aligned directly beneath the hover word
- **AND** each menu choice displays its icon, a title, and a short caption describing the option

### Requirement: Local Peso Pricing Packages
The pricing page SHALL showcase three distinct packages priced in Philippine Peso (PHP) with setup fees:
1. Starter Plan: ₱1,499/mo (₱2,999 setup) for single-page landing site, domain, hosting, and 1 hour of monthly support.
2. Growth Plan (Most Popular): ₱2,999/mo (₱4,999 setup) for a 5-to-8 page business website and 3 hours of monthly support.
3. Merchant Plan: ₱5,999/mo (₱9,999 setup) for e-commerce, payment gateways, and 5 hours of monthly support.
The Growth Plan card SHALL be visually emphasized with a glowing border outline, a different highlighting color, and a taller/larger vertical size.

#### Scenario: Viewing the pricing plans
- **WHEN** the user visits the `/pricing` route
- **THEN** the system displays the three tiers (Starter, Growth, Merchant) with their respective PHP pricing, setup fees, and feature checklists
- **AND** the Growth Plan displays as visually larger with a glow highlight

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

## MODIFIED Requirements

### Requirement: Dropdown Menu Visual Icons
The global navigation bar dropdown links under "Services" and "Our Work" SHALL display a corresponding inline Material Symbols icon next to each link label. Each icon SHALL have a unique styling color.

#### Scenario: Interacting with the header dropdown
- **WHEN** the user opens the "Services" or "Our Work" desktop navigation dropdown menu
- **THEN** each submenu option renders its designated colorful icon to the left of the text label
