## Why

The current custom cursor implementation experiences noticeable input lag and latency because it relies on React state/motion updates within the main thread on every mouse move. This creates a sluggish user experience that detracts from the landing page's premium feel.

## What Changes

- Replace the Framer Motion spring-based cursor tracking with a direct DOM manipulation approach using a React ref and `requestAnimationFrame`.
- Ensure the custom cursor is hardware-accelerated using CSS 3D transforms (`translate3d`).
- Clean up default cursor overriding so that the fallback/system cursor behaves correctly.

## Capabilities

### New Capabilities
- `custom-cursor`: High-performance custom cursor rendering with hardware acceleration, responsive sub-frame tracking, and automatic touch-device bypass.

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing (not just implementation).
     Only list here if spec-level behavior changes. Each needs a delta spec file.
     Use existing spec names from openspec/specs/. Leave empty if no requirement changes. -->
