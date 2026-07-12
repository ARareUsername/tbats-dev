## Why

The current landing page design drifted towards explaining a time-series forecasting algorithm (TBATS) rather than focusing on the primary goal: a sleek, premium portfolio for a web development agency. We need to remove the algorithm-specific components, restore the focus to agency services, and dramatically elevate the aesthetic. The user requested an ultra-dark background, a better conversion path than a standard "Get a quote" button, and striking visual effects to captivate potential clients.

## What Changes

- **BREAKING**: Remove `FeaturesGrid.jsx`, `DecompositionDemo.jsx`, and `CodePlayground.jsx` completely.
- Re-theme the background to true black (`#000000`) with a subtle noise overlay to add a premium, tactile feel without lightening the design.
- Replace the "Get a quote" button with a sleek "Start a Project" interaction or a "Schedule Strategy Call" flow.
- Redesign the Services, Process, and Pricing sections into modern, interactive bento-box grid layouts with smooth hover states to fix the current broken/uninspiring formats.
- Implement striking visual effects: a glowing cursor trailer that subtly follows the user's mouse, and cinematic text-reveal animations on scroll.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `landing-page`: Remove the TBATS algorithmic requirements (Interactive Decomposition Chart, Code Integration Tabs, T-B-A-T-S Explanatory Grid). Add new requirements for a True Black Noise background, Glowing Cursor Trailer, Bento-Box Services Grid, and an updated "Start a Project" conversion flow.

## Impact

- `App.jsx` will be stripped of the algorithm components.
- `index.css` will have its background rules updated to true black + noise.
- Multiple existing components (`Header`, `ConsultationForm`, `InteractiveEstimator`, etc.) will be significantly refactored to fit the new sleek agency aesthetic.
