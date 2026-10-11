// ─────────────────────────────────────────────────────────────────────────────
// ROUGH DRAFT: token source.
// Edit this file, then run `npm run tokens`. That writes design-tokens/tokens.json
// (W3C DTCG format) and everything in design-tokens/build/.
// ─────────────────────────────────────────────────────────────────────────────

export const STEPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 * Tonal scales. Each scale lists a target OKLCH lightness per step, a chroma
 * multiplier (relative to the seed) and a hue at each end. `pins` hold exact
 * brand hexes; those steps are emitted verbatim, never recomputed.
 *
 * TWO KEY COLOURS (D21) + MINIMAL GROUND (D22): neutrals do ~90% of the work.
 * Paper (warm) and Night (cool, dark mode) are the ground; navy is the one action
 * colour; yellow is a highlight. Error Red is functional only.
 * Yellow is light (L≈0.89) so it pins at 400; navy is dark (L 0.19) so it pins
 * at 500. Cream and ink are the two ends of the paper ramp (100 and 900).
 */
export const SCALES = {
  sunshine: {
    label: 'Sunshine Yellow',
    role: 'Primary. Energy, hero surfaces.',
    seed: '#FFD86C',
    pins: { 400: '#FFD86C' },
    L: [0.985, 0.968, 0.945, 0.92, null, 0.8, 0.68, 0.55, 0.43, 0.32],
    C: [0.25, 0.45, 0.7, 0.88, 1, 1.05, 0.98, 0.88, 0.74, 0.6],
    hue: [94, 72],
  },


  midnight: {
    label: 'Midnight Navy',
    role: 'Depth. Night mode, high-contrast moments.',
    seed: '#090446',
    pins: { 500: '#090446' },
    L: [0.965, 0.9, 0.74, 0.36, 0.27, null, 0.165, 0.14, 0.12, 0.1],
    C: [0.12, 0.35, 0.9, 1.45, 1.15, 1, 0.92, 0.85, 0.75, 0.62],
    hue: [278, 272],
  },
  paper: {
    label: 'Paper (warm neutral)',
    role: 'The ground. Canvas, cards, rules, text. Chroma 0.004–0.012: warm, but quiet (D22).',
    seed: '#1E1B16',
    pins: { 900: '#1E1B16' },
    L: [0.988, 0.968, 0.935, 0.885, 0.78, 0.6, 0.48, 0.38, 0.3, null],
    absoluteC: [0.004, 0.006, 0.008, 0.01, 0.012, 0.012, 0.011, 0.01, 0.009, null],
    hue: [88, 80],
  },
  night: {
    label: 'Night (cool neutral)',
    role: 'Dark-mode ground. Navy-tinted greys at low chroma, so dark mode is calm, not saturated (D22).',
    seed: '#090446',
    L: [0.97, 0.92, 0.84, 0.7, 0.54, 0.42, 0.33, 0.27, 0.22, 0.175],
    absoluteC: [0.005, 0.01, 0.014, 0.02, 0.024, 0.026, 0.026, 0.024, 0.021, 0.018],
    hue: [282, 282],
  },

  // Functional only: errors and destructive actions. Not a brand colour.
  sneaker: {
    label: 'Error Red',
    role: 'Functional only: errors and destructive actions. Never decorative.',
    seed: 'oklch(0.6 0.2 30)',
    L: [0.97, 0.93, 0.86, 0.77, 0.68, 0.6, 0.52, 0.44, 0.36, 0.27],
    C: [0.12, 0.25, 0.5, 0.78, 0.95, 1, 0.95, 0.85, 0.7, 0.55],
    hue: [28, 32],
  },


};

export const STATIC_COLORS = {
  white: { value: '#FFFFFF', label: 'Paper White', role: 'Clean breathing room, sticker outlines, raised surfaces.' },
  black: { value: '#000000', label: 'Black', role: 'Utility only (scrims). Never as a brand colour; use ink.' },
};

/**
 * Semantic tokens. Values are references into the primitives ("sunshine.400")
 * or "white". Each theme maps every key. Dark is designed separately, not inverted.
 */
