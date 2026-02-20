---
name: minimalist-monochrome
version: 1.0.0
stack: React + Tailwind CSS
category: light / editorial
mood: austere, authoritative, timeless, editorial, intellectual
---

# MINIMALIST MONOCHROME SKILL

A complete design system built on pure black and white — no exceptions.
This is the visual language of high-end fashion editorials, architectural monographs,
and luxury brand identities. It creates authority through restraint, drama through
contrast, and sophistication through typographic mastery.

The core principle is **Reduction to Essence** — every design decision must stand
on its own merit with no color to hide behind, no shadows to soften edges,
no gradients to create false interest.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read intent before code
Read these files in order before generating anything:

1. `philosophy.md`           ← The soul. Read this first, always.
2. `tokens/colors.md`        ← Pure black and white. Every rule matters.
3. `tokens/typography.md`    ← Serif fonts as hero. The oversized scale.
4. `tokens/borders.md`       ← Lines create structure. No shadows.
5. `tokens/shadows.md`       ← There are none. Understand why.
6. `tokens/motion.md`        ← Instant and binary. No easing.
7. `tokens/spacing.md`       ← Dramatic negative space is active design.

### STEP 2 — Set up the project
Follow `integration/setup.md` exactly. Wire in Tailwind config and globals.css
before writing any component code.

### STEP 3 — Study components as reference patterns
Files in `components/` are annotated references. The WHY comments are critical —
they explain the logic behind decisions so you can extrapolate correctly.
When building new components, ask: "Would this appear in a luxury print editorial?"

### STEP 4 — Use examples as your quality benchmark
Read `examples/LandingPage.jsx` before generating any full page.
It shows every token working together as a complete editorial world.

---

## WHAT YOU CAN OVERRIDE
- **Font sizes**: Can scale one step up or down across the board.
- **Content and copy**: All placeholder text and labels.
- **Border weights**: Can vary between the defined scale (hairline, thin, medium, thick, ultra).
- **Section textures**: Can swap between the defined texture patterns.

## WHAT YOU MUST NEVER OVERRIDE
- **The color palette**: Pure black `#000000` and pure white `#FFFFFF` only.
  No grays except `#525252` for secondary text and `#E5E5E5` for subtle borders.
  No accent colors. No brand colors. Black IS the accent.
- **Border radius**: Always `0px`. Everywhere. No exceptions.
- **Shadows**: None. Ever. Depth comes from inversion and border weight.
- **Font families**: Playfair Display for headings, Source Serif 4 for body.
  These serif fonts define the entire editorial personality.
- **Motion speed**: Maximum 100ms transitions. No bouncing, no easing curves.
  All interactions are instant and binary.
- **Horizontal rules**: 4px black lines must separate all major sections.
  Remove them and the page loses its architectural structure.

---

## AGENT BEHAVIOR RULES
- Every interactive element inverts on hover (black bg → white, or white bg → black).
  This is the primary interaction pattern. There is no other hover style.
- Every section needs a texture layer — horizontal lines, grid, or diagonal.
  Flat sections without texture are wrong.
- Headlines are typographic objects, not just labels. Scale them dramatically.
  If a heading feels appropriately sized, make it bigger.
- When in doubt, add a thick horizontal rule. Lines create structure here.
- Never add color for any reason. If something needs emphasis, invert it.
- Icons use strokeWidth 1 or 1.5 — thin, not chunky. Always black.
- Focus states use 3px solid black outline — never colored rings.
- Inverted sections (black background) use white text and white borders.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+ (config extended via `integration/tailwind.config.js`)
- Playfair Display + Source Serif 4 + JetBrains Mono via Google Fonts
- No animation libraries needed — all motion is CSS only
