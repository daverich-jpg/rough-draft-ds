# Accessibility report

Target: **WCAG 2.2 AA** throughout, AAA for body text where possible. Accessibility is part of the aesthetic. Several brand signatures (hard sticker shadows, flat disabled states, the two-tone focus ring) exist *because* of it. Strokes are used sparingly, and only where they carry meaning: inputs, ticks, focus, "missing".

Status key: ✅ meets · ⚠️ meets with a caveat · 🔲 needs product/QA work before launch

## 1. Colour contrast ✅

- The **build fails** if any semantic text pairing drops under 4.5:1 or any UI pairing under 3:1 (`npm run contrast`). The full generated matrix (both themes, every pair) is in [`foundations/contrast-matrix.md`](foundations/contrast-matrix.md).
- Key pairs:

| Pair | Light | Dark |
|---|---|---|
| Body text (`text-primary`) on `bg` | 11.98 (AAA) | 16.46 (AAA) |
| Headlines (`text-strong`) on `bg` | 15.03 (AAA) | 18.79 (AAA) |
| Secondary text on `bg` | 5.73 (AA) | 13.87 (AAA) |
| Secondary text on sunken/raised surface | 4.92 (AA) | 8.52 (AAA) |
| Placeholder on input | 6.54 (AA) | 4.92 (AA) |
| Link on `bg` | 13.70 (AAA) | 14.78 (AAA) |
| Error text on `bg` | 7.40 (AAA) | 8.61 (AAA) |
| Ink on Sunshine (hero) | 12.50 (AAA) | 12.50 (AAA) |
| Text on accent (`surface-accent`) | 16.46 (AAA) | 12.50 (AAA) |

- **Banned:** Sunshine on white (1.37) or cream (1.20), and ink on navy. Yellow is a fill only.
- Placeholders are held to full body AA, not the 3:1 that some systems allow.

## 2. Not relying on colour ✅

| Signal | Colour plus… |
|---|---|
| Error | Alert icon + text + thicker 3px field border |
| Disabled | Flat (every enabled button has a shadow; disabled has none) + muted fill + `not-allowed` cursor; disabled inputs also go dashed |
| Selected chip | Check icon + hero fill + shadow + `aria-pressed` |
| Mood | A face + a word (not a colour swatch) |
| Mood trail missed day | Dashed outline + screen-reader text "no check-in" |
| Active tab / nav | Hero fill + shadow + `aria-selected` / `aria-current` |

## 3. Focus ✅

- Global `:focus-visible`: **3px ring + 2px offset halo**. Light theme uses a navy ring with a cream halo; dark theme uses a yellow ring with an ink halo. One of the two always reaches ≥3:1 against every surface token (verified for 8 surfaces × 2 themes in the matrix).
- The ring combines with sticker shadows through `--rd-elev`, so a focused card keeps its shadow.
- Never `outline: none` without a replacement. Toggle and tab apply the ring to their visual part.
- 🔲 QA: run a full keyboard pass in each pattern on real devices.

## 4. Touch targets ✅

- **44×44px minimum** for everything interactive. Buttons are 44 (sm), 48 (md) and 60 (lg). Inputs and chips are 44–48. Checkbox and radio rows are the full label (44px). Tab-bar items are 52px.
- Tag remove buttons are visually 28px with an invisible 44px hit area (`::before` inset −8px).
- Sticker and tilted elements keep their hit box upright (rotation is visual only).

## 5. Screen readers ✅ / 🔲

- Every field has a real `<label>`. Hints and errors are linked with `aria-describedby`, and invalid fields get `aria-invalid`.
- Chips use `aria-pressed`; toggles use `role="switch"` + `aria-checked`; radio groups use native `fieldset`/`legend`/radios (arrow keys for free).
- The mood check-in is a native radio group. Each option is labelled with a description ("tired, running on fumes"), not just the brush word.
- Modal and Sheet use **native `<dialog>.showModal()`**: focus trap, inert background, Esc and focus return, with no library. Labelled by title and described by description.
- Tabs follow the WAI-ARIA pattern: roving tabindex, ←/→/Home/End, `aria-controls`/`aria-labelledby`.
- Toasts: a `polite` live region, and errors use `role="alert"`. Toasts pause on hover/focus, and **toasts with an action never auto-dismiss** (WCAG 2.2.1).
- Character illustrations: `role="img"` with a generated name ("Moss, feeling soft, tender"), or `decorative` (`aria-hidden`) when they repeat nearby text.
- Stickers are `aria-hidden` by default (they're annotations), so the same info must exist in text. Pass `announce` if not.
- Icon-only buttons warn in dev if `aria-label` is missing.
- Screenshot cards are `<figure aria-label="Screenshot of a post by …">` with real text and labelled counts.
- Progress uses `aria-valuetext` in words ("3 of 5").
- 🔲 Test with VoiceOver (iOS/macOS) and TalkBack before launch.

## 6. Motion ✅

- Respects `prefers-reduced-motion` automatically, and users can override in-app with `data-motion="reduced|full"`.
- Under reduced motion: slap, stamp, pop and wiggle become a 160ms fade. Sheets fade instead of springing. Button hover/press don't translate. Progress stripes stop. The breathing exercise shows text only (no scaling circle).
- Nothing flashes. The only infinite animation (progress stripes) stops under reduced motion.
- Celebrations run at most once per session and never after a "heavy" check-in.

## 7. Dyslexia and readability ✅

- **`data-brush="plain"`** swaps every brush-font instance (stickers, mood words, wordmark, sticker buttons, brush quotes) for heavy, wide Archivo. It's exposed as a user setting (the style guide header has the switch).
- Brush is limited to 1–6 words at a 22px minimum, and never carries information alone.
- Body is 17px with 1.55 line height, left-aligned (no justified body text; justified only in short zine captions), with 45–75ch line length.
- All-caps display type is limited to short headlines (2–7 words).
- ⚠️ Condensed italic captions (Archivo wdth 62) are harder to read for some users. They're for short metadata only, never instructions.

## 8. Sensitive content and safety ✅ / 🔲

- **Gentle mode** (tone 5): no jokes, slang, stickers, display or brush type, or bounce. Support links are visible without scrolling. No timers or auto-dismiss.
- Choosing "heavy" in the check-in surfaces support **before** submit.
- Content notes on community posts cover the text with a soft stripe and a "Show it?" button. Readers opt in.
- Crisis screen: "I'm safe for now" is always available, with no guilt for leaving.
- Lock-screen notifications never include journal content.
- 🔲 **Helpline links must be localised per market and reviewed by a clinical or safeguarding advisor.**

## 9. Other ✅

- `lang="en"` on the root. The skip link is the first focusable element.
- The layout works from 320px with no horizontal page scroll (verified at 375px). Tables scroll inside their own container.
- Fluid type is rem + clamp, so it scales with browser zoom. 🔲 Verify 200% zoom and 400% reflow per pattern in QA.
- Forms never require feelings: every note and context field is optional.
