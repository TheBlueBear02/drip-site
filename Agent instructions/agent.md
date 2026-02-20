# AGENT.md — How to Add a Skill to the getdrip Website

This file tells you exactly what to do when a new skill folder is added to
`src/skills/library/`. Your job is to read the skill folder and produce two
output files that wire the skill into the site's live theme system.

Do not modify the skill folder itself. It is the source of truth and must
stay exactly as the Drip spec defines it.

---

## WHERE THINGS LIVE

```
src/
└── skills/
    ├── index.js                        ← You will update this file
    │
    ├── library/                        ← RAW SKILL FOLDERS — DO NOT MODIFY
    │   ├── retro-terminal/             ← A complete Drip skill folder
    │   │   ├── SKILL.md
    │   │   ├── philosophy.md
    │   │   ├── skill.json
    │   │   ├── tokens/
    │   │   │   ├── colors.md
    │   │   │   ├── typography.md
    │   │   │   ├── shadows.md
    │   │   │   ├── borders.md
    │   │   │   ├── motion.md
    │   │   │   └── spacing.md
    │   │   ├── integration/
    │   │   │   ├── globals.css
    │   │   │   └── tailwind.config.js
    │   │   └── examples/
    │   │       └── LandingPage.jsx
    │   │
    │   └── playful-geometric/          ← Another skill folder (same structure)
    │
    └── registered/                     ← YOUR OUTPUT — files you generate
        ├── retro-terminal/
        │   ├── theme.js                ← Generated from skill folder
        │   └── meta.js                 ← Generated from skill folder
        └── playful-geometric/
            ├── theme.js
            └── meta.js
```

---

## YOUR TASK WHEN A NEW SKILL IS ADDED

When you are told "add the [skill-name] skill to the website", do this in order:

### Step 1 — Read the skill folder

Read these files from `src/skills/library/[skill-name]/`:

1. `skill.json` — name, description, category, mood, tags, component count
2. `tokens/colors.md` — full color palette and usage rules
3. `tokens/typography.md` — fonts, weights, scale
4. `tokens/shadows.md` — shadow/glow system
5. `tokens/borders.md` — border widths and radius values
6. `tokens/motion.md` — easing and duration values
7. `integration/globals.css` — the CSS variables actually used (this is the most
   reliable source — the vars defined here are what you map to site tokens)

### Step 2 — Generate `theme.js`

Create `src/skills/registered/[skill-name]/theme.js`.

This file exports a single theme object. Every key is one of the site's
CSS custom property names. Every value comes from what you read in Step 1.

**The site token contract — you must map ALL of these:**

```js
export const [camelCaseSkillName]Theme = {
  id: '',                    // from skill.json "name" field
  name: '',                  // from skill.json "name" field, human readable
  fontUrl: '',               // Google Fonts URL from typography.md — the exact
                             // @import url() value from globals.css

  tokens: {
    // ── BACKGROUNDS ─────────────────────────────────────────────────────
    '--site-bg':             '',   // Main page background
                                   // → skill's primary bg color (darkest surface)
    '--site-surface':        '',   // Card/panel surface
                                   // → skill's first elevated surface color
    '--site-surface-2':      '',   // Higher elevation surface
                                   // → skill's second elevated surface color

    // ── TEXT ────────────────────────────────────────────────────────────
    '--site-text':           '',   // Primary body text
                                   // → skill's primary text color
    '--site-text-muted':     '',   // Secondary/helper text
                                   // → skill's muted or dimmed text color
    '--site-text-accent':    '',   // Emphasized text (headings, highlights)
                                   // → skill's brightest or accent text color

    // ── ACCENT ──────────────────────────────────────────────────────────
    '--site-accent':         '',   // Primary brand/interactive color
                                   // → skill's primary accent (the signature color)
    '--site-accent-2':       '',   // Hover/pressed state of accent
                                   // → skill's hover variant of the accent
    '--site-accent-fg':      '',   // Text color used ON TOP of accent background
                                   // → dark text if accent is light, vice versa

    // ── BORDERS ─────────────────────────────────────────────────────────
    '--site-border':         '',   // Default border color
                                   // → skill's default border color
    '--site-border-strong':  '',   // Emphasized border (active states, focus)
                                   // → skill's strong/accent border color

    // ── SHADOWS ─────────────────────────────────────────────────────────
    '--site-shadow-sm':      '',   // Subtle elevation (input focus, small cards)
                                   // → skill's smallest shadow or glow value
    '--site-shadow-md':      '',   // Medium elevation (cards, dropdowns)
                                   // → skill's medium shadow or glow
    '--site-shadow-lg':      '',   // High elevation (modals, hero elements)
                                   // → skill's largest shadow or glow
    '--site-shadow-glow':    '',   // Special glow effect (accent elements)
                                   // → skill's glow using its accent color

    // ── RADIUS ──────────────────────────────────────────────────────────
    '--site-radius-sm':      '',   // Small radius (badges, inputs)
                                   // → skill's small radius value
    '--site-radius-md':      '',   // Medium radius (cards, buttons)
                                   // → skill's medium radius value
    '--site-radius-lg':      '',   // Large radius (panels, modals)
                                   // → skill's large radius value
    '--site-radius-full':    '',   // Pill/full round (tags, avatars)
                                   // → skill's pill radius (9999px or 0px if no radius)

    // ── TYPOGRAPHY ──────────────────────────────────────────────────────
    '--site-font-head':      '',   // Heading font family (CSS value, with fallbacks)
                                   // → skill's display/heading font
    '--site-font-body':      '',   // Body text font family
                                   // → skill's body font (may be same as head)
    '--site-font-mono':      '',   // Monospace font for code blocks
                                   // → skill's mono font (or body font if no mono)

    // ── MOTION ──────────────────────────────────────────────────────────
    '--site-ease':           '',   // Primary easing curve
                                   // → skill's main easing value
    '--site-duration-sm':    '',   // Fast interactions (hover, active)
                                   // → skill's fast duration (e.g. 150ms)
    '--site-duration-md':    '',   // Standard transitions (page elements)
                                   // → skill's medium duration (e.g. 300ms)
    '--site-duration-lg':    '',   // Slow/entrance animations
                                   // → skill's slow duration (e.g. 600ms)
  },
};
```

