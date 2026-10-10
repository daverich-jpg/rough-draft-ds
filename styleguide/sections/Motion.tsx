import { useState, type CSSProperties } from 'react';
import { tokens } from '@tokens/tokens';
import { Button, Sticker } from '@components';
import { Section, H3, Code } from '../ui';

const DEMOS = [
  ['slap', 'rd-anim-slap', 'sticker lands', 'Toasts, stickers, revealed content.'],
  ['stamp', 'rd-anim-stamp', 'logged.', 'Completion: check-in saved, post published.'],
  ['wiggle', 'rd-anim-wiggle', 'hey', 'Hover on sticker CTAs; a selected mood.'],
  ['pop', 'rd-anim-pop', 'pop', 'Modals entering, badges appearing.'],
  ['peel', 'rd-anim-peel', 'bye', 'Dismissing a sticker or tag.'],
] as const;

export function Motion() {
  const [runs, setRuns] = useState<Record<string, number>>({});
  return (
    <Section
      id="motion"
      num="05"
      title="Motion"
      lede="Bouncy, snappy, tactile. Things get slapped down, stamped, peeled off. UI motion stays under 300ms. Delight can run longer, but it's rare. With reduced motion, everything collapses to a quick fade."
    >
      <H3>Moves (tap to play)</H3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
        {DEMOS.map(([name, cls, label, use]) => (
          <div key={name} className="sg-stage" style={{ display: 'grid', gap: 12, justifyItems: 'center', textAlign: 'center' }}>
            <div style={{ height: 80, display: 'grid', placeItems: 'center' }}>
              <Sticker key={runs[name] ?? 0} className={runs[name] ? cls : undefined} tilt={-2} color={name === 'stamp' ? 'yellow' : 'lime'}>
                {label}
              </Sticker>
            </div>
            <Button size="sm" variant="soft" onClick={() => setRuns((r) => ({ ...r, [name]: (r[name] ?? 0) + 1 }))}>
              play {name}
            </Button>
            <span className="rd-body-sm rd-secondary">{use}</span>
          </div>
        ))}
      </div>

      <H3>Durations</H3>
      <div className="sg-scroll">
        <table className="sg-table">
          <tbody>
            {Object.entries(tokens.duration).map(([k, v]) => (
              <tr key={k}>
                <td>
                  <Code>duration-{k}</Code>
                </td>
                <td style={{ fontFamily: 'var(--rd-font-mono)' }}>{v.value}</td>
                <td style={{ width: '40%' }}>
                  <span style={{ display: 'block', height: 10, width: `${Math.min(100, parseInt(v.value) / 9)}%`, background: parseInt(v.value) <= 300 ? 'var(--rd-bg-hero)' : 'var(--rd-shades-300)', borderRadius: 99 }} />
                </td>
                <td className="rd-body-sm">{v.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Easing</H3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(tokens.easing).map(([k, v]) => (
          <EaseDemo key={k} name={k} value={v.value} use={v.use} />
        ))}
      </div>

      <H3>Reduced motion</H3>
      <ul className="sg-lede grid gap-2" style={{ fontSize: '1rem', paddingLeft: 20 }}>
        <li>
          Respects <Code>prefers-reduced-motion</Code> automatically. Can be overridden per-user with <Code>data-motion="reduced|full"</Code> on <Code>&lt;html&gt;</Code> (try the header switch).
        </li>
        <li>Under reduced motion: no translate, scale, rotate or bounce. Slap, stamp, pop and wiggle become a 160ms fade; sheets fade instead of sliding; the breathing circle shows text only.</li>
        <li>Nothing loops forever except the progress stripes, and those stop under reduced motion.</li>
        <li>Celebrations (900ms): max one per session, never on a "heavy" check-in.</li>
      </ul>
    </Section>
  );
}

function EaseDemo({ name, value, use }: { name: string; value: string; use: string }) {
  const [on, setOn] = useState(false);
  return (
    <div className="sg-stage" style={{ display: 'grid', gap: 10 }}>
      <button type="button" onClick={() => setOn((o) => !o)} aria-label={`play ${name} easing`} style={{ height: 44, position: 'relative', border: '2px dashed var(--rd-border-subtle)', borderRadius: 999, background: 'none', cursor: 'pointer' }}>
        <span
          style={
            {
              position: 'absolute',
              top: 6,
              left: 6,
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: 'var(--rd-spark-400)',

              translate: on ? 'calc(var(--w, 140px)) 0' : '0 0',
              transition: `translate 700ms ${value}`,
              '--w': 'min(140px, 50vw)',
            } as CSSProperties
          }
        />
      </button>
      <Code>ease-{name}</Code>
      <span className="rd-body-sm rd-secondary">{use}</span>
    </div>
  );
}
