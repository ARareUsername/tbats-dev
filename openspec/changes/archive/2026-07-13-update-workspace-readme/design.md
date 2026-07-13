## Context

The root `README.md` is a 28-line stub (title, 3-bullet project structure, minimal getting-started, build instructions). It sits at the repo root and is the GitHub-facing entry point. The actual polished documentation lives in `tbats-landing-page/README.md` (75 lines with architecture, full scripts table, tech stack, deployment). There's also a `CONTRIBUTING.md` and `CHANGELOG.md` inside the app directory that are invisible from the repo root.

The repo has an unusual structure — it's a workspace container holding one real app (`tbats-landing-page/`), OpenSpec specs (`openspec/`), and agent config (`.agent/`, `.opencode/`). This needs explanation because it doesn't match the standard single-package layout most developers expect.

## Goals / Non-Goals

**Goals:**
- Replace the stub root README with a comprehensive meta-README following the 3-tier layout strategy (pitch → proof → reference)
- Include a live badge bar showing site status, tech stack, license
- Document every npm script available in the app directory
- Explain the workspace structure visually
- Surface the quality story (strict TS, conventional commits, coverage, Lighthouse)
- Link to `CONTRIBUTING.md` and any other relevant docs
- Add quick-start that accounts for the workspace layout (cd into app subdirectory)
- Include a "Features" section summarizing what the app does

**Non-Goals:**
- Editing `tbats-landing-page/README.md` — that file is already solid
- Creating new documentation files (no new CONTRIBUTING, LICENSE, or CHANGELOG)
- Adding auto-generated dynamic content (star charts, GitHub Actions blog updaters)
- Changing any code or configuration

## Decisions

1. **3-tier layout strategy** over flat section dump. Tier 1 (above fold): title, tagline, badge bar, one-liner. Tier 2 (scan zone): features, quick-start, scripts. Tier 3 (reference): quality, deployment, contributing, license. Rationale: research shows 30-second scan time is the target; readers decide to stay or leave in the first viewport.

2. **Badge selection (4 functional + 1 social):**
   - Live site badge (Netlify status)
   - License badge
   - TypeScript badge (signals strict typing)
   - React version badge
   - GitHub stars badge (social proof, zero-maintenance)
   Rationale: every badge carries signal. No "Made with ❤️" or "PRs welcome" badges — research shows they don't improve conversion.

3. **Mermaid diagram for project structure.** GitHub natively renders Mermaid. An ASCII tree or Mermaid block is faster to scan than a bullet list. Use Mermaid's `graph LR` or `block` layout.

4. **Relative links to app README, CONTRIBUTING.md, and docs.** GitHub renders relative links from the repo root. This keeps the root README focused while directing to deeper docs.

5. **Tone: professional but not corporate.** The agency pitch is "Crafting Digital Experiences That Convert." The README should mirror that — polished, concise, confident. Avoid boilerplate ("Welcome to...") and filler.

6. **No open-source license badge unless a LICENSE file is added.** The project is marked `"private": true`. If a decision is made to open-source, add MIT license and badge at that time. For now, omit or use "Private" badge.

7. **No hero image / screenshot.** The app is an agency landing page — a screenshot would add visual value but would become a maintenance burden (needs re-capture on every redesign). Defer until the app design stabilizes further.

## Risks / Trade-offs

- **[Maintenance burden]** A comprehensive README is more to update when the project changes. Mitigation: each section is self-contained; updates are localized. The scripts table is the highest-churn section.
- **[App README divergence]** The root README and app README could fall out of sync. Mitigation: root README links to app README as the source of truth for detailed info; root only summarizes.
- **[Badge link rot]** Shields.io and external badge services could go down or change URLs. Mitigation: use well-established badge services; badges are cosmetic, not functional.
