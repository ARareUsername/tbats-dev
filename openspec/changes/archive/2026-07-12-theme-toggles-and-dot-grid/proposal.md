## Why

The current landing page lacks options for users to customize their visual experience, and its layout can be elevated to feel more premium and designer-focused. Adding a live heading font switcher (Serif vs. Sans-Serif) and a Light/Dark mode toggle directly in the header will show off interactive design engineering. Additionally, implementing a spotlight-based dot matrix grid background and making the custom cursor reactively morph when hovering over active elements will create an immersive, tactile desktop experience.

## What Changes

- Add a **Font Swapper** control in the header bar allowing a live swap of heading typography between a traditional serif (`Playfair Display`) and a modern sans-serif (`Outfit`).
- Add a **Light / Dark Mode** theme toggle in the header bar supporting system theme detection and full stylesheet adaptability.
- Implement a **Dot Matrix Grid** background pattern that repeats across the layout and features a soft radial-gradient mask centered around the user's cursor.
- Upgrade the **Custom Cursor** to interact dynamically with components (e.g., morphing size, outline style, and blending modes when hovering over buttons, cards, and toggles).

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `agency-landing-page`: Adding requirements for the Top Bar Theme Controller (Font Switcher, Light/Dark Toggle) and the Spotlight Dot Matrix Grid background.
- `custom-cursor`: Adding requirements for Interactive Hover States (morphing size/shape, blend-mode shift) and custom interaction rules on desktop platforms.

## Impact

- `tbats-landing-page/src/components/Header.jsx`: Refactored to include the floating/inline toggles for font family and color themes.
- `tbats-landing-page/src/components/CustomCursor.jsx`: Enhanced to listen to hover events on interactable elements and dynamically adjust cursor dimensions, borders, and styles.
- `tbats-landing-page/src/index.css`: Updated with color theme variables, font import rules (`Outfit`), and utility classes for the dot matrix background pattern and font swapper states.
- `tbats-landing-page/src/App.jsx`: Root structure updated to wrap elements and apply active themes.
