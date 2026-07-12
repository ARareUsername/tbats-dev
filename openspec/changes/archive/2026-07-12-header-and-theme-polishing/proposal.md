## Why

Following further design review and user feedback, several refinements are needed to optimize layout polishing, accessibility, branding, and motion:
1. The background dot-matrix grid is invisible in both Light and Dark modes due to low contrast and browser mask constraints.
2. The FAQ accordion section uses hardcoded background `#020202` and white text, making it render incorrectly in Light Mode.
3. The visual text gradients on titles (e.g. "Convert") should blend into the brand logo's emerald green color to unify styling.
4. The pricing option cards should spring-bounce whenever pressed, adding high-fidelity micro-interactions.
5. The header navigation needs a working link pointing to the new `#about` section.
6. The typography font swapper should be removed (always default to Sans-serif/Outfit for headings), while keeping Serif styling strictly on brand elements (logo name, pricing amounts, avatar initials).

## What Changes

- Adjust dot-matrix grid contrast variables in both themes and simplify mask parameters to standard formats so they render correctly on all devices.
- Refactor the FAQAccordion component to use transparent backgrounds and dynamic text color tokens.
- Update the text gradient class to transition from silver/slate into the brand's emerald green.
- Add tap-to-bounce motion capabilities utilizing Framer Motion's tap/spring states in the InteractiveEstimator cards.
- Integrate a working "About" navigation anchor link in both desktop and mobile header menus.
- Eliminate the typography font selection toggle in the header, delete related state managers in App.jsx, and establish var(--font-sans-display) as the default heading font in index.css while retaining var(--font-serif) on logos and specific visual metrics.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `custom-cursor`: Streamlining header styles by removing typography options.
- `agency-landing-page`: Polishing navigation, FAQ themeing, grid contrast, and pricing card spring animations.

## Impact

- `tbats-landing-page/src/components/Header.jsx`: Remove font selector buttons and add working About links.
- `tbats-landing-page/src/components/FAQAccordion.jsx`: Remove solid dark background and set text primary colors.
- `tbats-landing-page/src/components/InteractiveEstimator.jsx`: Add spring bounce whileTap properties to pricing cards.
- `tbats-landing-page/src/App.jsx`: Remove fontMode state references.
- `tbats-landing-page/src/index.css`: Update text-gradient color transitions, set default heading font to Outfit, delete font swapper classes, and optimize dot grid visibility rules.
