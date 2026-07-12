## Why

To maintain full visual fidelity, we will hide the viewport level top-right shopping bag trigger on Personal Blog and Creative Portfolio preview layouts, making sure e-commerce buttons are not visible on non-commerce pages.

## What Changes

- **Viewport Header Cart Hide**: Refactor `DemoHeader.jsx` to dynamically read `projectId` and conditionally render the top-right shopping bag trigger, hiding it on Blog and Portfolio views.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `ecommerce-sampler`: Hide cart triggers on non-commerce views.

## Impact

- `src/demo/components/Layout/DemoHeader.jsx`: Hide the shopping bag trigger.
