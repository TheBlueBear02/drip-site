# TOKENS — COLORS

## Four Values. Nothing Else.

The power of this palette is restraint. Gold on black needs nothing else.

---

## The Palette

| Token | Hex | Material | Role |
|---|---|---|---|
| `background` | `#0A0A0A` | Obsidian black | Page canvas |
| `card` | `#141414` | Rich charcoal | Card surfaces |
| `foreground` | `#F2F0E4` | Champagne cream | Body text, labels |
| `gold` | `#D4AF37` | Metallic gold | Borders, headings, accents |
| `gold-light` | `#F2E8C4` | Pale gold | Hover states on solid gold |
| `blue` | `#1E3D59` | Midnight blue | Secondary / inactive states |
| `muted` | `#888888` | Pewter | Secondary text |

---

## Color-by-Role

### Backgrounds
```
Page canvas:     #0A0A0A + crosshatch texture
Card surface:    #141414
Section alt:     rgba(212,175,55,0.04) — very faint gold wash on dark
Overlay:         rgba(10,10,10,0.9) — modal/drawer backdrop
```

### Text
```
Primary body:    #F2F0E4 — champagne cream
Secondary/meta:  #888888 — pewter
Gold headings:   #D4AF37 — display text only
Reversed:        #0A0A0A — on gold backgrounds (button active)
Placeholder:     rgba(136,136,136,0.6)
```

### Borders
```
Standard:        rgba(212,175,55,0.3) — 30% gold at rest
Active/hover:    #D4AF37 — full gold
Subtle divider:  rgba(212,175,55,0.15) — structural only
Input border:    #D4AF37 — bottom only, full gold
```

### Glows (shadows)
```
Rest:     0 0 15px rgba(212,175,55,0.15)
Hover:    0 0 25px rgba(212,175,55,0.4)
Focus:    0 0 0 2px #D4AF37, 0 0 0 4px #0A0A0A
Button:   0 0 20px rgba(212,175,55,0.3)
```

---

## Rules

1. **No other colors.** No teal, no purple, no coral. Gold is the only accent.
2. **Gold at 30% for structural elements.** Full gold only for emphasis/interaction.
3. **Cream, not white.** `#F2F0E4` — never `#FFFFFF`. Pure white is too cold.
4. **Midnight blue for secondary states only.** Not a prominent UI color.
5. **Muted (#888888) passes WCAG AA at 4.5:1 on black.** Use for secondary text freely.
6. **Gold (#D4AF37) on black is 7:1.** Passes WCAG AA even at smaller sizes.
