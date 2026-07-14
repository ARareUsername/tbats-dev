# tbats.dev — Premium Web Development Studio

A high-fidelity agency website built with React 19, React Router 7 (hybrid SSR), Vite 8, TypeScript, and Framer Motion.

## Architecture

```
app/                    # React Router framework mode (SSR)
  root.tsx              # Root layout with providers
  routes/
    landing.tsx         # SSR landing page
    demo.$projectId.tsx # Client-only demo sandbox
  entry.client.tsx      # Hydration entry
  entry.server.tsx      # SSR entry (pipeable stream)

src/
  components/
    ui/                 # Primitives: Button, Card, Input, Badge, Avatar, Section, Container, SkipLink
    ...                 # Page components: Hero, Header, Footer, ServicesList, Portfolio, etc.
  hooks/                # Custom hooks (useReducedMotion)
  demo/                 # Interactive demo sandbox with 5 design presets
  styles/               # Design tokens (tokens.css) + globals.css
  data/                 # Pricing data
```

## Prerequisites

- Node.js >= 20
- npm

## Setup

```bash
cd tbats-landing-page
npm install --legacy-peer-deps
cp .env.example .env  # Fill in real values
```

## Development

```bash
npm run dev        # Vite dev server (port 5173)
```

## Scripts

| Command                   | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `npm run dev`             | Start dev server                                       |
| `npm run build`           | Production build                                       |
| `npm run preview`         | Preview production build (port 4173)                   |
| `npm run typecheck`       | TypeScript type checking                               |
| `npm run lint`            | ESLint (zero warnings required)                        |
| `npm run lint:fix`        | ESLint auto-fix                                        |
| `npm run format`          | Prettier formatting                                    |
| `npm run test`            | Unit/integration tests (Vitest)                        |
| `npm run test:coverage`   | Test coverage (80% threshold)                          |
| `npm run test:e2e`        | E2E tests (Playwright, Chromium/Firefox/WebKit/Mobile) |
| `npm run build:analyze`   | Bundle analysis (stats.html)                           |
| `npm run storybook`       | Storybook dev server (port 6006)                       |
| `npm run build:storybook` | Build Storybook for deployment                         |

## Tech Stack

- **Framework:** React 19 + React Router 7 (hybrid SSR/SPA)
- **Build:** Vite 8 + TypeScript (strict)
- **Animation:** Framer Motion 12 (lazy-loaded)
- **Testing:** Vitest + React Testing Library + Playwright + Storybook
- **Styling:** CSS Modules + Design Tokens
- **Email:** EmailJS via serverless proxy
- **CI/CD:** GitHub Actions (typecheck → lint → test → build → e2e → deploy)

## Deployment

Deployed via Netlify. Build command: `npm run build`, publish directory: `dist/`.
