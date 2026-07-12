## Context

Currently, the landing page has three separate cards representing case studies, each with dual action buttons ("View Code" and "Live Demo"). To clean up the layout and provide a unified entry point, we will replace this grid layout in `src/components/Portfolio.jsx` with a single, highly interactive console panel styled as a modern dashboard or "Control Deck." 

## Goals / Non-Goals

**Goals:**
- Replace the case study grid in `Portfolio.jsx` with a single, unified glassmorphic console container.
- Build interactive tab controls to toggle between the three projects (*Aether Finance*, *Kroma Studio*, *Novus Retail*).
- Build interactive pill buttons to toggle between the five design presets (*Minimal*, *Dark Luxury*, *Editorial*, *Bold*, *Playful*).
- Provide dynamically updated text showing details (purpose, core layout types, color descriptions) corresponding to the active project and preset.
- Provide a single, prominent "Launch Live Demo" routing button.
- Remove all "View Code" buttons and individual external anchors.

**Non-Goals:**
- Modifying the `/demo/:projectId` routes or the files inside `src/demo/`.
- Changing the layout behavior of the e-commerce catalog page.

## Decisions

- **Decision 1: Scoped Selection State**
  - *Approach*: Implement standard React local state hooks (`selectedProject` and `selectedPreset`) inside the `Portfolio` component.
  - *Rationale*: Scoping selection state to `Portfolio` prevents unnecessary global context updates while giving us full access to react-router-dom's `Link` parameter building.
- **Decision 2: Localization of Preset Descriptions**
  - *Approach*: Declare a configuration dictionary (`LAUNCHER_MAPPINGS`) inside `Portfolio.jsx` mapping each project/preset combination to a short, engaging description and tag list.
  - *Rationale*: Keeping marketing descriptions localized to the landing page prevents bloated imports in our core schema registry files.
- **Decision 3: Framer Motion Spring Animations**
  - *Approach*: Wrap selections and description transitions in Framer Motion `<motion.div>` structures with spring curves.
  - *Rationale*: Gives the console a premium, physical feel that aligns with the premium design aesthetics.

## Risks / Trade-offs

- **[Risk]** Users might select a preset that wasn't the project's original default, causing confusion.
  - *Mitigation*: The launcher description text will explicitly state that the sandbox is running a custom theme combo, explaining the layout changes (e.g. "Novus Retail loaded with the Playful preset instead of Dark Luxury").
