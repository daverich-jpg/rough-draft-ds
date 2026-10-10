import { tokens } from '@tokens/tokens';
import { Section, H3, Code } from '../ui';

export function Shape() {
  return (
    <Section id="shape" num="04" title="Space + shape" lede="A 4px base on an 8-point rhythm. Two families of corners: sharp for zine and poster, pillowy for UI you touch. Strokes, sparingly: shape comes from fill and a hard offset shadow, the way a sticker sits on paper. Shadows never blur.">
      <H3>Spacing (4px base)</H3>
      <div className="sg-stage" style={{ display: 'grid', gap: 6 }}>
        {Object.entries(tokens.space)
          .filter(([k]) => !['px', '0'].includes(k))
          .map(([k, v]) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '64px 64px 1fr', alignItems: 'center', gap: 12 }}>
              <Code>{k}</Code>
              <span className="rd-body-sm rd-secondary">{v}px</span>
              <span style={{ height: 14, width: v, background: Number(v) % 8 === 0 ? 'var(--rd-bg-hero)' : 'var(--rd-surface-sunken)', borderRadius: 3 }} />
            </div>
          ))}
        <p className="sg-note">Yellow = on the 8pt grid (default). Grey = 4px half-steps for tight UI (icon gaps, chip padding).</p>
      </div>

      <H3>Radius</H3>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
        {Object.entries(tokens.radius).map(([k, v], i) => (
          <div key={k} style={{ display: 'grid', gap: 8 }}>
            <div style={{ height: 88, background: i < 2 ? 'var(--rd-sunshine-400)' : 'var(--rd-surface-raised)', borderRadius: v.value, boxShadow: 'var(--rd-shadow-sm)' }} />
            <Code>{k}</Code>
            <span className="rd-body-sm rd-secondary">
              {v.value}. {v.use}
            </span>
          </div>
        ))}
      </div>
      <p className="sg-note">
        <strong>Rule:</strong> if it's editorial (a quote, poster or zine page), use <Code>none</Code> or <Code>nick</Code>. If you tap it, type in it or it slides in, use <Code>sm</Code> to <Code>xl</Code>. Never mix both on one element.
      </p>

      <H3>Strokes: sparingly</H3>
      <p className="sg-lede" style={{ maxWidth: 720, marginBottom: 16 }}>
        Shape comes from <strong>fill + hard shadow</strong>, not outlines. A stroke has to earn its place: it marks something you type in or tick, shows focus, or says "missing". Everywhere else, no stroke.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ['text fields', 'base 2px', <div key="a" style={{ height: 48, borderRadius: 10, background: 'var(--rd-surface-raised)', border: '2px solid var(--rd-border-input)' }} />],
          ['checkbox / radio', 'base 2px', <div key="b" style={{ display: 'flex', gap: 10 }}><span style={{ width: 26, height: 26, borderRadius: 6, border: '2px solid var(--rd-border-input)', background: 'var(--rd-surface-raised)' }} /><span style={{ width: 26, height: 26, borderRadius: 99, border: '2px solid var(--rd-border-input)', background: 'var(--rd-surface-raised)' }} /></div>],
          ['focus ring', '3px + 2px halo', <div key="c" style={{ height: 48, borderRadius: 16, background: 'var(--rd-bg-hero)', outline: '3px solid var(--rd-focus-ring)', outlineOffset: 2, boxShadow: '0 0 0 2px var(--rd-focus-halo)' }} />],
          ['missed / empty', '2px dashed', <div key="d" style={{ height: 48, borderRadius: 14, border: '2px dashed var(--rd-border-subtle)' }} />],
        ].map(([k, w, demo]) => (
          <div key={k as string} className="sg-stage" style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
            {demo}
            <span className="rd-heading-md">{k}</span>
            <span className="rd-body-sm rd-secondary">{w}</span>
          </div>
        ))}
      </div>
      <p className="sg-note">
        No stroke on: buttons, cards, chips, tags, badges, stickers (they get a white die-cut instead), modals, sheets, toasts, tabs, nav, avatars, progress. Illustration linework and icons are drawing, not UI chrome, so they keep their lines.
      </p>

      <H3>Elevation: sticker shadows</H3>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 sg-stage sg-stage--grid">
        {Object.entries(tokens.shadow).map(([k, v]) => (
          <div key={k} style={{ display: 'grid', gap: 10, justifyItems: 'start' }}>
            <div style={{ width: '100%', height: 72, background: 'var(--rd-surface-raised)', borderRadius: 12, boxShadow: `var(--rd-shadow-${k})` }} />
            <Code>shadow-{k}</Code>
            <span className="rd-body-sm rd-secondary">{v.replace(' 0 0', '').replace('0 0 0 0 transparent', 'flat')}</span>
          </div>
        ))}
      </div>
      <ul className="sg-lede grid gap-2" style={{ fontSize: '1rem', paddingLeft: 20, marginTop: 16 }}>
        <li>
          <strong>xs/sm</strong> = resting controls · <strong>md</strong> = cards, hover · <strong>lg</strong> = modals, zine cards · <strong>xl</strong> = posters only.
        </li>
        <li>
          Pressing collapses the shadow and moves the element into it (<Code>translate: 3px 3px</Code>). Elevation is tactile, not atmospheric.
        </li>
        <li>Shadow colour is a token: ink in light, navy-900 in dark. No blur, no opacity stacks, no glows.</li>
      </ul>
    </Section>
  );
}
