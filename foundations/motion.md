# Motion

**Bouncy, snappy, tactile.** Things get slapped down, stamped, peeled off and wiggled. UI motion stays under 300ms. Delight can run longer, but rarely.

## Durations

| Token | Value | Use |
|---|---|---|
| `instant` | 80ms | Press feedback, colour swaps |
| `fast` | 140ms | Hover, focus, small toggles |
| `base` | 200ms | Most UI transitions |
| `slow` | 280ms | Sheets and modals entering. **UI ceiling.** |
| `delight` | 480ms | Stamp, slap, peel, wiggle |
| `celebrate` | 900ms | Rare wins. Max one per session; never after a heavy check-in |

## Easing

| Token | Curve | Use |
|---|---|---|
| `standard` | cubic-bezier(.2,0,0,1) | Default |
| `snap` | cubic-bezier(.2,.9,.1,1) | Toggles, tabs, button lift |
| `slap` | cubic-bezier(.34,1.56,.64,1) | Overshoot: stickers landing, chips, check marks |
| `exit` | cubic-bezier(.4,0,1,1) | Things leaving |
| `spring` | CSS `linear()` spring | Sheets, characters |

## Moves

| Class | What | Where |
|---|---|---|
| `.rd-anim-slap` | Drops in from above, overshoots, settles at its tilt | Toasts, stickers, revealed content |
| `.rd-anim-stamp` | Scales down from 1.6×, thuds | Completion: logged, published |
| `.rd-anim-wiggle` | Small rotate shimmy | Sticker CTA hover, selected mood |
| `.rd-anim-pop` | 0.85 → 1.06 → 1 | Modals, badges |
| `.rd-anim-peel` | Clips away from the left with a lift | Dismissing stickers or tags |

Elements that rotate read their resting angle from `--rd-rot`, so animations always land at the right tilt.

## Reduced motion

- Automatic via `prefers-reduced-motion`; per-user override with `data-motion="reduced|full"` on `<html>`.
- Every move above becomes a **160ms fade**. Sheets fade instead of springing. Hover and press don't translate. Progress stripes stop. The breathing circle shows text only.
- Gentle (tone 5) contexts use fades only, whatever the preference.
