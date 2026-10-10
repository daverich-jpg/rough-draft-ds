import { useState } from 'react';
import { Button, Card, Character, Field, Icon, Input } from '@components';

/** Recoverable errors: tone 4 (calm). Say what happened, what's safe, what to do. */
export function ErrorStates() {
  const [email, setEmail] = useState('sam.gmail.com');
  const invalid = email.length > 0 && !email.includes('@');
  return (
    <section style={{ display: 'grid', gap: 20, padding: '20px 20px 32px' }} aria-label="error examples">
      <Card style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
        <Character kind="static" mood="chaotic" width={92} decorative />
        <h3 className="rd-heading-lg">we broke something. not you, us.</h3>
        <p className="rd-body rd-secondary" style={{ margin: 0 }}>
          the page didn't load. your drafts are safe. try again in a sec?
        </p>
        <Button iconStart="repost">try again</Button>
      </Card>

      <div role="status" style={{ display: 'flex', gap: 12, alignItems: 'start', padding: 14, borderRadius: 12, background: 'var(--rd-surface-warm)', color: 'var(--rd-text-on-warm)' }}>
        <Icon name="info" style={{ flex: 'none' }} />
        <p className="rd-body-sm" style={{ margin: 0 }}>
          <strong>you're offline.</strong> your draft is saved on this phone and will sync when you're back.
        </p>
      </div>

      <Field label="email" error={invalid ? 'that email’s missing an @. happens to everyone.' : undefined} hint="we only use it to log you in.">
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      </Field>
    </section>
  );
}
