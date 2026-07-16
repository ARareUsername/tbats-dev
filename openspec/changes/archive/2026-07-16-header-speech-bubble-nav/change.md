# Change: Header — Speech-Bubble Dropdowns & Link Underlines

## Why

The header's plain nav links (About, Pricing, Contact) only shift color on
hover, giving no clear "pressable" affordance. The dropdown toggles (Services,
Our Work) open a plain rounded menu with no connection to the trigger word. We
want:
- plain links to underline on hover (clear pressable cue), and
- dropdown menus to render as speech bubbles whose tail is centered on the
  trigger WORD (not the arrow), visually tying the bubble to the label.

## What Changes

- `src/components/Header.tsx`
  - Wrap each dropdown trigger's label text in a `<span className="navLinkLabel">`
    so its horizontal center can be measured.
  - Measure the label span center relative to the `.dropdownContainer` (on
    mount + resize) and set a `--word-center` CSS variable on the container.
- `src/components/Header.module.css`
  - Plain `.navLink` (not `.dropdownToggle`): add a subtle underline on hover
    (1px, accent/currentColor). Active links keep their accent style.
  - `.dropdownMenu`: become a speech bubble — keep rounded box + border +
    shadow, position with `left: var(--word-center); transform: translateX(-50%)`
    so it centers on the word, and add a CSS-triangle tail at `left: 50%`
    (bubble center = word center). Tail color matches bubble bg in both themes,
    with a bordered edge.
  - Remove the old `transform: translateX(-35%)` offset.
  - Mobile dropdowns remain accordions (no bubble).

## Impact

- Affected: `Header.tsx` + `Header.module.css` only. No new dependencies, no
  route/API changes. Desktop only; mobile unchanged.
