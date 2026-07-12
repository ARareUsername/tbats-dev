---
name: brainstorming
description: "Structured brainstorming and ideation to explore options, list pros/cons, and outline alternative solutions before making coding decisions."
category: ideation
risk: safe
date_added: "2026-07-12"
author: Antigravity
tags: [brainstorming, ideation, design, architecture, planning]
license: MIT
---

# Brainstorming Skill

## Overview

Use this skill when the user asks for brainstorming, ideation, exploring alternatives, comparing different approaches, or before beginning complex features where technical choices are not yet established.

## When to Use This Skill

- Use when the user says "brainstorm", "ideate", "explore alternatives", "compare solutions", or "help me think through".
- Use before implementing a feature that has multiple design choices and no clear consensus.
- Do NOT use for straight implementation, bug-fixing, or simple tasks where the path forward is already completely defined.

## Methodology

### Step 1: Clarify Objectives
First, identify the core problem being solved and the constraints (e.g., performance, ease of implementation, maintenance cost).

### Step 2: Generate Alternatives
Propose at least 2-3 distinct approaches. Avoid presenting only one choice.

### Step 3: Analyze Pros and Cons
For each option, outline:
- **Pros**: What makes this approach good (e.g., fast, simple, robust).
- **Cons**: What are the trade-offs (e.g., tech debt, complex setup, dependencies).

### Step 4: Recommend & Transition
Provide a recommended path forward with a brief rationale, and ask the user for feedback or decision before proceeding.

## Examples

### Example 1: Comparing Database Options

```
User: We need to store user preferences. Should we use Postgres JSONB or a separate key-value table?

Agent: Let's brainstorm these two approaches.

#### Option 1: Postgres JSONB column on user table
- **Pros**: Simple schema, no joins needed to fetch preferences with user, very flexible.
- **Cons**: Harder to query/aggregate across all users, no schema enforcement.

#### Option 2: Separate key-value table
- **Pros**: Standard relational design, easy to query/index specific keys.
- **Cons**: Requires joins, more tables to manage.

**Recommendation**: If preferences are dynamic and read/written together with the user record, Option 1 (JSONB) is recommended. If you need to search or report on specific keys frequently, Option 2 is better.

Which option do you prefer?
```
