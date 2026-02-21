# TOKENS — COLORS

## Four Colors. Nothing More.

This is a physical paper-and-pencil palette. Every color can be found
in a real stationery store.

---

## The Palette

| Token | Hex | Physical Source | Role |
|---|---|---|---|
| `background` | `#fdfbf7` | Warm notebook paper | Page canvas |
| `foreground` | `#2d2d2d` | Soft pencil lead | All text, all borders, all shadows |
| `accent` | `#ff4d4d` | Red correction marker | CTAs, emphasis, tacks |
| `secondary` | `#2d5da1` | Blue ballpoint pen | Secondary actions, links, info |
| `muted` | `#e5e0d8` | Erased pencil / aged paper | Secondary backgrounds, dividers |
| Post-it | `#fff9c4` | Yellow sticky note | Feature card special treatment |

---

## Color-by-Role

### Backgrounds
```
Page:          #fdfbf7 — always, with dot-grid overlay
Cards:         #ffffff — white paper on paper background
Feature cards: #fff9c4 — sticky-note yellow
Secondary bg:  #e5e0d8 — muted / secondary sections
Tape:          rgba(200,200,200,0.35) — translucent gray strip
```

### Text
```
All text:      #2d2d2d — pencil lead, never pure black
Placeholder:   rgba(45,45,45,0.4) — faded pencil
Reversed:      #fdfbf7 — on dark/accent backgrounds
```

### Borders
```
All borders:   #2d2d2d — pencil lead, same as text
Focus border:  #2d5da1 — blue pen on focus
Dashed:        #2d2d2d or #ff4d4d for featured dashes
```

### Shadows
```
All shadows:   #2d2d2d — solid, zero blur
Standard:      4px 4px 0px 0px #2d2d2d
Emphasized:    8px 8px 0px 0px #2d2d2d
Hover (lift):  2px 2px 0px 0px #2d2d2d
Active (flat): none
```

---

## Rules

1. **Never pure black (#000).** Pencil lead (#2d2d2d) is warmer and more
   authentic. Pure black feels digital and harsh.
2. **Never pure white (#fff) backgrounds.** The warm paper (#fdfbf7)
   is the canvas. White is used for card surfaces only.
3. **No grays.** Muted (#e5e0d8) plays the role of gray but has warmth.
4. **No gradients.** Paper doesn't gradient.
5. **Red and blue are accents, not structure.** Most of the design is
   pencil-and-paper (black and white). Red and blue appear for emphasis only.
