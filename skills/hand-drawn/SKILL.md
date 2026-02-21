---
name: hand-drawn
version: 1.0.0
stack: React + Tailwind CSS
category: playful
mood: [sketchy, creative, human, approachable, spontaneous]
---

# HAND-DRAWN SKILL

Authentic imperfection and human touch in a digital world. This skill
rejects the clinical precision of modern UI in favor of organic, playful
irregularity — sticky notes on a wall, napkin diagrams, sketches on
notebook paper. It celebrates messiness as honesty. Every line is wobbly.
Every shadow is hard. Every font is handwritten.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read before you code
Read these files in order. Do not skip to components.

1. `philosophy.md`          ← Why wobbly. Why hard shadows. The full manifesto.
2. `tokens/colors.md`       ← 4 colors only. Pencil, paper, red marker, blue pen.
3. `tokens/typography.md`   ← Kalam + Patrick Hand. Scale dramatically for notes.
4. `tokens/borders.md`      ← CRITICAL. The wobbly border-radius technique.
5. `tokens/shadows.md`      ← Hard offset, zero blur. Never soft shadows.
6. `tokens/motion.md`       ← Snappy 100ms. Rotation jiggle. Button press-flat.
7. `tokens/spacing.md`      ← py-20 sections. Generous gaps. Contained sketchbook.

### STEP 2 — Integration
Follow `integration/setup.md`. Font imports, dot-grid background, and the
wobbly border-radius config extensions must be in place before any
component will look hand-drawn.

### STEP 3 — Study the north star
Read `examples/LandingPage.jsx` completely before building any page.
The wobbly borders, hard shadows, button press-flat mechanic, tape
decorations, SVG squiggles, and rotation jiggle are all required.

### STEP 4 — Build components
Every component file includes WHY annotations. Read them.

---

## THE THREE LAWS

### Law 1: No straight lines
Every border, shape, and container uses irregular multi-value border-radius.
Never `rounded-lg`. Never `rounded-md`. Always custom multi-value syntax:
`border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px`
There are dozens of variations. No two containers should look exactly the same.

### Law 2: Hard offset shadows, zero blur
`box-shadow: 4px 4px 0px 0px #2d2d2d`
Never soft, never blurred. The offset is the point — it simulates a cut-paper
layered collage. Hover reduces offset (2px → 6px "lift"). Active kills it
entirely (button "presses flat"). No shadow blur radius ever.

### Law 3: Handwritten fonts everywhere
Kalam for headings (thick marker energy). Patrick Hand for body (legible but human).
Never system fonts. Never Inter, Roboto, or any geometric sans. If it looks like
it could be on a tech company's pitch deck, it's wrong for this system.

---

## WHAT YOU CAN OVERRIDE
- Rotation angles (stay within ±3 degrees)
- Which wobbly radius variant to use on a given element
- Decoration type (tape vs tack vs none)
- Specific accent moments (red vs blue)

## WHAT YOU MUST NEVER OVERRIDE
- **Wobbly border-radius**: Never standard rounded classes on any visible container
- **Hard shadows**: Never add blur. `4px 4px 0px 0px #2d2d2d` — zero blur always
- **Kalam + Patrick Hand**: Non-negotiable. These ARE the aesthetic.
- **Button press-flat mechanic**: `active: shadow-none + translate(4px,4px)` — always
- **Dot-grid background**: The paper texture is mandatory. Without it the background is dead.
- **Foreground color #2d2d2d**: Never pure black. The pencil lead color is warmer.
- **Background #fdfbf7**: Never pure white. The warm paper color is essential.
- **Dashed borders on secondary elements**: Solid primary, dashed secondary — always.
- **Rotation on decorative elements**: Things tilted at rest feel hand-placed.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Kalam (Google Fonts, weight 700)
- Patrick Hand (Google Fonts, weight 400)
- Lucide React (strokeWidth 2.5–3 — thick, sketchy strokes)
