# GETDRIP.DEV — Full Site Structure & Architecture Plan
## Vite + React | GitHub Pages | Skill-Transforming UI

---

## THE CORE CONCEPT

The site IS the demo. When a user previews a skill, the entire site transforms
into that design world — fonts, colors, shadows, radius, motion. Everything.
This is not a modal preview. It is a full live environment swap.

The homepage defaults to the Linear Modern style. The moment a user selects
another skill, they are no longer on a website about design systems. They are inside one.

---

## STACK

| Layer | Choice | Why |
|---|---|---|
| Framework | Vite + React | Fast HMR, simple static output, easy GitHub Pages deploy |
| Routing | React Router (hash mode) | Works on GitHub Pages without server config |
| Styling | CSS custom properties + vanilla CSS | Enables real-time token swapping via `:root` |
| State | React Context | Global active skill state shared across all components |
| Animation | CSS transitions on `:root` | Smooth cross-site transformations without JS overhead |
| Deployment | GitHub Actions → `gh-pages` branch | Auto-deploy on push to `main` |

**Why not Tailwind for the site itself?**
Tailwind generates static classes at build time. CSS custom properties are
runtime-mutable — essential for swapping the entire design system live.
The site uses CSS vars everywhere; skill tokens map directly onto those vars.

---

## THE SKILL THEME SYSTEM

### How It Works

Each skill defines a "site theme" — a flat map of CSS custom properties
that override the site's base token set. When a skill becomes active:

1. The `SkillContext` updates `activeSkill`
2. A `useSkillTheme` hook writes the skill's token map to `document.documentElement.style`
3. All CSS vars on `:root` update instantly
4. CSS `transition` on `:root` animates the swap smoothly
5. The font changes via a dynamically injected `<link>` tag

### Site Token Contract

Every component on the site uses only these CSS vars (never hardcoded values):

```css
:root {
  /* Backgrounds */
  --site-bg:          #0d0d0d;   /* Page background */
  --site-surface:     #1a1a1a;   /* Card/panel surface */
  --site-surface-2:   #242424;   /* Elevated surface */

  /* Text */
  --site-text:        #f0f0f0;   /* Primary text */
  --site-text-muted:  #888888;   /* Secondary text */
  --site-text-accent: #ffffff;   /* Emphasized text */

  /* Accent */
  --site-accent:      #00ff41;   /* Primary accent color */
  --site-accent-2:    #00cc33;   /* Hover/pressed accent */
  --site-accent-fg:   #000000;   /* Text on accent background */

  /* Borders */
  --site-border:      #2a2a2a;   /* Default border */
  --site-border-strong: #444444; /* Emphasized border */

  /* Shadows */
  --site-shadow-sm:   0 2px 4px rgba(0,0,0,0.3);
  --site-shadow-md:   0 4px 16px rgba(0,0,0,0.4);
  --site-shadow-lg:   0 8px 32px rgba(0,0,0,0.5);
  --site-shadow-glow: 0 0 20px rgba(0,255,65,0.3);

  /* Radius */
  --site-radius-sm:   4px;
  --site-radius-md:   8px;
  --site-radius-lg:   16px;
  --site-radius-full: 9999px;

  /* Typography */
  --site-font-head:   'Inter', sans-serif;
  --site-font-body:   'Inter', sans-serif;
  --site-font-mono:   'JetBrains Mono', monospace;

  /* Motion */
  --site-ease:        cubic-bezier(0.4, 0, 0.2, 1);
  --site-duration-sm: 150ms;
  --site-duration-md: 300ms;
  --site-duration-lg: 500ms;
}

/* The root transition — makes ALL var changes animate */
:root {
  transition:
    background-color var(--site-duration-md) var(--site-ease),
    color var(--site-duration-md) var(--site-ease);
}
```

### Skill Theme Object Shape

Each skill in the registry exports a theme object:

