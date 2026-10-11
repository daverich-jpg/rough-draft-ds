import { tokens } from '@tokens/tokens';
import { Card } from '@components';
import { Section, H3, Code } from '../ui';

const VOICES = [
  {
    name: 'Display',
    font: 'Anton',
    cls: 'rd-display rd-display-lg',
    sample: 'Make drafts.',
    rules: ['Always uppercase', '2–5 words', 'Page titles and hero moments only', 'Never in gentle (tone 5) contexts'],
  },
  {
    name: 'Workhorse',
    font: 'Archivo (400–900)',
    cls: 'rd-body-lg',
    sample: 'Everything else: body, labels, buttons, stickers, captions. Weight and size do the work a third font used to.',
    rules: ['Body 17px, 1.55 line height', 'Headings 700–750', 'Stickers + accents: 800, lowercase', 'Kickers: 650, uppercase, tracked'],
  },
];

export function Type() {
  return (
    <Section
      id="type"
      num="03"
      title="Type"
      lede="Two families, nothing else. Anton shouts, Archivo does the work. Hierarchy comes from size, weight and case, not from adding typefaces."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {VOICES.map((v, i) => (
          <Card key={v.name} zine={i === 0} tilt={([-1, 1] as const)[i]} style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
            <span className="rd-caption">
              voice {i + 1} · {v.font}
            </span>
            <p className={v.cls} style={{ margin: 0, color: 'var(--rd-text-strong)' }}>
              {v.sample}
            </p>
            <span className="rd-heading-md">{v.name}</span>
            <ul className="rd-body-sm" style={{ margin: 0, paddingLeft: 18 }}>
              {v.rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <H3>Fluid scale</H3>
      <p className="sg-note" style={{ marginTop: -8 }}>
        Every size is a <Code>clamp()</Code> from a 360px to a 1280px viewport. Resize the window to watch it move.
      </p>
      <div className="sg-scroll">
        <table className="sg-table">
          <thead>
            <tr>
              <th scope="col">token</th>
              <th scope="col">specimen</th>
              <th scope="col">size · lh · ls</th>
              <th scope="col">use</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(tokens.typeScale).map(([k, v]) => {
              const cls = v.font === 'display' ? `rd-display rd-${k}` : `rd-${k}`;
              return (
                <tr key={k}>
                  <td>
                    <Code>{k}</Code>
                  </td>
                  <td style={{ maxWidth: 480, overflow: 'hidden' }}>
                    <span className={cls} style={{ display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: 'var(--rd-text-strong)', ...(k.startsWith('heading') ? { fontWeight: v.weight } : {}), ...(k === 'caption' ? {} : {}) }}>
                      {v.font === 'display' ? 'Nobody is healed' : 'cancel the plans'}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--sg-mono)', fontSize: 12, whiteSpace: 'nowrap' }}>
                    {v.size.replace('clamp(', '').replace(')', '').split(',')[0]}→{v.size.includes('clamp') ? v.size.split(',').pop()!.replace(')', '').trim() : ''} · {v.lh} · {v.ls}
                  </td>
                  <td className="rd-body-sm">{v.use}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <H3>Rules</H3>
      <ul className="sg-lede grid gap-2" style={{ fontSize: '1rem', paddingLeft: 20 }}>
        <li>
          <strong>Two families. No third font, ever:</strong> no script, no condensed italics, no extra display face.
        </li>
        <li>Anton runs 2–5 words. If it needs a comma, it's an Archivo heading.</li>
        <li>Body never goes below 16px; 17px is the default. Line length 45–75ch.</li>
        <li>Gentle (tone 5) screens: Archivo only.</li>
        <li>
          Self-hosting: <Code>@fontsource/anton</Code> + <Code>@fontsource-variable/archivo</Code>.
        </li>
      </ul>
    </Section>
  );
}
