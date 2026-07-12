## Why

During testing, two major visual contrast and readability issues were identified:
1. In Light Mode, the typed text inside the contact form textboxes is invisible because the text color is hardcoded to white on a light background.
2. In Dark Mode, the translucent background grid overlay shows through the textboxes, creating visual noise and interfering with text readability while typing.
3. Translucent headers or metadata titles (e.g. in `ServicesList.jsx` and `Team.jsx`) use hardcoded transparent white values, making them invisible in Light Mode.

## What Changes

- Refactor `ConsultationForm.jsx` input/textarea text colors to use `var(--text-primary)` (resolving light-mode input text invisibility).
- Update the "Start a Project" card to use a solid, opaque background (`var(--bg-dark-end)`) to hide the background grid dots behind it.
- Update input and textarea fields in `ConsultationForm.jsx` to use a solid, theme-adaptive background (`var(--bg-input)`) so background grid dots do not show through the text input area while typing.
- Identify and update hardcoded white text/background styles in `ServicesList.jsx` and `Team.jsx` to utilize theme-adaptive variables or proper opacities.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `agency-landing-page`: Resolving form input text visibility, grid dot layering underneath cards, and text contrast across capabilities.

## Impact

- `tbats-landing-page/src/components/ConsultationForm.jsx`: Refactor inputs/textarea styling for solid backgrounds and theme-adaptive text color.
- `tbats-landing-page/src/components/ServicesList.jsx`: Fix hardcoded transparent white headers.
- `tbats-landing-page/src/components/Team.jsx`: Update skill badge backgrounds to use theme-adaptive styles.
- `tbats-landing-page/src/index.css`: Add input background variables and update form card overrides.
