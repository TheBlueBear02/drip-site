export const neoBrutalismTheme = {
  id: 'neo-brutalism',
  name: 'Neo-Brutalism',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;900&display=block',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#FFFDF5',   // Cream canvas — aged paper warmth
    '--site-surface':        '#FFFFFF',   // Card/panel surface (white)
    '--site-surface-2':      '#FFF8E7',   // Slightly warmer elevated surface
    '--site-section-bg':     '#FFD93D',   // Section alternate — vivid yellow block

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#000000',   // Primary body text (ink)
    '--site-text-muted':     '#000000',   // No gray — black or color only
    '--site-text-accent':    '#000000',   // Emphasized (headings stay black)

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':        '#FFFDF5',
    '--site-hero-text':      '#000000',
    '--site-hero-headline-weight': '900',
    '--site-hero-shape-1':   '#FF6B6B',   // Hot red
    '--site-hero-shape-2':   '#FFD93D',   // Vivid yellow
    '--site-hero-shape-3':   '#C4B5FD',   // Soft violet
    '--site-hero-shape-4':   '#FF6B6B',

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':      '#FFFDF5',
    '--site-skills-title':   '#000000',

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#FF6B6B',   // Hot red — primary CTA
    '--site-accent-2':       '#E85555',   // Darker red hover/pressed
    '--site-accent-fg':      '#000000',   // Text on accent (black for contrast)

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         '#000000',   // Pure black always
    '--site-border-strong':  '#000000',

    // ── SHADOWS — Hard ink blocks, zero blur ─────────────────────────────
    '--site-shadow-sm':     '4px 4px 0px 0px #000',
    '--site-shadow-md':     '8px 8px 0px 0px #000',
    '--site-shadow-lg':     '12px 12px 0px 0px #000',
    '--site-shadow-glow':   '6px 6px 0px 0px #000',   // Accent “glow” = hard shadow

    // ── RADIUS — Sharp only ─────────────────────────────────────────────
    '--site-radius-sm':      '0px',
    '--site-radius-md':      '0px',
    '--site-radius-lg':      '0px',
    '--site-radius-full':    '9999px',    // Pill allowed for badges/tags

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Space Grotesk", system-ui, sans-serif',
    '--site-font-body':      '"Space Grotesk", system-ui, sans-serif',
    '--site-font-mono':      '"Space Grotesk", system-ui, sans-serif',

    // ── MOTION — Mechanical, snappy ─────────────────────────────────────
    '--site-ease':           'linear',
    '--site-duration-sm':    '100ms',     // Button press, instant feedback
    '--site-duration-md':    '200ms',     // Card hover, transitions
    '--site-duration-lg':    '300ms',     // Entrance
  },
};
