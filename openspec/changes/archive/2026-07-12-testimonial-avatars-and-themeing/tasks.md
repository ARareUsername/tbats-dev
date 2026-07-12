## 1. Testimonials & Timeline Component Refactoring

- [x] 1.1 Refactor client details block inside `Testimonials.jsx` to render circular initials avatar badges next to their name and business details inside a flex container
- [x] 1.2 Refactor `ClientTimeline.jsx` step bubble element to use `boxShadow: 'var(--bubble-shadow)'` instead of a static shadow

## 2. Header & Contact Form Refactoring (EmailJS Integration)

- [x] 2.1 Update `Header.jsx` to change the border weight of the Light/Dark toggle buttons to `1.5px` in both desktop and mobile layouts
- [x] 2.2 Add `name` attributes to all form controls (`user_name`, `user_email`, `project_budget`, `project_desc`) in `ConsultationForm.jsx`
- [x] 2.3 Add `@emailjs/browser` dependency to `package.json` and implement the `emailjs.sendForm` integration inside `ConsultationForm.jsx` with a loading button state and error checking

## 3. CSS Styles & Validation

- [x] 3.1 Define `.testimonial-avatar` and card hover background transition styles in `index.css`
- [x] 3.2 Define `--bubble-shadow` variables under `:root` and `body.theme-light` in `index.css` to soft-pedal shadows in Light Mode
- [x] 3.3 Update `body.theme-light` variables (`--text-primary`, `--text-secondary`, `--color-silver`, and gradients) in `index.css` to use neutral zinc colors instead of blue-slate
- [x] 3.4 Run linter checks and local builds to verify code correctness and visual styling output