**Mapping rules:**

- If the skill uses `0px` border radius everywhere, set ALL radius tokens to `'0px'`
- If the skill uses glow instead of drop shadows, the shadow tokens should be
  `box-shadow` glow values, not `drop-shadow()` — match the skill's approach
- If the skill only has one font, use it for `--site-font-head`, `--site-font-body`,
  AND `--site-font-mono`
- If the skill uses `steps()` easing (pixel/terminal style), use that for `--site-ease`
- If the skill has instant transitions (retro terminal), set durations to `'0ms'`
- For `--site-accent-fg`: if accent is a light color (luminance > 50%), use `'#000000'`.
  If dark, use `'#ffffff'`. If the skill defines it explicitly, use that.
- Always use the full CSS value string (e.g. `'0 0 20px rgba(0,255,65,0.3)'` not just a hex)
- Font values must include fallback stacks: `'"JetBrains Mono", monospace'`

### Step 3 — Generate `meta.js`

Create `src/skills/registered/[skill-name]/meta.js`.

This drives the skill card in the UI — what the user sees before applying the skill.

```js
export const [camelCaseSkillName]Meta = {
  id: '',              // Matches theme.js id. Kebab-case. e.g. 'retro-terminal'
  name: '',            // Human display name. e.g. 'Retro Terminal'
  description: '',     // From skill.json. One punchy sentence.
  category: '',        // From skill.json. One of: dark | light | colorful | minimal | expressive
  mood: [],            // From skill.json. Array of 3-5 adjective strings.
  tags: [],            // From skill.json. Array of tag strings.
  components: 0,       // From skill.json. Number of components in the skill.
  stack: [],           // From skill.json. e.g. ['react', 'tailwind', 'framer-motion']
  accentColor: '',     // The skill's primary accent hex. Used for the swatch in the
                       // SkillSwitcherStrip chip. Pull from colors.md or globals.css.
  bgColor: '',         // The skill's background hex. Used for MiniPreview background.
  command: '',         // The exact install command. Always: `npx getdrip add [id]`
};
```

### Step 4 — Register the skill in `index.js`

Open `src/skills/index.js` and add the skill. The file looks like this:

```js
// src/skills/index.js
import { defaultTheme } from './registered/default/theme';
import { defaultMeta } from './registered/default/meta';

import { retroTerminalTheme } from './registered/retro-terminal/theme';
import { retroTerminalMeta } from './registered/retro-terminal/meta';

// → ADD NEW IMPORT HERE

export const skillThemes = {
  'default': defaultTheme,
  'retro-terminal': retroTerminalTheme,
  // → ADD NEW THEME HERE
};

export const skillMetas = {
  'default': defaultMeta,
  'retro-terminal': retroTerminalMeta,
  // → ADD NEW META HERE
};

// Ordered list for the SkillSwitcherStrip and Skills page grid
export const skillList = [
  defaultMeta,
  retroTerminalMeta,
  // → ADD NEW META HERE
];
```

Add your new skill's imports and entries in each section marked with `→ ADD NEW`.

### Step 5 — Add to Featured Designs (home page)

The **Featured Designs** section on the home page (`SkillsPreview`) shows a fixed number of skill cards. To include the new skill there:

