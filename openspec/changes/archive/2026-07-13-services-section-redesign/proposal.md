## Why

The Services section uses technical jargon ("Core Web Vitals Strategy", "Headless CMS Integrations", "API & Backend Engineering") that doesn't resonate with the target audience of Filipino business owners and agency clients. The section header "Our Capabilities" describes what we do internally, not what the client gets. The layout is a uniform 3-column card grid that doesn't create visual hierarchy, and the Material Symbols icons (token, code, speed) are generic metaphors that don't tell a story. First-time visitors can't immediately understand what the agency sells.

## What Changes

- Rewrite the three service pillar taglines from technical descriptions to client-outcome promises
- Change the section header from "Our Capabilities" to "What We Build — From Concept to Conversion"
- Replace generic Material Symbols icons with metaphors that support the new messaging
- Refactor the 3-column card layout into an asymmetric bento grid (third card spans full width)
- Rewrite all core competencies bullets in client language (e.g., "React & Next.js Builds" → "A fast, modern website")
- Update the section subtitle from "Expertise" to "Design · Code · Grow"

## Capabilities

### New Capabilities
- `services-section`: Restructured services section with client-outcome messaging, bento grid layout, and improved iconography

### Modified Capabilities
- `services-list`: Update requirement for service pillar descriptions to use client-outcome language instead of technical stack details

## Impact

- `src/components/ServicesList.tsx` — rewrite messaging, layout, and icons
- `src/components/ServicesList.module.css` — new bento grid layout styles
- No new dependencies or packages required (stays within Material Symbols and existing component library)
