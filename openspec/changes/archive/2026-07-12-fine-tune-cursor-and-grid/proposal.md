## Why

After initial testing of the style toggles and dot matrix grid, several layout, accessibility, and content issues were identified:
1. The custom cursor's hovered difference-mode scale (2.0x, or 64px) was too large and invasive.
2. The dot-matrix background pattern was hidden behind solid backgrounds in the Services and Process components.
3. The custom cursor became completely invisible during Light Mode because the `screen` mix-blend-mode screens out to white over the off-white background.
4. Without background color offsets between transparent sections, there was not enough visual separation between layout areas.
5. The feature lists in the pricing cards used developer-oriented jargon (CMS, responsive, SEO) that is difficult for laymen clients to understand.
6. The "About Us" link in the footer points to `#about`, which does not exist on the landing page, resulting in a broken anchor. Adding a team profile section introduces the core engineering team and resolves this broken anchor.

## What Changes

- Reduce the custom cursor's hovered scale from `2.0` to a more compact `1.4` size (`45px` diameter) to prevent text obscuring.
- Update the section components (`ServicesList` and `ClientTimeline`) to have transparent backgrounds, allowing the spotlight dot-matrix grid to show through.
- Modify the custom cursor to dynamically adapt its default background opacity and mix-blend-mode in Light Mode (using `normal` mode and darker colors) to maintain high visibility.
- Introduce thin, elegant 1px horizontal separators between key sections to structure the layout.
- Translate pricing card feature lists into plain, business-value benefits (e.g., self-editable text, mobile-friendly setup, Google search setup).
- Add a new **About Us / Team** section (`#about`) containing profiles for a 5-developer agency team:
  - **Karl Bondoc**: Lead Web Engineer
  - **Emmanuel Ken Almendra**: Lead UI/UX Architect
  - **Mark Angelo Mendoza**: React Platform Specialist
  - **Daile Paragas**: Performance & SEO Analyst
  - **Kyle Cyrill Lumacad**: Systems & Backend Developer

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `custom-cursor`: Fine-tuning hover scale and implementing theme-adaptive visibility styles.
- `agency-landing-page`: Enhancing section layout transparency, adding section separators, simplifying pricing explanations, and adding the 5-developer Team Profile section (`#about`).

## Impact

- `tbats-landing-page/src/components/CustomCursor.jsx`: Modify hover scale, accept theme state prop, and set adaptive style variables.
- `tbats-landing-page/src/components/ServicesList.jsx`: Make background transparent.
- `tbats-landing-page/src/components/ClientTimeline.jsx`: Make background transparent.
- `tbats-landing-page/src/components/InteractiveEstimator.jsx`: Restructure package text to layman-friendly terms.
- `tbats-landing-page/src/components/Team.jsx`: Create a new component rendering the 5 team member profile cards in a responsive grid.
- `tbats-landing-page/src/index.css`: Add section separator classes, adjust dot color variables, customize light mode cursor fallback colors, and add styles for the Team grid layout.
- `tbats-landing-page/src/App.jsx`: Render section dividers and the `Team` component between layout sections, and pass the `theme` prop to the custom cursor.
