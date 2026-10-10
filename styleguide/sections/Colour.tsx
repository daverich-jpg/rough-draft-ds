import { useState } from 'react';
import { tokens } from '@tokens/tokens';
import { Section, H3, Code, Flag } from '../ui';

// Runtime contrast (mirrors scripts/color.mjs) so the matrix is always live.
const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
export const ratio = (a: string, b: string) => {
  const [h, l] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (h + 0.05) / (l + 0.05);
};

const CORE: Array<[string, string, string]> = [
  ['Sunshine Yellow', '#FFD86C', 'hero'],
  ['Paper White', '#FFFFFF', 'breathing room'],
  ['Cream', '#FFEFC4', 'canvas'],
  ['Deep Brown', '#433100', 'grounding'],
  ['Midnight Navy', '#090446', 'depth'],
  ['Spark Lime', '#B6F500', 'spark <5%'],
  ['Ink', '#1E1B16', 'headlines'],
];

const Swatch = ({ hex, step, pinned, oklch }: { hex: string; step: string; pinned: boolean; oklch: string }) => {
  const onDark = lum(hex) < 0.25;
  return (
    <div style={{ background: hex, color: onDark ? '#FFFFFF' : '#1E1B16', padding: '8px 8px 6px', minHeight: 76, display: 'grid', alignContent: 'space-between', position: 'relative' }} title={oklch}>
      <span style={{ fontWeight: 800, fontSize: 13 }}>
        {step}
        {pinned && <span aria-label="pinned brand colour"> ●</span>}
      </span>
      <span style={{ fontFamily: 'var(--rd-font-mono)', fontSize: 11 }}>{hex}</span>
    </div>
  );
};

export function Colour() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const sem = tokens.semantic[theme];
  return (
    <Section
      id="colour"
      num="02"
      title="Colour"
      lede={
        <>
          Yellow is the hero. Navy and brown do the heavy lifting. Lime is a spark, <strong>under 5% of any screen</strong>. Scales are generated in OKLCH. Brand hexes are pinned exactly (●), and everything else is computed and gamut-mapped.
        </>
      }
    >
      <H3>Core palette</H3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-0" style={{ boxShadow: 'var(--rd-shadow-md)' }}>
        {CORE.map(([n, h, r]) => (
          <div key={n} style={{ background: h, color: lum(h) < 0.25 ? '#fff' : '#1E1B16', padding: 14, minHeight: 150, display: 'grid', alignContent: 'end', gap: 2 }}>
            <span style={{ fontWeight: 800 }}>{n}</span>
            <span style={{ fontFamily: 'var(--rd-font-mono)', fontSize: 13 }}>{h}</span>
            <span className="rd-caption" style={{ color: 'inherit', opacity: 0.85 }}>
              {r}
            </span>
          </div>
        ))}
      </div>
      <p className="sg-note">
        <Flag>flagged</Flag> The board labels the white swatch "FFD86C" and the navy swatch "433100". Sampling gave #FFFFFF and #0A0345. Navy is set to the brief's #090446. Spark Lime #B6F500 (OKLCH L 0.894) matches Sunshine's lightness (0.895). The printed poster sampled at #BCDA0C, which is the riso-on-grey reading of it.
      </p>

      <H3>Tonal scales</H3>
      <div className="grid gap-3">
        {Object.entries(tokens.scales).map(([name, s]) => (
          <div key={name} className="grid gap-2 md:grid-cols-[180px_1fr] items-center">
            <div>
              <div style={{ fontWeight: 800, color: 'var(--rd-text-strong)' }}>{s.label}</div>
              <Code>{name}-*</Code>
            </div>
            <div className="grid grid-cols-5 sm:grid-cols-10" style={{ borderRadius: 10, overflow: 'hidden' }}>
              {Object.entries(s.steps).map(([step, v]) => (
                <Swatch key={step} step={step} hex={v.hex} pinned={v.pinned} oklch={v.oklch} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="sg-note">
        <Flag>decision</Flag> Light anchors (yellow, lime) pin at 400 and dark anchors (brown, navy) pin at 500, so both sides of the ramp stay usable. Cream and ink are the two ends of one "paper" ramp (100 and 900). Sneaker red, shades pink and inside-out blue are extended colours pulled from the board's imagery, and are used for semantic and mood colours only.
      </p>

      <H3>Semantic tokens</H3>
      <div className="sg-seg" role="group" aria-label="semantic theme" style={{ marginBottom: 16 }}>
        {(['light', 'dark'] as const).map((t) => (
          <button key={t} type="button" aria-pressed={theme === t} onClick={() => setTheme(t)}>
            {t} theme
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(sem).map(([k, v]) => (
          <div key={k} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 10, background: v.hex, boxShadow: 'inset 0 0 0 1px color-mix(in oklch, var(--rd-text-primary) 18%, transparent)' }} />
            <span style={{ minWidth: 0 }}>
              <Code>{k}</Code>
              <span className="sg-note" style={{ display: 'block', margin: 0, fontSize: 12 }}>
                {v.ref} · {v.hex}
              </span>
            </span>
          </div>
        ))}
      </div>

      <H3>Contrast matrix (live)</H3>
      <p className="sg-note" style={{ marginTop: -8, marginBottom: 12 }}>
        Rows are the text colour, columns the background. The build also checks every semantic pair in both themes (<Code>npm run contrast</Code>) and fails under AA.
      </p>
      <div className="sg-scroll">
        <table className="sg-table" style={{ minWidth: 760 }}>
          <thead>
            <tr>
              <th scope="col">text ↓ bg →</th>
              {CORE.map(([n, h]) => (
                <th key={n} scope="col">
                  <span style={{ display: 'inline-block', width: 12, height: 12, background: h, boxShadow: 'inset 0 0 0 1px color-mix(in oklch, var(--rd-text-primary) 18%, transparent)', marginRight: 6, verticalAlign: -1 }} />
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CORE.map(([fn, fh]) => (
              <tr key={fn}>
                <th scope="row">{fn}</th>
                {CORE.map(([bn, bh]) => {
                  if (fh === bh) return <td key={bn}>·</td>;
                  const r = ratio(fh, bh);
                  const g = r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'large' : 'fail';
                  return (
                    <td key={bn} style={{ background: bh, color: fh, fontWeight: 800 }}>
                      Aa{' '}
                      <span style={{ fontFamily: 'var(--rd-font-mono)', fontSize: 12, fontWeight: 600, background: 'var(--rd-surface-raised)', color: g === 'fail' ? 'var(--rd-error-text)' : 'var(--rd-text-strong)', padding: '0 4px', borderRadius: 4 }}>
                        {r.toFixed(1)} {g}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H3>Rules</H3>
      <ul className="grid gap-2 sg-lede" style={{ fontSize: '1rem', paddingLeft: 20 }}>
        <li>
          <strong>Yellow on white = 1.37:1. Never for text or icons.</strong> Yellow is a surface. Put ink on it (12.5:1).
        </li>
        <li>
          <strong>Lime is a fill, never text on light.</strong> It covers under 5% of a screen: one sticker, one highlight, the check-in button.
        </li>
        <li>Body text on cream is Deep Brown (11:1, AAA). Headlines are Ink.</li>
        <li>Dark mode is navy-led, with brown as the warm accent surface. It's designed, not inverted: focus rings switch to lime and links to lime-300.</li>
        <li>Moods use their own fills, and the text on them is always ink. Colour is never the only signal; every mood also has a face and a word.</li>
      </ul>
    </Section>
  );
}
