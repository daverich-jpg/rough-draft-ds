# Texture and layout

## Textures (CSS/SVG only, no image assets)

| Class | Effect | Implementation | Use |
|---|---|---|---|
| `.rd-grain` | Photocopy grain | SVG `feTurbulence` noise as `::after`, multiply at 16% | Hero surfaces, zine cards, posters. Not on forms |
| `.rd-halftone` | Halftone dots | `radial-gradient`, 7px grid; `--rd-halftone-bg` / `--rd-halftone-ink` | Behind display type, poster blocks |
| `.rd-stripes` | Hazard stripes | `repeating-linear-gradient(-45deg…)`, yellow/navy (`--soft` = two yellows) | Edges, content-note covers, "under construction" |
| `.rd-tape` | Tape strip | `::before`, translucent, torn ends via `clip-path`; `--rd-tape-x/-rot/-color` | Pinning cards. One per card. **Taped = flat: no shadow, no hover lift** (enforced in CSS) |
| `.rd-torn` | Torn bottom edge | `clip-path` polygon | Hero block bottoms |
| `.rd-overprint` + `.rd-overprint__ink[data-ink]` | Riso overprint | Yellow halftone plate + navy copy, misregistered navy-tint copy offset 4px/−3px, `mix-blend-mode: multiply` | Campaign moments |
| `.rd-die-cut` | White sticker outline | Stacked `drop-shadow`s | Photos, illustrations |
| `.rd-lined` | Notebook lines | `linear-gradient` in `background-attachment: local` | Journal textareas |

**Rule:** one or two textures per surface. Never all at once, and never behind body text longer than two lines (except lined paper, which is designed for it).

## Controlled chaos

Collage, overlap, rotation, sticker placement and deliberate misalignment are encouraged, **on a strict grid underneath.**

1. Every element's *box* snaps to the 12-column grid (6 on mobile) and the 8pt baseline. Only its *rendering* is tilted.
2. Rotation comes only from the set **−3°, −2°, −1°, 1°, 2°, 3°** (`.rd-tilt-*` or the `tilt` prop). Text blocks longer than 6 words max out at ±2°.
3. Overlap is no more than one gutter, and never covers interactive elements or text you need to read.
4. One "hero" chaos moment per viewport. Everything else sits straight.
5. Gentle (tone 5) screens: no tilt, no overlap, no stickers.

## Imagery

See `brand/guidelines.md` §7. In short: candid, flash-lit, real; screenshots via `<ScreenshotCard>` (real text, with consent); the editors for illustration.
