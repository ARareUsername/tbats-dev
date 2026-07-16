## Context

We want to make the website design look and feel extremely premium, high-converting, and representative of our local Pampanga agency identity. The current single-column hero is simple; transitioning it to a 100vh split layout with overlapping floating statistics cards and serif typography gives it an immediate visual "wow" factor. We are also introducing a Mount Arayat backdrop, adding visual icons to the dropdown menus, and standardizing component rules for a cohesive layout.

## Goals / Non-Goals

**Goals:**
- Implement a split 2-column responsive layout for the Hero section.
- Use `Playfair Display` serif font for the main hero heading.
- Create three floating cards with independent floating animations.
- Integrate the Mount Arayat background asset in the services section.
- Add colorful Material Symbols icons to the navigation dropdown links.
- Align cards, borders, and margins across all pages to a consistent design system.

**Non-Goals:**
- Creating a separate page for the sandbox launcher console.
- Rebuilding the main routing structure.

## Decisions

### 1. Split Viewport Hero Layout (100vh)
- **Structure**: We will structure `Hero.tsx` using a 2-column CSS Grid layout inside the container:
  - Left column: Title, badge, description, and action buttons. Left-aligned (`text-align: left`).
  - Right column: Container for floating overlapping cards. Hidden on small viewports to maintain responsiveness.
- **Height**: The Hero wrapper will use `min-height: 100vh` with flex/grid alignment so it centers vertically on any screen height.

### 2. Floating Animations and Graphics
- **Implementation**: Floating cards will use relative/absolute positioning inside Column 2. We'll define a CSS floating animation using `@keyframes float`:
  ```css
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  ```
- **Delays**: Each card will have a different animation delay (e.g., `0s`, `1.5s`, `3s`) to float asynchronously, creating a rich organic layering effect.
- **Graph Visual**: Card B (Traffic) will contain an inline SVG line chart with a green gradient fill representing growth.

### 3. Mount Arayat Backdrop
- The generated image `pampanga_mount_arayat_bg.jpg` will be copied to `public/images/pampanga-bg.jpg`.
- The `BentoServices` section will render this background with a dark gradient overlay. In light mode, a white gradient overlay will blend the image to maintain contrast and satisfy accessibility guidelines.

### 4. Dropdown Menu Icons
- We will modify `Header.tsx` dropdown link items to render a `<span className="material-symbols-outlined">` icon next to each label.
- We will style the icon with a background circle and custom inline color classes defined in `Header.module.css` (e.g., `.iconGreen`, `.iconBlue`, `.iconPurple`).

### 5. Global Theme Consistency Audit
- Ensure all custom card components use `var(--bg-card)` and `var(--border-color)` consistently.
- Unify transitions to use `transition: var(--transition-smooth)` or `transition: border-color 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease` to keep page styling changes unified and elegant.

## Risks / Trade-offs

- **[Risk]**: Background image of Mount Arayat could impair text contrast and legibility.
  - **[Mitigation]**: Ensure gradient overlays have high opacity (at least 85% opacity in dark theme and 90% opacity in light theme) so text remains fully accessible.
- **[Risk]**: 2-column layout overlaps or breaks on tablet viewports.
  - **[Mitigation]**: Use media queries to hide Column 2 (floating cards) or transition to a stacked layout below `1024px`.
