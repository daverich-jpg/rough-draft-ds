import { useEffect, useState } from 'react';
import { Button, Character, Icon } from '@components';

/**
 * Crisis-safe state. Tone dial at 5 (gentle):
 *  · no display type, no brush, no stickers, no tilt, no jokes, no slang
 *  · support is the first action, visible without scrolling
 *  · nothing auto-dismisses, nothing times out
 *  · "I'm safe for now" always available; no guilt for leaving
 *
 * FLAGGED: helpline links must be localised per market and reviewed by a
 * clinical/safeguarding advisor before launch. findahelpline.com is a placeholder default.
 */
export function CrisisSafe({ supportHref = 'https://findahelpline.com', onLeave }: { supportHref?: string; onLeave?: () => void }) {
  const [breathing, setBreathing] = useState(false);
  return (
    <section style={{ display: 'grid', gap: 20, padding: '28px 20px 32px', background: 'var(--rd-bg)' }} aria-labelledby="crisis-h">
      <Character kind="moss" mood="soft" width={96} decorative dieCut={false} />
      <div style={{ display: 'grid', gap: 8 }}>
        <h2 id="crisis-h" className="rd-heading-lg">
          You're not alone in this.
        </h2>
        <p className="rd-body-lg" style={{ margin: 0 }}>
          It sounds like things are really hard right now. You can talk to someone today. It's free and confidential.
        </p>
      </div>
      <div style={{ display: 'grid', gap: 12 }}>
        <a href={supportHref} target="_blank" rel="noreferrer" className="rd-btn rd-btn--lg rd-btn--secondary rd-btn--block" style={{ justifyContent: 'flex-start' }}>
          <Icon name="phone" />
          Call or text a helpline
        </a>
        <Button variant="soft" size="lg" block style={{ justifyContent: 'flex-start' }} iconStart="heart" onClick={() => setBreathing((b) => !b)} aria-expanded={breathing}>
          Breathe with me for a minute
        </Button>
        {breathing && <Breathe />}
        <Button variant="soft" size="lg" block style={{ justifyContent: 'flex-start' }} iconStart="message">
          Message someone I trust
        </Button>
      </div>
      <p className="rd-body-sm" style={{ margin: 0, padding: 14, borderRadius: 12, background: 'var(--rd-info)', color: 'var(--rd-on-info)' }}>
        <strong>If you're in immediate danger,</strong> call your local emergency number now.
      </p>
      <Button variant="ghost" onClick={onLeave} style={{ justifySelf: 'start' }}>
        I'm safe for now. Take me back.
      </Button>
    </section>
  );
}

/** 4-in / 6-out breathing. Reduced motion: no scaling, text only. */
function Breathe() {
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  useEffect(() => {
    const t = setTimeout(() => setPhase((p) => (p === 'in' ? 'out' : 'in')), phase === 'in' ? 4000 : 6000);
    return () => clearTimeout(t);
  }, [phase]);
  return (
    <div style={{ display: 'grid', justifyItems: 'center', gap: 12, padding: '20px 0' }}>
      <div
        aria-hidden
        className="rd-breathe"
        style={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'var(--rd-mood-heavy)',

          scale: phase === 'in' ? '1' : '0.6',
          transition: `scale ${phase === 'in' ? 4 : 6}s ease-in-out`,
        }}
      />
      <p className="rd-heading-md" aria-live="polite" style={{ margin: 0 }}>
        {phase === 'in' ? 'Breathe in… 4' : 'And out… 6'}
      </p>
    </div>
  );
}
