## ADDED Requirements

### Requirement: High Performance Mouse Tracking
The custom cursor component SHALL track mouse movements directly using a React ref and a `requestAnimationFrame` handler to update styles without triggering React state updates or component re-renders.

#### Scenario: Mouse movement tracking
- **WHEN** the mouse pointer moves across the screen
- **THEN** the custom cursor element updates its position on the next animation frame using 3D hardware-accelerated transforms (`translate3d`)

### Requirement: Automatic Touch Device Bypass
The custom cursor SHALL automatically detect touch-based pointers and completely bypass rendering to prevent unnecessary overhead and allow the native mobile/touch pointer experience.

#### Scenario: Touch device detection
- **WHEN** the user visits the page on a touch-capable device matching the media query `(pointer: coarse)`
- **THEN** the custom cursor component returns null and does not mount event listeners
