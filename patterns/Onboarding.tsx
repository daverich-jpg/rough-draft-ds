import { useState, type CSSProperties } from 'react';
import { Button, Character, CHARACTERS, Chip, Steps, Sticker, Toggle, Field, Select, type CharacterKind } from '@components';

const REASONS = ['my brain is loud', 'i want to write more', 'lonely-ish', 'stress, mostly', 'sleep is a myth', 'just nosy'];
const KINDS: CharacterKind[] = ['sprout', 'doze', 'moss', 'static'];

/**
 * Onboarding: 4 steps, everything after step 0 is skippable, nothing is
 * scored. We ask what brings you here so we can tune prompts, not to
 * diagnose. No account wall before the user has seen what this is.
 */
export function Onboarding({ onDone }: { onDone?: () => void }) {
  const [step, setStep] = useState(0);
  const [reasons, setReasons] = useState<string[]>([]);
  const [editor, setEditor] = useState<CharacterKind>('sprout');
  const [nudge, setNudge] = useState(true);
  const next = () => (step < 3 ? setStep(step + 1) : onDone?.());

  if (step === 0)
    return (
      <section className="rd-halftone rd-grain" style={{ minHeight: '100%', display: 'grid', alignContent: 'space-between', padding: '28px 20px 24px', color: 'var(--rd-paper-900)' }} aria-labelledby="ob-0">
        <div style={{ display: 'grid', gap: 10 }}>
          <h2 id="ob-0" className="rd-display rd-display-xl" style={{ color: 'var(--rd-paper-900)', fontSize: 'clamp(3rem, 15vw, 4.25rem)' }}>
            Hi. We're not here to fix you.
          </h2>
          <Sticker color="white" tilt={3} style={{ justifySelf: 'end', marginRight: 8 }}>
            promise.
          </Sticker>
        </div>
        <div style={{ display: 'grid', justifyItems: 'center', margin: '8px 0' }}>
          <Character kind="sprout" mood="hyped" width={170} title="Sprout, waving hello" />
        </div>
        <div style={{ display: 'grid', gap: 12 }}>
          <p className="rd-body-lg" style={{ margin: 0, color: 'var(--rd-paper-900)', background: 'var(--rd-sunshine-400)', padding: '2px 0' }}>
            this is a place to check in, write stuff down and find your people. at your pace.
          </p>
          <Button size="lg" variant="secondary" block iconEnd="arrow-right" onClick={next}>
            ok, i'm in
          </Button>
          <Button variant="ghost" block style={{ color: 'var(--rd-paper-900)' }}>
            i already have an account
          </Button>
        </div>
      </section>
    );

  return (
    <section style={{ minHeight: '100%', display: 'grid', alignContent: 'start', gap: 24, padding: '16px 20px 24px' }} aria-labelledby={`ob-${step}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Button variant="ghost" size="sm" icon="arrow-left" aria-label="back" onClick={() => setStep(step - 1)} />
        <div style={{ flex: 1 }}>
          <Steps total={3} current={step - 1} label="setup" />
        </div>
        <Button variant="ghost" size="sm" onClick={next}>
          skip
        </Button>
      </div>

      {step === 1 && (
        <>
          <div>
            <h2 id="ob-1" className="rd-display rd-display-lg">
              What brings you here?
            </h2>
            <p className="rd-body rd-secondary" style={{ margin: '8px 0 0' }}>
              pick any. it just tunes your prompts. it's not a diagnosis.
            </p>
          </div>
          <div className="rd-chips" role="group" aria-labelledby="ob-1">
            {REASONS.map((r) => (
              <Chip key={r} selected={reasons.includes(r)} onToggle={(on) => setReasons((xs) => (on ? [...xs, r] : xs.filter((x) => x !== r)))}>
                {r}
              </Chip>
            ))}
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <h2 id="ob-2" className="rd-display rd-display-lg">
              Pick an editor
            </h2>
            <p className="rd-body rd-secondary" style={{ margin: '8px 0 0' }}>
              they'll keep you company. they won't coach you. swap any time.
            </p>
          </div>
          <div role="radiogroup" aria-labelledby="ob-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {KINDS.map((k, i) => (
              <label key={k} className="rd-mood" style={{ '--rd-mood-bg': ['var(--rd-sunshine-400)', 'var(--rd-midnight-100)', 'var(--rd-sunshine-100)', 'var(--rd-sunshine-300)'][i], '--rd-rot': `${[-2, 2, -1, 3][i]}deg` } as CSSProperties}>
                <input type="radio" name="editor" checked={editor === k} onChange={() => setEditor(k)} aria-label={`${CHARACTERS[k].name}: ${CHARACTERS[k].vibe}`} />
                <span className="rd-mood__card" aria-hidden style={{ minHeight: 168 }}>
                  <Character kind={k} mood={k === 'doze' ? 'tired' : k === 'static' ? 'chaotic' : k === 'moss' ? 'soft' : 'hyped'} width={84} decorative dieCut={false} />
                  <span className="rd-mood__word" style={{ fontSize: '1.25rem' }}>
                    {CHARACTERS[k].name.toLowerCase()}
                  </span>
                </span>
              </label>
            ))}
          </div>
          <p className="rd-body-sm rd-secondary" style={{ margin: 0 }} aria-live="polite">
            {CHARACTERS[editor].vibe}
          </p>
        </>
      )}

      {step === 3 && (
        <>
          <div>
            <h2 id="ob-3" className="rd-display rd-display-lg">
              Want a nudge?
            </h2>
            <p className="rd-body rd-secondary" style={{ margin: '8px 0 0' }}>
              one a day, max. we'll never guilt-trip you, and there are no streaks to lose.
            </p>
          </div>
          <Toggle label="daily check-in nudge" description="a quiet ping, not an alarm" checked={nudge} onChange={setNudge} />
          {nudge && (
            <Field label="when?" hint="quiet hours (10pm–8am) are always on.">
              <Select defaultValue="evening">
                <option value="morning">morning-ish (9am)</option>
                <option value="lunch">lunch (1pm)</option>
                <option value="evening">evening (7pm)</option>
              </Select>
            </Field>
          )}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Character kind={editor} mood="okay" width={64} decorative />
            <p className="rd-body-sm" style={{ margin: 0 }}>
              you can change all of this in settings. nothing is permanent here. that's kind of the point.
            </p>
          </div>
        </>
      )}

      <Button size="lg" block onClick={next} iconEnd={step === 3 ? undefined : 'arrow-right'}>
        {step === 3 ? "let's go" : 'next'}
      </Button>
    </section>
  );
}
