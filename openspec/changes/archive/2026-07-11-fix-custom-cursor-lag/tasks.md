## 1. Implement High-Performance Custom Cursor

- [x] 1.1 Modify `tbats-landing-page/src/components/CustomCursor.jsx` to use a `useRef` and direct style updates within a `requestAnimationFrame` loop.
- [x] 1.2 Implement smooth custom linear interpolation (lerp) for the cursor movement.
- [x] 1.3 Add document-level `mouseleave` and `mouseenter` events to fade the custom cursor in and out when the pointer leaves/enters the viewport.
- [x] 1.4 Maintain existing touch-device detection and early exit.

## 2. Testing and Validation

- [x] 2.1 Verify custom cursor moves smoothly and exhibits zero input latency.
- [x] 2.2 Validate that the default browser cursor is correctly hidden on fine-pointer devices.
- [x] 2.3 Verify that the custom cursor does not render on touch-capable (coarse-pointer) devices.
- [x] 2.4 Run project build/linter to ensure everything is clean.
