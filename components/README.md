# Components

React 19 + TypeScript. Styling lives in [`styles.css`](styles.css) (`@layer rd-components`, token-only). Import once:

```ts
import 'rough-draft-ds/design-tokens/build/tokens.css';
import 'rough-draft-ds/components/styles.css';
```

| Component | Key props | A11y notes |
|---|---|---|
| `Button` | `variant` primary · secondary · soft · ghost · sticker · danger; `size` sm/md/lg; `iconStart/iconEnd`; `icon` (icon-only); `loading`, `loadingLabel`; `block` | 44/48/60px; loading keeps focus + `aria-busy`; icon-only needs `aria-label` |
| `Field` + `Input` / `Textarea` / `Select` | `label`, `hint`, `error`, `optional`, `hideLabel`, `footer`; `Textarea lined` | Auto-wires `id`, `aria-describedby`, `aria-invalid`; error has icon + text |
| `CharCount` | `value`, `max` | Announces only within 20 chars of the limit |
| `Checkbox`, `Radio`, `RadioGroup` | `label`, `description`; group: `legend`, `options`, `value/onChange` | Native inputs; whole row is the 44px target |
| `Toggle` | `label`, `description`, `checked/onChange` | `role="switch"`, `aria-checked` |
| `Chip` | `selected`, `onToggle`, `color` | `aria-pressed`; check icon when on |
| `Tag` | `onRemove`, `color` | Remove button named "remove {tag}", 44px hit area |
| `Badge` | `tone` spark/hero/ink/error, `label` | Pass `label` when the number is ambiguous |
| `Sticker` | `color`, `shape` tag/round/burst, `tilt`, `announce` | `aria-hidden` unless `announce` |
| `Card` | `tone` default/hero/warm/inverse, `zine`, `tape`, `grain`, `tilt`, `flat`, `as` | Semantic `as` element |
| `ScreenshotCard` | `posts[]`, `theme` dark/light, `tape`, `tilt` | `figure` with label; real text; labelled counts |
| `ZineCard` | `quote`, `body`, `by`, `color`, `voice` display/brush, `tape`, `halftone`, `tilt` | `blockquote` + `figcaption` |
| `Modal`, `Sheet` | `open`, `onClose`, `title`, `description`, `actions`, `gentle`, `dismissible` | Native `<dialog>`: focus trap, Esc, inert page, focus return |
| `ToastProvider` + `useToast()` | `{ title, body, tone, action, duration }` | Polite region + `role=alert` for errors; pause on hover/focus; no auto-dismiss with an action |
| `Tabs` | `items[]`, `label`, `defaultTab`, `onChange` | WAI-ARIA tabs, roving tabindex, ←/→/Home/End |
| `TopNav`, `TabBar`, `Wordmark` | `items`, `current`, `onNavigate`; TabBar `primary` | `aria-current="page"`; 52px tab items |
| `Avatar`, `AvatarStack` | `name`, `src`, `character`, `mood`, `size`, `shape`, `sticker`, `decorative` | `alt` / `aria-label` from name |
| `Progress`, `Steps` | `value`, `max`, `label`, `valueText` | `role=progressbar` + `aria-valuetext` in words |
| `MoodTrail` | `days[]` (`day`, `mood?`, `kind?`, `today?`) | List; screen-reader text per day; missed = "no check-in" |
| `EmptyState` | `title`, `body`, `actions`, `character`, `mood`, `headingLevel` | Character decorative |
| `MoodCheckIn` | `onSubmit({mood,tags,note})`, `onSkip`, `supportHref`, `greeting`, `maxNote` | Native radio group; "heavy" → gentle mode + support before submit |
| `Character` | `kind` sprout/doze/moss/static, `mood` ×6, `crop` full/bust, `title`, `decorative`, `dieCut` | `role=img` with generated name |
| `Icon` | `name`, `size`, `label`, `filled` | Decorative unless `label` |
