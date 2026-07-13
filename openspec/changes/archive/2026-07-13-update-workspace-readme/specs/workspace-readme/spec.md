## ADDED Requirements

### Requirement: Title and pitch
The root README SHALL display the project title "TBATS Studio" and tagline "Crafting Digital Experiences That Convert" in the first 3 lines.

#### Scenario: Title is visible
- **WHEN** a visitor opens the repo on GitHub
- **THEN** the title and tagline SHALL be the first visible content

### Requirement: Badge bar
The README SHALL include a row of functional badges: live site link, license status, TypeScript badge. Badges SHALL use Shields.io format and SHALL link to relevant destinations.

#### Scenario: Badges render
- **WHEN** a visitor views the rendered README
- **THEN** the badge bar SHALL display at least 3 badges inline

### Requirement: Project structure diagram
The README SHALL include a Mermaid or ASCII diagram showing the workspace layout: root → tbats-landing-page, openspec, .agent, and their immediate sub-structures.

#### Scenario: Structure visualized
- **WHEN** a visitor reads the README
- **THEN** a structure diagram SHALL be present explaining the repo layout

### Requirement: Quick start
The README SHALL include a "Getting Started" section with 3 sequential steps: navigate to app directory, install dependencies, start dev server. The install command SHALL include `--legacy-peer-deps` flag.

#### Scenario: Quick start is copy-pasteable
- **WHEN** a developer copies the commands
- **THEN** they SHALL work without modification from a fresh clone

### Requirement: Scripts reference
The README SHALL include a table of all npm scripts defined in `tbats-landing-page/package.json`, grouped by category (development, build, test, quality, utilities).

#### Scenario: Scripts listed
- **WHEN** a visitor reads the scripts section
- **THEN** they SHALL see a table with command names and descriptions

### Requirement: Tech stack
The README SHALL include a "Tech Stack" section listing the major technologies: React 19, React Router 7 (hybrid SSR/SPA), Vite 8, TypeScript (strict), Framer Motion 12, Vitest, Playwright, Storybook.

#### Scenario: Stack visible
- **WHEN** a visitor reads the README
- **THEN** the tech stack SHALL be listed in a scannable format

### Requirement: Quality and conventions
The README SHALL document the project's quality gates: Conventional Commits (commitlint), pre-commit hooks (Husky + lint-staged), ESLint zero-warnings policy, TypeScript strict mode with `noUncheckedIndexedAccess`, 80% test coverage threshold, Lighthouse budget enforcement.

#### Scenario: Quality visible
- **WHEN** a visitor reads the README
- **THEN** quality standards SHALL be summarized in a dedicated section

### Requirement: Deployment info
The README SHALL include a deployment section stating the app is deployed via Netlify with build command `npm run build` and publish directory `dist/`.

#### Scenario: Deployment documented
- **WHEN** a visitor reads the README
- **THEN** deployment platform and build config SHALL be described

### Requirement: Contributing and license
The README SHALL link to `CONTRIBUTING.md` for contribution guidelines and state the license status of the project.

#### Scenario: Contributing accessible
- **WHEN** a visitor looks for how to contribute
- **THEN** a link to CONTRIBUTING.md SHALL be present
