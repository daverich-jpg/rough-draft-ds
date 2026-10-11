# Colour

**Minimal (D22): neutrals do ~90% of the work.** Two key colours, Sunshine Yellow and Midnight Navy: navy is the one action colour, yellow is a highlight (pale tints on surfaces, full strength only on small marks). Paper (warm) and Night (cool, dark mode) are the ground. Red appears only for errors.

## Palette

| Role | Name | Hex | OKLCH | Token |
|---|---|---|---|---|
| **Key colour 1** | Sunshine Yellow | `#FFD86C` | 89.5% 0.134 89.7 | `sunshine-400` (pinned) |
| **Key colour 2** | Midnight Navy | `#090446` | 19.3% 0.114 272.1 | `midnight-500` (pinned) |
| Neutral | Paper | `#FCFBF8` | 98.8% 0.004 91 | `paper-50`: page canvas (chroma ≤0.012 across the ramp) |
| Neutral | Night | `#191924` | 21.9% 0.021 284 | `night-800`: dark-mode canvas (navy-tinted charcoal) |
| Neutral | Paper White | `#FFFFFF` | — | `white`: raised surfaces, die-cut edges |
| Neutral | Ink | `#1E1B16` | 22.4% 0.010 80.6 | `paper-900` (pinned): headlines, sticker shadows |
| Functional | Error Red | `#BE2514` | 52.0% 0.190 30.5 | `sneaker-600`: errors and destructive actions **only** |

Lime, brown, pink and blue were removed (D21). Green survives only inside the character illustrations (`components/Character.tsx`), never in UI.

## How the scales are built

`scripts/build-tokens.mjs` generates 50–900 for every scale in **OKLCH**:

1. Each step has a target lightness, a chroma multiplier and a hue that drifts across the ramp (yellow → amber at the dark end), interpolated along the shortest arc.
2. Out-of-gamut colours are mapped into sRGB by reducing chroma only.
3. **Pinned** steps output the exact brand hex. Yellow pins at 400, navy at 500, cream and ink at paper-100 and paper-900.

## Semantic tokens

| Group | Tokens |
|---|---|
| Surfaces | `bg`, `bg-hero`, `surface`, `surface-raised`, `surface-sunken`, `surface-warm`, `surface-inverse`, `surface-accent`, `scrim` |
| Text | `text-strong`, `text-primary`, `text-secondary`, `text-placeholder`, `text-inverse`, `text-link`, `text-on-hero`, `text-on-accent`, `text-on-inverse`, `text-on-warm` |
| Lines | `border`, `border-subtle`, `border-input`, `focus-ring`, `focus-halo`, `shadow` |
| Feedback | `success`/`on-success`/`success-text` (navy in light, yellow in dark), `warning`/… (yellow), `error`/… (red), `info`/… (navy tints) |
| Mood | `mood-hyped` (yellow), `mood-okay` (pale yellow), `mood-soft` (cream), `mood-tired` (pale navy), `mood-chaotic` (deep yellow), `mood-heavy` (navy tint) |

`surface-accent` is the "the one filled thing" colour: checked boxes, toggles on, the check-in button, badges, sticker buttons. **Navy in light, yellow in dark.**

## Themes

- **Light:** paper canvas, white cards, warm-ink body text (paper-800, 13.2:1), navy action colour and focus ring, pale-yellow highlight surfaces, soft paper-200 shadows.
- **Dark (designed, not inverted):** low-chroma night canvas (not saturated navy), lifted night surfaces, warm off-white text (15.9:1), yellow action colour, focus ring and links, black shadows.

## Rules

1. **Two brand colours per screen: yellow and navy.** If you want a third, use a tint of one of the two.
2. **Red is functional.** Errors and destructive actions only, never decorative.
3. **Never yellow text on white (1.37:1) or cream (1.20:1).** Yellow is a surface; ink sits on it (12.5:1).
4. Text on any mood fill is ink. Moods are told apart by face and word, not colour.
5. No gradients. No glows.

See [contrast-matrix.md](contrast-matrix.md) for every pairing.
