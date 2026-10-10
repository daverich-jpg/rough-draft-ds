# Patterns

Full screens composed only from `/components`, using real microcopy from [`microcopy.ts`](microcopy.ts). Rendered inside phone frames in the style guide (§09).

| Pattern | File | Tone | What it demonstrates |
|---|---|---|---|
| Onboarding | `Onboarding.tsx` | 1 → 3 | Halftone hero, skippable steps, reasons-as-chips (not diagnosis), pick-an-editor radio cards, guilt-free nudge setup with quiet hours |
| Check-in | `CheckInFlow.tsx` | 2 (→ 5 if heavy) | Week as faces (no stats), `MoodCheckIn`, gentle-mode switch, toasts |
| Journal entry | `JournalEntry.tsx` | 3 | Drafts folder tabs, prompt card, autosave status (live region), visibility radios, two-step publish sheet with content note, empty published tab |
| Community post | `CommunityPost.tsx` | 3 | The zine feed, composer sheet, word reactions (no counts), screenshot card, content-note cover |
| Crisis-safe state | `CrisisSafe.tsx` | **5** | No display/brush/stickers; helpline first; breathing (reduced-motion safe); emergency line; "I'm safe for now" exit |
| Errors | `ErrorStates.tsx` | 4 | "not you, us" error card with Static, offline banner, validation message |
| Notifications | `Notifications.tsx` | 2–5 | Lock-screen copy (no journal content), in-app inbox, toast variants |

## Notification rules

- Max one nudge a day; quiet hours 10pm–8am on by default.
- Never streaks, never "you missed…", never guilt.
- Follow-ups after a heavy check-in are opt-in, tone 5, and never quote the content.
