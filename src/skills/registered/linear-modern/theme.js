export const linearModernTheme = {
  id: 'linear-modern',
  name: 'Linear Modern',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#050506',   // Primary page canvas (near-black, never pure black)
    '--site-surface':        'rgba(255,255,255,0.05)',   // Card/panel (glass surface)
    '--site-surface-2':      '#0a0a0c',   // Elevated surface

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#EDEDEF',   // Primary text (bright but not pure white)
    '--site-text-muted':     '#8A8F98',   // Body text, descriptions
    '--site-text-accent':    '#EDEDEF',   // Emphasized (headlines use gradient in skill; we use fg)

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':        '#050506',
    '--site-hero-text':      '#EDEDEF',
    '--site-hero-shape-1':   '#5E6AD2',   // Primary indigo accent
    '--site-hero-shape-2':   '#6872D9',   // Accent bright (hover)
    '--site-hero-shape-3':   '#818cf8',   // Shimmer variant
    '--site-hero-shape-4':   '#5E6AD2',

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':      '#050506',
    '--site-skills-title':   '#EDEDEF',

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#5E6AD2',   // Primary interactive — buttons, links
    '--site-accent-2':       '#6872D9',   // Hover state
    '--site-accent-fg':      '#ffffff',   // Text on accent (indigo is dark)

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         'rgba(255,255,255,0.06)',   // Subtle hairline
    '--site-border-strong':  'rgba(94,106,210,0.30)',   // Accent-tinted / strong

    // ── SHADOWS (3-layer system: border highlight + diffuse + optional glow) ─
    '--site-shadow-sm':      '0 0 0 1px rgba(255,255,255,0.06), 0 2px 20px rgba(0,0,0,0.4)',
    '--site-shadow-md':      '0 0 0 1px rgba(255,255,255,0.08), 0 8px 40px rgba(0,0,0,0.5)',
    '--site-shadow-lg':      '0 0 0 1px rgba(255,255,255,0.08), 0 16px 70px rgba(0,0,0,0.7)',
    '--site-shadow-glow':    '0 0 0 1px rgba(94,106,210,0.5), 0 4px 12px rgba(94,106,210,0.3), 0 0 40px rgba(94,106,210,0.2)',

    // ── RADIUS ──────────────────────────────────────────────────────────
    '--site-radius-sm':      '6px',       // Tooltips, small
    '--site-radius-md':      '8px',       // Buttons, inputs
    '--site-radius-lg':      '16px',      // Cards, panels (rounded-2xl)
    '--site-radius-full':    '9999px',    // Pills, tags, avatars

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Inter", "Geist Sans", system-ui, sans-serif',
    '--site-font-body':      '"Inter", "Geist Sans", system-ui, sans-serif',
    '--site-font-mono':      '"JetBrains Mono", monospace',

    // ── MOTION (expo-out precision) ────────────────────────────────────
    '--site-ease':           'cubic-bezier(0.16, 1, 0.3, 1)',   // expo-out
    '--site-duration-sm':    '200ms',     // Hover, button states
    '--site-duration-md':    '300ms',     // Card hover, gradient border
    '--site-duration-lg':    '600ms',     // Entrance animations
  },
};
