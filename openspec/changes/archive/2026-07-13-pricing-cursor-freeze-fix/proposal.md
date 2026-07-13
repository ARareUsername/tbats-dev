## Why

Clicking "Start a Project" in the pricing section freezes the custom cursor in place. The cursor shows the correct hover state but its position stops updating. The root cause is a conflict between the pricing card's `whileTap` spring rotation animation and framer-motion's gesture system when the nested anchor triggers a smooth scroll. The Hero's "Start a Project" does not have this issue because it lacks a `whileTap` wrapper.

## What Changes

- Remove `whileTap={{ scale: 0.95, rotate: [0, -0.5, 0.5, -0.5, 0] }}` from the pricing card `<m.div>` wrapper in `InteractiveEstimator.tsx`
- Keep `whileHover` animation intact (the hover lift effect is not affected)

## Capabilities

### New Capabilities
*(none)*

### Modified Capabilities
*(none — implementation-level fix)*

## Impact

- `src/components/InteractiveEstimator.tsx` — remove `whileTap` prop from pricing card `m.div`
