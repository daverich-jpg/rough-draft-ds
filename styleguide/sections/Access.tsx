import { Card } from '@components';
import { Section, Code } from '../ui';

const ITEMS = [
  ['Contrast', 'Every semantic text pair passes AA in both themes, and body text is AAA. The build fails if a token change breaks one (npm run contrast).'],
  ['Focus', 'Two-tone ring (3px ring + 2px halo) on everything focusable. The halo keeps focus visible on yellow, cream and navy, in both themes.'],
  ['Targets', '44px minimum, everywhere. Tag remove buttons get an invisible 44px hit area. Checkbox and radio rows are the whole label.'],
  ['Screen readers', 'Real labels, aria-describedby for hints and errors, aria-pressed chips, role=switch toggles, native <dialog>, two toast live regions. Stickers are aria-hidden by default.'],
  ['Not colour alone', 'Errors have an icon and text. Disabled is flat (no shadow) and muted; disabled inputs are dashed. Selected chips get a check. Moods have a face and a word.'],
  ['Motion', 'Respects prefers-reduced-motion, plus a per-user override (data-motion). All bounce becomes a 160ms fade.'],
  ['Readable type', 'Two families only: Anton for short headlines, Archivo for everything else. No script or condensed-italic text. Body is 17px at 1.55, left-aligned, never justified.'],
  ['Gentle mode', 'Tone 5 contexts: no timers, no auto-dismiss, no jokes, and support visible without scrolling.'],
];

export function Access() {
  return (
    <Section id="access" num="12" title="Accessibility" lede="Part of the aesthetic, not a compromise. The full report lives in ACCESSIBILITY.md. The toggles in the header (theme, motion) apply to this whole page.">
      <div className="grid gap-4 md:grid-cols-2">
        {ITEMS.map(([t, d]) => (
          <Card key={t} flat style={{ display: 'grid', gap: 6 }}>
            <span className="rd-heading-md">{t}</span>
            <p className="rd-body-sm" style={{ margin: 0 }}>
              {d}
            </p>
          </Card>
        ))}
      </div>
      <p className="sg-note" style={{ marginTop: 24 }}>
        Try it: press <Code>Tab</Code> from the top of the page. Every stop should show the ring, nothing should be skipped, and the mood picker should move with arrow keys.
      </p>
    </Section>
  );
}
