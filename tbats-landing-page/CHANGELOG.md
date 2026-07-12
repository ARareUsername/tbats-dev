# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- TypeScript migration with strict config
- Design token system (`tokens.css`, `globals.css`)
- Component library: Button, Card, Input, Badge, Avatar, Section, Container, SkipLink
- React Router v7 Framework Mode (hybrid SSR for landing, SPA for demo sandbox)
- Framer Motion performance optimizations (lazy loading, reduced-motion support)
- EmailJS serverless proxy with rate limiting and CSP headers
- Font optimization (WOFF2, `font-display: swap`, metric overrides)
- Image optimization (WebP/AVIF, lazy loading, explicit dimensions)
- Vite bundle analysis and manual chunking
- Testing infrastructure: Vitest, React Testing Library, Playwright, Storybook
- Accessibility: WCAG 2.1 AA (skip links, focus management, ARIA, contrast)
- CI/CD pipeline: typecheck, lint, test, build, coverage
- Security: CSP headers, env validation, server-only EmailJS keys

### Changed
- Migrated from Vite SPA to React Router hybrid SSR architecture
- Custom cursor refactored for 60fps with spring physics
- Reduced-motion support across all animated components
