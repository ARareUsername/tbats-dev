## ADDED Requirements

### Requirement: Hero Left-Aligned Serif Typography
The Hero section text content SHALL be left-aligned and its primary title SHALL use the `Playfair Display` serif font face. The title SHALL display: "Pampanga Web Design Company. Crafting Digital Experiences That Convert."

#### Scenario: Visual styling check for Hero text
- **WHEN** the user views the Hero section
- **THEN** the badge, title, description, and primary CTA actions align to the left side of the screen
- **AND** the title renders in a serif font style containing "Pampanga Web Design Company"

### Requirement: Hero Viewport Scale (100vh)
The Hero section height SHALL cover the entire viewport height (`100vh`) to fill the starting screen before revealing subsequent page contents as the user scrolls down.

#### Scenario: Initial page viewport check
- **WHEN** the user lands on the homepage
- **THEN** the Hero section fills the initial visible window
- **AND** scrolling downwards reveals the Bento Box services section

### Requirement: Hero Overlapping Floating Cards
The Hero section SHALL render three separate floating cards on the right side of the screen with a floating translation animation:
1. Google Ranking: Star icon badge showing "#1 Google Ranking"
2. Website Traffic: Custom SVG trend chart indicating "+142% Traffic Surge"
3. Sales volume: Cart icon badge showing "+12 Sales"

#### Scenario: Floating card elements check
- **WHEN** the user views the Hero section on a desktop viewport
- **THEN** the system displays the Google, Traffic, and Sales cards on the right side of the main content
- **AND** hovering over each card triggers a smooth scaling highlight

## MODIFIED Requirements

### Requirement: Bento-Box Agency Services
The system SHALL display features and services in a modern, interactive CSS Grid bento-box layout. It SHALL begin with a small "What We Do" header label, followed by a large "Web Design Services in Pampanga" title, and a subtitle description. Each bento box card SHALL display a clean, glassmorphic layout accompanied by appropriate minimalist graphics. The Bento Box section background SHALL display a parallax image backdrop of Mount Arayat, Pampanga. The 1-on-1 Support card description SHALL read: "Live consulation sessions with our web developers. Change anything on your website without any additional fees." The monospace coding graphic inside the support card SHALL display at an enlarged size.

#### Scenario: Hovering over a service
- **WHEN** the user hovers over a service grid item
- **THEN** the item slightly scales up and its borders illuminate

#### Scenario: Bento box headings
- **WHEN** the user views the bento box section
- **THEN** the section displays "What We Do", "Web Design Services in Pampanga", and the descriptive subtitle above the grid
- **AND** the background displays a Mount Arayat photo/vector outline
- **AND** the 1-on-1 support card contains the updated description and an enlarged code graphic block
