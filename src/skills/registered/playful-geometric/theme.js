export const playfulGeometricTheme = {
  id: 'playful-geometric',
  name: 'Playful Geometric',
  fontUrl: 'https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Plus+Jakarta+Sans:wght@400;500&display=swap',

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '#FFFDF5',   // Page background (warm cream — never pure white)
    '--site-surface':         '#FFFFFF',   // Card/panel surface (pure white contrasts against cream)
    '--site-surface-2':      '#F1F5F9',   // Elevated surface (muted for code blocks)
    '--site-section-bg':     '#F5F0E8',   // How it works & FAQ — light warm grey

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '#1E293B',   // Primary body text (also used for borders and shadows)
    '--site-text-muted':     '#64748B',   // Secondary/helper text
    '--site-text-accent':    '#1E293B',   // Emphasized text (colored words use accent colors)

    // ── HERO ────────────────────────────────────────────────────────────
    '--site-hero-bg':        '#FFFDF5',   // Hero section (same as site bg)
    '--site-hero-text':      '#1E293B',   // Hero headline (same as site text)
    '--site-hero-shape-1':   '#8B5CF6',   // Violet — confetti rotation
    '--site-hero-shape-2':   '#F472B6',   // Pink
    '--site-hero-shape-3':   '#FBBF24',   // Amber/yellow
    '--site-hero-shape-4':   '#34D399',   // Mint

    // ── SKILLS SECTION ──────────────────────────────────────────────────
    '--site-skills-bg':      '#8B5CF6',   // Bold violet block for playful contrast
    '--site-skills-title':   '#FFFFFF',   // Featured Skills header (bright white)

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '#8B5CF6',   // Primary accent color (violet)
    '--site-accent-2':       '#7C3AED',   // Hover/pressed accent (darker violet)
    '--site-accent-fg':      '#FFFFFF',   // Text on accent background (white)

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         '#E2E8F0',   // Default subtle borders
    '--site-border-strong':  '#1E293B',   // Chunky component borders (same as foreground)

    // ── SHADOWS ─────────────────────────────────────────────────────────
    '--site-shadow-sm':      '2px 2px 0px 0px #1E293B',   // Small elements (tags, badges, inputs)
    '--site-shadow-md':      '4px 4px 0px 0px #1E293B',   // Default: cards, buttons, panels
    '--site-shadow-lg':      '8px 8px 0px 0px #1E293B',   // Featured cards, modals, hero elements
    '--site-shadow-glow':    '6px 6px 0px 0px #8B5CF6',   // Colored shadow for featured elements (violet)

    // ── RADIUS ──────────────────────────────────────────────────────────
    '--site-radius-sm':      '8px',       // Tags, badges, inputs, small chips
    '--site-radius-md':      '16px',      // Cards, panels, modals
    '--site-radius-lg':      '24px',      // Large decorative shapes, section backgrounds
    '--site-radius-full':    '9999px',    // Buttons (pills), icon circles, avatars

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '"Outfit", system-ui, sans-serif',  // Headings font
    '--site-font-body':      '"Plus Jakarta Sans", system-ui, sans-serif',  // Body font
    '--site-font-mono':      '"Plus Jakarta Sans", system-ui, sans-serif',  // Mono (uses body font)

    // ── MOTION ──────────────────────────────────────────────────────────
    '--site-ease':           'cubic-bezier(0.34, 1.56, 0.64, 1)',  // Bouncy overshoot easing
    '--site-duration-sm':    '200ms',     // Hover states, button presses
    '--site-duration-md':    '300ms',     // Component entrances, panel opens
    '--site-duration-lg':    '500ms',     // Page transitions, section reveals
  },
};
