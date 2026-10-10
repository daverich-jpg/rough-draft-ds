import type { ReactNode } from 'react';
import { Sticker } from '@components';

export function Section({ id, num, title, lede, children }: { id: string; num: string; title: string; lede?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="sg-section" aria-labelledby={`${id}-h`}>
      <header className="sg-section__head">
        <Sticker color="yellow" tilt={-2} className="sg-section__num">
          {num}
        </Sticker>
        <h2 id={`${id}-h`} className="rd-display rd-display-xl">
          {title}
        </h2>
        {lede && <p className="sg-lede">{lede}</p>}
      </header>
      {children}
    </section>
  );
}

export const H3 = ({ children, id }: { children: ReactNode; id?: string }) => (
  <h3 className="sg-h3" id={id}>
    {children}
  </h3>
);

export const Code = ({ children }: { children: ReactNode }) => <code className="sg-code">{children}</code>;

export const Flag = ({ children }: { children: ReactNode }) => <span className="sg-flag">⚑ {children}</span>;

export function Phone({ children, label }: { children: ReactNode; label: string }) {
  return (
    <figure style={{ margin: 0, display: 'grid', gap: 16, justifyItems: 'center' }}>
      <div className="sg-phone" role="group" aria-label={`${label} (phone preview)`} tabIndex={0}>
        <div className="sg-phone__bar" aria-hidden>
          <span>9:41</span>
          <span>●●● ▮</span>
        </div>
        {children}
      </div>
      <figcaption className="rd-caption">{label}</figcaption>
    </figure>
  );
}
