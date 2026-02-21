# HAND-DRAWN — Examples Guide

## LandingPage.jsx — The North Star

The complete reference implementation. Every design pattern lives here.
Read it completely before building any new page or component.

---

## What to Notice in Each Section

### DOT-GRID BACKGROUND
Applied via inline `backgroundImage` and `backgroundSize` on the section wrapper:
```js
const DOT_BG = {
  backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};
```
This must appear on EVERY section, not just the body. When sections have
different background colors (`C.muted`, `C.fg`), reapply DOT_BG. Without it
the section feels flat and digital.

### NAVBAR
- Kalam logo with emoji prefix (✏️) — brand personality in one character
- Sticky with bottom `border-bottom: 2px solid #2d2d2d` + hard shadow line
- Nav links use dashed red border-bottom on hover — not color change
- CTA button: full press-flat mechanic (hover=2px shadow, active=none)
- Hamburger: renders as bordered wobbly-square with animated 3-bar to X
- Mobile sheet: Kalam 28px links stacked with dashed dividers between

### HERO
- Badge: post-it yellow, rotated 1deg, hard shadow
- Headline: Kalam with wavy red underline on key phrase (CSS `text-decoration-style: wavy`)
- SVG hand-drawn arrow annotation pointing to CTA — `<path>` with dashed stroke
- Hero right: TWO rotated WobblyCards overlapping — tape on one, tack on other
- Bouncing star decoration: `animation: hand-bounce 3s ease-in-out infinite`

### FEATURES
- Section eyebrow: accent red badge, rotate -1deg
- Three-column grid, each card uses DIFFERENT `ri` (radius index)
- Cards alternate tape and tack decorations
- Post-it yellow on the middle card
- Hover: shadow 4px→6px + rotate increases by 1deg at 100ms linear

### HOW IT WORKS
- Step numbers: organic blob shape (`borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%"`)
- Red blobs for step numbers — accent used purposefully
- SVG squiggle connecting the three steps: dashed path with arrowhead
- Squiggle is `position: absolute, hidden on mobile`
- Body copy in Patrick Hand, opacity 0.8

### STATS
- Organic blob shapes for each stat — `borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%"`
- Alternating post-it yellow and white backgrounds
- Varied rotation (±2deg) at rest, increases on hover
- Hard shadow + jiggle on hover (100ms linear)

### TESTIMONIAL
- Post-it yellow WobblyCard with tack decoration
- Full italic Patrick Hand quote (not Kalam — feels more personal)
- Author avatar: circle with secondary blue, hard shadow
- Five red stars: `fill={C.accent}`, strokeWidth={0}

### CTA SECTION
- Dark background (`C.fg` = #2d2d2d) — one dramatic inversion per page
- Post-it yellow used for emphasis word in headline
- Two buttons side-by-side: accent red + white

### FOOTER
- Muted (#e5e0d8) background with dot-grid — subtly different from main canvas
- Kalam brand name with emoji, rotated -1deg
- Footer links: dashed border-bottom (not nav-style)

---

## Pre-Ship Checklist

- [ ] `#fdfbf7` warm paper background (not #fff)
- [ ] `#2d2d2d` pencil lead text (not #000)
- [ ] Dot-grid on every section (`radial-gradient(#e5e0d8 1px, transparent 1px)`)
- [ ] Kalam on ALL headings
- [ ] Patrick Hand on ALL body text, buttons, labels
- [ ] Multi-value border-radius on every card/button/container
- [ ] Hard 4px offset shadows — zero blur
- [ ] Button press-flat mechanic (hover=2px, active=none+translate)
- [ ] Rotation at rest on cards (alternating ±1–2deg)
- [ ] Jiggle on card hover (±1deg shift, 100ms linear)
- [ ] Tape OR tack decoration on feature cards
- [ ] SVG squiggle in How It Works section
- [ ] Bouncing decorative element (hand-bounce 3s)
- [ ] Post-it yellow used at least once (#fff9c4)
- [ ] Stats use organic blob shapes, not circles
- [ ] No `rounded-*` Tailwind classes on any visible container
- [ ] No blurred shadows anywhere
- [ ] All transitions: 100ms linear (never 300ms ease-out)
- [ ] Lucide icons: strokeWidth={2.5} or {3}
