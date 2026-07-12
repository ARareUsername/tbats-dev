## Context

The current `tbats.dev` landing page has some broken user flows and aesthetic shortcomings:
1. `ClientTimeline.jsx` displays services instead of steps. We need to redesign it to present a 5-step client journey with clear step numbers and sequential progress lines.
2. The background noise filter in `index.css` is low resolution because of viewBox stretching. We will write a repeating, high-resolution SVG background style.
3. Footer location displays "Manila, Philippines". We will update this to "Pampanga, Philippines".
4. Navigation anchors on Hero buttons and Header/Footer links must point to `#contact` and `#process` respectively and scroll smoothly.

## Goals / Non-Goals

**Goals:**
- Replace the Bento grid in `ClientTimeline.jsx` with a 5-step process timeline component. Set its ID to `process`.
- Adjust `index.css` noise background (`body::before`) to use a sharp, repeating SVG pattern.
- Update footer text with the correct location.
- Align all anchor IDs and link href attributes for scrolling.

## Decisions

- **Process Layout**: The 5-step process will be displayed as a vertical or horizontal responsive chain with number badges (e.g., 01, 02, 03, etc.) and connected lines, using custom framer-motion stagger animations.
- **Grainy Effect**: Define a non-stretched, small repeating SVG for the noise texture to ensure it scales natively on high-density displays (e.g., `width="100" height="100"`).
- **Navigation Links**:
  - Hero "Start a Project" button -> `#contact`
  - Hero "How We Work" button -> `#process`
  - Header links: Services -> `#services`, Process -> `#process`, Pricing -> `#pricing`, "Start a Project" button -> `#contact`
  - Footer links: About -> `#hero` or `#services`, Process -> `#process`, Pricing -> `#pricing`
  - Add `scroll-behavior: smooth` to the html element in `index.css`.

## Risks / Trade-offs

- **Risk**: Hard jump scrolling when clicking anchors.
  - **Mitigation**: Add `scroll-behavior: smooth` to the html/body element.
