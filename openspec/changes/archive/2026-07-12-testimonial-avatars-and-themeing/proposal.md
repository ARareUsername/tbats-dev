## Why

During testing, several design details in both Light and Dark modes were identified as needing polish:
1. The client testimonial cards lacked distinct visual elements representing the authors in Light Mode.
2. The drop shadow on the timeline step numbering bubbles (`rgba(0,0,0,0.5)`) is too dark and intense, causing a smudge-like appearance in Light Mode.
3. The main "Start a Project" button (using `--text-primary`) has a blue slate tint in Light Mode (`#0f172a`) which looks out of place.
4. The border around the Light/Dark mode toggle switch in the header is too thin and lacks definition.
5. The "Start a Project" contact form has only mock submission logic. Connecting it to a free, static email integration service (EmailJS) will allow submissions to be delivered to `tbats.bondoc.karl@gmail.com` using a high-fidelity HTML layout matching the studio's branding.

## What Changes

- Add circular initials avatars (name icons) next to client names in the `Testimonials.jsx` cards.
- Reduce the intensity of the timeline numbering bubble shadow by replacing the hardcoded value with a soft, theme-adaptive CSS variable.
- Refactor the Light Mode primary text and silver color variables to use a neutral zinc/gray palette instead of blue-slate, removing the blue tint from buttons.
- Increase the border thickness of the Light/Dark switch buttons in the header (both desktop and mobile) from `1px` to `1.5px`.
- Integrate EmailJS inside the contact form component (`ConsultationForm.jsx`) to forward form values to `tbats.bondoc.karl@gmail.com` in a branded, inline-styled HTML template.

## Capabilities

### New Capabilities
None.

### Modified Capabilities
- `agency-landing-page`: Polishing testimonial name icons, softening timeline numbering shadows, neutralizing button colors in Light Mode, thicking theme toggle borders, and adding functional email dispatch via EmailJS in the contact form.

## Impact

- `tbats-landing-page/package.json`: Add dependency `@emailjs/browser`.
- `tbats-landing-page/src/components/Testimonials.jsx`: Add rendering logic for initials avatars inside the author detail block.
- `tbats-landing-page/src/components/ClientTimeline.jsx`: Bind step bubble box shadows to theme-adaptive variables.
- `tbats-landing-page/src/components/ConsultationForm.jsx`: Integrate EmailJS client library, bind input fields to form names, and render a loading spinner state on the submit button.
- `tbats-landing-page/src/components/Header.jsx`: Increase border thickness on the theme toggles.
- `tbats-landing-page/src/index.css`: Define styles for `.testimonial-avatar`, neutralize Light Mode color variables, set `--bubble-shadow` variables, and optimize border weights.
