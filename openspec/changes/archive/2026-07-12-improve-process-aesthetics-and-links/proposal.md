## Why

The current website contains placeholder services in place of a true client journey timeline, rendering the "How We Work" flow incomplete. Additionally, the noise background gradient looks low resolution, the agency location is outdated, and the Hero call-to-action buttons do not navigate to their corresponding sections.

## What Changes

- Refactor the `ClientTimeline.jsx` component to implement a 5-step process timeline showing how the studio works.
- Update the background noise filter in `index.css` to render a native high-resolution grainy background pattern.
- Update the agency's location to "Pampanga, Philippines" in the footer.
- Fix navigation anchors for the "Start a Project" and "How We Work" buttons in `Hero.jsx` and other components to scroll to their targets (`#contact` and `#process`).

## Capabilities

### New Capabilities
- `process-timeline`: An interactive 5-step timeline describing the client journey and project delivery process.
- `site-aesthetics-and-links`: High-resolution grainy texture background, corrected studio location, and functioning navigation anchors.

### Modified Capabilities
None

## Impact

- Modifies `ClientTimeline.jsx` to restructure items as steps.
- Modifies `index.css` to update the background noise.
- Modifies `Hero.jsx` and `Footer.jsx` to correct links and location text.
