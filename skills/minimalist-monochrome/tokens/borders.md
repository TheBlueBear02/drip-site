# TOKENS — BORDERS & RADIUS

## The Core Rule: 0px Radius, Always

Zero border radius. Everywhere. No exceptions.
Every corner is a perfect 90-degree angle.
This is the architectural, editorial character of the design —
the geometry of Bauhaus, Swiss grid, and luxury print.

A rounded corner softens. This design does not soften.

---

## Border Width Scale

Lines create the entire structure of this design. Use them deliberately.

| Name | CSS | Usage |
|---|---|---|
| `hairline` | `1px solid #E5E5E5` | Background texture separators, column dividers |
| `thin` | `1px solid #000000` | Standard card borders, subtle component borders |
| `medium` | `2px solid #000000` | Emphasized cards, input fields, nav links on hover |
| `thick` | `4px solid #000000` | Section separator rules — between every major section |
| `ultra` | `8px solid #000000` | Maximum impact — hero elements, CTA sections, dramatic separators |

---

## Section Separator Rule (Non-Negotiable)

Every major section break on the page requires a thick horizontal rule.
This creates the architectural page structure — the page feels like a layout,
not a scroll of content.

```jsx
<hr style={{ border: "none", borderTop: "4px solid #000000", margin: 0 }} />
```

Between hero and features, between features and stats, between stats and pricing —
every section boundary gets this rule. The page should feel like a newspaper layout.

---

## Component Border Rules

| Component | Border |
|---|---|
| Card (standard) | `1px solid #000000` all sides |
| Card (featured/inverted) | No border (contrast provides definition) |
| Button (primary) | No border (filled black) |
| Button (secondary) | `2px solid #000000` all sides |
| Input (default) | `2px solid #000000` bottom only |
| Input (focus) | `4px solid #000000` bottom only (thickens) |
| Navbar | `4px solid #000000` bottom |
| Table | `1px solid #E5E5E5` rows, `2px solid #000000` header |
| Badge/Tag | `1px solid #000000` |

---

## Special Border Patterns

### Left accent border — for pull quotes and highlighted text
```css
border-left: 4px solid #000000;
padding-left: 24px;
```

### Bottom underline — for links on hover
```css
text-decoration: none;
border-bottom: 1px solid #000000;
```

### Bordered square — decorative punctuation element
A small square (12×12px) with a black border, used as visual punctuation
next to thick rules in hero sections.
```css
width: 12px;
height: 12px;
border: 2px solid #000000;
display: inline-block;
```

### Drop cap border — for editorial article intros
The first letter of a lead paragraph sits in a black-bordered box.
```css
float: left;
font-size: 64px;
line-height: 1;
padding: 8px 12px;
border: 2px solid #000000;
margin-right: 12px;
margin-top: 4px;
font-family: "Playfair Display", serif;
font-weight: 700;
```

---

## Rules

1. **0px border radius always** — on every element, every state, every size.
2. **Section rules are 4px** — hairlines between sections look accidental.
3. **Input borders are bottom-only** — full borders on inputs feel form-like.
4. **Links use border-bottom** — not `text-decoration: underline` which is too light.
5. **No rounded pills** — tags, badges, and chips are rectangular.
6. **Inverted elements lose their border** — black on black is invisible; contrast replaces border.
