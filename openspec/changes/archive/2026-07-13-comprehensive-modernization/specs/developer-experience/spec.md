## ADDED Requirements

### Requirement: Code quality tooling
ESLint, Prettier, and TypeScript SHALL enforce consistent code style.

#### Scenario: ESLint with React, TypeScript, JSX-a11y
- **WHEN** running `npm run lint`
- **THEN** checks: `eslint-plugin-react`, `eslint-plugin-react-hooks`, `@typescript-eslint`, `eslint-plugin-jsx-a11y`

#### Scenario: Prettier integrated
- **WHEN** running `npm run format`
- **THEN** Prettier formats all `.ts`, `.tsx`, `.json`, `.css`, `.md` files

#### Scenario: TypeScript strict check
- **WHEN** running `npm run typecheck`
- **THEN** `tsc --noEmit` passes with zero errors

#### Scenario: Husky pre-commit hooks
- **WHEN** committing
- **THEN** `lint-staged` runs: lint → typecheck → format on staged files

#### Scenario: Commitlint for conventional commits
- **WHEN** committing
- **THEN** commit message validated against conventional commit format

### Requirement: CI/CD pipeline
GitHub Actions SHALL run quality gates on every PR.

#### Scenario: CI workflow stages
- **WHEN** PR opened/updated
- **THEN** jobs run in parallel: `typecheck`, `lint`, `test`, `test:e2e`, `build`

#### Scenario: Build artifact uploaded
- **WHEN** build succeeds
- **THEN** `dist/` uploaded as artifact for deploy preview

#### Scenario: Deploy preview on PR
- **WHEN** PR ready
- **THEN** Netlify/Vercel deploy preview URL posted as comment

#### Scenario: Production deploy on merge
- **WHEN** merging to main
- **THEN** production deploy triggered automatically

### Requirement: Storybook for component documentation
UI primitives SHALL be documented in Storybook.

#### Scenario: Storybook configured for React 19 + Vite
- **WHEN** running `npm run storybook`
- **THEN** Storybook 8+ loads with Vite builder

#### Scenario: Stories for all UI primitives
- **WHEN** browsing Storybook
- **THEN** Button, Card, Input, Badge, Avatar, Section, Container have stories with controls

#### Scenario: Accessibility addon enabled
- **WHEN** viewing story
- **THEN** a11y panel shows violations

### Requirement: Developer tooling scripts
Package.json SHALL include convenient scripts.

#### Scenario: Common scripts available
- **WHEN** running `npm run`
- **THEN** shows: `dev`, `build`, `preview`, `lint`, `lint:fix`, `format`, `typecheck`, `test`, `test:watch`, `test:coverage`, `test:e2e`, `storybook`, `build:analyze`