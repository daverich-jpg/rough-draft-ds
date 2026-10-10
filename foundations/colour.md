# Colour

**Yellow is the hero. Navy and brown do the heavy lifting. Lime is a spark.**

## Core palette

| Name | Hex | OKLCH | Token | Role |
|---|---|---|---|---|
| Sunshine Yellow | `#FFD86C` | 89.5% 0.134 89.7 | `sunshine-400` (pinned) | Primary. Hero surfaces, primary buttons |
| Paper White | `#FFFFFF` | — | `white` | Raised surfaces, die-cut outlines |
| Cream | `#FFEFC4` | 95.4% 0.058 90.0 | `paper-100` (pinned) | Default page canvas |
| Deep Brown | `#433100` | 32.5% 0.066 86.2 | `bark-500` (pinned) | Body text, warm dark surfaces |
| Midnight Navy | `#090446` | 19.3% 0.114 272.1 | `midnight-500` (pinned) | Dark mode base, inverse surfaces |
| Spark Lime | `#B6F500` | 89.4% 0.228 126.2 | `spark-400` (pinned) | Accent bursts, under 5% of a screen |
| Ink | `#1E1B16` | 22.4% 0.010 80.6 | `paper-900` (pinned) | Headlines, sticker shadows, input strokes |

Extended palette (from the board's imagery; for semantic and mood colours only): **Sneaker Red** `sneaker-*`, **Shades Pink** `shades-*`, **Inside-Out Blue** `insideout-*`.

## How the scales are built

`scripts/build-tokens.mjs` generates 50–900 for every scale in **OKLCH**:

1. Each step has a target lightness (`L`), a chroma multiplier (`C`) and a hue that drifts across the ramp (e.g. yellow → amber → brown at the dark end), interpolated along the shortest arc.
2. Out-of-gamut colours are mapped into sRGB by reducing chroma only, so lightness and hue are kept.
3. **Pinned** steps output the exact brand hex, never recomputed. Light seeds (yellow, lime) pin at 400 and dark seeds (brown, navy) at 500. Cream and ink pin at paper-100 and paper-900.

The full hex and OKLCH values for every step are in `design-tokens/build/tokens.css` (commented) and the style guide.

## Semantic tokens

Use semantic tokens in product code, and primitives only for illustration or data viz.

| Group | Tokens |
|---|---|
| Surfaces | `bg`, `bg-hero`, `surface`, `surface-raised`, `surface-sunken`, `surface-warm`, `surface-inverse`, `surface-spark`, `scrim` |
| Text | `text-strong`, `text-primary`, `text-secondary`, `text-placeholder`, `text-inverse`, `text-link`, `text-on-hero`, `text-on-spark`, `text-on-inverse`, `text-on-warm` |
| Lines | `border`, `border-subtle`, `border-input`, `focus-ring`, `focus-halo`, `shadow` |
| Feedback | `success`/`on-success`/`success-text`, `warning`/…, `error`/…, `info`/… |
| Mood | `mood-hyped`, `mood-okay`, `mood-soft`, `mood-tired`, `mood-chaotic`, `mood-heavy` |

## Themes

- **Light** (cream/yellow-led): cream canvas, white raised cards, brown body text, ink headlines, ink sticker shadows, navy focus ring.
- **Dark** (navy/brown-led, *designed, not inverted*): navy canvas, lifted indigo surfaces, cream text, **brown warm surfaces and brown offset shadows**, lime focus ring and lime links. The hero stays yellow, so the brand doesn't go grey at night.

Set `data-theme="light|dark"` on `<html>`, or omit it to follow the OS.

## Rules

1. **Never yellow text on white (1.37:1)** or on cream. Yellow is a surface; ink sits on it.
2. **Lime is a fill, never light-surface text**, and it covers under 5% of a screen: one sticker, one highlighter swipe, the check-in button.
3. Text on any mood fill is ink.
4. Colour is never the only signal.
5. No gradients. No glows. No grey-blue "calm wellness" palette.

See [contrast-matrix.md](contrast-matrix.md) for every pairing.
