## Context

The website is a premium, single-page landing page built with React, Vite, and Framer Motion. Currently, the site operates exclusively in a dark, high-contrast theme with Playfair Display (Serif) headings. To demonstrate advanced frontend engineering and provide design personalization, we will introduce:
1. A live Typography Selector (Serif vs. Sans-Serif headings).
2. A Color Theme Controller (Light vs. Dark mode).
3. A cursor-tracking Spotlight Dot-Matrix background.
4. Reactive custom cursor scaling/hover feedback.

All changes must remain highly performant, adhering to a 60fps interaction model on desktop systems.

---

## Goals / Non-Goals

**Goals:**
* Provide instantaneous visual feedback when switching color modes or typography.
* Implement a high-performance background dot-matrix grid with mouse-coordinate spotlight tracking.
* Expand the custom cursor to morph fluidly (spring-animated scale, border color change, blend mode) when hovering over interactive items.
* Keep standard accessibility standards for light mode contrast (minimum 4.5:1 ratio).

**Non-Goals:**
* Designing custom sub-pages for light/dark mode (the design remains a single-page landing layout).
* Adding server-side database storage for user theme preferences (settings will be persisted in `localStorage` client-side).

---

## Decisions

### 1. Style State Management
*   **Decision**: Store theme states (e.g., `theme: 'light' | 'dark'` and `font: 'serif' | 'sans'`) in the root `App.jsx` component and persist them in `localStorage`.
*   **Rationale**: Placing state at the root allows easy synchronization. We will apply class attributes directly to `document.body` or `document.documentElement` (`.theme-light`, `.theme-sans`) so CSS custom properties can instantly update styling across all nested components without context-prop propagation or redundant React re-renders.

### 2. High-Performance Spotlight Grid
*   **Decision**: Update mouse coordinates using CSS custom variables (`--mouse-x`, `--mouse-y`) defined on the root element, updated via a document-wide `mousemove` listener.
*   **Rationale**: By updating `--mouse-x` and `--mouse-y` in a single global `mousemove` event, the dot-matrix container can read these properties natively in its CSS mask:
    ```css
    .dot-matrix-spotlight {
      background-image: radial-gradient(var(--border-color) 1.5px, transparent 1.5px);
      background-size: 32px 32px;
      mask-image: radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black 10%, transparent 80%);
    }
    ```
    This avoids triggering React states or component re-renders for background rendering, keeping rendering workloads completely off the main JS execution loop.

### 3. Global Cursor Hover Detection
*   **Decision**: Use a single delegation listener (`mouseover`/`mouseout` or `pointermove`) on the `document` inside [CustomCursor.jsx](file:///home/rare/Dev/TBATS/tbats-landing-page/src/components/CustomCursor.jsx) to detect interactive element hovers.
*   **Rationale**: Instead of binding individual listeners to every button, link, and toggle, a delegated event listener will inspect the hovered element’s tag name or classes (e.g., `a`, `button`, `select`, `input`, `textarea`, or elements with `.clickable`). When a match is found, the custom cursor state will transition using its internal requestAnimationFrame updates or inline CSS springs, scaling the cursor from `32px` to `64px`, shifting to `mix-blend-mode: difference`, and changing background opacity.

### 4. Light/Dark Mode CSS Theme Variables
*   **Decision**: Define theme overrides in [index.css](file:///home/rare/Dev/TBATS/tbats-landing-page/src/index.css) using `:root` and `.theme-light`.
*   **CSS Architecture**:
    ```css
    :root {
      /* Dark mode defaults */
      --bg-dark: #000000;
      --bg-card: rgba(255, 255, 255, 0.03);
      --border-color: rgba(255, 255, 255, 0.1);
      --text-primary: #ffffff;
      --text-secondary: #a1a1aa;
      --color-accent: #10b981;
    }

    body.theme-light {
      /* Light mode overrides */
      --bg-dark: #f8fafc; /* slate-50 */
      --bg-card: rgba(255, 255, 255, 0.85);
      --border-color: rgba(0, 0, 0, 0.08);
      --text-primary: #0f172a; /* slate-900 */
      --text-secondary: #475569; /* slate-600 */
      --color-accent: #059669; /* darker emerald for readable contrast */
    }
    ```

---

## Risks / Trade-offs

*   **[Risk] Cursor Lag / Jitter** → A customized cursor following the mouse using JS animation frames can experience layout shifts if the main thread is blocked by heavy animations.
    *   *Mitigation*: Use CSS hardware-accelerated transforms (`translate3d`), set `pointer-events: none` on the cursor container, and ensure no complex layout computations are run inside the `mousemove` or animation loops.
*   **[Risk] Flash of Unstyled Theme (FOUT/FOIT)** → During page loads, the layout might default to dark mode before the saved light theme preference is loaded from `localStorage`.
    *   *Mitigation*: Place a small inline script in `index.html`'s `<head>` that immediately checks `localStorage.getItem('theme')` and adds the appropriate class to the `html`/`body` element before React starts parsing.
