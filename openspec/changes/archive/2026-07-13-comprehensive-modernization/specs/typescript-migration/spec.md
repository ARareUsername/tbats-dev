## ADDED Requirements

### Requirement: TypeScript configuration
The project SHALL use TypeScript strict mode with modern React 19 types.

#### Scenario: Strict mode enabled
- **WHEN** compiling
- **THEN** `strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`

#### Scenario: React 19 JSX transform
- **WHEN** configuring JSX
- **THEN** `jsx: "react-jsx"`, `jsxImportSource: "react"`

#### Scenario: Path aliases configured
- **WHEN** importing
- **THEN** `@/` → `src/`, `@components/` → `src/components/`, `@demo/` → `src/demo/`

#### Scenario: Type checking in CI
- **WHEN** running `npm run typecheck`
- **THEN** `tsc --noEmit` passes with zero errors

### Requirement: Demo system type safety
The demo preset system SHALL be fully typed with discriminated unions.

#### Scenario: Preset registry typed
- **WHEN** defining presets array
- **THEN** each preset has exact shape: `id`, `label`, `cssVars`, `components`

#### Scenario: ComponentMap typed
- **WHEN** importing component map
- **THEN** `ComponentMap` is `Record<string, React.ComponentType<any>>` with known keys

#### Scenario: PresetContext provides typed preset
- **WHEN** using `usePresetContext()`
- **THEN** `activePreset` has exact type matching registry entry

### Requirement: Landing page component types
All landing page components SHALL have explicit prop types.

#### Scenario: Section components accept theme
- **WHEN** defining `ServicesList`, `Team`, `Portfolio`, etc.
- **THEN** props include `theme?: 'light' | 'dark'` with default from context

#### Scenario: InteractiveEstimator tiers typed
- **WHEN** defining pricing tiers
- **THEN** `PricingTier` interface with `name`, `price`, `desc`, `features`, `highlight?`

#### Scenario: ConsultationForm submission typed
- **WHEN** handling form submit
- **THEN** `FormData` shape matches EmailJS template variables exactly

### Requirement: Router types
React Router v7 routes SHALL be type-safe.

#### Scenario: Route params typed
- **WHEN** using `useParams()`
- **THEN** returns `{ projectId: 'personal-blog' | 'e-commerce' | 'portfolio' }`

#### Scenario: Search params typed
- **WHEN** using `useSearchParams()`
- **THEN** `get('preset')` returns preset ID union type

### Requirement: Utility types
Shared utility types SHALL be defined for reuse.

#### Scenario: Component prop types exported
- **WHEN** creating UI primitives
- **THEN** `ButtonProps`, `CardProps`, `InputProps` exported from `@components/ui`