export const SEMANTIC = {
  light: {
    'bg': 'paper.50',
    'bg-hero': 'sunshine.100',
    'surface': 'white',
    'surface-raised': 'white',
    'surface-sunken': 'paper.100',
    'surface-warm': 'sunshine.50',
    'surface-inverse': 'midnight.500',
    'surface-accent': 'midnight.500',
    'scrim': 'night.900',
    'text-strong': 'paper.900',
    'text-primary': 'paper.800',
    'text-secondary': 'paper.600',
    'text-placeholder': 'paper.600',
    'text-inverse': 'paper.50',
    'text-on-hero': 'paper.900',
    'text-on-accent': 'white',
    'text-on-inverse': 'white',
    'text-link': 'midnight.400',
    'text-on-warm': 'paper.900',
    'text-on-mood': 'paper.900',
    'border': 'paper.900',
    'border-subtle': 'paper.200',
    'border-input': 'paper.500',
    'focus-ring': 'midnight.400',
    'focus-halo': 'white',
    'shadow': 'paper.200',
    'success': 'midnight.500',
    'on-success': 'white',
    'success-text': 'midnight.400',
    'warning': 'sunshine.400',
    'on-warning': 'paper.900',
    'warning-text': 'sunshine.800',
    'error': 'sneaker.600',
    'on-error': 'white',
    'error-text': 'sneaker.700',
    'info': 'midnight.50',
    'on-info': 'midnight.500',
    'info-text': 'midnight.400',
    'mood-hyped': 'sunshine.300',
    'mood-okay': 'sunshine.100',
    'mood-soft': 'paper.100',
    'mood-tired': 'midnight.50',
    'mood-chaotic': 'sunshine.200',
    'mood-heavy': 'midnight.100',
  },
  dark: {
    'bg': 'night.800',
    'bg-hero': 'night.600',
    'surface': 'night.700',
    'surface-raised': 'night.700',
    'surface-sunken': 'night.900',
    'surface-warm': 'night.600',
    'surface-inverse': 'paper.50',
    'surface-accent': 'sunshine.400',
    'scrim': 'night.900',
    'text-strong': 'white',
    'text-primary': 'paper.100',
    'text-secondary': 'night.200',
    'text-placeholder': 'night.300',
    'text-inverse': 'paper.900',
    'text-on-hero': 'white',
    'text-on-accent': 'paper.900',
    'text-on-inverse': 'paper.900',
    'text-link': 'sunshine.300',
    'text-on-warm': 'paper.100',
    'text-on-mood': 'paper.900',
    'border': 'paper.100',
    'border-subtle': 'night.600',
    'border-input': 'night.300',
    'focus-ring': 'sunshine.400',
    'focus-halo': 'paper.900',
    'shadow': 'black',
    'success': 'sunshine.400',
    'on-success': 'paper.900',
    'success-text': 'sunshine.300',
    'warning': 'sunshine.400',
    'on-warning': 'paper.900',
    'warning-text': 'sunshine.300',
    'error': 'sneaker.400',
    'on-error': 'paper.900',
    'error-text': 'sneaker.300',
    'info': 'night.600',
    'on-info': 'white',
    'info-text': 'midnight.100',
    'mood-hyped': 'sunshine.300',
    'mood-okay': 'sunshine.100',
    'mood-soft': 'paper.100',
    'mood-tired': 'midnight.50',
    'mood-chaotic': 'sunshine.200',
    'mood-heavy': 'midnight.100',
  },
};

/** Pairs the contrast report checks for each theme: [fg, bg, kind]. */
export const CONTRAST_PAIRS = [
  ...['text-strong', 'text-primary', 'text-secondary', 'text-placeholder', 'text-link'].flatMap((fg) =>
    ['bg', 'surface', 'surface-raised', 'surface-sunken'].map((bg) => [fg, bg, 'text']),
  ),
  ['text-on-hero', 'bg-hero', 'text'],
  ['text-on-warm', 'surface-warm', 'text'],
  ['text-on-accent', 'surface-accent', 'text'],
  ['text-on-inverse', 'surface-inverse', 'text'],
  ['on-success', 'success', 'text'],
  ['on-warning', 'warning', 'text'],
  ['on-error', 'error', 'text'],
  ['on-info', 'info', 'text'],
  ['success-text', 'bg', 'text'],
  ['warning-text', 'bg', 'text'],
  ['error-text', 'bg', 'text'],
  ['error-text', 'surface-raised', 'text'],
  ['info-text', 'bg', 'text'],
  ...['mood-hyped', 'mood-okay', 'mood-soft', 'mood-tired', 'mood-chaotic', 'mood-heavy'].map((m) => ['text-on-mood', m, 'text']),
  ['border', 'bg', 'ui'],
  ['border', 'surface-raised', 'ui'],
  ['border-input', 'surface-raised', 'ui'],
  // focus = two-tone ring: passes if the ring OR its halo reaches 3:1 against the surface
  ...['bg', 'surface', 'surface-raised', 'surface-sunken', 'bg-hero', 'surface-inverse', 'surface-accent', 'surface-warm'].map((bg) => ['focus-ring', bg, 'focus'])
];

// ── Typography ───────────────────────────────────────────────────────────────
// Two families only (D23): Anton shouts, Archivo does everything else.
export const FONTS = {
  display: { value: "'Anton', 'Impact', 'Arial Narrow Bold', sans-serif", role: 'Display. Short headlines only, always uppercase.' },
  sans: { value: "'Archivo', ui-sans-serif, system-ui, sans-serif", role: 'Everything else: UI, body, labels, stickers, captions.' },
};

