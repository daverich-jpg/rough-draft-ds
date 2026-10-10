import { useEffect, useState } from 'react';
import { Button, Card, CharCount, EmptyState, Field, Icon, Input, RadioGroup, Sheet, Sticker, Tabs, Tag, Textarea, Toggle, useToast } from '@components';

const PROMPTS = [
  "what's something you're pretending not to care about?",
  'what did you need today that you didn’t get?',
  'write the text you won’t send.',
  'one small thing that didn’t suck.',
];

/**
 * Journal = "the drafts folder". Autosaves to drafts, is private by default,
 * and publishing to the zine is a deliberate, reversible, two-step choice.
 */
export function JournalEntry() {
  const toast = useToast();
  const [prompt, setPrompt] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [who, setWho] = useState('me');
  const [saved, setSaved] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [confirm, setConfirm] = useState(false);
  const [note, setNote] = useState(false);

  useEffect(() => {
    if (!title && !body) return;
    setSaved('saving');
    const t = setTimeout(() => setSaved('saved'), 700);
    return () => clearTimeout(t);
  }, [title, body]);

  const editor = (
    <div style={{ display: 'grid', gap: 20 }}>
      <Card tone="hero" zine tape tilt={-1} grain style={{ padding: '20px 18px' }}>
        <span className="rd-caption" style={{ color: 'var(--rd-paper-900)' }}>
          today's prompt
        </span>
        <p className="rd-heading-md" style={{ margin: '6px 0 10px', color: 'var(--rd-paper-900)' }}>
          {PROMPTS[prompt]}
        </p>
        <Button variant="ghost" size="sm" iconStart="sparkle" style={{ color: 'var(--rd-paper-900)', marginLeft: -12 }} onClick={() => setPrompt((p) => (p + 1) % PROMPTS.length)}>
          another one
        </Button>
      </Card>
      <Field label="title" optional>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="untitled (that's allowed)" />
      </Field>
      <Field label="the draft" hint="messy is fine. it's a draft." footer={<CharCount value={body} max={2000} />}>
        <Textarea lined rows={7} value={body} onChange={(e) => setBody(e.target.value)} placeholder="start anywhere…" />
      </Field>
      <RadioGroup
        legend="who sees this?"
        name="visibility"
        value={who}
        onChange={setWho}
        options={[
          { value: 'me', label: 'just me', description: 'private. stays in your drafts.' },
          { value: 'friends', label: 'my people', description: 'friends you’ve added, nobody else.' },
          { value: 'zine', label: 'the zine', description: 'public, anonymous if you want. no likes, no follower counts.' },
        ]}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="rd-body-sm rd-secondary" role="status" aria-live="polite" style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
          {saved === 'saving' && 'saving…'}
          {saved === 'saved' && (
            <>
              <Icon name="check" size={16} /> saved to drafts
            </>
          )}
        </span>
        <Button disabled={!body.trim()} onClick={() => (who === 'me' ? toast({ tone: 'success', title: 'saved. only you can see it.' }) : setConfirm(true))}>
          {who === 'me' ? 'save draft' : 'publish'}
        </Button>
      </div>
      <Sheet
        open={confirm}
        onClose={() => setConfirm(false)}
        title={who === 'zine' ? 'Post to the zine?' : 'Share with your people?'}
        description={who === 'zine' ? 'this makes it public. you can unpublish any time, and you can stay anonymous.' : 'only friends you’ve added will see it.'}
        actions={
          <>
            <Button variant="ghost" onClick={() => setConfirm(false)}>
              keep editing
            </Button>
            <Button
              onClick={() => {
                setConfirm(false);
                toast({ tone: 'success', title: 'it’s out there. you made a thing.', action: { label: 'view it', onClick: () => {} } });
              }}
            >
              post it
            </Button>
          </>
        }
      >
        <Toggle label="add a content note" description="lets readers choose whether to open it (e.g. grief, self-harm, ED)." checked={note} onChange={setNote} />
        {note && (
          <Field label="content note">
            <Input placeholder="e.g. talks about grief" />
          </Field>
        )}
      </Sheet>
    </div>
  );

  return (
    <section style={{ display: 'grid', gap: 16, padding: '20px 20px 32px' }} aria-labelledby="j-h">
      <header style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 12 }}>
        <h2 id="j-h" className="rd-display rd-display-lg">
          Drafts
        </h2>
        <Sticker color="yellow" tilt={2}>
          no one's grading
        </Sticker>
      </header>
      <Tabs
        label="journal"
        items={[
          { id: 'write', label: 'write', content: editor },
          {
            id: 'drafts',
            label: 'drafts (2)',
            content: (
              <ul style={{ display: 'grid', gap: 12, margin: 0, padding: 0, listStyle: 'none' }}>
                {[
                  ['the text i won’t send', 'tue', 'private'],
                  ['untitled', 'sat', 'my people'],
                ].map(([t, d, v]) => (
                  <Card as="li" key={t} flat style={{ display: 'grid', gap: 6, padding: 16 }}>
                    <span className="rd-heading-md">{t}</span>
                    <span style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className="rd-body-sm rd-secondary">{d}</span>
                      <Tag>{v}</Tag>
                    </span>
                  </Card>
                ))}
              </ul>
            ),
          },
          {
            id: 'published',
            label: 'published',
            content: (
              <EmptyState
                headingLevel={3}
                title="Nothing out there yet"
                body="that's fine. drafts are the whole point. publish when (if) it feels right."
                character="doze"
                mood="okay"
              />
            ),
          },
        ]}
      />
    </section>
  );
}
