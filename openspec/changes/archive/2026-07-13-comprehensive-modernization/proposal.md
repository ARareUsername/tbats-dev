## Why

The TBATS landing page is a React 19 + Vite 8 + React Router 7 application with Framer Motion animations, EmailJS integration, and a sophisticated demo sandbox system. While feature-rich, the codebase has grown organically with several technical debt areas: heavy inline styles, no TypeScript, no testing, no accessibility compliance, unoptimized Vite config, and inconsistent component patterns. Modernizing now prevents compounding maintenance burden as the demo sandbox expands and the team scales.

## What Changes

**TypeScript Migration** — Full migration to TypeScript with strict mode, path aliases, and type-safe React Router v7 routes

**Vite 8 Optimization** — Code splitting strategy, dynamic imports for demo sandbox, build optimization (minification, compression, preloading), and PWA support

**React 19 + Router 7 Modernization** — Adopt React 19 features (useOptimistic, useActionState, Server Components ready), React Router v7 framework mode with SSR-ready patterns

**Framer Motion 12 Performance** — Replace custom cursor with Motion's `useTransform`, add `willChange` optimization, respect `prefers-reduced-motion`, lazy-load heavy animations

**Component System Unification** — Extract design tokens (colors, spacing, typography), create reusable UI primitives (Button, Card, Input, Modal), unify demo sandbox components with main site components

**Accessibility (WCAG 2.1 AA)** — Semantic HTML, focus management, ARIA labels, keyboard navigation, color contrast fixes, skip links, live regions for form errors

**Testing Infrastructure** — Vitest unit tests, React Testing Library integration tests, Playwright E2E tests for critical flows (form submission, demo sandbox, theme toggle)

**EmailJS Security Hardening** — Proxy endpoint for EmailJS credentials, rate limiting, honeypot fields, CSP headers, input sanitization

**Performance & Core Web Vitals** — Image optimization (WebP/AVIF), font subsetting, critical CSS inlining, resource hints, LCP/CLS/FID monitoring

**Developer Experience** — ESLint + Prettier + Husky + lint-staged, commitlint, GitHub Actions CI (typecheck, lint, test, build), Storybook for component documentation

## Capabilities

### New Capabilities

- `typescript-migration`: Full TypeScript adoption with strict type checking across all source files
- `vite-optimization`: Production build optimization, code splitting, PWA manifest, compression
- `react-router-framework-mode`: React Router v7 framework mode with SSR-ready architecture
- `framer-motion-performance`: Optimized animation patterns with reduced-motion support
- `design-system`: Shared design tokens and reusable UI component library
- `accessibility-compliance`: WCAG 2.1 AA compliance across all interactive components
- `testing-infrastructure`: Unit, integration, and E2E test suites with CI integration
- `emailjs-security`: Secure email submission via backend proxy with validation
- `performance-monitoring`: Core Web Vitals tracking and build-time optimization
- `developer-experience`: Linting, formatting, pre-commit hooks, CI pipeline, Storybook

### Modified Capabilities

- `landing-page`: Enhanced with type safety, accessibility, and performance improvements
- `demo-sandbox`: Refactored to use shared design system, TypeScript, and optimized loading
- `contact-form`: Secured with proxy endpoint, validation, and accessibility
- `theme-system`: Type-safe theme context with SSR-compatible persistence

## Impact

**Source Files**: All files in `tbats-landing-page/src/` (50+ components, pages, contexts, hooks)
**Configuration**: `vite.config.js`, `package.json`, `tsconfig.json` (new), `.eslintrc` (new), `.prettierrc` (new)
**Dependencies**: Add TypeScript, Vitest, Playwright, @testing-library/react, eslint-plugin-jsx-a11y, storybook
**Build Output**: Optimized chunks, source maps, compressed assets, PWA manifest
**CI/CD**: New GitHub Actions workflow for typecheck, lint, test, build
**Runtime**: EmailJS proxy endpoint (new serverless function or API route)