export const artDecoTheme = {
  id: 'art-deco',
  name: 'Art Deco',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Marcellus&family=Josefin+Sans:wght@300;400&display=swap',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#0A0A0A',   // Obsidian black — page canvas
    '--site-surface':        '#141414',   // Rich charcoal — card surfaces
    '--site-surface-2':      '#1a1a1a',   // Elevated surface
    '--site-section-bg':     '#0A0A0A',   // Sections same as canvas

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#F2F0E4',   // Champagne cream — body, labels
    '--site-text-muted':     '#888888',   // Pewter — secondary text
    '--site-text-accent':    '#D4AF37',   // Gold — display/headings

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':        '#0A0A0A',
    '--site-hero-text':      '#F2F0E4',
    '--site-hero-shape-1':   '#D4AF37',
    '--site-hero-shape-2':   '#F2E8C4',
    '--site-hero-shape-3':   '#D4AF37',
    '--site-hero-shape-4':   '#F2E8C4',

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':      '#0A0A0A',
    '--site-skills-title':   '#F2F0E4',

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#D4AF37',   // Metallic gold — borders, headings, accents
    '--site-accent-2':       '#F2E8C4',   // Pale gold — hover on solid gold
    '--site-accent-fg':      '#0A0A0A',   // Text on gold (reversed)

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         'rgba(212,175,55,0.3)',   // 30% gold at rest
    '--site-border-strong':  '#D4AF37',   // Full gold — active/hover

    // ── SHADOWS — Gold glows only, never drop shadows ───────────────────
    '--site-shadow-sm':      '0 0 8px rgba(212,175,55,0.15)',
    '--site-shadow-md':      '0 0 20px rgba(212,175,55,0.3)',
    '--site-shadow-lg':      '0 0 25px rgba(212,175,55,0.4)',
    '--site-shadow-glow':    '0 0 40px rgba(212,175,55,0.5)',   // Max drama

    // ── RADIUS — Zero everywhere (geometric precision) ───────────────────
    '--site-radius-sm':      '0px',
    '--site-radius-md':      '0px',
    '--site-radius-lg':      '0px',
    '--site-radius-full':    '0px',

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Marcellus", Georgia, serif',
    '--site-font-body':      '"Josefin Sans", system-ui, sans-serif',
    '--site-font-mono':      '"Josefin Sans", system-ui, sans-serif',

    // ── MOTION — Theatrical ease-out ─────────────────────────────────────
    '--site-ease':           'ease-out',
    '--site-duration-sm':    '150ms',     // Quick — color shifts
    '--site-duration-md':    '300ms',     // Standard — buttons, borders
    '--site-duration-lg':    '500ms',     // Theatrical — card lifts
  },
};
