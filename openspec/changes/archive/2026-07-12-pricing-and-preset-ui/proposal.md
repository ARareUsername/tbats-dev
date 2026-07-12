## Why

To balance the height of the left and right columns on the website sandbox launcher, we will redesign the visual preset pills into vertical row cards displaying accent color swatches and style badges. We also want to update the agency pricing models to set the Starter tier to ₱15,000 and the Growth tier to a proportional ₱30,000 (Option C).

## What Changes

- **Pricing Model Updates**: Change Starter package price to `₱15,000` and Growth package price to `₱30,000` inside `InteractiveEstimator.jsx`.
- **Redesigned Preset Selector**: Refactor the design system selector in `Portfolio.jsx` from a horizontal flex row of pills to a vertical stack of button cards.
- **Visual Color Swatches**: Add active color swatch indicators next to each theme name to make the selection section visually engaging and informative.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `portfolio`: Update the pricing tier amounts and refactor the visual preset selectors.

## Impact

- `src/components/InteractiveEstimator.jsx`: Starter and Growth price tier updates.
- `src/components/Portfolio.jsx`: Refactoring layout structure and styling for theme preset options.
