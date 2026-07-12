## Context

During testing, several design details in both Light and Dark modes were identified as needing polish:
1. Client testimonial cards lack distinct visual elements representing the authors.
2. The drop shadow on the timeline step numbering bubbles is too dark and intense in Light Mode.
3. The main "Start a Project" button has a blue slate tint in Light Mode.
4. The border around the Light/Dark toggle switch in the header is too thin.
5. The contact form needs functional email dispatching to `tbats.bondoc.karl@gmail.com` using a high-fidelity HTML layout matching the website's branding.

---

## Goals / Non-Goals

**Goals:**
* Render circular initials avatars next to names in `Testimonials.jsx`.
* Bind timeline step bubble box shadows to theme-adaptive variables to reduce intensity in Light Mode.
* Neutralize Light Mode dark colors (shifting slate #0f172a to zinc #18181b) to remove the blue button tint.
* Set the border thickness of the Light/Dark toggle switches in the header to exactly 1.5px.
* Integrate EmailJS in `ConsultationForm.jsx` to dispatch contact inquiries directly to Gmail.

---

## Decisions

### 1. Testimonial Avatar Layout
*   **Decision**: Update the card author block in `Testimonials.jsx` to wrap the initials avatar and text metadata inside a flex container.

### 2. Timeline Step Bubble Shadows
*   **Decision**: Define `--bubble-shadow` in `index.css`:
    *   Dark mode: `--bubble-shadow: 0 4px 15px rgba(0, 0, 0, 0.4)`
    *   Light mode: `--bubble-shadow: 0 4px 12px rgba(0, 0, 0, 0.04)`
*   **Implementation**: Update `ClientTimeline.jsx` step bubble to use `boxShadow: 'var(--bubble-shadow)'`.

### 3. Neutralizing Light Mode Accents (Blue Tint Fix)
*   **Decision**: Update `body.theme-light` variables block in `index.css` to neutralize slate colors.

### 4. Thicker Switch Borders
*   **Decision**: Update `Header.jsx` to render the theme toggles (both desktop and mobile) with `border: '1.5px solid var(--border-color)'`.

### 5. EmailJS Client Integration
*   **Decision**: Add `@emailjs/browser` dependency and refactor `ConsultationForm.jsx`:
    *   **Variables**: Bind to environment variables with local defaults:
        *   `SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_tbats'`
        *   `TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_tbats'`
        *   `PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'`
    *   **Controls**: Add `name` attributes to all form controls (`user_name`, `user_email`, `project_budget`, `project_desc`).
    *   **Submission**: Use `emailjs.sendForm` with a loading button state.
*   **Bespoke HTML Dashboard Template**:
    Below is the HTML template code that the user should copy and paste into their EmailJS Template Creator:
    ```html
    <div style="background-color: #000000; color: #ffffff; padding: 40px; font-family: 'Outfit', 'Inter', sans-serif; border: 1px solid #1c1917; max-width: 600px; margin: 0 auto;">
      <div style="display: flex; align-items: center; margin-bottom: 30px; border-bottom: 1px solid #27272a; padding-bottom: 20px;">
        <span style="font-size: 1.5rem; font-weight: 800; font-family: Georgia, serif; color: #ffffff;">
          tbats<span style="color: #10b981;">.dev</span>
        </span>
        <span style="margin-left: auto; font-size: 0.8rem; text-transform: uppercase; color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 99px;">
          New Project Inquiry
        </span>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #27272a; font-weight: 500; color: #a1a1aa; width: 120px;">Name</td>
          <td style="padding: 12px; border-bottom: 1px solid #27272a; color: #ffffff;">{{user_name}}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #27272a; font-weight: 500; color: #a1a1aa;">Email</td>
          <td style="padding: 12px; border-bottom: 1px solid #27272a; color: #ffffff;">
            <a href="mailto:{{user_email}}" style="color: #10b981; text-decoration: none;">{{user_email}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #27272a; font-weight: 500; color: #a1a1aa;">Budget</td>
          <td style="padding: 12px; border-bottom: 1px solid #27272a; color: #10b981; font-weight: 600;">{{project_budget}}</td>
        </tr>
      </table>
      <div style="background-color: #09090b; border: 1px solid #27272a; padding: 20px; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #a1a1aa; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</h4>
        <p style="color: #e4e4e7; font-size: 0.95rem; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{project_desc}}</p>
      </div>
      <div style="margin-top: 30px; text-align: center; font-size: 0.75rem; color: #71717a;">
        Sent from the tbats.dev consultation form.
      </div>
    </div>
    ```

---

## Risks / Trade-offs

*   **[Risk] Unconfigured EmailJS credentials** → If service/template IDs or public key are missing or incorrect, email sends will fail.
    *   *Mitigation*: Include user-friendly error checking (`console.error` and alert prompts) and print clean environment variable loading steps so the user is guided on where to define their EmailJS keys.
