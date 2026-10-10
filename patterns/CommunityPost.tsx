import { useState } from 'react';
import { Avatar, Button, Card, Field, Icon, ScreenshotCard, Sheet, Tag, Textarea, CharCount, useToast, type AvatarProps } from '@components';

type Reaction = 'felt this' | 'same' | 'sending snacks';
const REACTIONS: Reaction[] = ['felt this', 'same', 'sending snacks'];

/**
 * A post in "the zine". No like counts, no follower counts. Reactions are
 * words, counts are hidden from everyone except the author.
 */
function Post({ author, time, body, tag, contentNote }: { author: AvatarProps & { handle: string }; time: string; body: string; tag?: string; contentNote?: string }) {
  const [mine, setMine] = useState<Reaction | null>(null);
  const [shown, setShown] = useState(!contentNote);
  const toast = useToast();
  return (
    <Card as="article" style={{ display: 'grid', gap: 12, padding: 16 }} aria-label={`post by ${author.name}`}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Avatar {...author} size={40} decorative />
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={{ fontWeight: 750, color: 'var(--rd-text-strong)' }}>{author.name}</span>
          <span className="rd-body-sm rd-secondary">
            {' '}
            {author.handle} · {time}
          </span>
        </div>
        <Button variant="ghost" size="sm" icon="more" aria-label="post options" onClick={() => toast({ title: 'options', body: 'mute, report or hide. (demo)' })} />
      </header>
      {tag && (
        <span>
          <Tag>{tag}</Tag>
        </span>
      )}
      {shown ? (
        <p className="rd-body" style={{ margin: 0, color: 'var(--rd-text-strong)' }}>
          {body}
        </p>
      ) : (
        <div className="rd-stripes rd-stripes--soft" style={{ padding: 3, borderRadius: 12 }}>
          <div style={{ background: 'var(--rd-surface-raised)', borderRadius: 10, padding: 16, display: 'grid', gap: 10 }}>
            <p className="rd-body" style={{ margin: 0, color: 'var(--rd-text-strong)' }}>
              <Icon name="eye-off" size={18} style={{ display: 'inline', verticalAlign: '-3px', marginRight: 6 }} />
              This post talks about {contentNote}. Show it?
            </p>
            <span>
              <Button size="sm" variant="soft" onClick={() => setShown(true)}>
                show post
              </Button>
            </span>
          </div>
        </div>
      )}
      <div className="rd-chips" role="group" aria-label="react">
        {REACTIONS.map((r) => (
          <button key={r} type="button" className="rd-chip" aria-pressed={mine === r} style={{ minHeight: 44, fontSize: '0.875rem' }} onClick={() => setMine(mine === r ? null : r)}>
            {r === 'felt this' && <Icon name="heart" size={16} filled={mine === r} />}
            {r}
          </button>
        ))}
      </div>
    </Card>
  );
}

export function CommunityPost() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const toast = useToast();
  return (
    <section style={{ display: 'grid', gap: 16, padding: '20px 20px 32px' }} aria-labelledby="z-h">
      <header>
        <h2 id="z-h" className="rd-display rd-display-lg">
          The zine
        </h2>
        <p className="rd-body-sm rd-secondary" style={{ margin: '4px 0 0' }}>
          made by people in progress. no likes, no algorithm.
        </p>
      </header>
      <button type="button" className="rd-card rd-card--interactive" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, textAlign: 'left', width: '100%', font: 'inherit' }} onClick={() => setOpen(true)}>
        <Avatar name="Sam" character="moss" mood="okay" size={40} decorative />
        <span className="rd-body" style={{ color: 'var(--rd-text-secondary)', flex: 1 }}>
          say something real…
        </span>
        <Icon name="journal" />
      </button>
      <Post
        author={{ name: 'mo', handle: '@mo.wip', character: 'sprout', mood: 'hyped' }}
        time="2h"
        tag="small wins"
        body="went to the shop in slippers and nobody died. including me. growth."
      />
      <ScreenshotCard
        tilt={-1}
        posts={[
          { name: 'jun', handle: '@jun.exe', time: '2h', replyingTo: '@mo.wip', body: 'who this ??', counts: { replies: 11, reposts: 31, likes: 229 }, avatar: { name: 'jun', character: 'static', mood: 'chaotic' } },
          { name: 'tired again', handle: '@tired.again', time: '2h', body: 'sadness from inside out', counts: { replies: 50, reposts: 186, likes: 2180 }, avatar: { name: 'tired again', character: 'doze', mood: 'heavy' } },
        ]}
      />
      <Post author={{ name: 'anon', handle: '@anonymous', character: 'moss', mood: 'soft' }} time="5h" contentNote="grief" body="a year since grandma. made her jollof badly on purpose so it'd taste like hers. it did." />
      <Sheet
        open={open}
        onClose={() => setOpen(false)}
        title="Say something"
        description="posting to the zine. you can stay anonymous."
        actions={
          <>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              save to drafts
            </Button>
            <Button
              disabled={!text.trim() || text.length > 500}
              onClick={() => {
                setOpen(false);
                setText('');
                toast({ tone: 'success', title: 'it’s out there. you made a thing.' });
              }}
            >
              post it
            </Button>
          </>
        }
      >
        <Field label="your post" hideLabel footer={<CharCount value={text} max={500} />}>
          <Textarea rows={5} value={text} onChange={(e) => setText(e.target.value)} placeholder="say something real…" />
        </Field>
      </Sheet>
    </section>
  );
}
