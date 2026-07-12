## Context

Following feedback on the theme controllers, dot matrix grid, and custom cursor, additional UX enhancements are required:
1. The custom cursor's hovered scale (2.0x) is too large.
2. Section solid backdrops hide the fixed dot matrix grid.
3. In Light Mode, the custom cursor screens out to white, making it invisible.
4. Spacing between transparent sections feels continuous and lacks definition.
5. The features lists in the pricing cards contain technical jargon that is confusing to non-technical business owners.
6. The footer contains a broken anchor link to `#about`. Adding a Team section resolves this while introducing the core 5-developer engineering roster.

---

## Goals / Non-Goals

**Goals:**
* Downscale the hovered cursor size to 1.4x scale.
* Adapt the cursor default blend mode and fill colors under Light Mode to ensure high contrast.
* Render elegant faded divider lines between sections to organize layout blocks.
* Translate pricing details into customer-focused value benefits (e.g. self-editable content, secure forms).
* Create an "About Us" Team section introducing the core team: Karl Bondoc, Emmanuel Ken Almendra, Mark Angelo Mendoza, Daile Paragas, and Kyle Cyrill Lumacad.

---

## Decisions

### 1. Cursor Hover & Color Adaptability
*   **Decision**: Pass `theme` as a prop to `CustomCursor` and conditionally calculate its styling properties.
*   **Styling Object**:
    *   **Dark Mode (Not Hovered)**: `mixBlendMode: 'screen'`, background `rgba(16, 185, 129, 0.15)`.
    *   **Light Mode (Not Hovered)**: `mixBlendMode: 'normal'`, background `rgba(5, 150, 105, 0.2)` (darker emerald), border `1px solid rgba(5, 150, 105, 0.4)`.
    *   **Hovered (Both Themes)**: `mixBlendMode: 'difference'`, scale `1.4` (`scale(1.4)` transform), background `rgba(255, 255, 255, 0.95)`.

### 2. Section Separators
*   **Decision**: Render standard `<hr>` or custom divider divs between sections in `App.jsx` styled with a faded gradient:
    ```css
    .section-divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border-color) 20%, var(--border-color) 80%, transparent);
    }
    ```
*   **Rationale**: Faded edges maintain a premium layout, providing structure without harsh black/white separation lines.

### 3. Layman Pricing Copy
*   **Decision**: Modify the `pricingTiers` array inside [InteractiveEstimator.jsx](file:///home/rare/Dev/TBATS/tbats-landing-page/src/components/InteractiveEstimator.jsx) to replace technical specs with customer-friendly values.

### 4. Asymmetric Team Grid Layout (`Team.jsx`)
*   **Decision**: To represent a 5-developer roster cleanly without leaving awkward empty cells on desktops, implement a custom 6-column grid structure:
    *   **Row 1**: Karl Bondoc (Lead Web Engineer) and Emmanuel Ken Almendra (Lead UI/UX Architect) span 3 columns each (`grid-column: span 3`), taking up 50% width each.
    *   **Row 2**: Mark Angelo Mendoza (React Platform Specialist), Daile Paragas (Performance & SEO Analyst), and Kyle Cyrill Lumacad (Systems & Backend Developer) span 2 columns each (`grid-column: span 2`), taking up 33.3% width each.
*   **Grid layout sketch**:
    ```
    ┌───────────────────────────────────┬───────────────────────────────────┐
    │  Karl Bondoc (Lead Web Engineer)   │  Emmanuel Ken Almendra (UI/UX)    │
    ├───────────────┬───────────────────┴───────────────┬───────────────────┤
    │  Mark Mendoza │  Daile Paragas (Performance/SEO)  │  Kyle Lumacad     │
    └───────────────┴───────────────────────────────────┴───────────────────┘
    ```
*   **Mobile adaptation**: Under 900px, the grid defaults to a standard 1-column layout (`grid-template-columns: 1fr;` and `grid-column: auto`).

---

## Risks / Trade-offs

*   **[Risk] Mobile card sizing** → An asymmetric grid can look distorted on tablet widths if columns are forced.
    *   *Mitigation*: Use media queries to apply the asymmetric 3-col and 2-col rules strictly above `900px` widths, and fall back to standard grid columns on tablets.
