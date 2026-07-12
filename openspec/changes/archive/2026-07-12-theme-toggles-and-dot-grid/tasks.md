## 1. Foundation & CSS Tokens

- [x] 1.1 Import Outfit font family in `index.css` alongside `Playfair Display` and `Inter`
- [x] 1.2 Define CSS variables under `:root` for Dark Mode and `.theme-light` override variables for Light Mode in `index.css`
- [x] 1.3 Add global transition styling for colors, backgrounds, and borders to ensure smooth theme transitions

## 2. Theme State & Initialization

- [x] 2.1 Implement `localStorage`-based state trackers for active theme (`light` vs `dark`) and heading font (`serif` vs `sans`) in `App.jsx`
- [x] 2.2 Apply matching classes (`.theme-light`, `.theme-sans`) to the document element/body in a `useEffect` hook
- [x] 2.3 Add an inline theme initialization script inside `<head>` of `index.html` to load theme preferences early and prevent layout flashing

## 3. Navigation Header Controls

- [x] 3.1 Refactor `Header.jsx` to include the Font Swapper button (Serif vs. Sans-Serif) and the Light/Dark Mode button in the desktop and mobile navigation layouts
- [x] 3.2 Add visual styling for the style tuners using glassmorphism borders and interactive hover/active states
- [x] 3.3 Integrate spring animations or visual sliders using Framer Motion to indicate the selected state of each toggle

## 4. Spotlight Dot-Matrix Background

- [x] 4.1 Set up a global document-level pointer/mousemove event listener to track coordinates and update CSS variables (`--mouse-x`, `--mouse-y`) on the root element
- [x] 4.2 Render a full-screen background dot-matrix grid overlay using a CSS repeating radial-gradient
- [x] 4.3 Configure a `mask-image` radial-gradient referencing the coordinate variables to create a smooth spotlight reveal around the user's cursor

## 5. Custom Cursor Reactive Interactions

- [x] 5.1 Add global event delegation listeners (`mouseover` and `mouseout`) in `CustomCursor.jsx` to detect when the pointer is hovering over interactive elements
- [x] 5.2 Update the custom cursor coordinates and set an internal `isHovered` state when hovering over links, buttons, inputs, and toggles
- [x] 5.3 Implement animations in `CustomCursor` that scale the container up, thin its borders, and apply `mix-blend-mode: difference` during the hovered state
- [x] 5.4 Validate interaction frame rates, ensuring no layout shifting or animation lag occurs on desktop and touch devices
