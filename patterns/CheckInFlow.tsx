import { MoodCheckIn, MoodTrail, useToast, type TrailDay } from '@components';

const WEEK: TrailDay[] = [
  { day: 'mon', mood: 'tired', kind: 'doze' },
  { day: 'tue', mood: 'okay' },
  { day: 'wed' },
  { day: 'thu', mood: 'chaotic', kind: 'static' },
  { day: 'fri', mood: 'soft', kind: 'moss' },
  { day: 'sat', mood: 'hyped' },
  { day: 'sun', today: true },
];

/**
 * Check-in screen: the week as faces (no stats), then the check-in itself.
 * Wednesday is a dashed outline: a missed day is just a day.
 */
export function CheckInFlow() {
  const toast = useToast();
  return (
    <section style={{ display: 'grid', gap: 24, padding: '20px 20px 32px' }} aria-labelledby="ci-h">
      <header style={{ display: 'grid', gap: 4 }}>
        <span className="rd-caption">sunday, 12 oct</span>
        <h2 id="ci-h" className="rd-heading-lg">
          hey sam.
        </h2>
      </header>
      <div style={{ display: 'grid', gap: 8 }}>
        <span className="rd-label rd-secondary">this week, in faces</span>
        <MoodTrail days={WEEK} />
      </div>
      <MoodCheckIn
        onSubmit={(c) => toast({ tone: c.mood === 'heavy' ? 'info' : 'success', title: c.mood === 'heavy' ? 'saved to your drafts' : 'logged. that counts.', body: 'only you can see it.' })}
        onSkip={() => toast({ title: 'no worries.', body: 'the door’s open whenever.' })}
      />
    </section>
  );
}