1. Open `src/components/sections/SkillsPreview.jsx`.
2. Find the line that defines the featured list, e.g.:
   ```js
   const previewSkills = skillList.slice(0, 4);
   ```
3. Increase the slice end so the new skill is included (e.g. for a 5th skill use `skillList.slice(0, 5)`).

The order of cards matches `skillList` in `src/skills/index.js`, so the new skill appears as the last featured card once the slice count is updated.

---

## VERIFICATION CHECKLIST

After generating both files, verify:

- [ ] All 24 token keys in `theme.js` are present and have non-empty string values
- [ ] `fontUrl` is a valid Google Fonts URL (or empty string `''` if system fonts only)
- [ ] `accentColor` in `meta.js` matches `--site-accent` in `theme.js`
- [ ] `bgColor` in `meta.js` matches `--site-bg` in `theme.js`
- [ ] `id` is identical in both `theme.js` and `meta.js`
- [ ] `command` in `meta.js` is exactly `npx getdrip add [id]`
- [ ] The skill is imported and registered in all 3 places in `index.js`
- [ ] No values are copied from a different skill — all values sourced from this skill's folder

---

## EXAMPLE OUTPUT — retro-terminal

This is what correct output looks like. Use it to calibrate your own output.

### `src/skills/registered/retro-terminal/theme.js`

```js
export const retroTerminalTheme = {
  id: 'retro-terminal',
  name: 'Retro Terminal',
  fontUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400&display=swap',

  tokens: {
    '--site-bg':            '#000000',
    '--site-surface':       '#0a0a0a',
    '--site-surface-2':     '#111111',
    '--site-text':          '#00ff41',
    '--site-text-muted':    '#00882b',
    '--site-text-accent':   '#00ff41',
    '--site-accent':        '#00ff41',
    '--site-accent-2':      '#00cc33',
    '--site-accent-fg':     '#000000',
    '--site-border':        '#003311',
    '--site-border-strong': '#00ff41',
    '--site-shadow-sm':     '0 0 8px rgba(0, 255, 65, 0.15)',
    '--site-shadow-md':     '0 0 20px rgba(0, 255, 65, 0.25)',
    '--site-shadow-lg':     '0 0 40px rgba(0, 255, 65, 0.35)',
    '--site-shadow-glow':   '0 0 30px rgba(0, 255, 65, 0.6), 0 0 60px rgba(0, 255, 65, 0.2)',
    '--site-radius-sm':     '0px',
    '--site-radius-md':     '0px',
    '--site-radius-lg':     '0px',
    '--site-radius-full':   '0px',
    '--site-font-head':     '"JetBrains Mono", "Courier New", monospace',
    '--site-font-body':     '"JetBrains Mono", "Courier New", monospace',
    '--site-font-mono':     '"JetBrains Mono", "Courier New", monospace',
    '--site-ease':          'steps(8, end)',
    '--site-duration-sm':   '0ms',
    '--site-duration-md':   '0ms',
    '--site-duration-lg':   '100ms',
  },
};
```

### `src/skills/registered/retro-terminal/meta.js`

```js
export const retroTerminalMeta = {
  id: 'retro-terminal',
  name: 'Retro Terminal',
  description: 'Phosphor green on void black. Monospace everything. CRT glow that makes AI UIs feel like 1983.',
  category: 'dark',
  mood: ['hacker', 'nostalgic', 'focused', 'raw'],
  tags: ['dark', 'monospace', 'glow', 'terminal', 'retro'],
  components: 15,
  stack: ['react', 'tailwind', 'framer-motion'],
  accentColor: '#00ff41',
  bgColor: '#000000',
  command: 'npx getdrip add retro-terminal',
};
```

---

## COMMON MISTAKES TO AVOID

| Mistake | Correct behavior |
|---|---|
| Using Tailwind class names as values | Always use raw CSS values: `'#000000'` not `'bg-black'` |
| Copying shadow values from a different skill | Read shadows.md from THIS skill's folder only |
| Leaving `fontUrl` as empty string when fonts exist | Always extract the Google Fonts URL from typography.md or globals.css |
| Setting radius tokens to default browser values | Use the skill's explicit radius values — 0px for terminal, 12px for rounded, etc. |
| Using pixel durations from a different skill | Read motion.md from THIS skill — instant for terminal, bouncy for playful |
| Forgetting to update index.js | All 3 locations in index.js must be updated, not just the imports |
| Using `'none'` for shadows when skill has glow | Glow IS a shadow — use the glow value, not none |

---

## ADDING MULTIPLE SKILLS AT ONCE

If you are adding more than one skill, do them in sequence — one at a time.
Complete all 4 steps for skill A before starting skill B.
Do not generate all theme.js files first then all meta.js files — this leads to errors.