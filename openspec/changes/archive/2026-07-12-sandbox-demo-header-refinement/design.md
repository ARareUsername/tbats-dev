## Context

The top-right header wrapper (`DemoHeader.jsx`) has a hardcoded shopping bag trigger, which displays on all `/demo/*` routes, including the Blog and Portfolio views.

## Goals / Non-Goals

**Goals:**
- Dynamically hide the viewport top-right shopping bag trigger inside `DemoHeader.jsx` on Blog and Portfolio views.

**Non-Goals:**
- Redesigning the exit button or breadcrumb elements.

## Decisions

- **Decision 1: Viewport Header Cart Hide**
  - *Approach*: Check `projectId` using `useParams()` inside `DemoHeader.jsx` and render the button only when `!isBlog && !isPortfolio` is true.
  - *Rationale*: Eliminates commerce elements from non-commerce samplers completely.

## Risks / Trade-offs

*(None)*
