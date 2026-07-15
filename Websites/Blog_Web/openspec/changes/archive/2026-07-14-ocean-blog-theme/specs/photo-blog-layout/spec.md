## ADDED Requirements

### Requirement: Navbar renders as the beach/shore in light mode
In light mode, the navbar background SHALL render with a warm sand texture or gradient, visually anchoring the page as "the shore." It SHALL contain the site logo and primary navigation links (Posts, Depths, Journal, About). The background MUST not reduce text contrast.

#### Scenario: Light-mode navbar displays sand texture
- **WHEN** `data-theme` is not set (light mode)
- **THEN** the navbar background is a warm sandy tone with a subtle texture or grain

#### Scenario: Navbar links are readable against sand
- **WHEN** inspecting light-mode navbar links
- **THEN** text contrast ratio meets WCAG AA (4.5:1 for normal text)

### Requirement: Navbar becomes moonlit water shimmer in dark mode
In dark mode, the navbar background SHALL transition to a deep-water visual with a subtle shimmer or wave-like animation, evoking moonlight on the ocean surface.

#### Scenario: Dark-mode navbar displays water shimmer
- **WHEN** `data-theme="dark"` is set
- **THEN** the navbar background is a deep blue/black with a subtle animated shimmer or wave pattern

### Requirement: Navbar scrolls with the page
The navbar SHALL remain fixed at the top of the viewport during scroll. On mobile, it MAY collapse into a hamburger menu.

#### Scenario: Navbar is sticky
- **WHEN** the user scrolls down
- **THEN** the navbar remains fixed at the top

#### Scenario: Mobile nav collapses
- **WHEN** the viewport width is below 768px
- **THEN** navigation links are hidden behind a toggle button

### Requirement: Hero section spans full viewport
The hero section SHALL fill the viewport with a vertical hero image, the blog title, and a subtitle. In light mode, the hero uses warm golden-hour tones. In dark mode, it uses a moonlit ocean surface aesthetic.

#### Scenario: Hero fills viewport
- **WHEN** the page loads
- **THEN** the hero section is at least 100vh tall

#### Scenario: Hero adapts to theme
- **WHEN** theme switches
- **THEN** the hero's colors and overlay shift to match the active palette

### Requirement: Blog posts display in a vertical-photo grid
The post listing page SHALL display posts as cards with vertical (portrait-oriented) hero images. On desktop (≥1024px), cards display in a 2-3 column grid. On tablet (768-1023px), 2 columns. On mobile (<768px), single column.

#### Scenario: Desktop shows multi-column grid
- **WHEN** viewport is ≥1024px wide
- **THEN** post cards are arranged in 2-3 columns

#### Scenario: Mobile shows single column
- **WHEN** viewport is <768px wide
- **THEN** post cards stack in a single column

### Requirement: Individual post page has a journal/dive-log layout
The individual post page SHALL present the hero image at the top (vertical, full-width), followed by the post title, date, and body content. The layout SHOULD use generous whitespace and a comfortable reading measure (~66 characters per line).

#### Scenario: Post displays hero image
- **WHEN** viewing an individual post
- **THEN** the hero image is displayed at the top before the title

#### Scenario: Post body uses readable line length
- **WHEN** viewing the post body text
- **THEN** the text container is constrained to a max-width that yields approximately 66 characters per line

### Requirement: Depth-zone background shifts as user scrolls
As the user scrolls through a page, the background color zone SHALL transition through surface → reef → abyss. Each zone has a distinct background color and accent color that blend smoothly between zones.

#### Scenario: Background shifts on scroll
- **WHEN** the user scrolls from top to bottom
- **THEN** the background color transitions through surface → reef → abyss zones

### Requirement: Footer uses abyss zone colors
The page footer SHALL use the deepest abyss palette colors and may include bioluminescent accent dots or subtle animations.

#### Scenario: Footer is darkest section
- **WHEN** viewing the footer
- **THEN** its background uses the abyss palette's darkest color
