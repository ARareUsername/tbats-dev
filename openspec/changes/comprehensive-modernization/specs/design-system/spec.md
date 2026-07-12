## ADDED Requirements

### Requirement: Design tokens defined as CSS custom properties
All colors, spacing, typography, shadows, radii, and transitions SHALL be defined as CSS custom properties in `tokens.css`, consumed by both landing page and demo sandbox.

#### Scenario: Color tokens follow semantic naming
- **WHEN** defining color tokens
- **THEN** they use semantic names: `--color-bg`, `--color-surface`, `--color-primary`, `--color-text`, `--color-muted`, `--color-border`, `--color-accent`

#### Scenario: Spacing tokens use consistent scale
- **WHEN** defining spacing tokens
- **THEN** they follow 4px base unit: `--space-1` (4px), `--space-2` (8px), `--space-3` (12px), `--space-4` (16px), `--space-6` (24px), `--space-8` (32px), `--space-12` (48px), `--space-16` (64px)

#### Scenario: Typography tokens include font stacks
- **WHEN** defining font tokens
- **THEN** they include: `--font-sans`, `--font-serif`, `--font-mono`, `--font-heading`, `--font-body` with complete fallback stacks

#### Scenario: Shadow tokens use consistent elevation
- **WHEN** defining shadow tokens
- **THEN** they follow: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl` with consistent color/opacity

#### Scenario: Border radius tokens
- **WHEN** defining radius tokens
- **THEN** they include: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (12px), `--radius-xl` (16px), `--radius-full` (9999px)

#### Scenario: Transition tokens
- **WHEN** defining transition tokens
- **THEN** they include: `--transition-fast` (150ms), `--transition-base` (250ms), `--transition-slow` (350ms) with ease-out timing

### Requirement: Reusable UI primitive components
A shared component library SHALL provide typed, accessible primitives used by both landing page and demo sandbox.

#### Scenario: Button component with variants
- **WHEN** using `<Button variant="primary" size="md">`
- **THEN** renders accessible button with correct styles for variant (primary, secondary, ghost) and size (sm, md, lg)

#### Scenario: Card component composes design tokens
- **WHEN** using `<Card>` with children
- **THEN** applies `--color-surface`, `--color-border`, `--radius-md`, `--shadow-md` from tokens

#### Scenario: Input component with validation states
- **WHEN** using `<Input error={boolean} />`
- **THEN** applies error border color (`--color-error`), focus ring, and associates with aria-describedby for error message

#### Scenario: Badge component for tags
- **WHEN** using `<Badge variant="accent">`
- **THEN** renders pill-shaped label with correct token colors

#### Scenario: Avatar component with fallbacks
- **WHEN** using `<Avatar name="Karl Bondoc" />`
- **THEN** renders initials in circle with `--color-accent` background when no image

#### Scenario: Section/Container layout primitives
- **WHEN** using `<Section>` and `<Container>`
- **THEN** they apply consistent vertical rhythm (`--space-16` / `--space-24`) and max-width (`--container-max`)

### Requirement: Demo sandbox presets consume design tokens
The 5 demo presets (minimal, dark-luxury, editorial, bold, playful) SHALL extend the base token set rather than defining inline styles.

#### Scenario: Preset overrides token subset
- **WHEN** preset defines `cssVars`
- **THEN** it only overrides tokens that differ from base (colors, fonts, radius, shadows)

#### Scenario: Preset components use UI primitives
- **WHEN** demo Header/Hero/Card components render
- **THEN** they compose shared `Button`, `Card`, `Badge`, `Avatar` primitives

### Requirement: Theme context provides type-safe token access
React context SHALL expose design tokens with full TypeScript inference for component consumption.

#### Scenario: useTheme hook returns typed tokens
- **WHEN** calling `const { tokens } = useTheme()`
- **THEN** `tokens.color.primary` is typed as string, not `string | undefined`

#### Scenario: Theme switching updates CSS vars
- **WHEN** `setTheme('light')` called
- **THEN** all `--color-*` vars update on `:root` without flash