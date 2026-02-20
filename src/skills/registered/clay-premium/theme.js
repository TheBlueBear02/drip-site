export const clayPremiumTheme = {
  id: 'clay-premium',
  name: 'Clay Premium',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=DM+Sans:wght@400;500;700&display=swap',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#F4F1FA',   // Canvas — slight lavender tint (never pure white)
    '--site-surface':        'rgba(255,255,255,0.70)',   // Card/panel — glass-clay hybrid
    '--site-surface-2':      '#FFFFFF',   // Elevated surface (solid)
    '--site-section-bg':     '#EAE6F0',   // How it works & FAQ — light grey (lavender tint)

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#332F3A',   // Primary — soft charcoal
    '--site-text-muted':     '#635F69',   // Secondary (WCAG floor)
    '--site-text-accent':    '#332F3A',   // Emphasized (headings)

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':        '#F4F1FA',
    '--site-hero-text':      '#332F3A',
    '--site-hero-shape-1':   '#8B5CF6',   // Violet blob
    '--site-hero-shape-2':   '#EC4899',   // Pink blob
    '--site-hero-shape-3':   '#0EA5E9',   // Sky blob
    '--site-hero-shape-4':   '#10B981',   // Emerald blob

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':      '#F4F1FA',
    '--site-skills-title':   '#332F3A',

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#7C3AED',   // Vivid violet — CTAs, links
    '--site-accent-2':       '#6D28D9',   // Hover/pressed (darker violet)
    '--site-accent-fg':      '#FFFFFF',   // Text on accent

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         '#D9D4E3',   // Soft purple-gray (from clay inset)
    '--site-border-strong':  '#7C3AED',   // Accent border

    // ── SHADOWS (4-layer clay stacks) ───────────────────────────────────
    '--site-shadow-sm':
      '10px 10px 20px rgba(139,92,246,0.25), -8px -8px 16px rgba(255,255,255,0.90), inset 4px 4px 8px rgba(255,255,255,0.50), inset -4px -4px 8px rgba(0,0,0,0.08)',
    '--site-shadow-md':
      '16px 16px 32px rgba(160,150,180,0.20), -10px -10px 24px rgba(255,255,255,0.90), inset 6px 6px 12px rgba(139,92,246,0.03), inset -6px -6px 12px rgba(255,255,255,1.00)',
    '--site-shadow-lg':
      '30px 30px 60px #CDC6D9, -30px -30px 60px #FFFFFF, inset 10px 10px 20px rgba(139,92,246,0.05), inset -10px -10px 20px rgba(255,255,255,0.8)',
    '--site-shadow-glow':
      '12px 12px 24px rgba(139,92,246,0.30), -8px -8px 16px rgba(255,255,255,0.40), inset 4px 4px 8px rgba(255,255,255,0.40), inset -4px -4px 8px rgba(0,0,0,0.10)',

    // ── RADIUS (super-rounded — min 20px) ─────────────────────────────────
    '--site-radius-sm':      '20px',      // Buttons, inputs, small elements
    '--site-radius-md':      '32px',      // Cards, panels
    '--site-radius-lg':      '48px',      // Large containers
    '--site-radius-full':    '9999px',    // Pills, orbs

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Nunito", system-ui, sans-serif',
    '--site-font-body':      '"DM Sans", system-ui, sans-serif',
    '--site-font-mono':      '"DM Sans", system-ui, sans-serif',

    // ── MOTION ──────────────────────────────────────────────────────────
    '--site-ease':           'ease-in-out',
    '--site-duration-sm':    '200ms',     // Button squish, hover
    '--site-duration-md':    '300ms',     // Card hover, transitions
    '--site-duration-lg':    '500ms',     // Blob float, entrances
  },
};
