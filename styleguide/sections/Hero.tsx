import { Character, Sticker, ZineCard } from '@components';

export function Hero() {
  return (
    <section aria-labelledby="hero-h" style={{ paddingTop: 40 }}>
      {/* Controlled chaos: everything sits on a 12-col grid; only rotation is "free", and only from −3° to 3°. */}
      <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
        <div className="col-span-12 lg:col-span-7 relative">
          <span className="rd-caption">design system · v0.1 · october 2026</span>
          <h1 id="hero-h" className="rd-display rd-display-2xl" style={{ marginTop: 8 }}>
            Rough
            <span className="rd-brush" style={{ display: 'block', fontSize: '0.55em', lineHeight: 1, rotate: '-3deg', translate: '0.15em -0.02em', width: 'fit-content', position: 'relative', isolation: 'isolate' }}>
              draft
              <span aria-hidden style={{ position: 'absolute', left: -4, right: -8, bottom: '0.12em', height: '0.22em', background: 'var(--rd-sunshine-400)', zIndex: -1, rotate: '2deg' }} />
            </span>
          </h1>
          <p className="sg-lede" style={{ maxWidth: 560, marginTop: 24 }}>
            Wellness for people who are tired of being sold wellness. These are the tokens, components, patterns and voice rules. Everything here is in progress.{' '}
            <em>So are you. That's the point.</em>
          </p>
          <Sticker color="cream" tilt={3} style={{ position: 'absolute', right: '4%', top: '18%' }} className="hidden md:inline-flex">
            not a template
          </Sticker>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 grid gap-6" style={{ paddingTop: 12 }}>
          <ZineCard
            voice="brush"
            color="cream"
            tilt={2}
            tape
            quote="your comfort zone will kill you"
            body="but we won't drag you out of it. we'll sit on the edge with you until you're ready. or until you're not. both are fine."
          />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 lg:col-start-2">
          <ZineCard
            tilt={-2}
            quote="Make drafts."
            body="no one can take self-publishing away from you. no algorithm decides what your words are worth. no gatekeeper says your feelings aren't ready. you're allowed to put out the rough version."
            halftone
          />
        </div>
        <div className="col-span-6 lg:col-span-3 grid place-items-center" style={{ minHeight: 220 }}>
          <Character kind="sprout" mood="hyped" width={180} title="Sprout, the main character, looking hyped" />
        </div>
        <div className="col-span-6 lg:col-span-4 rd-overprint rd-grain" style={{ padding: '24px 20px', rotate: '1deg', boxShadow: 'var(--rd-shadow-md)' }}>
          <p className="rd-display rd-overprint__ink" data-ink="in progress" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }} aria-label="in progress">
            in progress
          </p>
          <span className="rd-caption" style={{ color: 'var(--rd-midnight-500)' }}>
            risograph overprint · navy on yellow
          </span>
        </div>
      </div>
    </section>
  );
}
