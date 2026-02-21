# TOKENS — TYPOGRAPHY

## Two Fonts. Both Handwritten. No Exceptions.

**Kalam** for headings — thick felt-tip marker energy.
**Patrick Hand** for body — legible but personal, like a smart friend's notes.

---

## Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Patrick+Hand&display=swap" rel="stylesheet">
```

Apply globally:
```css
body {
  font-family: 'Patrick Hand', cursive;
  color: #2d2d2d;
  background: #fdfbf7;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Kalam', cursive;
  font-weight: 700;
}
```

---

## Scale

| Element | Size | Font | Weight | Notes |
|---|---|---|---|---|
| Hero h1 | `text-5xl md:text-6xl` | Kalam | 700 | Marker-big, dramatic |
| Section h2 | `text-4xl md:text-5xl` | Kalam | 700 | Emphasized notes feel |
| Subsection h3 | `text-3xl` | Kalam | 700 | Subhead sticky-note size |
| Card title | `text-2xl` | Kalam | 700 | Still marker font |
| Body large | `text-xl` | Patrick Hand | 400 | Primary readable text |
| Body | `text-lg md:text-xl` | Patrick Hand | 400 | All body copy |
| Small / caption | `text-base` | Patrick Hand | 400 | Labels, metadata |
| Button | `text-lg md:text-2xl` | Patrick Hand | 400 | Large touch targets |

---

## Typography Rules

1. **Kalam on all headings.** Never Patrick Hand for h1–h4.
2. **Patrick Hand on all body.** Never Kalam for paragraphs (too hard to read at small sizes).
3. **Scale dramatically.** A hero headline should feel 3–4x bigger than body text.
   The dramatic contrast is part of the "emphasized notes" feeling.
4. **Never uppercase all-caps headings.** Kalam's hand-drawn character works
   best in mixed case. All-caps loses the human feel.
5. **Italic works beautifully in both fonts.** Use for pulled quotes and
   testimonials — feels like handwritten emphasis.
6. **No font-weight other than 700 for Kalam and 400 for Patrick Hand.**
   These fonts only ship with one weight each — use them as intended.
