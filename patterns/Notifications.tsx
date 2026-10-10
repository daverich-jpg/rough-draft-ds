import { Avatar, Badge, Button, Card, Icon, useToast } from '@components';

const PUSH = [
  { time: 'now', title: 'rough draft', body: 'quick one: how’s the weather in there?' },
  { time: '7:02pm', title: 'rough draft', body: 'you’re allowed to cancel plans tonight.' },
  { time: 'yesterday', title: 'mo replied', body: '"same. every word."' },
];

/**
 * Notification rules:
 *  · max one nudge a day; quiet hours 10pm–8am are on by default
 *  · never streaks, never "you missed…", never guilt
 *  · follow-ups after a heavy check-in are opt-in, tone 5, and never mention the content
 *  · lock-screen copy is private-by-default: no journal content on the lock screen
 */
export function Notifications() {
  const toast = useToast();
  return (
    <section style={{ display: 'grid', gap: 20, padding: '20px 20px 32px' }} aria-labelledby="n-h">
      <h2 id="n-h" className="rd-display rd-display-lg">
        Pings
      </h2>

      <div style={{ display: 'grid', gap: 8 }}>
        <span className="rd-label rd-secondary">lock screen</span>
        <div style={{ display: 'grid', gap: 8, padding: 12, borderRadius: 24, background: 'var(--rd-midnight-500)' }} className="rd-grain">
          {PUSH.map((p) => (
            <div key={p.body} style={{ display: 'grid', gridTemplateColumns: '36px 1fr auto', gap: 10, alignItems: 'start', padding: 12, borderRadius: 16, background: 'color-mix(in oklch, var(--rd-paper-100) 92%, transparent)', color: 'var(--rd-paper-900)' }}>
              <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width={36} height={36} />
              <div>
                <div style={{ fontWeight: 750, fontSize: 14 }}>{p.title}</div>
                <div style={{ fontSize: 14, lineHeight: 1.35 }}>{p.body}</div>
              </div>
              <span style={{ fontSize: 12, color: 'var(--rd-paper-600)' }}>{p.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        <span className="rd-label rd-secondary" style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          in the app <Badge label="2 new">2</Badge>
        </span>
        <Card flat style={{ padding: 0, overflow: 'hidden' }}>
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {[
              { who: 'mo', kind: 'sprout' as const, text: 'replied to your draft', sub: '"same. every word."', isNew: true },
              { who: 'jules', kind: 'moss' as const, text: 'sent snacks on your post', sub: 'went to the shop in slippers…', isNew: true },
              { who: 'rough draft', kind: 'doze' as const, text: 'your drafts folder is still here', sub: 'no rush. just saying hi.', isNew: false },
            ].map((n, i) => (
              <li key={i} style={{ display: 'flex', gap: 12, padding: 14, background: n.isNew ? 'var(--rd-surface-warm)' : undefined, color: n.isNew ? 'var(--rd-text-on-warm)' : undefined }}>
                <Avatar name={n.who} character={n.kind} size={40} decorative />
                <div style={{ flex: 1 }}>
                  <p className="rd-body-sm" style={{ margin: 0 }}>
                    <strong>{n.who}</strong> {n.text}
                    {n.isNew && <span className="rd-sr-only"> (new)</span>}
                  </p>
                  <p className="rd-body-sm" style={{ margin: '2px 0 0', opacity: 0.85 }}>
                    {n.sub}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <div style={{ display: 'grid', gap: 8 }}>
        <span className="rd-label rd-secondary">toasts (try them)</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <Button size="sm" variant="soft" onClick={() => toast({ tone: 'success', title: 'logged. that counts.' })}>
            <Icon name="check" size={18} /> success
          </Button>
          <Button size="sm" variant="soft" onClick={() => toast({ title: 'draft saved', body: 'only you can see it.' })}>
            plain
          </Button>
          <Button size="sm" variant="soft" onClick={() => toast({ tone: 'error', title: 'that didn’t save.', body: 'your words are still here.', action: { label: 'try again', onClick: () => {} } })}>
            error
          </Button>
          <Button size="sm" variant="soft" onClick={() => toast({ tone: 'info', title: 'quiet hours are on', body: 'no pings 10pm–8am.' })}>
            info
          </Button>
        </div>
      </div>
    </section>
  );
}
