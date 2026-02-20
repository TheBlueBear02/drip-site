export const minimalistMonochromeTheme = {
  id: 'minimalist-monochrome',
  name: 'Minimalist Monochrome',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#FFFFFF',   // Main page background (pure white)
    '--site-surface':         '#FFFFFF',   // Card/panel surface (white)
    '--site-surface-2':      '#F5F5F5',   // Elevated surface (muted off-white)

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#000000',   // Primary body text (black)
    '--site-text-muted':     '#525252',   // Secondary/helper text (gray)
    '--site-text-accent':    '#000000',   // Emphasized text (black - inversion is the emphasis)

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':         '#FFFFFF',   // Hero section background (white - matches minimalist monochrome)
    '--site-hero-text':       '#000000',   // Hero headline text (black)

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':       '#000000',   // Inverted block for contrast
    '--site-skills-title':    '#FFFFFF',   // Featured Skills header (white)

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#000000',   // Primary accent (black IS the accent)
    '--site-accent-2':        '#000000',   // Hover/pressed accent (black)
    '--site-accent-fg':       '#FFFFFF',   // Text on accent background (white for inversion)

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         '#000000',   // Default border color (black)
    '--site-border-strong':  '#000000',   // Emphasized border (black)

    // ── SHADOWS ──────────────────────────────────────────────────────────
    '--site-shadow-sm':      'none',      // No shadows in this skill
    '--site-shadow-md':      'none',      // No shadows in this skill
    '--site-shadow-lg':      'none',      // No shadows in this skill
    '--site-shadow-glow':    'none',      // No shadows in this skill

    // ── RADIUS ──────────────────────────────────────────────────────────
    '--site-radius-sm':      '0px',       // Zero radius everywhere
    '--site-radius-md':      '0px',       // Zero radius everywhere
    '--site-radius-lg':      '0px',       // Zero radius everywhere
    '--site-radius-full':    '0px',       // Zero radius everywhere

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Playfair Display", Georgia, serif',  // Display/headings font
    '--site-font-body':      '"Source Serif 4", Georgia, serif',    // Body font
    '--site-font-mono':      '"JetBrains Mono", "Courier New", monospace',  // Mono font

    // ── MOTION ──────────────────────────────────────────────────────────
    '--site-ease':           'linear',   // Linear easing only
    '--site-duration-sm':    '100ms',     // Fast interactions
    '--site-duration-md':    '100ms',     // Standard transitions (deliberate)
    '--site-duration-lg':    '200ms',     // Slow transitions (rare, for image scale only)
  },
};
