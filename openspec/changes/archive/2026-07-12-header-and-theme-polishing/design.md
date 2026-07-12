## Context

Following further design review and user feedback, several refinements are needed to optimize layout polishing, accessibility, branding, and motion:
1. The background dot-matrix grid is invisible in both Light and Dark modes.
2. The FAQ accordion section stays dark with white questions in Light Mode.
3. The visual text gradients on titles should blend into the brand logo's emerald green color.
4. The pricing option cards should spring-bounce whenever pressed.
5. The header navigation needs a working link pointing to `#about`.
6. The typography font swapper should be removed (always default to Sans-serif/Outfit for headings), while keeping Serif styling strictly on logo/avatar branding metrics.

---

## Goals / Non-Goals

**Goals:**
* Boost background grid contrast and simplify webkit masks.
* Theme-enable the FAQ accordion section (transparent bg, dynamic text colors).
* Shift text gradients to fade from primary colors to signature emerald green.
* Implement tap-to-bounce animations on pricing cards using Framer Motion spring physics.
* Add working "About" nav links to desktop and mobile headers.
* Remove typography swapper controls, always load Outfit for headings by default, and preserve Playfair Display for brand items.

---

## Decisions

### 1. Grid Visibility Polish
*   **Decision**: Update `index.css` grid parameters:
    *   Dark mode: `--grid-dot-color: rgba(255, 255, 255, 0.35)`
    *   Light mode: `--grid-dot-color: rgba(0, 0, 0, 0.14)`
    *   `.dot-matrix-grid` opacity: Set to `1.0` (fully visible).
    *   Mask property update:
        `mask-image: radial-gradient(circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), black 0%, transparent 250px);`

### 2. FAQ Accordion Light-Mode Themeing
*   **Decision**: Refactor `FAQAccordion.jsx`:
    *   Section backdrop: `style={{ background: 'transparent' }}`.
    *   Question button color: `style={{ color: 'var(--text-primary)' }}`.

### 3. Emerald Brand Gradients
*   **Decision**: Define `--gradient-text` custom variables in `index.css`:
    *   Dark mode: `--gradient-text: linear-gradient(135deg, #ffffff 30%, #10b981 100%)`
    *   Light mode: `--gradient-text: linear-gradient(135deg, #0f172a 30%, #059669 100%)`
*   **Class updates**: Make `.text-gradient` reference `var(--gradient-text)`.

### 4. Bouncing Pricing Cards
*   **Decision**: Refactor `InteractiveEstimator.jsx` cards to use a spring tap animation:
    ```jsx
    whileHover={{ y: -12, scale: 1.02 }}
    whileTap={{ scale: 0.95, rotate: [0, -0.5, 0.5, -0.5, 0] }}
    transition={{ type: "spring", stiffness: 450, damping: 12 }}
    ```

### 5. Nav Links Update
*   **Decision**: Render `<a href="#about">About</a>` inside `Header.jsx` in both desktop links list and mobile overlays, positioning it between "Services" and "Process".

### 6. Typography Swapper Removal
*   **Decision**: Delete `fontMode` / `setFontMode` props and toggles:
    *   In `App.jsx`, remove the `fontMode` state hooks and early-initialization body class bindings.
    *   In `Header.jsx`, remove the font selector slider button from desktop nav and mobile menus.
    *   In `index.css`, delete the `body.theme-sans` block and update `:root` to set `--font-heading: var(--font-sans-display)` by default. Brand components will continue to declare `font-family: var(--font-serif)` directly.

---

## Risks / Trade-offs

*   **[Risk] Unused states warning** → Deleting fontMode must be done completely across App.jsx and Header.jsx to prevent linter errors.
    *   *Mitigation*: Thoroughly edit and clean up parameter references in both files.
