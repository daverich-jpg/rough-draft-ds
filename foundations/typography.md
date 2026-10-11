# Typography

**Two families, nothing else (D23).** Anton shouts; Archivo does everything else. Hierarchy comes from size, weight and case, never from adding a typeface.

| Role | Font | Classes | Use | Rules |
|---|---|---|---|---|
| **Display** | Anton | `.rd-display` + `.rd-display-{2xl…sm}` | Page heroes, onboarding headlines, empty-state titles | Uppercase · 2–5 words · one per screen · never in gentle contexts |
| **Workhorse** | Archivo (400–900) | `.rd-body*`, `.rd-heading-*`, `.rd-label` | Body, UI, forms, buttons | Body 17px / 1.55 · headings 700–750 |
| ↳ accent | Archivo 800, lowercase | `.rd-brush`, stickers, mood words, wordmark "draft" | Small delight moments | 1–5 words; the old brush font's job, now in Archivo |
| ↳ kicker | Archivo 650, uppercase, +0.06em | `.rd-caption` | Dates, "today's prompt", meta | Short runs only |

## Fluid scale

All sizes are `clamp()` from a 360px to a 1280px viewport (`TYPE_SCALE` in `design-tokens/source.mjs`).

| Token | Min → max | Line height | Use |
|---|---|---|---|
| display-2xl | 64 → 140px | 0.88 | Campaign heroes |
| display-xl | 48 → 96px | 0.9 | Page heroes |
| display-lg | 36 → 64px | 0.92 | Section / screen headlines |
| display-md | 28 → 44px | 0.95 | Card headlines, empty states |
| display-sm | 22 → 30px | 1 | Small shouty labels |
| heading-lg | 22 → 28px | 1.2 | Archivo heading, quiet screen titles |
| heading-md | 18 → 21px | 1.25 | Card / row titles |
| body-lg | 18 → 20px | 1.55 | Intros |
| body | 17px | 1.55 | Default |
| body-sm | 15px | 1.5 | Secondary text |
| label | 14px / 650 | 1.3 | Form labels, tabs |
| caption | 12px / 650 | 1.4 | Kickers, meta |

## Rules

- **No third font, ever:** no script, no condensed italics, no extra display face.
- One Anton headline per screen. If a screen has a question headline (e.g. the check-in), the page title drops to an Archivo heading.
- If a headline needs a comma, it's an Archivo heading.
- Paragraphs never go below 16px; 45–75ch; left-aligned, never justified.
- Gentle (tone 5) screens: Archivo only.

## Loading

The style guide and app load `Anton` + `Archivo:wght@400..900` from Google Fonts. For production, self-host:

```bash
npm i @fontsource/anton @fontsource-variable/archivo
```
