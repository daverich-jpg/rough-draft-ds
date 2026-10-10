# Iconography

**Thick-stroke, slightly wonky, rounded.**

- **Grid:** 24×24, with a 2px safe zone.
- **Stroke:** 2px (2.4 allowed at 28px and up), round caps, round joins, `currentColor`.
- **Wonk:** 2–3 anchor points nudged 0.1–0.4px off-axis, and lines that are *almost* straight. Hand-cut, not broken. Optical centre still holds.
- **Fill:** outline by default. `filled` only for "on" states (e.g. a reacted heart).
- **Sizes:** 16 inline · 20 in buttons · 24 default · 28–32 for primary nav and features.

## Set (v0.1)

home · journal · people · sprout · plus · close · arrow-right · arrow-left · chevron-down · check · alert · info · bell · search · user · sliders · phone · sparkle · sun · moon · heart · message · repost · share · trash · lock · more · camera · eye · eye-off · shield

## Accessibility

`<Icon>` is decorative by default (`aria-hidden`). Pass `label` only when the icon is the sole carrier of meaning, and prefer a visible text label. Icon-only buttons need `aria-label` (the component warns in dev).

## Adding one

Draw it on the 24 grid in Figma, export the path, and add it to `PATHS` in `components/Icon.tsx`. Check it next to `home` and `heart` at 20px and 32px.
