# TOKENS — TYPOGRAPHY

## Two Fonts. Both Architectural.

**Marcellus** for all headings — Roman serif structures with Art Deco gravity.
**Josefin Sans** for body — geometric, vintage, precisely proportioned.

---

## Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet">
```

Global application:
```css
body {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  color: #F2F0E4;
  background: #0A0A0A;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Marcellus', serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2em;
}
```

---

## Scale

| Element | Size | Font | Transform | Tracking | Notes |
|---|---|---|---|---|---|
| Hero H1 | `clamp(56px,8vw,96px)` | Marcellus | UPPERCASE | 0.2em | Imposing, stage presence |
| Section H2 | `text-5xl` (48px) | Marcellus | UPPERCASE | 0.2em | With gold dividers |
| Subsection H3 | `text-3xl` (30px) | Marcellus | UPPERCASE | 0.15em | Card titles, section labels |
| Card Title | `text-xl` (20px) | Marcellus | UPPERCASE | 0.15em | In gold (#D4AF37) |
| Body Large | `text-lg` (18px) | Josefin Sans 300 | Normal | 0.05em | Primary readable content |
| Body | `text-base` (16px) | Josefin Sans 300 | Normal | 0.03em | General body |
| Caption/Meta | `text-sm` (14px) | Josefin Sans 400 | UPPERCASE | 0.1em | Labels, dates, categories |
| Button | `text-sm` (14px) | Josefin Sans 400 | UPPERCASE | 0.2em | Wide tracking is mandatory |

---

## Rules

1. **Marcellus on ALL headings.** Never Josefin Sans for h1–h4.
2. **UPPERCASE on all Marcellus.** `text-transform: uppercase` everywhere.
3. **0.2em minimum tracking on headings.** `letter-spacing: 0.2em` — more if space allows.
4. **Josefin Sans 300 for body.** The lighter weight reads as refined, not weak.
5. **Gold (#D4AF37) for card titles and subsection headings.** Cream for section H2.
6. **Never sentence case on button labels.** UPPERCASE with 0.2em tracking always.
7. **No bold weights.** Marcellus 400 and Josefin 300/400 only. Bold breaks the elegance.
