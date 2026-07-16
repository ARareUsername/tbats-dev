## Context

The Services section currently renders three uniform editorial Cards in a 3-column grid with generic Material Symbols (token, code, speed), technical descriptions, and a "Core Competencies" bullet list full of jargon. The section header "Our Capabilities" is inward-facing. The existing spec and landing page spec both call for a bento-box layout, but the current implementation never migrated to it.

The site uses Material Symbols throughout (Header, Footer, FAQ, ConsultationForm, Team, InteractiveEstimator, ClientTimeline, BackToTop), so any icon change should stay within that library for consistency.

## Goals / Non-Goals

**Goals:**
- Rewrite pillar taglines to client-outcome language: "A Brand That Stands Out", "A Website That Works for You", "Customers Who Find You Online"
- Rewrite the section header to "What We Build" with subtitle "From Concept to Conversion"
- Update section badge from "Expertise" to "Design · Code · Grow"
- Replace icons with material-symbols names that reinforce the metaphor: `palette`, `rocket_launch`, `trending_up`
- Refactor layout from uniform 3-column grid to asymmetric bento grid (third card spans full width)
- Rewrite core competency bullets from technical specs to client language
- Keep all existing animations (Framer Motion scroll reveal, card hover border transition)

**Non-Goals:**
- No new npm packages or icon libraries
- No changes to other components or sections
- No changes to Card, Section, or Container primitives
- No changes to the services-list main spec (update the delta spec only)

## Decisions

1. **Asymmetric bento over 3-column grid**: The third card ("Customers Who Find You Online") spans the full width below the first two. This creates visual hierarchy — the first two pillars (Design, Dev) are the "what", the third (SEO/Growth) is the "how you get found." On mobile, all three stack vertically as full-width cards.

2. **Material Symbols keep (palette, rocket_launch, trending_up)**: The entire app uses Material Symbols consistently. Switching to Phosphor or Heroicons would break visual consistency across 10+ components. The selected names are concrete metaphors (palette=design craft, rocket_launch=launch speed, trending_up=growth) compared to the current generic ones (token, code, speed).

3. **Core competencies as plain list, not "Core Competencies" header**: Remove the "Core Competencies" label and render the items as a flat, less prominent list under the description. The old heading added noise — the bullets should speak for themselves.

4. **Section header hierarchy**: "What We Build" as the main H2, "From Concept to Conversion" as a subtitle below it, and "Design · Code · Grow" as a small badge above both. This creates a narrative arc before the visitor even reads a card.

5. **Card interior layout**: Icon stacked above tagline (bold H3), then short description paragraph, then competency bullets. No "Core Competencies" subheading — just a clean list with check icons.

## Risks / Trade-offs

- **[Bento grid on mobile]** The asymmetric layout adds complexity for responsive stacking. Mitigation: on viewport ≤ 768px, all three cards collapse to full-width stacked, no special positioning needed.
- **[Icon name mismatch]** If Google eventually changes Material Symbols naming, `rocket_launch` could break. Mitigation: low risk — Material Symbols are stable Google-maintained icons.
- **[Competency rewrite shifts meaning]** Client-language bullets ("Update your content anytime, no tech skills needed") are less precise than technical terms. Mitigation: the spec still captures technical requirements; the UI is optimized for client understanding, not developer documentation.
