## Context

The TBATS forecasting model involves complex math (Box-Cox, Fourier terms for Trigonometric seasonality, ARMA errors, Trends). Presenting these concepts in a clear, interactive visual format on a local website helps stakeholders understand model behaviors and parameters.

## Goals / Non-Goals

**Goals:**
* Build a premium single-page landing page website for TBATS forecasting.
* Create a live simulator where dragging sliders dynamically updates an SVG chart using the inverse Box-Cox and trigonometric seasonal equations.
* Support Python and R code copy-paste blocks.
* Serve locally via Vite's development server.

**Non-Goals:**
* Fitting real user time-series datasets (this is a showcase simulator, not a server-side fitting model).
* Building backend forecasting APIs (the simulation runs entirely client-side).

## Decisions

### 1. Technology Stack: React + Vite
* **Decision:** Vite with React (JS/JSX).
* **Rationale:** Fast hot module replacement (HMR) for visual design tweaks, component isolation for interactive controls, and easy production building.
* **Alternatives Considered:** Vanilla HTML/JS (simpler, but lacks clean modular structure for complex state/graph interactions); Next.js (overkill for a single local landing page with no backend routing needed).

### 2. Styling: Modern Vanilla CSS with Glassmorphism
* **Decision:** Traditional CSS variables, global styles, and responsive grids.
* **Rationale:** Maximizes design flexibility for gradient borders, backdrop-filter blur effects, and specialized keyframe micro-animations without external CSS framework weight.

### 3. Simulator Rendering: Inline SVG plotting via React State
* **Decision:** Draw paths in `<svg>` using calculated points based on TBATS parameters:
  - $$Y_t = (\lambda \cdot W_t + 1)^{1/\lambda}$$
  - Where $$W_t = \text{Trend}_t + \text{Trig Seasonality}_t + \text{ARMA Noise}_t$$
* **Rationale:** Precise mathematical visualization without the weight or rendering limitations of external chart libraries.

## Risks / Trade-offs

* **Risk:** Inverse Box-Cox with small Lambda or negative values can cause mathematical errors (e.g. roots of negative numbers).
* **Mitigation:** Bound the sliders appropriately (e.g., Lambda $\ge 0.1$, and keep base values strictly positive) so that the mathematical operations are always safe.
