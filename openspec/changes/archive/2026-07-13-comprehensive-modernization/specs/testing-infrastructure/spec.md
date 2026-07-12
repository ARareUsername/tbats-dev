## ADDED Requirements

### Requirement: Unit and integration tests
Core logic and components SHALL have unit/integration test coverage ≥ 80%.

#### Scenario: UI primitives tested
- **WHEN** testing Button, Card, Input, Badge, Avatar
- **THEN** render, variants, accessibility, interactions covered

#### Scenario: Hooks tested
- **WHEN** testing `usePresetContext`, `useCart`, `useScrollReveal`
- **THEN** state changes, context values, cleanup verified

#### Scenario: Context providers tested
- **WHEN** testing `PresetProvider`, `CartProvider`
- **THEN** provider wraps children, state updates propagate, localStorage sync works

#### Scenario: Form validation tested
- **WHEN** testing ConsultationForm
- **THEN** required fields, email format, submission states, error handling covered

#### Scenario: Demo preset switching tested
- **WHEN** testing PresetContext
- **THEN** changing preset updates CSS vars, URL, component map

### Requirement: E2E tests for critical flows
Playwright SHALL cover user-facing workflows.

#### Scenario: Landing page loads and navigates
- **WHEN** visiting `/`
- **THEN** all sections render, anchor links scroll, theme toggle works

#### Scenario: Contact form submits successfully
- **WHEN** filling and submitting form
- **THEN** API called, success toast shown, form resets

#### Scenario: Demo sandbox launches and switches presets
- **WHEN** visiting `/demo/e-commerce?preset=editorial`
- **THEN** correct preset loads, switching preset updates URL and UI

#### Scenario: Cart flow works
- **WHEN** adding product, opening drawer, checking out
- **THEN** cart persists, checkout modal opens, steps complete

#### Scenario: Mobile responsive behavior
- **WHEN** testing at 375px, 768px, 1440px
- **THEN** layout adapts, mobile menu works, no horizontal scroll

### Requirement: Visual regression testing
Storybook SHALL document UI primitives with Chromatic integration.

#### Scenario: Component stories exist
- **WHEN** running Storybook
- **THEN** Button, Card, Input, Badge, Avatar, Section, Container have stories

#### Scenario: Chromatic CI configured
- **WHEN** PR opened
- **THEN** Chromatic builds, compares screenshots, flags visual changes

### Requirement: Test infrastructure
Testing tools SHALL be configured for TypeScript and React 19.

#### Scenario: Vitest config with React Testing Library
- **WHEN** running `npm run test`
- **THEN** Vitest executes `.test.tsx` files with JSDOM, RTL queries available

#### Scenario: Playwright config with multiple browsers
- **WHEN** running `npm run test:e2e`
- **THEN** tests run in Chromium, Firefox, WebKit (mobile viewports)

#### Scenario: Coverage reporting
- **WHEN** running `npm run test:coverage`
- **THEN** `coverage/` directory with HTML report, thresholds enforced in CI