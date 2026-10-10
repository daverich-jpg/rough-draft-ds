import { CheckInFlow, CommunityPost, CrisisSafe, ErrorStates, JournalEntry, Notifications, Onboarding } from '@patterns';
import { Section, Phone } from '../ui';

export function Patterns() {
  return (
    <Section id="patterns" num="09" title="Patterns" lede="Whole screens built only from the components above, with real microcopy. They're interactive: tap through onboarding, check in, write a draft, open a content-noted post.">
      <div className="grid gap-12 justify-items-center" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))' }}>
        <Phone label="01 · onboarding">
          <Onboarding />
        </Phone>
        <Phone label="02 · check-in">
          <CheckInFlow />
        </Phone>
        <Phone label="03 · journal entry (drafts)">
          <JournalEntry />
        </Phone>
        <Phone label="04 · community post (the zine)">
          <CommunityPost />
        </Phone>
        <Phone label="05 · crisis-safe state (tone 5)">
          <CrisisSafe />
        </Phone>
        <Phone label="06 · recoverable errors (tone 4)">
          <ErrorStates />
        </Phone>
        <Phone label="07 · notifications">
          <Notifications />
        </Phone>
      </div>
    </Section>
  );
}
