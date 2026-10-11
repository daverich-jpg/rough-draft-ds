# Elevation

Hard offset **sticker shadows**: the way a sticker sits on paper. **No blur, ever.** No soft drop-shadows, glows or opacity stacks.

| Token | Value | Use |
|---|---|---|
| `shadow-none` | — | Flat cards, ghost buttons, pressed state |
| `shadow-xs` | 2px 2px 0 | Selected chips, mood trail today |
| `shadow-sm` | 3px 3px 0 | Resting buttons, focused inputs |
| `shadow-md` | 5px 5px 0 | Cards, hovered buttons |
| `shadow-lg` | 8px 8px 0 | Modals, zine cards |
| `shadow-xl` | 12px 12px 0 | Posters only |

The shadow colour is the `shadow` semantic token: **ink** in light mode, **deep yellow** (`sunshine-800`) in dark mode, so the offset stays visible on navy.

## Taped = flat

Anything with tape (`.rd-tape`: taped `Card`, `ZineCard`, `ScreenshotCard`) has **no shadow and no hover lift**. Tape pins paper to the page; it doesn't float. The rule is enforced in `components/styles.css`, and the focus ring still shows.

## Behaviour

- **Hover** lifts: `translate: -2px -2px` and one shadow step up.
- **Press** sinks into its own shadow: `translate: 3px 3px` and the shadow drops to none. Elevation is tactile, not atmospheric.
- Components set `--rd-elev`; the focus ring composes with it, so focused elements keep their shadow.

## Strokes: sparingly

Shape comes from **fill + hard shadow**, not outlines. A stroke has to earn its place:

| Allowed | Token | Why |
|---|---|---|
| Text fields, selects | `border-base` 2px (`border-input`) | You need to see where to type (WCAG 1.4.11) |
| Checkbox / radio boxes | `border-base` 2px | The empty box *is* the control |
| Invalid field | `border-chunky` 3px in `error-text` | A second, non-colour error signal |
| Focus ring | 3px ring + 2px halo | Always |
| Missed / empty slot | 2px dashed `border-subtle` | "Missing" must read without colour |
| Screenshot card post divider | `border-hair` 1px | Authenticity of the screenshot |

**No stroke on:** buttons, cards, chips, tags, badges, stickers (white die-cut instead), modals, sheets, toasts, tabs, nav, avatars, progress, section dividers. Illustration linework and icons are drawing, not UI chrome, and keep their lines.

## Z-index

`base 0 · raised 10 · sticky 100 · nav 200 · overlay 900 · modal 1000 · toast 1100`
