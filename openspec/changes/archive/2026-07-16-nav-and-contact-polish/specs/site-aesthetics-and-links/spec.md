## ADDED Requirements

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

## MODIFIED Requirements

### Requirement: Centered Dropdowns with Descriptions
The navigation dropdown boxes SHALL be positioned with a left-biased offset underneath their toggle links (Services, Our Work) to ensure the dropdown menu remains balanced and fully within the viewport boundaries on smaller screens. Each item inside the dropdown SHALL render a main link title and a short descriptive caption.

#### Scenario: Displaying dropdowns with descriptions
- **WHEN** the user hovers over a dropdown link in the header
- **THEN** the dropdown menu container renders with a left-biased offset under the toggle word

### Requirement: Unified Component Theme Consistency
All UI buttons and call-to-action (element) SHALL use highly rounded capsule layouts (`border-radius: 9999px`). Primary CTA buttons SHALL be colorized in the brand's emerald green accent (`var(--color-accent)`) with a text color of dark theme (`var(--bg-dark)`), and support smooth glassmorphic hover animations.

#### Scenario: Visual inspection of elements
- **WHEN** the user views any button component
- **THEN** the button renders with capsule-like rounded corners
- **AND** primary CTA buttons display in a glowing green background

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
