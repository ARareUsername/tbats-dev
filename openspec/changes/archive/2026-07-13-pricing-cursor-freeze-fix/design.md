## Context

The pricing card `m.div` in `InteractiveEstimator.tsx:22-27` wraps each tier with `whileHover` and `whileTap` spring animations. The `whileTap` animation creates a wiggle effect using rotation keyframes. When the nested `<Button as="a" href="#contact">` is clicked, the browser smooth-scrolls while framer-motion is still processing the tap gesture. This leaves framer-motion's gesture system in a bad state that cascades to the custom cursor's spring animations within the shared `LazyMotion` context.

## Goals / Non-Goals

**Goals:** Fix the cursor freeze with minimal change surface.

**Non-Goals:** No redesign of pricing card interactions. `whileHover` is preserved.

## Decisions

- **Remove `whileTap` only**: The hover lift (`whileHover`) provides sufficient visual feedback. The wiggle on tap is a nice-to-have that causes a hard crash-level UX bug.
