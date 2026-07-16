# Tasks

## 1. Underline plain links
- [ ] `Header.module.css`: add `.navLink:hover` underline (1px accent),
      scoped to exclude `.dropdownToggle`.

## 2. Speech-bubble dropdowns
- [ ] `Header.tsx`: wrap each dropdown label text in
      `<span className="navLinkLabel">`.
- [ ] `Header.tsx`: `useEffect` measures `.navLinkLabel` center relative to
      `.dropdownContainer` (mount + resize), sets `--word-center` CSS var on
      the container.
- [ ] `Header.module.css`: `.dropdownMenu` → `left: var(--word-center);
      transform: translateX(-50%)`; remove old `translateX(-35%)`.
- [ ] `Header.module.css`: add tail triangles (`::after` bg + `::before`
      border) at `left: 50%`, colored per theme.

## 3. Validate
- [ ] `npm run typecheck`, `npm run lint`, `npm run build`.
- [ ] Manual: plain links underline on hover; dropdowns open as bubbles with
      tail centered on the word; mobile unchanged.
