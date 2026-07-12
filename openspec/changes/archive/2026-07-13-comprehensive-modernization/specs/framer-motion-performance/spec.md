## ADDED Requirements

### Requirement: Modern Framer Motion patterns
Components SHALL use Framer Motion 12+ recommended APIs.

#### Scenario: Layout animations for shared elements
- **WHEN** navigating between demo presets
- **THEN** shared elements (header, hero) use `layoutId` for smooth transitions

#### Scenario: useScroll/useTransform for scroll-linked animations
- **WHEN** implementing parallax or reveal animations
- **THEN** uses `useScroll()`, `useTransform()` instead of `whileInView` on scroll container

#### Scenario: Reduced motion respected globally
- **WHEN** `prefers-reduced-motion: reduce` matches
- **THEN** all `transition.duration` = 0, `layout` animations disabled, `whileHover`/`whileTap` disabled

#### Scenario: Lazy-loaded motion components
- **WHEN** importing Framer Motion
- **THEN** uses `import { motion, AnimatePresence } from 'framer-motion/dom'` (tree-shakable)

#### Scenario: willChange optimization
- **WHEN** animating transform/opacity
- **THEN** element has `style={{ willChange: 'transform, opacity' }}` during animation

### Requirement: Custom cursor refactored
The custom cursor SHALL be performant and accessible.

#### Scenario: Single RAF loop
- **WHEN** cursor moves
- **THEN** only one `requestAnimationFrame` loop runs (not separate mousemove + RAF)

#### Scenario: Throttled to 60fps
- **WHEN** updating cursor position
- **THEN** position updated at most once per frame (16.67ms)

#### Scenario: Disabled for reduced motion
- **WHEN** `prefers-reduced-motion: reduce`
- **THEN** custom cursor not rendered, native cursor used

#### Scenario: Disabled on touch devices
- **WHEN** `pointer: coarse`
- **THEN** custom cursor not rendered

#### Scenario: High contrast mode support
- **WHEN** `prefers-contrast: more`
- **THEN** cursor border width increased, opacity 1

### Requirement: Dot matrix grid optimization
The background grid SHALL not cause layout thrashing.

#### Scenario: CSS-only mask animation
- **WHEN** mouse moves
- **THEN** grid uses CSS `mask-image` with CSS variable `--mouse-x`, `--mouse-y` updated via single RAF

#### Scenario: Grid not in React render cycle
- **WHEN** grid renders
- **THEN** it's a static `<div className="dot-matrix-grid" />` with no React state updates

### Requirement: Animation performance budgets
Animations SHALL meet performance targets.

#### Scenario: 60fps on mid-range mobile
- **WHEN** running animations on Moto G4 / iPhone SE (Chrome DevTools throttling)
- **THEN** no dropped frames in Performance tab

#### Scenario: No layout shifts from animations
- **WHEN** animating
- **THEN** CLS contribution = 0 (only transform/opacity animated)