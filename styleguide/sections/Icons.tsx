import { Icon, ICON_NAMES } from '@components';
import { Section, Code } from '../ui';

export function Icons() {
  return (
    <Section id="icons" num="07" title="Icons" lede="Thick-stroke, slightly wonky, rounded. 24px grid, 2px stroke, round caps and joins. Each path is drawn a few tenths off true, so the set feels hand-cut but still sits optically centred.">
      <ul className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))', listStyle: 'none', margin: 0, padding: 0 }}>
        {ICON_NAMES.map((n) => (
          <li key={n} className="sg-stage" style={{ padding: 12, display: 'grid', justifyItems: 'center', gap: 8, color: 'var(--rd-text-strong)' }}>
            <Icon name={n} size={32} />
            <span className="rd-body-sm rd-secondary" style={{ fontSize: 12 }}>
              {n}
            </span>
          </li>
        ))}
      </ul>
      <ul className="sg-lede grid gap-2" style={{ fontSize: '1rem', paddingLeft: 20, marginTop: 24 }}>
        <li>
          <Code>&lt;Icon name="heart" /&gt;</Code> is decorative by default (<Code>aria-hidden</Code>). Pass <Code>label</Code> only when the icon is the sole carrier of meaning.
        </li>
        <li>Sizes: 16 (inline), 20 (buttons), 24 (default), 28–32 (nav primary, feature). Stroke stays 2px. Go up to 2.4 only at 28px+.</li>
        <li>
          New icons: draw on the 24 grid, keep a 2px safe zone, nudge 2–3 anchor points off-axis by 0.1–0.4px, and add them to <Code>components/Icon.tsx</Code>.
        </li>
      </ul>
    </Section>
  );
}
