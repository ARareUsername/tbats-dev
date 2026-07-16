# Capability: Landing Page

## Purpose
TBD
## Requirements
### Requirement: Localhost Hosting with Vite
The application SHALL be hosted locally using Vite's dev server.

#### Scenario: Server launch
- **WHEN** the developer starts the Vite dev server with `npm run dev`
- **THEN** the landing page becomes accessible on the local host (defaulting to http://localhost:5173 or similar port)

### Requirement: True Black Background
The system SHALL display a true black background (#000000) with a subtle static noise overlay to provide a premium tactile feel.

#### Scenario: Page load
- **WHEN** the user visits the landing page
- **THEN** the background renders as black with a 3% opacity SVG noise filter

### Requirement: Glowing Cursor Trailer
The system SHALL implement a custom cursor trailer that smoothly follows the mouse position.

#### Scenario: Moving the mouse
- **WHEN** the user moves their mouse across the page
- **THEN** a soft, glowing orb follows the cursor with slight spring physics

### Requirement: Bento-Box Agency Services
The system SHALL display features and services in a modern, interactive CSS Grid bento-box layout. It SHALL begin with a small "What We Do" header label, followed by a large "Web Design Services in Pampanga" title, and a subtitle description. Each bento box card SHALL display a clean, glassmorphic layout accompanied by appropriate minimalist graphics. The Bento Box section background SHALL display a parallax image backdrop of the Philippines map. The 1-on-1 Support card description SHALL read: "Live consulation sessions with our web developers. Change anything on your website without any additional fees." The monospace coding graphic inside the support card SHALL display at an enlarged size.

#### Scenario: Hovering over a service
- **WHEN** the user hovers over a service grid item
- **THEN** the item slightly scales up and its borders illuminate

#### Scenario: Bento box headings
- **WHEN** the user views the bento box section
- **THEN** the section displays "What We Do", "Web Design Services in Pampanga", and the descriptive subtitle above the grid
- **AND** the background displays a Philippines map silhouette

### Requirement: Start a Project Conversion Flow
The system SHALL support conversion redirects. All "Start a Project" and "Get Started" buttons SHALL route directly to the `/contact` page. The contact form on the contact page SHALL have its left column (contact details) blending into the page background, while ONLY the right column (form inputs) is enclosed inside a glassmorphic card container. The headers on the contact page SHALL utilize serif typography with gradient color-accented text.

#### Scenario: Clicking Start a Project
- **WHEN** the user clicks "Start a Project" or "Get Started" in the Hero, Pricing, or Navbar
- **THEN** the system redirects the user to the `/contact` path

#### Scenario: Contact page form layout
- **WHEN** the user views the `/contact` page
- **THEN** the contact details display directly on the section background
- **AND** the form fields are wrapped in a rounded, bordered card container
- **AND** the form headers display in a gradient color-shifting serif font

### Requirement: Premium Vignette Background
The system SHALL display a deep grey radial vignette background across the landing page to provide visual depth.

#### Scenario: Page load
- **WHEN** the user visits the landing page
- **THEN** the background renders as a radial gradient transitioning from a lighter deep grey in the center to a darker near-black grey on the edges

### Requirement: Physics-Based Scroll Animations
The system SHALL use Framer Motion to apply declarative, physics-based scroll animations (such as staggered reveals and parallax effects) to page elements as they enter the viewport.

#### Scenario: Scrolling down the page
- **WHEN** the user scrolls down to a new section
- **THEN** the elements within that section fade and slide in smoothly using Framer Motion physics

### Requirement: Mobile Responsiveness Refinements
The system SHALL ensure that interactive components, code playgrounds, and touch targets adapt to mobile viewports (<= 900px) for usability.

#### Scenario: Viewing on a small screen
- **WHEN** the user views the application on a mobile device
- **THEN** code tabs become horizontally scrollable and SVG charts scale to prevent breaking the layout, with touch targets >= 44px

### Requirement: Landing Page Section Layout
The landing page SHALL consist of exactly five main sections in the following order: Hero section, Bento Box section, 3x2 Our Work preview section, Why Choose Us section, and Ready to Get Started section.

#### Scenario: Page rendering
- **WHEN** a user visits the landing page route (`/`)
- **THEN** the page renders the Hero, Bento Box, Our Work, Why Choose Us, and Ready to Get Started sections in sequence

### Requirement: Why Choose Us Section
The Why Choose Us section SHALL prominently showcase four core value propositions: Affordable Pricing, Mobile Compatible Design, Rapid Deployment, and Ongoing Support.

#### Scenario: Section visibility
- **WHEN** the user views the Why Choose Us section
- **THEN** the grid displays the four designated value propositions with simple, clear descriptions

### Requirement: Ready to Get Started Section
The Ready to Get Started section SHALL display exactly two primary buttons: "Text Us" and "Send us a Message".

#### Scenario: Clicking Text Us
- **WHEN** the user clicks the "Text Us" button
- **THEN** the system triggers a standard SMS hyperlink (`sms:`) to open the user's messaging client

#### Scenario: Clicking Send us a Message
- **WHEN** the user clicks the "Send us a Message" button
- **THEN** the system opens the Contact Modal overlay showing the get in touch box with a blurred background

### Requirement: Hero Left-Aligned Serif Typography
The Hero section text content SHALL be left-aligned and its primary title SHALL use the Outfit sans-display font face. The title SHALL display: "Pampanga Web Design Company. Crafting Digital Experiences That Convert."

#### Scenario: Visual styling check for Hero text
- **WHEN** the user views the Hero section
- **THEN** the badge, title, description, and primary CTA actions align to the left side of the screen
- **AND** the title renders in a sans font style containing "Pampanga Web Design Company"

### Requirement: Hero Viewport Scale (100vh)
The Hero section height SHALL cover the entire viewport height (`100vh`) to fill the starting screen before revealing subsequent page contents as the user scrolls down.

#### Scenario: Initial page viewport check
- **WHEN** the user lands on the homepage
- **THEN** the Hero section fills the initial visible window
- **AND** scrolling downwards reveals the Bento Box services section

### Requirement: Hero Overlapping Floating Cards
The Hero section SHALL render three separate floating cards on the right side of the screen with a floating translation animation:
1. Google Ranking: Star icon badge showing "#1 Google Ranking"
2. Website Traffic: Custom SVG trend chart indicating "+67% Traffic Surge"
3. Sales volume: Cart icon badge showing "+12 Sales"
The cards SHALL display at enlarged dimensions (e.g., width 300px or larger for badges, and 340px or larger for charts) with increased padding.

#### Scenario: Floating card elements check
- **WHEN** the user views the Hero section on a desktop viewport
- **THEN** the system displays the Google, Traffic, and Sales cards on the right side of the main content
- **AND** the traffic card contains a "+67% Visitors" label
- **AND** the cards are rendered larger than previous designs

### Requirement: Scroll-Detached Rounded Navbar
The navigation header SHALL detach, round its corners, and float above the content once the viewport scrolls down by more than 50 pixels.

#### Scenario: Scrolling down the page
- **WHEN** the user scrolls down by more than 50px from the top
- **THEN** the navbar detaches from the viewport boundaries
- **AND** rounds its corners to 20px
- **AND** displays a translucent, blurred background with a subtle shadow

### Requirement: Featured Projects Background Gradient
The Project Gallery section background on the landing page SHALL display a gentle gradient transitioning from the primary background (white in light mode, dark-bg in dark mode) to a subtle green hue.

#### Scenario: Visual inspection of projects gallery background
- **WHEN** the user views the Featured Projects section on the homepage
- **THEN** the section background displays a soft, eye-strain-friendly green-accented gradient

### Requirement: Global Full-Width Ready CTA
The "Ready to Get Started" call-to-action section SHALL display at the bottom of every single route page directly above the footer. The section SHALL span the full width of the screen, styled in a distinct background color (deep forest black in dark mode, light sage in light mode), and feature matching typography.

#### Scenario: Navigating across routes
- **WHEN** the user views the homepage, About, Pricing, Services, or Case Studies pages
- **THEN** the "Ready to Get Started" block is persistently visible at the bottom of the page content
- **AND** the block fills the entire screen width with a distinctive background tint

