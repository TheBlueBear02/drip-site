export const handDrawnTheme = {
  id: 'hand-drawn',
  name: 'Hand Drawn',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Patrick+Hand&display=swap',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#fdfbf7',   // Warm notebook paper
    '--site-surface':        '#ffffff',   // White paper (cards)
    '--site-surface-2':      '#e5e0d8',   // Muted / erased pencil
    '--site-section-bg':     '#e5e0d8',   // Secondary sections

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#2d2d2d',   // Pencil lead
    '--site-text-muted':     'rgba(45, 45, 45, 0.65)',   // Faded pencil
    '--site-text-accent':    '#2d2d2d',   // Emphasized (same pencil; accent color for CTAs)

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':        '#fdfbf7',
    '--site-hero-text':      '#2d2d2d',
    '--site-hero-headline-weight': '700',
    '--site-hero-shape-1':   '#ff4d4d',   // Red marker
    '--site-hero-shape-2':   '#2d5da1',   // Blue pen
    '--site-hero-shape-3':   '#ff4d4d',
    '--site-hero-shape-4':   '#2d5da1',

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':      'transparent',
    '--site-skills-title':   '#2d2d2d',

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#ff4d4d',   // Red correction marker
    '--site-accent-2':       '#e64545',   // Darker red hover/pressed
    '--site-accent-fg':      '#ffffff',   // Text on accent (red is dark enough for white)

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         '#2d2d2d',   // Pencil lead
    '--site-border-strong':  '#2d5da1',   // Blue pen (focus)

    // ── SHADOWS — Hard offset, zero blur ─────────────────────────────────
    '--site-shadow-sm':     '2px 2px 0px 0px #2d2d2d',
    '--site-shadow-md':     '4px 4px 0px 0px #2d2d2d',
    '--site-shadow-lg':     '6px 6px 0px 0px #2d2d2d',
    '--site-shadow-glow':   '4px 4px 0px 0px #ff4d4d',   // Accent = hard red shadow

    // ── RADIUS — Wobbly multi-value (organic, hand-drawn) ────────────────
    '--site-radius-sm':      '30px 5px 25px 5px / 5px 25px 5px 30px',
    '--site-radius-md':      '15px 255px 15px 225px / 225px 15px 255px 15px',
    '--site-radius-lg':      '255px 15px 225px 15px / 15px 225px 15px 255px',
    '--site-radius-full':    '100px 20px 80px 20px / 20px 80px 20px 100px',   // Oval-ish

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Kalam", cursive',
    '--site-font-body':      '"Patrick Hand", cursive',
    '--site-font-mono':      '"Patrick Hand", cursive',

    // ── MOTION — Snappy 100ms, linear ───────────────────────────────────
    '--site-ease':           'linear',
    '--site-duration-sm':    '100ms',
    '--site-duration-md':    '100ms',
    '--site-duration-lg':    '100ms',
  },
};
