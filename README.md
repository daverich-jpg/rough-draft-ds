# ROUGH *draft* · design system

Wellness for people who are tired of being sold wellness.
This repo holds the tokens, components, patterns, brand rules and the living style guide.

```bash
npm install
npm run dev        # style guide → http://localhost:5240
npm run build      # tokens → contrast gate → typecheck → production build
```

---

## What's in here

| Path | What | Edit? |
|---|---|---|
| `design-tokens/source.mjs` | **The token source.** Seeds, scale curves, semantic maps, type, space, motion. | ✅ yes, start here |
| `design-tokens/tokens.json` | W3C Design Tokens (DTCG) output, for Figma Tokens Studio, Style Dictionary and other tools | ❌ generated |
| `design-tokens/build/tokens.css` | CSS custom properties (`--rd-*`), light + dark + reduced-motion | ❌ generated |
| `design-tokens/build/theme.css` | Tailwind **v4** `@theme` mapping | ❌ generated |
| `design-tokens/build/tailwind.config.js` | Tailwind **v3** preset (same tokens) | ❌ generated |
| `design-tokens/build/tokens.ts` | Typed JS export (scales, semantic hexes, type scale…) | ❌ generated |
| `scripts/` | OKLCH colour engine, token builder, contrast gate | ✅ |
| `foundations/` | Colour, type, spacing, radius, elevation, motion, icons, texture docs + generated contrast matrix | ✅ |
| `components/` | React + TS components and `styles.css` (the component layer) | ✅ |
| `patterns/` | Full screens (onboarding, check-in, journal, community, crisis-safe, errors, notifications) + `microcopy.ts` | ✅ |
| `brand/guidelines.md` | Beliefs, personality, characters, tone, voice, imagery, do/don't | ✅ |
| `styleguide/` | The living style guide app (every token, component, state, theme) | ✅ |
| `ACCESSIBILITY.md` | Accessibility report | ✅ |
| `DECISIONS.md` | Bold calls made where the brief was ambiguous, **flagged for review** | ✅ |

## Using it in a product

### 1. Tokens only (any stack)

```css
@import 'rough-draft-ds/design-tokens/build/tokens.css';

.thing { background: var(--rd-bg-hero); color: var(--rd-text-on-hero); box-shadow: var(--rd-shadow-md); }
```

Theme with `data-theme="light|dark"` on `<html>`. Leave it off to follow the OS. Users can override motion with `data-motion="reduced|full"`.

### 2. Components (React)

```tsx
import 'rough-draft-ds/design-tokens/build/tokens.css';
import 'rough-draft-ds/components/styles.css';
import { Button, MoodCheckIn, ToastProvider } from 'rough-draft-ds/components';

<ToastProvider>
  <MoodCheckIn onSubmit={(c) => save(c)} onSkip={close} supportHref={localHelpline} />
</ToastProvider>
```

Components are styled with plain CSS on tokens (`rd-*` classes, in cascade layers), so **they don't need Tailwind**.

### 3. With Tailwind v4

```css
/* order matters: components sit below utilities so utilities can override them */
@layer theme, base, rd-base, components, rd-components, utilities, rd-utilities;
@import 'tailwindcss';
@import 'rough-draft-ds/design-tokens/build/tokens.css';
@import 'rough-draft-ds/design-tokens/build/theme.css';
@import 'rough-draft-ds/components/styles.css';
```

The theme **switches off Tailwind's default palette, fonts, radii and shadows**, so only brand values exist: `bg-bg-hero`, `text-text-primary`, `border-border`, `shadow-sticker-md`, `rounded-md`, `font-display`, `text-display-xl`, `ease-slap`… Semantic utilities follow the theme automatically.

Tailwind v3: `presets: [require('rough-draft-ds/design-tokens/build/tailwind.config.js')]`, plus `tokens.css` on the page.

## Extending the system

**Change or add a colour.** Edit `SCALES` or `SEMANTIC` in `design-tokens/source.mjs`, then run `npm run tokens && npm run contrast`. The contrast gate fails the build if any semantic text pair drops under 4.5:1 or any UI pair under 3:1. Pinned brand hexes (`pins`) are emitted exactly. Everything else is computed in OKLCH and gamut-mapped by chroma reduction.

**Add a semantic token.** Add the key to *both* `SEMANTIC.light` and `SEMANTIC.dark`. If it's text, add its pairs to `CONTRAST_PAIRS`.

**Add a component.**
1. Put the styles in `components/styles.css` inside `@layer rd-components`, using only `var(--rd-*)` tokens (no raw hex).
2. Meet the checklist: a 44px target, the global two-tone `:focus-visible` (don't override it, or replicate it), states that never rely on colour alone, reduced-motion handling, and labels in the DOM.
3. Export it from `components/index.ts` and add a demo to `styleguide/sections/Components.tsx` showing every state.

**Add an icon.** Add a path to `components/Icon.tsx` (24 grid, 2px stroke, 2px safe zone, nudged slightly off-axis).

**Add copy.** Add lines to `patterns/microcopy.ts` with a tone level (1 loud → 5 gentle). The voice section of the style guide renders from it.

**Add a character mood or pose.** Edit `components/Character.tsx`. Keep a flat fill, a 3px ink line (illustration is the one place heavy linework lives) and a white die-cut. Expressions carry the emotion.

## Principles (tie-breakers)

1. Real over polished.
2. Loud, but never at the user's emotional expense.
3. Chaos lives on a grid.
4. Warmth is non-negotiable (yellow, cream, human photography).
5. Accessibility is part of the aesthetic, not a compromise.
6. If it looks like a wellness-app template, redo it.
