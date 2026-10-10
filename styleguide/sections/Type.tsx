import { tokens } from '@tokens/tokens';
import { Card } from '@components';
import { Section, H3, Code } from '../ui';

const VOICES = [
  {
    name: 'Loud Display',
    font: 'Anton',
    cls: 'rd-display rd-display-lg',
    sample: 'Make drafts, not excuses.',
    rules: ['Always uppercase', 'Headlines, posters, page titles', 'Never in gentle (tone 5) contexts', 'Max 1 display-2xl per page'],
  },
  {
    name: 'Hand-drawn Brush',
    font: 'Permanent Marker',
    cls: 'rd-brush rd-brush-lg',
    sample: 'you’re allowed to rest',
    rules: ['1–6 words, ever', 'Stickers, annotations, affirmations', 'Min size 22px', 'Swaps to plain Archivo in dyslexia mode'],
  },
  {
    name: 'Quiet Workhorse',
    font: 'Archivo (variable: wdth 62–125)',
    cls: 'rd-body-lg',
    sample: 'Everything you read, tap and type: body, labels, forms, buttons. 17px minimum for paragraphs, 1.55 line height, 45–75 characters a line.',
    rules: ['UI + body + forms', 'Sentence case or lowercase', 'Weights 400 / 650 / 750 / 850'],
  },
];

export function Type() {
  return (
    <Section
      id="type"
      num="03"
      title="Type"
      lede="Three voices, like the three posters on the board: one shouts, one scrawls, one does the work. Use at most two voices per screen, plus a brush accent."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {VOICES.map((v, i) => (
          <Card key={v.name} zine={i === 0} tilt={([-1, 1, 0] as const)[i]} style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
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

      <H3>Zine caption + poster extras</H3>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="sg-stage">
          <p className="rd-caption" style={{ fontSize: '1rem', margin: 0, textAlign: 'justify' }}>
            no one can take self-publishing away from you. no algorithm can censor you. no gatekeeper can tell you what you have to say is not valuable.
          </p>
          <p className="sg-note">
            <Code>.rd-caption</Code>: Archivo italic at <Code>font-stretch: 62.5%</Code>. Captions, pull-quote bodies, metadata. Short runs only.
          </p>
        </div>
        <div className="sg-stage rd-stripes" style={{ display: 'grid', placeItems: 'center' }}>
          <p className="rd-poster" style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', color: 'var(--rd-paper-900)', background: 'var(--rd-spark-400)', padding: '0 12px' }}>
            art+
          </p>
        </div>
      </div>
      <p className="sg-note">
        Optional poster voice: <Code>.rd-poster</Code> is Bricolage Grotesque 800, lowercase, −0.04em. Campaign heroes only. It counts as a display voice.
      </p>

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
              const cls = v.font === 'display' ? `rd-display rd-${k}` : v.font === 'brush' ? `rd-brush rd-${k}` : `rd-${k}`;
              return (
                <tr key={k}>
                  <td>
                    <Code>{k}</Code>
                  </td>
                  <td style={{ maxWidth: 480, overflow: 'hidden' }}>
                    <span className={cls} style={{ display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', color: 'var(--rd-text-strong)', ...(k.startsWith('heading') ? { fontWeight: v.weight } : {}), ...(k === 'caption' ? {} : {}) }}>
                      {v.font === 'display' ? 'Nobody is healed' : v.font === 'brush' ? 'in progress' : 'cancel the plans'}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'var(--rd-font-mono)', fontSize: 12, whiteSpace: 'nowrap' }}>
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
          <strong>Max 2 voices per screen + 1 brush accent.</strong> Display + workhorse is the default pair.
        </li>
        <li>Display headlines run 2–7 words. If it needs a comma, it's a workhorse heading.</li>
        <li>Brush never carries information on its own. It's an annotation, so the same info lives in workhorse text nearby (or the sticker is <Code>aria-hidden</Code>).</li>
        <li>Body text never goes below 16px; 17px is the default. Line length 45–75ch.</li>
        <li>Gentle contexts (tone 5): workhorse only. No display, no brush.</li>
        <li>Self-hosting for production: swap the Google Fonts link for <Code>@fontsource-variable/archivo</Code>, <Code>@fontsource/anton</Code> and <Code>@fontsource/permanent-marker</Code>.</li>
      </ul>
    </Section>
  );
}
