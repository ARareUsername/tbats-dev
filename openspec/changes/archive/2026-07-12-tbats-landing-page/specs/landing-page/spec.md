## ADDED Requirements

### Requirement: Interactive Decomposition Chart
The landing page SHALL render a dynamic, interactive time-series decomposition chart that updates in real-time based on user input.

#### Scenario: Live parameter updates
- **WHEN** the user adjusts the Box-Cox lambda slider to 0.5
- **THEN** the plotted combined forecast line immediately adapts, showing the inverse Box-Cox transformation in real-time

### Requirement: Code Integration Tabs
The page SHALL display copyable code snippets for both Python and R implementations of TBATS.

#### Scenario: Switching code languages
- **WHEN** the user clicks on the "R" tab
- **THEN** the displayed code block shifts to the R snippet, and clicking the "Copy" button copies the exact snippet to the clipboard

### Requirement: T-B-A-T-S Explanatory Grid
The page SHALL include an interactive grid explaining the five core components of TBATS (Trigonometric, Box-Cox, ARMA, Trend, Seasonal) using modern glassmorphism cards.

#### Scenario: Hovering feature card
- **WHEN** the user hovers over a component card
- **THEN** the card performs a smooth scale-up micro-animation and highlights its borders with a neon gradient

### Requirement: Localhost Hosting with Vite
The application SHALL be hosted locally using Vite's dev server.

#### Scenario: Server launch
- **WHEN** the developer starts the Vite dev server with `npm run dev`
- **THEN** the landing page becomes accessible on the local host (defaulting to http://localhost:5173 or similar port)
