# TOKENS — COLORS

## The Absolute Rule

This palette has exactly six values. No others exist.
No brand colors. No accent colors. No "just this once" exceptions.
The constraint is the design. Break it and the entire system collapses.

---

## The Palette

### Primary Values

| Token | CSS Var | Hex | Tailwind | Usage |
|---|---|---|---|---|
| `background` | `--color-bg` | `#FFFFFF` | `bg-mm-bg` | Page background. Pure white. |
| `foreground` | `--color-fg` | `#000000` | `text-mm-fg` / `bg-mm-fg` | All primary text. All borders. Black IS the accent. |

### Surface Values

| Token | CSS Var | Hex | Tailwind | Usage |
|---|---|---|---|---|
| `muted` | `--color-muted` | `#F5F5F5` | `bg-mm-muted` | Subtle section backgrounds. Off-white. |
| `muted-fg` | `--color-muted-fg` | `#525252` | `text-mm-muted` | Secondary text, captions, metadata. |

### Border Values

| Token | CSS Var | Hex | Tailwind | Usage |
|---|---|---|---|---|
| `border` | `--color-border` | `#000000` | `border-mm-border` | All component borders. Strong borders. |
| `border-light` | `--color-border-light` | `#E5E5E5` | `border-mm-light` | Subtle dividers, hairlines, column separators. |

---

## Inversion — The Only Emphasis Mechanism

When everything is black on white, the only way to create emphasis is inversion.
White on black. This is the entire emphasis system.

**Standard (default):**
```css
background: #FFFFFF;
color: #000000;
border-color: #000000;
```

**Inverted (emphasis):**
```css
background: #000000;
color: #FFFFFF;
border-color: #FFFFFF;
```

Inversion is used for:
- Stats/metrics sections — the most important data on the page
- Final CTA sections — the most important action on the page
- Featured pricing tier
- Primary buttons on hover
- Cards on hover

**Never invert more than one section per page view.** If multiple sections invert,
the emphasis is diluted and the contrast loses meaning.

---

## Color Rules

1. **No color ever** — not for icons, not for links, not for highlights, not for tags.
2. **Black is #000000** — not `#111111`, not `#1a1a1a`. True black.
3. **White is #FFFFFF** — not `#fafafa`, not `#fdfdfd`. True white.
4. **Gray `#525252` is for secondary text only** — not for borders, not for backgrounds.
5. **Gray `#E5E5E5` is for hairline dividers only** — not for text, not for icons.
6. **Inverted sections use white for everything** — text, borders, icons, all white.
7. **Focus outlines are always black** — `3px solid #000000`, never colored.
