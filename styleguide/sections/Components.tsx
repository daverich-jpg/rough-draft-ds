import { useState, type ReactNode } from 'react';
import {
  Avatar,
  AvatarStack,
  Badge,
  Button,
  Card,
  Checkbox,
  Chip,
  EmptyState,
  Field,
  Input,
  Modal,
  MoodCheckIn,
  MoodTrail,
  Progress,
  RadioGroup,
  ScreenshotCard,
  Select,
  Sheet,
  Steps,
  Sticker,
  TabBar,
  Tabs,
  Tag,
  Textarea,
  Toggle,
  TopNav,
  ZineCard,
  useToast,
  type ButtonVariant,
  type NavItem,
} from '@components';
import { Section, H3, Code } from '../ui';

const Demo = ({ title, children, note, id }: { title: string; children: ReactNode; note?: ReactNode; id?: string }) => (
  <div style={{ display: 'grid', gap: 12, alignContent: 'start' }} id={id}>
    <span className="sg-label">{title}</span>
    <div className="sg-stage">{children}</div>
    {note && <p className="sg-note" style={{ margin: 0 }}>{note}</p>}
  </div>
);

const NAV: NavItem[] = [
  { id: 'home', label: 'home', icon: 'home' },
  { id: 'drafts', label: 'drafts', icon: 'journal' },
  { id: 'checkin', label: 'check in', icon: 'sprout' },
  { id: 'zine', label: 'the zine', icon: 'people' },
  { id: 'you', label: 'you', icon: 'user' },
];

