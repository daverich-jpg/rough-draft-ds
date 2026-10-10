# Typography

Three voices, taken from the three posters on the moodboard.

| Voice | Font | Class | Use | Rules |
|---|---|---|---|---|
| **Loud Display** | Anton | `.rd-display` + `.rd-display-{2xl…sm}` | Headlines, posters, page titles | Always uppercase · 2–7 words · max one `2xl` per page · never in gentle contexts |
| **Hand-drawn Brush** | Permanent Marker | `.rd-brush` + `.rd-brush-{xl,lg,md}` | Stickers, annotations, affirmations | 1–6 words · min 22px · never body · never the only carrier of info · swaps to Archivo when `data-brush="plain"` |
| **Quiet Workhorse** | Archivo (variable, wdth 62–125) | `.rd-body*`, `.rd-heading-*`, `.rd-label` | UI, body, forms, buttons | Sentence case or lowercase · 17px body · 1.55 line height |
| *Zine caption* | Archivo italic, wdth 62.5% | `.rd-caption` | Metadata, pull-quote bodies | Uppercase, short runs only |
| *Poster (optional)* | Bricolage Grotesque 800 | `.rd-poster` | Campaign heroes | Lowercase, −0.04em; counts as a display voice |

## Fluid scale

All sizes are `clamp()` from a 360px to a 1280px viewport (see `TYPE_SCALE` in `design-tokens/source.mjs`).

| Token | Min → max | Line height | Use |
|---|---|---|---|
| display-2xl | 64 → 140px | 0.88 | Posters, campaign heroes |
| display-xl | 48 → 96px | 0.9 | Page heroes |
| display-lg | 36 → 64px | 0.92 | Section headers |
| display-md | 28 → 44px | 0.95 | Card headlines, modal titles |
| display-sm | 22 → 30px | 1 | Small shouty labels |
| heading-lg | 22 → 28px | 1.2 | Workhorse heading |
| heading-md | 18 → 21px | 1.25 | Card titles |
| body-lg | 18 → 20px | 1.55 | Intros, onboarding |
| body | 17px | 1.55 | Default |
| body-sm | 15px | 1.5 | Metadata, secondary UI |
| label | 14px / 650 | 1.3 | Labels, tabs |
| caption | 13px | 1.4 | Zine captions |
| brush-xl / lg / md | 36→60 / 26→36 / 22px | 1–1.1 | Affirmations / stickers / small stickers |

## Rules

- **At most two voices per screen, plus one brush accent.** Display + workhorse is the default pair.
- If a headline needs a comma, it's a workhorse heading, not display.
- Gentle (tone 5) screens use the workhorse only.
- Paragraphs never go below 16px; line length is 45–75ch; left-aligned.
- Weights: 400 body, 650 labels, 700–750 headings and buttons, 850 for plain-brush substitution.

## Loading

The style guide loads from Google Fonts. For production, self-host:

```bash
npm i @fontsource/anton @fontsource/permanent-marker @fontsource-variable/archivo @fontsource/bricolage-grotesque
```

Import `@fontsource-variable/archivo/wdth.css` *and* `wdth-italic.css` to get the condensed italic.
