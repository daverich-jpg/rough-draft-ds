# Decisions log (flagged for review)

Where the brief was ambiguous, I made a call and wrote it down here. Each one is reversible, and the "how to change" notes say where.

| # | Decision | Why | How to change |
|---|---|---|---|
| D1 | **Name: Rough Draft.** Wordmark = "ROUGH" in Anton + "draft" in Permanent Marker on a lime highlighter swipe. | Chosen in review. In-progress, self-published, honest. **Trademark and domain checks not done.** | `components/Nav.tsx` → `Wordmark` |
| D2 | **Accent lime `#B6F500`** (not the sampled `#BCDA0C`). | Sampled value = riso ink on grey paper; muddy on screen. `#B6F500` matches Sunshine's OKLCH lightness (0.894 vs 0.895). | `source.mjs` → `SCALES.spark.pins` |
| D3 | **Board swatch labels are wrong.** White was labelled FFD86C and navy was labelled 433100. Used the brief's `#090446` for navy. | Sampled `#FFFFFF` / `#0A0345`. | n/a |
| D4 | **Anchor steps.** Yellow and lime pin at 400, brown and navy at 500, cream at paper-100 and ink at paper-900. | Pinning dark colours at 400 would leave no room for usable tints. Cream and ink are two ends of one warm neutral. | `source.mjs` → `pins` |
| D5 | **Extended palette from the imagery:** Sneaker Red (errors), Shades Pink (soft mood), Inside-Out Blue (info and heavy mood). | Semantic and mood colours needed hues the core palette doesn't have. Pulled from the board, not invented. | `source.mjs` → `SCALES.sneaker/shades/insideout` |
| D6 | **Workhorse = Archivo (variable width).** | One family covers UI body *and* the condensed italic zine caption (wdth 62). Inter, DM Sans and Space Grotesk have no condensed italic. | `source.mjs` → `FONTS.sans` |
| D7 | **Body text is Deep Brown on cream, not black.** Headlines are Ink. | Warmth. Brown/cream = 10.96:1 (AAA). | `SEMANTIC.light['text-primary']` |
| D8 | **Two-tone focus ring** (3px ring + 2px halo). | No single colour hits 3:1 on both navy and yellow. The halo guarantees it. | `components/styles.css` → `:focus-visible` |
| D9 | **Dark-mode shadows are warm brown (`bark-400`)**, not black. | Ink shadows vanish on navy. Brown keeps the sticker look and makes dark mode "navy/brown-led" as briefed. | `SEMANTIC.dark.shadow` |
| D10 | **No streaks, scores or like counts anywhere.** Reactions are words ("felt this", "same", "sending snacks"). Counts are visible only to the author. | Beliefs: "nobody is healed" and "community beats optimisation". | `patterns/CommunityPost.tsx` |
| D11 | **Mood check-in = 6 named faces** (buzzing, fine-ish, soft, running on fumes, chaos goblin, heavy) + optional context chips + optional note. "Heavy" triggers gentle mode *before* submit. | Brief: expressive, non-clinical, no 1–10 scales. Support has to show up where it's needed, not after a form. | `components/MoodCheckIn.tsx` |
| D12 | **Helpline default = findahelpline.com.** | Neutral international directory. ⚠️ **Must be localised per market and reviewed by a clinical/safeguarding advisor before launch.** | `supportHref` prop |
| D13 | **Characters: Sprout, Doze, Moss, Static** ("the editors"). Moss is the only character allowed in sensitive states. | Brief asked for 3–4 archetypes. Moss is the sincere one. | `components/Character.tsx` |
| D14 | **Single-page style guide instead of Storybook.** | Faster to load, themed end to end, and the brand's first impression is itself on-brand. Components are plain React, so Storybook can be added later without changes. | `styleguide/` |
| D15 | **Components ship plain CSS (cascade layers), not Tailwind classes.** | Works in any React stack; Tailwind is optional. Layer order lets utilities override components. | `components/styles.css` |
| D16 | **Tailwind defaults are switched off** in the v4 theme (`--color-*: initial` etc.). | Stops off-brand greys and blues sneaking in. | `scripts/build-tokens.mjs` |
| D17 | **Moodboard tweet handles replaced with fictional ones** in all examples. | No real people's accounts in brand material without consent. | `patterns/CommunityPost.tsx` |
| D18 | **Fonts load from Google Fonts in the style guide.** | Zero setup. For production, self-host via `@fontsource` (see foundations/typography.md). | `index.html` |
| D19 | **Strokes sparingly** (feedback, 2026-10-10). Shape = fill + hard shadow. Strokes stay only on inputs, checkbox/radio, invalid fields, focus, dashed "missing" slots and the screenshot divider. Button variant `outline` renamed `soft`. | David didn't like the heavy outlines. The neo-brutal feel now rides on the offset shadow alone. | `components/styles.css`; rules in foundations/elevation.md |
| D20 | **Taped = flat.** Any component with tape gets no shadow and no hover lift. | David's rule: tape pins paper down, so it can't also float. | `.rd-tape:not(:focus-visible)` at the end of `components/styles.css` |