```js
// skills/retro-terminal/theme.js
export const retroTerminalTheme = {
  id: 'retro-terminal',
  name: 'Retro Terminal',
  fontUrl: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap',
  tokens: {
    '--site-bg':           '#000000',
    '--site-surface':      '#0a0a0a',
    '--site-surface-2':    '#111111',
    '--site-text':         '#00ff41',
    '--site-text-muted':   '#00aa2b',
    '--site-text-accent':  '#00ff41',
    '--site-accent':       '#00ff41',
    '--site-accent-2':     '#00cc33',
    '--site-accent-fg':    '#000000',
    '--site-border':       '#003311',
    '--site-border-strong':'#00ff41',
    '--site-shadow-sm':    '0 0 8px rgba(0,255,65,0.2)',
    '--site-shadow-md':    '0 0 20px rgba(0,255,65,0.3)',
    '--site-shadow-lg':    '0 0 40px rgba(0,255,65,0.4)',
    '--site-shadow-glow':  '0 0 30px rgba(0,255,65,0.6)',
    '--site-radius-sm':    '0px',
    '--site-radius-md':    '0px',
    '--site-radius-lg':    '0px',
    '--site-radius-full':  '0px',
    '--site-font-head':    '"JetBrains Mono", monospace',
    '--site-font-body':    '"JetBrains Mono", monospace',
    '--site-font-mono':    '"JetBrains Mono", monospace',
    '--site-ease':         'steps(8)',
    '--site-duration-sm':  '0ms',
    '--site-duration-md':  '0ms',
  },
};
```

---

## PROJECT FOLDER STRUCTURE

```
getdrip-site/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── main.jsx                    ← Vite entry point
│   ├── App.jsx                     ← Router + SkillProvider
│   │
│   ├── context/
│   │   └── SkillContext.jsx        ← Global active skill state
│   │
│   ├── hooks/
│   │   ├── useSkillTheme.js        ← Writes tokens to :root
│   │   └── useCopyCommand.js       ← Copy-to-clipboard with feedback
│   │
│   ├── skills/                     ← THE SKILL REGISTRY
│   │   ├── index.js                ← Exports all skills as array
│   │   ├── registered/
│   │   │   ├── linear-modern/      ← Site default style (Linear/Vercel-style dark, indigo, layered shadows)
│   │   │   │   ├── theme.js
│   │   │   │   └── meta.js
│   │   │   ├── minimalist-monochrome/
│   │   │   │   ├── theme.js        ← Token overrides
│   │   │   │   └── meta.js         ← Name, tags, description, components list
│   │   │   ├── playful-geometric/
│   │   │   │   ├── theme.js
│   │   │   │   └── meta.js
│   │   │   ├── clay-premium/
│   │   │   │   ├── theme.js
│   │   │   │   └── meta.js
│   │   │   └── neo-brutalism/       ← Cream canvas, hard shadows, Space Grotesk, bordered card hero
│   │   │       ├── theme.js
│   │   │       └── meta.js
│   │
│   ├── components/                 ← Site UI components (all use CSS vars)
│   │   ├── layout/
│   │   │   ├── Nav.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── CopyCommand.jsx     ← The npx command pill with copy button
│   │   │   ├── FloatingTab.jsx     ← Bottom-right floating tab: getDRIP / current design + copy command
│   │   │   ├── SkillCard.jsx       ← Card in the skills grid
│   │   │   └── SkillSwitcher.jsx   ← The persistent skin switcher strip
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── HowItWorks.jsx
│   │       ├── SkillsPreview.jsx
│   │       ├── PlatformSupport.jsx
│   │       ├── FAQ.jsx              ← Q&A accordion; skill-specific design variants
│   │       └── SocialProof.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Skills.jsx
│   │   ├── SkillDetail.jsx
│   │   └── Docs.jsx
│   │
│   └── styles/
│       ├── base.css                ← :root tokens, resets, base typography
│       ├── components.css          ← Shared component styles (using vars)
│       └── transitions.css         ← Root transition, theme-swap animation
│
├── index.html                      ← Meta tags (description, og:, twitter:), theme-color
├── vite.config.js                  ← base: '/repo-name/' for GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml              ← Auto-deploy to gh-pages on push
└── package.json
```

---

## PAGES

---

### 1. Home (/)

The entry point. In the default state, the site uses the Linear Modern style.
A skill switcher strip is visible — when the user picks a skill, everything transforms.

**Section order:**

