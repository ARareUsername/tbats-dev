## Context

During testing, readability issues were identified in both Light and Dark modes:
1. Typing inside input fields was invisible in Light Mode due to hardcoded white text on a white backdrop.
2. Background grid dots showed through input fields, causing visual interference while typing.
3. Translucent headers in capabilities and skill badges inside the team roster were hardcoded to white, making them invisible in Light Mode.

---

## Goals / Non-Goals

**Goals:**
* Ensure input text is high-contrast and readable in both Light and Dark modes.
* Block background grid dots behind the contact card and inside form textboxes.
* Fix contrast of translucent white text elements and badges to make them visible in Light Mode.

---

## Decisions

### 1. CSS Theme Variables
*   **Decision**: Define a new solid input background variable `--bg-input` in `index.css`:
    *   Dark Mode (`:root`): `--bg-input: #08080a` (solid deep charcoal).
    *   Light Mode (`body.theme-light`): `--bg-input: #ffffff` (solid pure white).

### 2. Consultation Form Layout & Text Contrast
*   **Decision**: Update [ConsultationForm.jsx](file:///home/rare/Dev/TBATS/tbats-landing-page/src/components/ConsultationForm.jsx):
    *   **Container Card**: Set `background: 'var(--bg-dark-end)'` to fully hide the background grid dots behind the card block.
    *   **Input Fields & Textarea**:
        *   Set text color to `color: 'var(--text-primary)'` (dynamic).
        *   Set background to `background: 'var(--bg-input)'` (solid backdrop).

### 3. Services List Header Contrast Fix
*   **Decision**: Update [ServicesList.jsx](file:///home/rare/Dev/TBATS/tbats-landing-page/src/components/ServicesList.jsx):
    *   **Pillar Capability Headers**: Change `color: 'rgba(255, 255, 255, 0.4)'` to `color: 'var(--text-primary)', opacity: 0.4` to automatically scale with active light/dark themes.

### 4. Team Roster Skill Tag Contrast Fix
*   **Decision**: Update [Team.jsx](file:///home/rare/Dev/TBATS/tbats-landing-page/src/components/Team.jsx):
    *   **Focus Tag Elements**: Change background from `rgba(255,255,255,0.05)` to `var(--border-color)` (resolves to very soft gray in Light Mode).

---

## Risks / Trade-offs

None.
