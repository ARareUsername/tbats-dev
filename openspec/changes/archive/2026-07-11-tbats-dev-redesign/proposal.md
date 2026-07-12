## Why

The current TBATS landing page is a highly technical simulator for a time-series forecasting mathematical model. We want to pivot/redesign the website into `tbats.dev`—a sleek, dark, premium web development agency website. The target audience is non-technical business owners and consumers. By showcasing visual design options, a structured client process, clear local pricing (in PHP), and client testimonials, the new website will attract and convert leads for custom web design services.

## What Changes

- **Pivoted Website Core**: Remove the forecasting algorithm specific UI/logic (interactive decomposition charts, R/Python code snippets, feature grids explaining Box-Cox/ARMA).
- **Premium Dark Aesthetics**: Redesign the UI to be a modern, dark, visually stunning web agency showcase with smooth transitions and subtle micro-animations.
- **Client Engagement Tools**:
  - Add an interactive consultation request form so clients can easily schedule a call.
  - Highlight a step-by-step project lifecycle (Specifications -> Design -> Develop -> Optimize -> Launch).
  - List three transparent pricing points in Philippine Pesos (PHP) designed for profitability.
  - Provide a dedicated, beautiful section/carousel for client testimonials.
  - Showcase dynamic, visual-heavy interactive demos (e.g., interactive wireframe/theme builder) to "wow" visitors.

## Capabilities

### New Capabilities

- `agency-landing-page`: A premium, dark-and-sleek agency website showcasing design/development services, client process, PHP pricing tiers, client testimonials, and a consultation form.

### Modified Capabilities

- `landing-page`: Decommission the forecasting model landing page and redirect/replace the code under `tbats-landing-page` with the agency-themed website.

## Impact

- **Frontend Codebase**: The React codebase in `tbats-landing-page` will be completely overhauled. The components will change from mathematical charts/code playgrounds to visual marketing pages, interactive client journey steps, pricing tables, and forms.
- **Styling**: `index.css` and local stylesheets will be updated to establish a premium design system (tokens, glassmorphism utilities, dark-sleek palettes).
- **Dependencies**: May add lightweight animation libraries (like Framer Motion) or icons if needed, but primarily vanilla CSS and React.
