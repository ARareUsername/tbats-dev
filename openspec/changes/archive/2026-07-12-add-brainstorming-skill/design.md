## Context

The agent currently does not have a dedicated skill to explicitly shift into a brainstorming mode. The user requested adding a `brainstorming` skill from online or locally, to guide the agent in exploring ideas, evaluating alternatives, and structuring creative thought processes before taking action.

## Goals / Non-Goals

**Goals:**
- Provide a `brainstorming` skill file at `.agent/skills/brainstorming/SKILL.md`.
- Instruct the agent to systematically explore options, pros, cons, and ask clarifying questions during the brainstorming phase.

**Non-Goals:**
- Integrating new external brainstorming API services (it's purely a prompt/behavioral skill).

## Decisions

- **Skill location**: The skill will reside in `.agent/skills/brainstorming/`.
- **Instruction format**: The skill will use standard markdown instructions (`SKILL.md`) to define the brainstorming methodology for the agent.

## Risks / Trade-offs

- **Risk**: The agent might get stuck in brainstorming mode and not progress to actual implementation.
  - **Mitigation**: The skill instructions will emphasize summarizing decisions and offering a transition to the next action step.
