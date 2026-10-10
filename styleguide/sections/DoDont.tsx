import type { ReactNode } from 'react';
import { Button, Character, Icon, Sticker } from '@components';
import { Section } from '../ui';

const Pair = ({ good, bad, goodWhy, badWhy }: { good: ReactNode; bad: ReactNode; goodWhy: string; badWhy: string }) => (
  <div className="grid gap-4 sm:grid-cols-2">
    <figure className="sg-do" style={{ margin: 0 }}>
      <div className="sg-verdict">
        <Icon name="check" size={18} strokeWidth={2.6} /> do
      </div>
      <div className="sg-ex">{good}</div>
      <figcaption className="sg-why">{goodWhy}</figcaption>
    </figure>
    <figure className="sg-dont" style={{ margin: 0 }}>
      <div className="sg-verdict">
        <Icon name="close" size={18} strokeWidth={2.6} /> don't
      </div>
      <div className="sg-ex" aria-hidden>
        {bad}
      </div>
      <figcaption className="sg-why">{badWhy}</figcaption>
    </figure>
  </div>
);

export function DoDont() {
  return (
    <Section id="dodont" num="11" title="Do / Don't" lede="The fastest way to learn the system is to see it misused. Every 'don't' here is something a well-meaning designer will try in week one.">
      <div className="grid gap-10 lg:grid-cols-2">
        <Pair
          good={<div style={{ background: 'var(--rd-sunshine-400)', padding: '14px 18px', border: '2px solid var(--rd-paper-900)', color: 'var(--rd-paper-900)', fontWeight: 750 }}>ink on yellow · 12.5:1</div>}
          bad={<div style={{ background: '#fff', padding: '14px 18px', border: '2px solid #ddd', color: '#FFD86C', fontWeight: 750 }}>yellow on white · 1.37:1</div>}
          goodWhy="Yellow is a surface. Ink sits on it."
          badWhy="Yellow text on white is unreadable for almost everyone."
        />
        <Pair
          good={
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <span className="rd-display rd-display-sm">Your drafts</span>
              <Sticker tilt={-2}>3 new</Sticker>
            </div>
          }
          bad={
            <div style={{ display: 'grid', gap: 6, background: 'var(--rd-spark-400)', padding: 12, width: '100%' }}>
              <span className="rd-display rd-display-sm" style={{ color: 'var(--rd-paper-900)' }}>Your drafts</span>
              <span style={{ background: 'var(--rd-spark-300)', color: 'var(--rd-spark-500)', padding: 6 }}>lime everywhere</span>
            </div>
          }
          goodWhy="Lime is a spark: one sticker, under 5% of the screen."
          badWhy="Lime as a surface turns a spark into a hazard sign."
        />
        <Pair
          good={
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Character kind="moss" mood="soft" width={64} decorative />
              <p className="rd-body" style={{ margin: 0 }}>heavy days are real. you don't have to fix this one.</p>
            </div>
          }
          bad={
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Character kind="sprout" mood="hyped" width={64} decorative />
              <p className="rd-brush rd-brush-md" style={{ margin: 0 }}>cheer up!! 💀</p>
            </div>
          }
          goodWhy="Heavy moments get Moss, the workhorse voice and plain words."
          badWhy="Hype character + brush + joke on a sad day. Never."
        />
        <Pair
          good={
            <div className="grid grid-cols-3 gap-3" style={{ width: '100%' }}>
              {[-2, 1, -1].map((r, i) => (
                <div key={i} style={{ height: 60, background: 'var(--rd-surface-raised)', border: '2px solid var(--rd-paper-900)', rotate: `${r}deg`, boxShadow: 'var(--rd-shadow-sm)' }} />
              ))}
            </div>
          }
          bad={
            <div style={{ position: 'relative', height: 100, width: '100%' }}>
              {[[-12, 4, 10], [9, 40, 30], [-20, 70, 0]].map(([r, l, t], i) => (
                <div key={i} style={{ position: 'absolute', left: `${l}%`, top: t, width: '34%', height: 60, background: 'var(--rd-surface-raised)', border: '2px solid var(--rd-paper-900)', rotate: `${r}deg` }} />
              ))}
            </div>
          }
          goodWhy="Tilt ±3° max, boxes on the grid. Chaos, controlled."
          badWhy="Random angles and positions read as broken, not punk."
        />
        <Pair
          good={
            <div style={{ display: 'grid', gap: 12, padding: 16, borderRadius: 16, background: 'var(--rd-surface-raised)', boxShadow: 'var(--rd-shadow-md)', width: '100%' }}>
              <span className="rd-heading-md">the text i won't send</span>
              <span style={{ display: 'flex', gap: 8 }}>
                <span className="rd-tag">private</span>
                <Button size="sm">open</Button>
              </span>
            </div>
          }
          bad={
            <div style={{ display: 'grid', gap: 12, padding: 16, borderRadius: 16, background: 'var(--rd-surface-raised)', border: '3px solid var(--rd-paper-900)', boxShadow: 'var(--rd-shadow-md)', width: '100%' }}>
              <span className="rd-heading-md">the text i won't send</span>
              <span style={{ display: 'flex', gap: 8 }}>
                <span className="rd-tag" style={{ border: '2px solid var(--rd-paper-900)' }}>private</span>
                <span className="rd-btn rd-btn--sm" style={{ border: '3px solid var(--rd-paper-900)' }}>open</span>
              </span>
            </div>
          }
          goodWhy="Fill + hard shadow give the shape. Strokes are saved for inputs, ticks and focus."
          badWhy="Outlining every box turns the page into a colouring book and buries what's interactive."
        />
        <Pair
          good={<Button>post it</Button>}
          bad={
            <button type="button" tabIndex={-1} style={{ padding: '12px 28px', borderRadius: 999, border: 0, background: 'linear-gradient(135deg,#a78bfa,#f9a8d4)', color: '#fff', boxShadow: '0 12px 30px rgba(167,139,250,.5)', fontWeight: 600 }}>
              Begin Your Journey ✨
            </button>
          }
          goodWhy="Solid fill, hard shadow, a verb that says what happens."
          badWhy="Gradient + glow + 'journey' = every wellness-app template."
        />
        <Pair
          good={
            <div style={{ display: 'flex', gap: 6 }}>
              {['tired', 'okay', 'soft'].map((m) => (
                <span key={m} className="rd-tag">
                  {m}
                </span>
              ))}
            </div>
          }
          bad={
            <div style={{ display: 'grid', gap: 4, textAlign: 'center' }}>
              <span style={{ fontSize: 13 }}>Rate your mood today</span>
              <div style={{ display: 'flex', gap: 4 }}>
                {Array.from({ length: 10 }, (_, i) => (
                  <span key={i} style={{ width: 22, height: 22, border: '1px solid #999', borderRadius: 4, fontSize: 11, display: 'grid', placeItems: 'center' }}>
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
          }
          goodWhy="Feelings get words and faces."
          badWhy="1–10 scales are clinical and turn a feeling into a score."
        />
      </div>
    </Section>
  );
}
