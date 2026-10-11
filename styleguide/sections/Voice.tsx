import { useState } from 'react';
import { DO_DONT, MICROCOPY, TONE_DIAL, type ToneLevel } from '@patterns';
import { Card } from '@components';
import { Section, H3 } from '../ui';

export function Voice() {
  const [level, setLevel] = useState<ToneLevel>(2);
  const t = TONE_DIAL[level - 1];
  return (
    <Section
      id="voice"
      num="10"
      title="Voice"
      lede="Talk like a friend, not a clinician. Lowercase-friendly, short sentences, punchy fragments. BIG DECLARATIVE HEADLINES with small, soft, honest body copy. Humour comes first, then sincerity. Be specific, never generic."
    >
      <H3>Tone dial</H3>
      <Card style={{ display: 'grid', gap: 20 }}>
        <div>
          <label htmlFor="tone" className="rd-field__label">
            context: <strong>{t.where}</strong>
          </label>
          <input
            id="tone"
            type="range"
            min={1}
            max={5}
            step={1}
            value={level}
            onChange={(e) => setLevel(Number(e.target.value) as ToneLevel)}
            aria-valuetext={`${level}, ${t.name}`}
            style={{ width: '100%', accentColor: 'var(--rd-paper-900)', height: 44, marginTop: 8 }}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', textAlign: 'center' }} aria-hidden>
            {TONE_DIAL.map((d) => (
              <span key={d.level} className="rd-label" style={{ color: d.level === level ? 'var(--rd-text-strong)' : 'var(--rd-text-secondary)', fontWeight: d.level === level ? 850 : 600 }}>
                {d.level} · {d.name}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] items-start" aria-live="polite">
          <div style={{ padding: 24, borderRadius: level >= 4 ? 16 : 0, background: level === 1 ? 'var(--rd-bg-hero)' : level === 5 ? 'var(--rd-info)' : 'var(--rd-surface)', color: level === 1 ? 'var(--rd-paper-900)' : level === 5 ? 'var(--rd-on-info)' : undefined, rotate: level === 1 ? '-1deg' : '0deg', transition: 'all 200ms' }}>
            <p className={level === 1 ? 'rd-display rd-display-md' : level === 2 ? 'rd-heading-lg' : level === 5 ? 'rd-body-lg' : 'rd-heading-md'} style={{ margin: 0, color: 'inherit' }}>
              {t.example}
            </p>
          </div>
          <dl className="rd-body-sm" style={{ margin: 0, display: 'grid', gap: 8 }}>
            <div>
              <dt className="sg-label">rules</dt>
              <dd style={{ margin: 0 }}>{t.rules.join(' · ')}</dd>
            </div>
            <div>
              <dt className="sg-label">type voices</dt>
              <dd style={{ margin: 0 }}>{t.voices}</dd>
            </div>
            <div>
              <dt className="sg-label">motion</dt>
              <dd style={{ margin: 0 }}>{t.motion}</dd>
            </div>
          </dl>
        </div>
      </Card>
      <p className="sg-note">
        <strong>Safety rule:</strong> in distress or health contexts, the dial locks at 5. That means no jokes, plain language, and support visible without scrolling. Components switch automatically where they can (e.g. a heavy check-in).
      </p>

      <H3>Do / don't (copy)</H3>
      <div className="sg-scroll">
        <table className="sg-table">
          <thead>
            <tr>
              <th scope="col">✅ do</th>
              <th scope="col">❌ don't</th>
              <th scope="col">why</th>
            </tr>
          </thead>
          <tbody>
            {DO_DONT.map((r) => (
              <tr key={r.do}>
                <td style={{ fontWeight: 700, color: 'var(--rd-text-strong)' }}>{r.do}</td>
                <td style={{ textDecoration: 'line-through', textDecorationColor: 'var(--rd-sneaker-500)', textDecorationThickness: 2, color: 'var(--rd-text-secondary)' }}>{r.dont}</td>
                <td className="rd-body-sm">{r.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Microcopy library ({MICROCOPY.length} lines)</H3>
      <div className="sg-scroll">
        <table className="sg-table">
          <thead>
            <tr>
              <th scope="col">where</th>
              <th scope="col">line</th>
              <th scope="col">tone</th>
            </tr>
          </thead>
          <tbody>
            {MICROCOPY.map((m) => (
              <tr key={m.context + m.line}>
                <td className="rd-body-sm" style={{ whiteSpace: 'nowrap' }}>
                  {m.context}
                </td>
                <td>
                  <span style={{ color: 'var(--rd-text-strong)', fontWeight: 600 }}>{m.line}</span>
                  {m.note && (
                    <span className="sg-note" style={{ display: 'block', margin: '2px 0 0' }}>
                      {m.note}
                    </span>
                  )}
                </td>
                <td>
                  <span className="rd-tag" style={{ background: ['', 'var(--rd-sunshine-400)', 'var(--rd-sunshine-300)', 'var(--rd-surface-sunken)', 'var(--rd-midnight-50)', 'var(--rd-midnight-100)'][m.tone], color: 'var(--rd-paper-900)' }}>
                    {m.tone} · {TONE_DIAL[m.tone - 1].name}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
