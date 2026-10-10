import { useEffect, useState } from 'react';
import { Icon, Wordmark } from '@components';
import { Hero } from './sections/Hero';
import { Brand } from './sections/Brand';
import { Colour } from './sections/Colour';
import { Type } from './sections/Type';
import { Shape } from './sections/Shape';
import { Motion } from './sections/Motion';
import { Texture } from './sections/Texture';
import { Icons } from './sections/Icons';
import { Components } from './sections/Components';
import { Patterns } from './sections/Patterns';
import { Voice } from './sections/Voice';
import { DoDont } from './sections/DoDont';
import { Access } from './sections/Access';

const TOC = [
  ['brand', '01', 'brand'],
  ['colour', '02', 'colour'],
  ['type', '03', 'type'],
  ['shape', '04', 'space + shape'],
  ['motion', '05', 'motion'],
  ['texture', '06', 'texture + layout'],
  ['icons', '07', 'icons'],
  ['components', '08', 'components'],
  ['patterns', '09', 'patterns'],
  ['voice', '10', 'voice'],
  ['dodont', '11', 'do / don’t'],
  ['access', '12', 'accessibility'],
] as const;

type Theme = 'system' | 'light' | 'dark';
type MotionPref = 'system' | 'full' | 'reduced';

const read = (k: string, d: string) => {
  try {
    return localStorage.getItem(k) ?? d;
  } catch {
    return d;
  }
};
const write = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v);
  } catch {
    /* private mode: fine */
  }
};

function useAttr(name: string, value: string, unsetWhen: string) {
  useEffect(() => {
    const el = document.documentElement;
    if (value === unsetWhen) el.removeAttribute(name);
    else el.setAttribute(name, value);
  }, [name, value, unsetWhen]);
}

export function App() {
  const [theme, setTheme] = useState<Theme>(() => read('rd:theme', 'system') as Theme);
  const [motion, setMotion] = useState<MotionPref>(() => read('rd:motion', 'system') as MotionPref);
  const [brush, setBrush] = useState(() => read('rd:brush', 'brush'));
  const [active, setActive] = useState<string>('brand');

  useAttr('data-theme', theme, 'system');
  useAttr('data-motion', motion, 'system');
  useAttr('data-brush', brush, 'brush');
  useEffect(() => write('rd:theme', theme), [theme]);
  useEffect(() => write('rd:motion', motion), [motion]);
  useEffect(() => write('rd:brush', brush), [brush]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => {
        const vis = es.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    TOC.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#main" className="rd-btn rd-btn--sm sg-skip">
        skip to content
      </a>
      <header className="sg-header">
        <Wordmark />
        <div className="sg-controls">
          <div className="sg-seg" role="group" aria-label="theme">
            {(['system', 'light', 'dark'] as Theme[]).map((t) => (
              <button key={t} type="button" aria-pressed={theme === t} onClick={() => setTheme(t)} aria-label={`${t} theme`} title={`${t} theme`}>
                {t === 'system' ? 'auto' : <Icon name={t === 'light' ? 'sun' : 'moon'} size={18} />}
              </button>
            ))}
          </div>
          <div className="sg-seg" role="group" aria-label="motion">
            {(['system', 'full', 'reduced'] as MotionPref[]).map((m) => (
              <button key={m} type="button" aria-pressed={motion === m} onClick={() => setMotion(m)} title={`motion: ${m}`}>
                {m === 'system' ? 'motion' : m}
              </button>
            ))}
          </div>
          <div className="sg-seg" role="group" aria-label="brush font">
            <button type="button" aria-pressed={brush === 'brush'} onClick={() => setBrush('brush')}>
              <span className="rd-brush" style={{ fontSize: 15 }}>brush</span>
            </button>
            <button type="button" aria-pressed={brush === 'plain'} onClick={() => setBrush('plain')} title="dyslexia-friendly: replaces the brush font">
              plain
            </button>
          </div>
        </div>
      </header>
      <div className="sg-layout">
        <nav className="sg-toc" aria-label="sections">
          {TOC.map(([id, n, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              <span className="sg-num">{n}</span>
              {label}
            </a>
          ))}
        </nav>
        <main id="main" className="sg-main" tabIndex={-1}>
          <Hero />
          <Brand />
          <Colour />
          <Type />
          <Shape />
          <Motion />
          <Texture />
          <Icons />
          <Components />
          <Patterns />
          <Voice />
          <DoDont />
          <Access />
        </main>
      </div>
    </>
  );
}
