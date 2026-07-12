## Context

Currently, the Starter and Growth tiers need refinement (Starter to ₱15,000 and Growth to ₱30,000) to match Option C. In addition, the visual presets selection layout has unused space at the bottom left column of the console widget.

## Goals / Non-Goals

**Goals:**
- Update Starter tier price to ₱15,000 and Growth tier price to ₱30,000 in `InteractiveEstimator.jsx`.
- Redesign preset selector layout inside `Portfolio.jsx` to stack vertically.
- Embed active color swatches (two color dots per preset) to make selection interactive.

**Non-Goals:**
- Adjusting e-commerce client product prices (already completed in previous change).

## Decisions

- **Decision 1: Price Model adjustment**
  - *Details*: Starter set to `₱15,000`, Growth set to `₱30,000`.
  - *Rationale*: A clean double-tier pricing milestone structure ($2\times$ increase) that is highly marketable.
- **Decision 2: Vertical Swatch Row Buttons**
  - *Details*: Render `PRESETS` as button rows with a flex row layout, containing colored circles for `preset.swatches`.
  - *Rationale*: Eliminates empty space in the launcher, balancing it with the preview specifications card.

## Risks / Trade-offs

*(None)*
