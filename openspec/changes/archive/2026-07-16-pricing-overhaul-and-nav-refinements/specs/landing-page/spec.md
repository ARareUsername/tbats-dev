## ADDED Requirements

### Requirement: Scroll-Detached Rounded Navbar
The navigation header SHALL detach, round its corners, and float above the content once the viewport scrolls down by more than 50 pixels.

#### Scenario: Scrolling down the page
- **WHEN** the user scrolls down by more than 50px from the top
- **THEN** the navbar detaches from the viewport boundaries
- **AND** rounds its corners to 20px
- **AND** displays a translucent, blurred background with a subtle shadow

## MODIFIED Requirements

### Requirement: Hero Left-Aligned Serif Typography
The Hero section text content SHALL be left-aligned and its primary title SHALL use the Outfit sans-display font face. The title SHALL display: "Pampanga Web Design Company. Crafting Digital Experiences That Convert."

#### Scenario: Visual styling check for Hero text
- **WHEN** the user views the Hero section
- **THEN** the badge, title, description, and primary CTA actions align to the left side of the screen
- **AND** the title renders in a sans font style containing "Pampanga Web Design Company"

### Requirement: Hero Overlapping Floating Cards
The Hero section SHALL render three separate floating cards on the right side of the screen with a floating translation animation:
1. Google Ranking: Star icon badge showing "#1 Google Ranking"
2. Website Traffic: Custom SVG trend chart indicating "+67% Traffic Surge"
3. Sales volume: Cart icon badge showing "+12 Sales"

#### Scenario: Floating card elements check
- **WHEN** the user views the Hero section on a desktop viewport
- **THEN** the system displays the Google, Traffic, and Sales cards on the right side of the main content
- **AND** the traffic card contains a "+67% Visitors" label

### Requirement: Bento-Box Agency Services
The system SHALL display features and services in a modern, interactive CSS Grid bento-box layout. It SHALL begin with a small "What We Do" header label, followed by a large "Web Design Services in Pampanga" title, and a subtitle description. Each bento box card SHALL display a clean, glassmorphic layout accompanied by appropriate minimalist graphics. The Bento Box section background SHALL display a parallax image backdrop of the Philippines map. The 1-on-1 Support card description SHALL read: "Live consulation sessions with our web developers. Change anything on your website without any additional fees." The monospace coding graphic inside the support card SHALL display at an enlarged size.

#### Scenario: Hovering over a service
- **WHEN** the user hovers over a service grid item
- **THEN** the item slightly scales up and its borders illuminate

#### Scenario: Bento box headings
- **WHEN** the user views the bento box section
- **THEN** the section displays "What We Do", "Web Design Services in Pampanga", and the descriptive subtitle above the grid
- **AND** the background displays a Philippines map silhouette
