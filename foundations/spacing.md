# Spacing

A **4px base on an 8-point rhythm.** Default to multiples of 8, and use the 4px half-steps only for tight UI (icon gaps, chip padding).

| Token | px | | Token | px |
|---|---|---|---|---|
| `space-0_5` | 2 | | `space-6` | 24 |
| `space-1` | 4 | | `space-8` | 32 |
| `space-1_5` | 6 | | `space-10` | 40 |
| `space-2` | 8 | | `space-12` | 48 |
| `space-3` | 12 | | `space-16` | 64 |
| `space-4` | 16 | | `space-20` | 80 |
| `space-5` | 20 | | `space-24` / `32` | 96 / 128 |

CSS: `var(--rd-space-4)`. Tailwind: the default `--spacing: 0.25rem`, so `p-4` = 16px and matches.

## Layout

- Page gutter: 16px mobile, 24px tablet and up. Never less.
- Grid: 12 columns on desktop, 6 on mobile; gutter 16 (mobile) or 24 (desktop).
- Section rhythm: 72px between major sections, 40–48px between subsections.
- Components own their internal padding; layouts own the gaps between components (use `gap`, not margins).
