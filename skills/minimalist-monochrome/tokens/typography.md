# TOKENS — TYPOGRAPHY

## The Philosophy

Typography is not decoration in this system — it IS the visual system.
Without color, gradients, or shadows to create interest, type must do all the work.
Playfair Display headings at 8xl–9xl are graphic objects. They divide space,
create weight, and establish hierarchy through scale alone.

Both fonts are serifs — a deliberate choice. The high-contrast strokes and
bracketed serifs create visual richness without any color whatsoever.

---

## Fonts

| Role | Family | Source | Weights |
|---|---|---|---|
| Display / Headings | Playfair Display | Google Fonts | 400 (Regular), 700 (Bold), 900 (Black), 400i (Italic), 700i (Bold Italic) |
| Body | Source Serif 4 | Google Fonts | 300 (Light), 400 (Regular), 500 (Medium) |
| Mono / Labels / Metadata | JetBrains Mono | Google Fonts | 400, 500 |

Google Fonts import:
```
https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap
```

---

## Type Scale — Dramatic Range

| Role | Size | Weight | Font | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|---|
| `9xl` | 160px | 900 | Playfair Display | 1.0 | -0.05em | Maximum impact headlines — one or two words |
| `8xl` | 128px | 900 | Playfair Display | 1.0 | -0.05em | Hero display headlines |
| `7xl` | 96px | 700 | Playfair Display | 1.05 | -0.03em | Hero subheadings |
| `6xl` | 72px | 700 | Playfair Display | 1.05 | -0.03em | Section statements |
| `5xl` | 56px | 700 | Playfair Display | 1.1 | -0.025em | Page titles |
| `4xl` | 40px | 700 | Playfair Display | 1.15 | -0.02em | Section headings |
| `3xl` | 32px | 700 | Playfair Display | 1.2 | -0.01em | Sub-headings |
| `2xl` | 24px | 400 | Playfair Display | 1.3 | 0em | Section intros, pull quotes |
| `xl` | 20px | 400 | Source Serif 4 | 1.6 | 0em | Lead paragraphs |
| `lg` | 18px | 400 | Source Serif 4 | 1.7 | 0em | Preferred body size |
| `base` | 16px | 400 | Source Serif 4 | 1.7 | 0em | Standard body |
| `sm` | 14px | 400 | Source Serif 4 | 1.6 | 0em | Captions, secondary |
| `label` | 12px | 500 | JetBrains Mono | 1.4 | 0.1em | ALL CAPS labels, dates, metadata |
| `xs` | 11px | 400 | JetBrains Mono | 1.4 | 0.08em | Fine print |

---

## Hierarchy Rules

### Headings Are Graphic Elements
Never size a heading "appropriately." Size it dramatically.
If a heading feels right at 4xl, try 5xl. If it feels right at 5xl, try 6xl.
The oversized scale is what creates the editorial authority.

### Italic Is Emphasis
Playfair Display italic is exceptionally beautiful — high contrast, elegant.
Use it for pull quotes, for emphasis within headings, for testimonials.
This is the only emphasis mechanism besides inversion.

```jsx
<h2 style={{ fontFamily: "Playfair Display", fontSize: 56, fontWeight: 700 }}>
  Design without{" "}
  <em style={{ fontStyle: "italic" }}>compromise.</em>
</h2>
```

### Labels Use Monospace
All metadata, dates, categories, tags, and eyebrow labels use JetBrains Mono
in small caps style — uppercase, tracked wide, small size.

```jsx
<span style={{
  fontFamily: "JetBrains Mono, monospace",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#525252",
}}>
  Issue 04 — June 2024
</span>
```

### Pull Quotes
Large italic Playfair with an oversized quotation mark is the testimonial pattern.
The quotation mark is a graphic element — enormous, low opacity.

```jsx
<blockquote style={{ fontFamily: "Playfair Display", fontSize: 32, fontStyle: "italic", lineHeight: 1.3 }}>
  <span style={{ fontSize: 120, opacity: 0.08, lineHeight: 0, display: "block", marginBottom: -20 }}>"</span>
  The best thing I've ever used.
</blockquote>
```

---

## Icon Settings (Lucide React)

All icons must use thin strokes — this is a line-based system.

```jsx
<Icon size={20} strokeWidth={1.5} color="#000000" />
// OR for very fine detail:
<Icon size={20} strokeWidth={1} color="#000000" />
```

Never use strokeWidth above 2 in this skill.
Icons are always black (or white in inverted sections).
Icons never live in colored circles — they float or sit in bordered containers.

---

## What Never To Do

- Never use a sans-serif font anywhere — not even for captions or metadata
- Never bold body text except for structural emphasis in articles
- Never use letter-spacing wider than `0.12em` — it looks desperate
- Never use `leading-none` for body text — only for display sizes
- Never size headings "conservatively" — be dramatic
- Never use italic for more than one sentence at a time in body copy