```
Nav
  └── Logo (GETDRIP + Beta tag) | How It Works | Skills | Platforms | GitHub stars counter (right) | "Browse Skills" CTA

SkillSwitcherStrip   ← PERSISTENT across all pages
  └── Horizontal scrollable row of skill chips
  └── Active skill chip is highlighted
  └── Clicking a chip transforms the entire site

Hero
  └── Default / other skills: simple layout — radial gradient background, no card, "Try now:" + CopyCommand
  └── Playful Geometric only (when that skill is active or previewed): geometric shapes + card + pill with hover lift
  └── Clay Premium only (when that skill is active or previewed): 4 floating blurred blobs using --site-hero-shape-1..4, clay-float keyframes (respects prefers-reduced-motion)
  └── Eyebrow: "CURE THE \"DEFAULT UI\" LOOK"
  └── Headline: one line, large, accent word styled
  └── Subheadline: 1-2 sentences
  └── "Try now:" label above CopyCommand pill (command varies by active/preview skill)
  └── "100% free" at bottom of hero content
  └── Playful variant: shape colors --site-hero-shape-1..4, float animation (respects prefers-reduced-motion)
  └── Neo-Brutalism variant: halftone background, bordered hero card (4px border, hard shadow, lift on hover)

HowItWorks          ← 4 steps
  └── Step 1: Browse the skill library
  └── Step 2: Copy the npx command
  └── Step 3: Paste in your agent's chat
  └── Step 4: Watch your UI transform

SkillsPreview       ← 3-4 skill cards teaser
  └── Each card shows skill name, mood tags, command
  └── Hovering a card applies that skill as a preview
  └── Clicking navigates to /skills/skill-name

PlatformSupport
  └── Supported platforms (Cursor, Lovable, Base44, Claude Code, etc.)

FAQ                 ← Questions & Answers (accordion)
  └── Clickable question containers; on click the answer section opens below
  └── Design varies by skill: linear-modern (card/shadow), minimalist-monochrome (flat, thin borders), playful-geometric (rounded, friendly)

Footer
```

**The SkillSwitcherStrip** — key UX detail:
- Hover = temporary preview (reverts on mouse leave)
- Click = locked active skill (persists until another is clicked)
- "Linear Modern" chip is the default; clicking it resets to the default style
- Strip is sticky at the top below the Nav

---

### 2. Skills (/skills)