// Fluid sizes: clamp(min, preferred, max) for viewports 360px to 1280px.
export const TYPE_SCALE = {
  'display-2xl': { size: 'clamp(4rem, 2.17rem + 8.15vw, 8.75rem)', lh: '0.88', ls: '0', font: 'display', weight: 400, use: 'Posters, campaign heroes. One per page max.' },
  'display-xl': { size: 'clamp(3rem, 1.85rem + 5.1vw, 6rem)', lh: '0.9', ls: '0.005em', font: 'display', weight: 400, use: 'Page heroes.' },
  'display-lg': { size: 'clamp(2.25rem, 1.6rem + 2.9vw, 4rem)', lh: '0.92', ls: '0.01em', font: 'display', weight: 400, use: 'Section headers.' },
  'display-md': { size: 'clamp(1.75rem, 1.4rem + 1.55vw, 2.75rem)', lh: '0.95', ls: '0.015em', font: 'display', weight: 400, use: 'Card headlines, modal titles.' },
  'display-sm': { size: 'clamp(1.375rem, 1.2rem + 0.8vw, 1.875rem)', lh: '1', ls: '0.02em', font: 'display', weight: 400, use: 'Small shouty labels, nav wordmark.' },
  'heading-lg': { size: 'clamp(1.375rem, 1.25rem + 0.55vw, 1.75rem)', lh: '1.2', ls: '-0.01em', font: 'sans', weight: 750, use: 'Workhorse heading (sentence case).' },
  'heading-md': { size: 'clamp(1.125rem, 1.06rem + 0.3vw, 1.3125rem)', lh: '1.25', ls: '-0.005em', font: 'sans', weight: 700, use: 'Sub-headings, card titles.' },
  'body-lg': { size: 'clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem)', lh: '1.55', ls: '0', font: 'sans', weight: 400, use: 'Intro paragraphs, onboarding copy.' },
  'body': { size: '1.0625rem', lh: '1.55', ls: '0', font: 'sans', weight: 400, use: 'Default body (17px). Never below 16px for paragraphs.' },
  'body-sm': { size: '0.9375rem', lh: '1.5', ls: '0.003em', font: 'sans', weight: 400, use: 'Secondary UI text, metadata.' },
  'label': { size: '0.875rem', lh: '1.3', ls: '0.02em', font: 'sans', weight: 650, use: 'Form labels, buttons (sm), tabs.' },
  'caption': { size: '0.75rem', lh: '1.4', ls: '0.06em', font: 'sans', weight: 650, use: 'Kicker / meta label: Archivo, uppercase, tracked.' },
};

// ── Space, radius, borders, elevation ────────────────────────────────────────
export const SPACE = { 0: 0, px: 1, 0.5: 2, 1: 4, 1.5: 6, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64, 20: 80, 24: 96, 32: 128 };

export const RADIUS = {
  none: { value: '0px', use: 'Zine: posters, quote cards, tape, editorial blocks.' },
  nick: { value: '3px', use: 'Zine: tags, stamped labels. Just enough to not cut.' },
  sm: { value: '10px', use: 'Pillow: inputs, chips (sm), toasts.' },
  md: { value: '16px', use: 'Pillow: buttons, cards, tabs.' },
  lg: { value: '24px', use: 'Pillow: sheets, modals, large cards.' },
  xl: { value: '36px', use: 'Pillow: hero cards, phone-scale containers.' },
  full: { value: '9999px', use: 'Pills, avatars, toggles.' },
};

export const BORDER = { hair: '1px', base: '2px', chunky: '3px' };

// Hard offset "sticker" shadows. No blur, ever.
export const SHADOW = {
  none: '0 0 0 0 transparent',
  xs: '2px 2px 0 0',
  sm: '3px 3px 0 0',
  md: '5px 5px 0 0',
  lg: '8px 8px 0 0',
  xl: '12px 12px 0 0',
};

export const Z = { base: 0, raised: 10, sticky: 100, nav: 200, overlay: 900, modal: 1000, toast: 1100 };

// ── Motion ───────────────────────────────────────────────────────────────────
export const DURATION = {
  instant: { value: '80ms', use: 'Press feedback, colour swaps.' },
  fast: { value: '140ms', use: 'Hover, focus, small toggles.' },
  base: { value: '200ms', use: 'Most UI transitions.' },
  slow: { value: '280ms', use: 'Sheets, modals entering. UI ceiling.' },
  delight: { value: '480ms', use: 'Stamps, sticker slaps, peel. Delight only.' },
  celebrate: { value: '900ms', use: 'Rare wins (first post, 7 check-ins). Max one per session.' },
};

export const EASING = {
  standard: { value: 'cubic-bezier(0.2, 0, 0, 1)', use: 'Default.' },
  snap: { value: 'cubic-bezier(0.2, 0.9, 0.1, 1)', use: 'Fast out, quick settle. Toggles, tabs.' },
  slap: { value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', use: 'Overshoot. Stickers landing, buttons popping.' },
  exit: { value: 'cubic-bezier(0.4, 0, 1, 1)', use: 'Things leaving.' },
  spring: {
    value:
      'linear(0, 0.009, 0.035 2.1%, 0.141 4.4%, 0.723 12.9%, 0.938 16.7%, 1.017 19.4%, 1.067, 1.099 24.3%, 1.108 26%, 1.1 28.2%, 1.008 34.9%, 0.983 38.6%, 0.977 41.4%, 0.981 45%, 1.002 54.4%, 1.006 61.1%, 1)',
    use: 'Bouncy spring. Sheets, check-in characters.',
  },
};
