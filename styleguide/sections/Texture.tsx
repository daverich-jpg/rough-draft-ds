import { useState } from 'react';
import { Character, Sticker, ZineCard, Toggle, ScreenshotCard } from '@components';
import { Section, H3, Code } from '../ui';

const TEX = [
  ['rd-grain', 'Photocopy grain', 'SVG fractal noise, multiply. Hero surfaces, zine cards, posters. Not on forms.'],
  ['rd-halftone', 'Halftone', 'Radial-gradient dots. Behind display type, poster blocks.'],
  ['rd-stripes', 'Hazard stripes', 'Yellow/navy diagonal. Edges, "under construction", content-note covers (soft variant).'],
  ['rd-tape', 'Tape strip', 'Pseudo-element with torn ends. One per card, max. Taped = flat: no shadow.'],
  ['rd-torn', 'Torn edge', 'Clip-path. Bottom edges of hero blocks.'],
  ['rd-overprint', 'Riso overprint', 'Navy ink, misregistered over a yellow halftone plate. Campaign only.'],
];

export function Texture() {
  const [grid, setGrid] = useState(true);
  return (
    <Section id="texture" num="06" title="Texture + layout" lede="Photocopy grain, halftone, tape, hazard stripes, torn paper and riso overprint, all in CSS and SVG with no image assets. The layout is collage energy, with one hard rule: chaos lives on a grid.">
      <H3>Textures</H3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEX.map(([cls, name, use]) => (
          <figure key={cls} style={{ margin: 0, display: 'grid', gap: 10 }}>
            <div
              className={cls === 'rd-overprint' ? 'rd-overprint rd-grain' : cls === 'rd-tape' ? 'rd-tape' : cls === 'rd-torn' ? 'rd-torn rd-halftone' : cls}
              style={{
                height: 150,

                background: cls === 'rd-grain' ? 'var(--rd-sunshine-400)' : cls === 'rd-tape' ? 'var(--rd-white)' : undefined,
                display: 'grid',
                placeItems: 'center',
                marginTop: cls === 'rd-tape' ? 12 : 0,
              }}
            >
              {cls === 'rd-overprint' && (
                <span className="rd-poster rd-overprint__ink" data-ink="drafts" style={{ fontSize: 56 }}>
                  drafts
                </span>
              )}
              {cls === 'rd-tape' && <span className="rd-brush rd-brush-md" style={{ color: 'var(--rd-paper-900)' }}>stuck it here</span>}
            </div>
            <figcaption>
              <Code>.{cls}</Code> <strong style={{ color: 'var(--rd-text-strong)' }}>{name}</strong>
              <span className="sg-note" style={{ display: 'block', marginTop: 2 }}>
                {use}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <H3>Controlled chaos</H3>
      <p className="sg-lede" style={{ maxWidth: 720 }}>
        Rotate, overlap and sticker things, but every element's box snaps to the 12-column grid and the 8pt baseline. Rotation comes only from <Code>−3°…3°</Code>. Overlap is no more than 1 gutter. Text never rotates past ±2° if it's longer than 6 words.
      </p>
      <div style={{ margin: '16px 0' }}>
        <Toggle label="show the grid underneath" checked={grid} onChange={setGrid} />
      </div>
      <div
        className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-6 relative"
        style={{
          padding: 24,

          borderRadius: 4,
          background: grid
            ? 'repeating-linear-gradient(90deg, color-mix(in oklch, var(--rd-midnight-200) 22%, transparent) 0 calc((100% - 11 * 24px) / 12), transparent 0 calc((100% - 11 * 24px) / 12 + 24px)), repeating-linear-gradient(0deg, color-mix(in oklch, var(--rd-midnight-200) 30%, transparent) 0 1px, transparent 1px 8px), var(--rd-surface)'
            : 'var(--rd-surface)',
          backgroundOrigin: 'content-box',
        }}
      >
        <div className="col-span-6 md:col-span-5">
          <ZineCard tilt={-2} tape quote="Nobody is healed." body="everybody is in progress. that's not a flaw in the product, it's the product." />
        </div>
        <div className="col-span-3 md:col-span-3 md:col-start-6 grid place-items-center">
          <Character kind="moss" mood="soft" width={130} />
        </div>
        <div className="col-span-3 md:col-span-4 grid content-start gap-4" style={{ paddingTop: 24 }}>
          <Sticker color="cream" tilt={3}>
            sadness from inside out
          </Sticker>
          <Sticker color="yellow" tilt={-1}>
            valid mood
          </Sticker>
        </div>
        <div className="col-span-6 md:col-span-6 md:col-start-4" style={{ marginTop: -24 }}>
          <ScreenshotCard
            tilt={1}
            theme="light"
            posts={[{ name: 'rough draft', handle: '@roughdraft', time: '1m', body: 'reminder that "i did nothing today" usually means "i survived today" and honestly? same thing', counts: { replies: 42, reposts: 310, likes: 1904 }, avatar: { name: 'rough draft', character: 'doze', mood: 'okay' } }]}
          />
        </div>
      </div>

      <H3>Imagery</H3>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ['Photography', 'Candid, selfie-style, flash-lit, slightly imperfect. Real people with personality: statement sunglasses, hoods, drinks, funny faces. Crop tight. Die-cut white outline when it\'s collaged.', 'No stock smiles, no yoga-on-a-cliff, no sad-person-by-window, no hands holding a mug in soft focus.'],
          ['Screenshots + memes', 'Posts, reply threads and reaction images are brand content. Use <ScreenshotCard> so they stay accessible (real text, not an image).', 'Never post a real person\'s screenshot without consent. Blur handles you don\'t own.'],
          ['Illustration', 'The editors: flat colour, 3px ink line, white die-cut, streetwear. Expressions carry the emotion; poses stay simple.', 'No gradients, no 3D, no realistic anatomy, no "coach" poses (pointing, clipboard, thumbs-up).'],
        ].map(([t, d, n]) => (
          <div key={t} className="sg-stage" style={{ display: 'grid', gap: 8, alignContent: 'start' }}>
            <span className="rd-heading-md">{t}</span>
            <p className="rd-body-sm" style={{ margin: 0 }}>
              {d}
            </p>
            <p className="rd-body-sm" style={{ margin: 0, color: 'var(--rd-error-text)' }}>
              <strong>Not:</strong> {n}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