export function Components() {
  const toast = useToast();
  const [modal, setModal] = useState(false);
  const [sheet, setSheet] = useState(false);
  const [chips, setChips] = useState<string[]>(['sleep']);
  const [tags, setTags] = useState(['grief', 'small wins', 'school']);
  const [nav, setNav] = useState('drafts');
  const [loading, setLoading] = useState(false);

  return (
    <Section
      id="components"
      num="08"
      title="Components"
      lede={
        <>
          React + TypeScript, styled with plain CSS on tokens (<Code>components/styles.css</Code>), so they work with or without Tailwind. Every control is keyboard reachable, has a visible two-tone focus ring and a 44px+ target, and keeps its label in the DOM.
        </>
      }
    >
      <H3 id="c-button">Button</H3>
      <div className="grid gap-6">
        <Demo title="variants" note="Sticker = marketing + delight only, max one per screen. Danger = destructive actions, always with a confirm step.">
          <div className="flex flex-wrap gap-4 items-center">
            {(['primary', 'secondary', 'soft', 'ghost', 'sticker', 'danger'] as ButtonVariant[]).map((v) => (
              <Button key={v} variant={v}>
                {v === 'sticker' ? 'join the zine' : v === 'danger' ? 'delete draft' : v === 'ghost' ? 'not now' : v === 'secondary' ? 'save to drafts' : v === 'soft' ? 'another prompt' : 'post it'}
              </Button>
            ))}
          </div>
        </Demo>
        <Demo title="sizes + icons" note="sm = 44px (minimum target), md = 48px, lg = 60px. Icon-only buttons require aria-label.">
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">small</Button>
            <Button iconEnd="arrow-right">medium</Button>
            <Button size="lg" iconStart="sprout">
              check in
            </Button>
            <Button icon="plus" aria-label="new draft" />
            <Button icon="close" variant="ghost" aria-label="close" />
          </div>
        </Demo>
        <Demo title="states" note="Hover lifts, press sinks into its own shadow. Disabled = flat, no shadow (not just faded), so it reads without colour. Loading keeps focus and announces itself.">
          <div className="flex flex-wrap gap-4 items-center">
            <Button>rest</Button>
            <Button className="rd-demo-hover" style={{ translate: '-2px -2px', ['--rd-elev' as string]: 'var(--rd-shadow-md)' }}>
              hover
            </Button>
            <Button style={{ translate: '3px 3px', ['--rd-elev' as string]: 'none' }}>pressed</Button>
            <Button style={{ outline: '3px solid var(--rd-focus-ring)', outlineOffset: 2, boxShadow: '0 0 0 2px var(--rd-focus-halo), var(--rd-elev)' }}>focus</Button>
            <Button disabled>disabled</Button>
            <Button
              loading={loading}
              loadingLabel="posting"
              onClick={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 1600);
              }}
            >
              {loading ? 'posting' : 'tap: loading'}
            </Button>
          </div>
        </Demo>
      </div>

      <H3 id="c-inputs">Inputs</H3>
      <div className="grid gap-6 md:grid-cols-2">
        <Demo title="text field · states">
          <div className="grid gap-5">
            <Field label="what should we call you?" hint="a first name, a nickname, a vibe. whatever.">
              <Input placeholder="sam" />
            </Field>
            <Field label="email" error="that email’s missing an @. happens to everyone.">
              <Input defaultValue="sam.gmail.com" />
            </Field>
            <Field label="username" hint="you can't change this yet.">
              <Input defaultValue="@sam.wip" disabled />
            </Field>
          </div>
        </Demo>
        <Demo title="textarea + select">
          <div className="grid gap-5">
            <Field label="say more? (or don’t)" optional hint="lined = journal contexts.">
              <Textarea lined rows={4} placeholder="today i…" />
            </Field>
            <Field label="nudge time">
              <Select defaultValue="evening">
                <option value="morning">morning-ish (9am)</option>
                <option value="evening">evening (7pm)</option>
                <option value="never">never, thanks</option>
              </Select>
            </Field>
          </div>
        </Demo>
        <Demo title="toggle (switch)">
          <div className="grid gap-2">
            <Toggle label="daily nudge" description="one a day, max" defaultChecked />
            <Toggle label="quiet hours" description="no pings 10pm–8am" defaultChecked />
            <Toggle label="show like counts" description="we don't have those. on purpose." disabled />
          </div>
        </Demo>
        <Demo title="checkbox + radio">
          <div className="grid gap-4">
            <div className="grid">
              <Checkbox label="post anonymously" defaultChecked />
              <Checkbox label="add a content note" description="lets readers choose whether to open it" />
              <Checkbox label="share with my therapist" disabled description="coming later" />
            </div>
            <RadioGroup
              legend="who sees this?"
              name="demo-vis"
              defaultValue="me"
              options={[
                { value: 'me', label: 'just me' },
                { value: 'friends', label: 'my people' },
                { value: 'zine', label: 'the zine (public)' },
              ]}
            />
          </div>
        </Demo>
      </div>

      <H3 id="c-chips">Chip · Tag · Badge · Sticker</H3>
      <div className="grid gap-6 md:grid-cols-2">
        <Demo title="chips (multi-select)" note="aria-pressed; selected = check + fill + lift, never colour alone.">
          <div className="rd-chips">
            {['sleep', 'people', 'money', 'school / work', 'the news'].map((c) => (
              <Chip key={c} selected={chips.includes(c)} onToggle={(on) => setChips((xs) => (on ? [...xs, c] : xs.filter((x) => x !== c)))}>
                {c}
              </Chip>
            ))}
            <Chip disabled>full</Chip>
          </div>
        </Demo>
        <Demo title="tags · badges">
          <div className="flex flex-wrap gap-3 items-center">
            {tags.map((t) => (
              <Tag key={t} onRemove={() => setTags((xs) => xs.filter((x) => x !== t))}>
                {t}
              </Tag>
            ))}
            <Tag color="var(--rd-sunshine-300)">new</Tag>
            <Badge label="3 new replies">3</Badge>
            <Badge tone="hero">12</Badge>
            <Badge tone="ink">beta</Badge>
            <Badge tone="error" label="1 failed upload">1</Badge>
          </div>
        </Demo>
        <Demo title="stickers" note="Decorative by default (aria-hidden). Brush voice, 1–6 words.">
          <div className="flex flex-wrap gap-6 items-center" style={{ padding: 8 }}>
            <Sticker>in progress</Sticker>
            <Sticker color="yellow" tilt={2}>
              no one's grading
            </Sticker>
            <Sticker color="cream" shape="round" tilt={-1}>
              soft day
            </Sticker>
            <Sticker color="navy" tilt={1}>
              valid
            </Sticker>
            <Sticker color="white" shape="burst" tilt={0}>
              new!
            </Sticker>
          </div>
        </Demo>
        <Demo title="avatars" note="Character avatars are the default for new and anonymous users. No photo required, ever.">
          <div className="flex flex-wrap gap-4 items-center">
            <Avatar name="Sam Okafor" />
            <Avatar name="mo" character="sprout" mood="hyped" size={56} sticker />
            <Avatar name="jules" character="moss" mood="soft" size={56} shape="blob" />
            <Avatar name="anon" character="doze" mood="tired" size={56} />
            <Avatar name="kai" character="static" mood="chaotic" size={40} />
            <AvatarStack people={[{ name: 'a b' }, { name: 'mo', character: 'sprout' }, { name: 'jules', character: 'moss' }, { name: 'zee' }, { name: 'q' }, { name: 'r' }]} />
          </div>
        </Demo>
      </div>

      <H3 id="c-cards">Cards</H3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
        <Card>
          <span className="rd-caption">standard</span>
          <h4 className="rd-heading-md" style={{ marginTop: 6 }}>
            the text i won't send
          </h4>
          <p className="rd-body-sm rd-secondary" style={{ margin: '6px 0 0' }}>
            draft · tuesday · only you
          </p>
        </Card>
        <Card tone="hero" zine grain tape tilt={-1}>
          <span className="rd-caption" style={{ color: 'var(--rd-paper-900)' }}>
            hero · zine · tape (flat) · grain
          </span>
          <h4 className="rd-display rd-display-md" style={{ marginTop: 6 }}>
            Today's prompt
          </h4>
          <p className="rd-body" style={{ margin: '6px 0 0' }}>
            one small thing that didn't suck.
          </p>
        </Card>
        <Card tone="inverse" className="rd-card--interactive" as="article" tabIndex={0}>
          <span className="rd-caption" style={{ color: 'var(--rd-text-on-inverse)' }}>
            inverse · interactive
          </span>
          <h4 className="rd-display rd-display-md" style={{ marginTop: 6 }}>
            2am mode
          </h4>
          <p className="rd-body-sm" style={{ margin: '6px 0 0' }}>
            hover me. press me.
          </p>
        </Card>
        <ScreenshotCard
          tilt={-1}
          posts={[
            { name: 'jun', handle: '@jun.exe', time: '2h', replyingTo: '@mo.wip', body: 'who this ??', counts: { replies: 11, reposts: 31, likes: 229 }, avatar: { name: 'jun', character: 'static', mood: 'chaotic' } },
            { name: 'tired again', handle: '@tired.again', time: '2h', body: 'sadness from inside out', counts: { replies: 50, reposts: 186, likes: 2180 }, avatar: { name: 'tired again', character: 'doze', mood: 'heavy' } },
          ]}
        />
        <ZineCard tilt={2} color="navy" quote="Cancel the plans." body="you're allowed. they'll survive. so will you." by="the editors" />
        <ZineCard voice="brush" color="white" tilt={-2} tape quote="you're allowed to be a work in progress and a masterpiece at the same time" />
      </div>

      <H3 id="c-overlay">Modal · Sheet · Toast</H3>
      <Demo title="overlays" note="Native <dialog>: focus trapped, Esc closes, focus returns to the trigger. Sheet = bottom on mobile, centred ≥720px. Toasts: polite live region, errors use role=alert, pause on hover/focus, no auto-dismiss when there's an action.">
        <div className="flex flex-wrap gap-3">
          <Button variant="soft" onClick={() => setModal(true)}>
            open modal
          </Button>
          <Button variant="soft" onClick={() => setSheet(true)}>
            open sheet
          </Button>
          <Button variant="soft" onClick={() => toast({ tone: 'success', title: 'logged. that counts.', body: 'only you can see it.' })}>
            toast: success
          </Button>
          <Button variant="soft" onClick={() => toast({ tone: 'error', title: 'that didn’t save.', body: 'your words are still here.', action: { label: 'try again', onClick: () => {} } })}>
            toast: error
          </Button>
        </div>
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          title="Delete this draft?"
          description="it'll be gone for good. there's no trash folder (yet)."
          actions={
            <>
              <Button variant="ghost" onClick={() => setModal(false)}>
                keep it
              </Button>
              <Button variant="danger" onClick={() => setModal(false)}>
                delete draft
              </Button>
            </>
          }
        />
        <Sheet open={sheet} onClose={() => setSheet(false)} title="Post to the zine?" description="this makes it public. you can unpublish any time." actions={<Button onClick={() => setSheet(false)}>post it</Button>}>
          <Checkbox label="post anonymously" defaultChecked />
        </Sheet>
      </Demo>

      <H3 id="c-tabs">Tabs</H3>
      <Demo title="folder tabs" note="←/→ to move, Home/End to jump, one tab stop.">
        <Tabs
          label="demo"
          items={[
            { id: 'a', label: 'drafts', content: <p className="rd-body" style={{ margin: 0 }}>two drafts. both messy. both yours.</p> },
            { id: 'b', label: 'published', content: <p className="rd-body" style={{ margin: 0 }}>nothing out there yet. that's fine.</p> },
            { id: 'c', label: 'saved', content: <p className="rd-body" style={{ margin: 0 }}>posts you kept for later.</p> },
          ]}
        />
      </Demo>

      <H3 id="c-nav">Navigation</H3>
      <div className="grid gap-6">
        <Demo title="desktop top nav">
          <div style={{ borderRadius: 12, overflow: 'hidden', overflowX: 'auto' }}>
            <div style={{ minWidth: 760 }}>
              <TopNav items={NAV.filter((n) => n.id !== 'you')} current={nav} onNavigate={setNav} end={<Avatar name="sam" character="moss" size={40} />} />
            </div>
          </div>
        </Demo>
        <Demo title="mobile tab bar" note="5 slots. Middle = check in (the only filled accent on the screen).">
          <div style={{ maxWidth: 400, borderRadius: 16, overflow: 'hidden', paddingTop: 40, background: 'var(--rd-bg)' }}>
            <TabBar items={NAV} current={nav} primary="checkin" onNavigate={setNav} />
          </div>
        </Demo>
      </div>

      <H3 id="c-progress">Progress · mood trail</H3>
      <div className="grid gap-6 md:grid-cols-2">
        <Demo title="progress (tasks, never people)">
          <div className="grid gap-6">
            <Progress label="uploading photo" value={64} valueText="almost there" />
            <Progress label="this week's prompts" value={3} max={5} valueText="3 of 5" />
            <Steps total={4} current={1} />
          </div>
        </Demo>
        <Demo title="mood trail" note="A week as faces. No average, no score, no streak. Missed days are dashed, not red.">
          <MoodTrail
            days={[
              { day: 'mon', mood: 'tired', kind: 'doze' },
              { day: 'tue', mood: 'okay' },
              { day: 'wed' },
              { day: 'thu', mood: 'chaotic', kind: 'static' },
              { day: 'fri', mood: 'heavy', kind: 'moss' },
              { day: 'sat', mood: 'soft', kind: 'moss' },
              { day: 'sun', mood: 'hyped', today: true },
            ]}
          />
        </Demo>
      </div>

      <H3 id="c-empty">Empty state</H3>
      <div className="grid gap-6 md:grid-cols-2">
        <Card flat>
          <EmptyState title="Nothing here yet" body={<>your first draft can be one word. honestly, "ugh" counts.</>} actions={<Button iconStart="plus">start a draft</Button>} character="doze" />
        </Card>
        <Card flat>
          <EmptyState title="Quiet in here" body="say something and it won't be." actions={<Button variant="soft">say something</Button>} character="sprout" mood="okay" />
        </Card>
      </div>

      <H3 id="c-checkin">Mood check-in (core)</H3>
      <Card style={{ padding: 'clamp(16px, 4vw, 32px)' }}>
        <MoodCheckIn onSubmit={(c) => toast({ tone: 'success', title: `logged: ${c.mood}`, body: c.tags.join(', ') || undefined })} onSkip={() => toast({ title: 'no worries. the door’s open.' })} />
      </Card>
      <p className="sg-note">
        No scales, no numbers. Mood = a face + a word (radio group, arrow keys). Then optional context chips and an optional note. Pick <strong>heavy</strong> to see gentle mode: jokes drop out, support shows up <em>before</em> submit, and the success state goes quiet.
      </p>
    </Section>
  );
}