The full library. Same SkillSwitcherStrip at top (it's always there).
The grid itself always reflects the active skill's design tokens.

**Layout:**

```
PageHeader
  └── "Skills Library" heading
  └── Subtitle: "X skills available"

FilterBar
  └── All | Dark | Light | Colorful | Minimal | Expressive
  └── Active filter highlighted in --site-accent

SkillGrid
  └── CSS grid, 3 columns desktop / 2 tablet / 1 mobile
  └── Each SkillCard:
      ├── MiniPreview — a 200×140px thumbnail rendered in the skill's actual tokens
      ├── Skill name
      ├── Category badge
      ├── Mood tags (2-3)
      ├── CopyCommand pill
      └── "Preview →" button → navigates to /skills/[id]
  └── Hovering a card = temporary full-site preview
  └── Clicking "Preview →" = navigate + lock skill

EmptyState (if filter returns nothing)
```

**MiniPreview component** — the card thumbnail:
A small self-contained box that renders a micro version of the skill's landing page —
just the hero section, shrunk down. It uses the skill's own token values directly
(not the `:root` vars), so all cards can show their own preview simultaneously
regardless of which skill is currently active on the site.

---

### 3. Skill Detail (/skills/:skillId)

Landing on this page automatically locks the skill as active.
The entire site is now in that design world.

**Sections:**

```
FullPreviewPanel
  └── The skill's LandingPage.jsx rendered in an iframe or sandboxed div
  └── Viewport toggle: Desktop / Tablet / Mobile
  └── "Viewing: Retro Terminal" label

InstallSection     ← Big, can't miss it
  └── Large heading: "Make your AI build like this"
  └── CopyCommand pill — oversized, prominent
  └── "Copy command → paste in agent chat"
  └── Supported agents: Cursor | Lovable | Bolt | Claude Code

WhatIsInside
  └── Components list (from skill meta)
  └── Token categories (colors, typography, shadows, etc.)
  └── Stack requirements

BeforeAfter
  └── Toggle between generic AI output vs skill output
  └── Side-by-side or slider comparison

HowToApply
  └── 3-step guide with code snippets
  └── "The activation prompt" — the exact text to paste into the agent

RelatedSkills
  └── 2-3 other skills in same category
```

---

### 4. Docs (/docs)

Minimal. Just enough to go from zero to working.
Uses whatever skill is currently active for its visual design.

**Sections:**

```
Sidebar navigation (desktop) / Accordion (mobile)
  ├── Quick Start
  ├── Applying to an existing project
  ├── Applying to a new project
  ├── CLI reference
  └── Platform guides
      ├── Cursor
      ├── Lovable
      ├── Bolt
      └── Claude Code

Content area
  └── Each doc section is a standalone scrollable article
  └── Code blocks use the skill's mono font + accent color
  └── Inline CopyCommand pills for all commands
```

---

## KEY COMPONENTS

### `SkillContext.jsx`

```jsx
// What it manages:
// - activeSkill (the locked skill)
// - previewSkill (temporary hover state — null when not hovering)
// - setActiveSkill(skill)
// - setPreviewSkill(skill | null)
//
// The rendered skill = previewSkill ?? activeSkill ?? linear-modern (site default)
// This means hover always wins over locked, locked wins over default
```

### `useSkillTheme.js`

```js
// Watches the resolved active theme
// On change: iterates token map, writes each to document.documentElement.style
// Also handles font URL injection/removal via <link> tag
// Runs on every render where theme changes — fast, no flicker
```

### `SkillSwitcherStrip.jsx`

```jsx
// Horizontally scrollable row of skill chips
// Each chip:
//   - Shows skill name + a 16px color swatch of its accent
//   - onMouseEnter → setPreviewSkill(skill)
//   - onMouseLeave → setPreviewSkill(null)
//   - onClick → setActiveSkill(skill)
//   - Active chip: border in --site-accent, accent text
// First chip is always "Default"
// Strip is position: sticky, top: navHeight, z-index: 40
```

### `CopyCommand.jsx`

```jsx
// Props: command (string), size ('sm' | 'md' | 'lg')
// Shows: $ npx getdrip add retro-terminal
// Right side: copy icon button
// On click: copies to clipboard, icon swaps to checkmark for 2s
// Styled entirely with CSS vars — transforms with skill
```

### `FloatingTab.jsx`

```jsx
// Global floating tab: position fixed, bottom-right.
// Left: label "getDRIP / [current active design name]" (e.g. getDRIP / Default).
// Right: "Copy command" button — copies meta.command for the active skill to clipboard.
// Uses useSkillContext() for activeSkill; resolves meta from skillMetas.
// Styled entirely with CSS vars (--site-surface, --site-border, etc.) so it is
// applied by the active skill's theme like the rest of the site.
// Rendered in App.jsx so it appears on all routes.
```

### `SkillCard.jsx`

```jsx
// Props: skill (meta object)
// Contains MiniPreview, name, tags, CopyCommand (sm), Preview button
// onMouseEnter/Leave → preview behavior via context
// onClick on Preview → navigate + lock skill
```

---

## ROUTING SETUP (Hash Mode for GitHub Pages)

```jsx
// App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';

// Routes:
// #/              → Home
// #/skills        → Skills
// #/skills/:id    → SkillDetail
// #/docs          → Docs
// #/docs/:section → Docs (specific section)
```

Hash routing means no 404 issues on GitHub Pages — the server always serves
`index.html` and React Router handles the rest client-side.

---

## GITHUB PAGES DEPLOYMENT

### `vite.config.js`
```js
export default {
  base: '/your-repo-name/',  // Must match GitHub repo name
}
```

### `.github/workflows/deploy.yml`
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: 18 }
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Push to `main` → auto-builds → deploys to `gh-pages` branch → live at
`https://yourusername.github.io/your-repo-name/`

---

## ADDING A NEW SKILL (The Pattern)

When a new skill is added to the Drip library, adding it to the site is 2 files:

1. **`src/skills/registered/[skill-name]/theme.js`** — token map (CSS vars)
2. **`src/skills/registered/[skill-name]/meta.js`** — name, category, mood, components list, description

Then import and register it in `src/skills/index.js`. Some skills (e.g. playful-geometric, clay-premium, neo-brutalism) have optional Hero variants: add a conditional in `Hero.jsx` and matching styles in `Hero.css` when the skill needs blobs, cards, texture, or other layout-specific treatment.

The skill card, the detail page, the switcher strip — all generated automatically.

---

## PHASE 1 BUILD PLAN (Home page first)

In order:

1. `base.css` — all CSS vars, reset, root transition
2. `SkillContext.jsx` + `useSkillTheme.js` — the engine
3. `src/skills/` — register linear-modern (default) + minimalist-monochrome + playful-geometric
4. `Nav.jsx` + `Footer.jsx`
5. `SkillSwitcherStrip.jsx` — the signature interaction
6. `Hero.jsx`
7. `CopyCommand.jsx`
8. `HowItWorks.jsx`
9. `SkillsPreview.jsx` (3 cards, simplified — links to /skills)
10. `SocialProof.jsx`
11. Wire it all in `Home.jsx`
12. `vite.config.js` + GitHub Actions deploy config
