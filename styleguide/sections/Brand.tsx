import { Card, Character, CHARACTERS, MOODS, type CharacterKind, type Mood } from '@components';
import { Section, H3 } from '../ui';

const BELIEFS = [
  ['Wellness is messy, not aspirational.', 'No streaks, scores, levels or "healed" states. Missed days look dashed, not red.'],
  ['Comfort isn’t the goal. Shame isn’t either.', 'Prompts can push. The UI never punishes. Every step after the first is skippable.'],
  ['Self-publishing is power.', 'Drafts are the home screen. Publishing is a deliberate, reversible, two-step choice. No like counts.'],
  ['Humour is a coping tool.', 'Jokes live in tone dial 1–3. They switch off automatically in gentle mode.'],
  ['Community beats optimisation.', 'Reactions are words ("felt this"), not metrics. No follower counts, no algorithmic feed.'],
  ['Honesty over polish.', 'Grain, tape, tilt and hand-drawn icons are core tokens. Gloss, gradients and stock smiles are banned.'],
];

const SPECTRUM: Array<[string, string, number]> = [
  ['serious', 'playful', 9],
  ['polished', 'raw / DIY', 8],
  ['polite', 'direct', 8],
  ['clinical', 'human', 10],
  ['quiet', 'loud', 7],
  ['aspirational', 'relatable', 9],
];

const PRINCIPLES = ['Real over polished.', 'Loud, but never at the user’s emotional expense.', 'Chaos lives on a grid.', 'Warmth is non-negotiable.', 'Accessibility is part of the aesthetic.', 'If it looks like a wellness-app template, redo it.'];

export function Brand() {
  return (
    <Section
      id="brand"
      num="01"
      title="Brand"
      lede="It feels like a zine made by a friend who actually gets it: loud, honest, a little feral, deeply caring underneath. It's the funniest, most emotionally intelligent friend in the group chat. They roast you lovingly, then sit with you at 2am."
    >
      <H3>Beliefs → design decisions</H3>
      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {BELIEFS.map(([b, d], i) => (
          <Card as="li" key={b} zine={i % 2 === 0} tilt={([-1, 1, 0, 1, -1, 0] as const)[i]} style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
            <span className="rd-display rd-display-sm" style={{ color: 'var(--rd-text-strong)' }}>
              {b}
            </span>
            <p className="rd-body-sm" style={{ margin: 0 }}>
              <span className="rd-caption" style={{ display: 'block', marginBottom: 2 }}>
                so in the system
              </span>
              {d}
            </p>
          </Card>
        ))}
      </ol>

      <H3>Personality spectrum</H3>
      <div className="grid gap-3 sg-stage" style={{ maxWidth: 720 }}>
        {SPECTRUM.map(([l, r, v]) => (
          <div key={l} className="grid items-center gap-3" style={{ gridTemplateColumns: '110px 1fr 110px' }}>
            <span className="rd-body-sm" style={{ textAlign: 'right' }}>
              {l}
            </span>
            <div role="meter" aria-label={`${l} to ${r}`} aria-valuemin={1} aria-valuemax={10} aria-valuenow={v} aria-valuetext={`${v} out of 10 toward ${r}`} style={{ position: 'relative', height: 14, borderRadius: 999, background: 'var(--rd-surface-sunken)' }}>
              <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${(v - 1) * 11.1}%`, background: 'var(--rd-bg-hero)', borderRadius: 999 }} />
              <span style={{ position: 'absolute', top: '50%', left: `${(v - 1) * 11.1}%`, translate: '-50% -50%', width: 24, height: 24, rotate: '45deg', background: 'var(--rd-spark-400)' }} />
            </div>
            <span className="rd-body-sm" style={{ fontWeight: 750, color: 'var(--rd-text-strong)' }}>
              {r}
            </span>
          </div>
        ))}
      </div>

      <H3>The editors (characters)</H3>
      <p className="sg-lede" style={{ maxWidth: 700, marginBottom: 24 }}>
        Slightly alien sprout kids in streetwear. They're guides and companions. <strong>They never lecture</strong>, never hold a clipboard, never say "you should".
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {(Object.keys(CHARACTERS) as CharacterKind[]).map((k) => (
          <Card key={k} style={{ display: 'grid', gridTemplateColumns: 'minmax(96px, 128px) 1fr', gap: 16, alignItems: 'start' }}>
            <Character kind={k} mood={k === 'doze' ? 'tired' : k === 'static' ? 'chaotic' : k === 'moss' ? 'soft' : 'hyped'} />
            <div style={{ display: 'grid', gap: 8 }}>
              <span className="rd-display rd-display-md">{CHARACTERS[k].name}</span>
              <p className="rd-body-sm" style={{ margin: 0 }}>
                {CHARACTERS[k].vibe}
              </p>
              <p className="rd-body-sm" style={{ margin: 0 }}>
                <strong>Use for:</strong> {CHARACTERS[k].useFor}
              </p>
              <p className="rd-body-sm" style={{ margin: 0, color: 'var(--rd-error-text)' }}>
                <strong>Never:</strong> {CHARACTERS[k].never}
              </p>
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6 }}>
              {(Object.keys(MOODS) as Mood[]).map((m) => (
                <figure key={m} style={{ margin: 0, display: 'grid', justifyItems: 'center', gap: 2 }}>
                  <div style={{ width: '100%', aspectRatio: '1', borderRadius: 12, overflow: 'hidden', background: MOODS[m].color }}>
                    <Character kind={k} mood={m} crop="bust" dieCut={false} />
                  </div>
                  <figcaption className="rd-caption" style={{ fontSize: 10 }}>
                    {m}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <H3>Principles (tie-breakers)</H3>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {PRINCIPLES.map((p, i) => (
          <li key={p} style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
            <span className="rd-display rd-display-md" style={{ color: 'var(--rd-text-secondary)', minWidth: '1.4em' }}>
              {i + 1}
            </span>
            <span className="rd-heading-md">{p}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
