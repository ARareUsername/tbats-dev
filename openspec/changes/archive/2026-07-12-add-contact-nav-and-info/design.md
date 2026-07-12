## Context

The current `tbats-landing-page` codebase is a single-page React app using Vite, Framer Motion, and custom vanilla CSS variables for layouts.
The navigation (`Header.jsx`) has nav links for sections on the page, but is missing an anchor link for "Contact".
The contact form is in `ConsultationForm.jsx`. It centers the form in an `800px` max-width card.
To display the agency contact details on the page while maintaining a premium, uncluttered editorial feel, we will transition the contact section to a wider `1100px` two-column layout on desktop viewports. This keeps the form and info consolidated inside the existing `editorial-card` element.

## Goals / Non-Goals

**Goals:**
- Add working navigation anchors for "Contact" in both desktop and mobile headers.
- Update `ConsultationForm.jsx` to render a responsive split-grid: contact details panel on the left, and the project inquiry form on the right.
- Display clickable email, physical location, and operating hours in the info panel.
- Ensure fully responsive rendering on smaller screen sizes (stacking panels on screens <= 900px).
- Add CSS hover transitions for navigation links.

**Non-Goals:**
- Creating a separate /contact page.
- Changing the EmailJS backend integration or form submission logic.
- Adding map elements or external widget dependencies.

## Decisions

### 1. Unified Grid Layout for Form & Details
- **Option A (Separate Sections)**: Add a new section above/below the form for contact details.
- **Option B (Two-Column Editorial Card)**: Widen the existing `#contact` form container card and implement a split-grid.
- **Decision**: **Option B**. Consolidating the details alongside the form inside the premium glassmorphism card prevents layout fatigue and keeps the user's primary action (the form) immediate while providing trust signals (email, location, hours).

### 2. Timezone-Aware Operating Hours
- **Decision**: Show standard studio working hours with timezone details (`Mon – Fri, 9:00 AM – 6:00 PM (GMT+8)`) since the agency serves local and international clients.

### 3. Navigation Styling in index.css
- **Decision**: Declare hover styles inside `index.css` under the `.nav-links a:hover` and `.hover-accent:hover` classes rather than introducing complex React hover states, maintaining high performance and CSS transitions.

## Risks / Trade-offs

- **[Risk] Layout Crowding on Medium Viewports**: A 2-column layout can look cramped on small laptops (900px - 1024px).
  - *Mitigation*: Adjust padding, use relative spacing, and ensure responsive wrapping. Use `@media (max-width: 900px)` in CSS/JS to switch layout to stacked mode.
- **[Risk] Form Overlay Centering**: When the form is submitted, a success screen overlays the form.
  - *Mitigation*: Ensure the success state overlay is bounded correctly to the container card, providing a smooth full-card transition.
