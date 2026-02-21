# TOKENS — BORDERS & WOBBLY RADIUS

## THE MOST CRITICAL TOKEN IN THIS SKILL

The multi-value border-radius is what makes this skill instantly recognizable.
Standard Tailwind rounded classes (`rounded-lg`, `rounded-xl`) produce perfect
geometric curves. This skill uses CSS's two-value syntax to create organic,
asymmetric elliptical corners that look drawn by hand.

**Syntax:** `horizontal-radii / vertical-radii`
Each side can have a different radius. This creates oval-like irregular shapes.

---

## Wobbly Radius Library

Pick different variants for different elements. No two adjacent cards should use
the same variant — variety reinforces the hand-made feeling.

```js
// In tailwind.config.js borderRadius extension:
wobbly:   "255px 15px 225px 15px / 15px 225px 15px 255px",
wobblyMd: "15px 255px 15px 225px / 225px 15px 255px 15px",
wobblyLg: "100px 20px 80px 20px / 20px 80px 20px 100px",
wobblyXl: "30px 200px 30px 200px / 200px 30px 200px 30px",
wobblyFt: "200px 30px 170px 30px / 30px 170px 30px 200px",
```

Or inline in JSX — preferred for variety:
```jsx
// Hero card
style={{ borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px" }}

// Feature card  
style={{ borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px" }}

// Button (oval-ish)
style={{ borderRadius: "100px 20px 80px 20px / 20px 80px 20px 100px" }}

// Badge / tag
style={{ borderRadius: "30px 5px 25px 5px / 5px 25px 5px 30px" }}

// Input field
style={{ borderRadius: "12px 3px 10px 3px / 3px 10px 3px 12px" }}

// Stat shape (organic blob)
style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%" }}
```

---

## Border Width Rules

| Context | Width | Style |
|---|---|---|
| Buttons | 3px | solid |
| Cards | 2px | solid |
| Inputs | 2px | solid |
| Input focus | 2px | solid (blue) |
| Dividers | 2px | dashed |
| Featured overlay | 2px | dashed |
| Decorative circles | 2px | dashed |
| Section labels | 2px | solid |

All borders: `#2d2d2d` — pencil lead. Blue (`#2d5da1`) on focus states only.

---

## Rules

1. **Never `rounded-*` on any visible container.** No exceptions.
2. **No two adjacent cards use the same variant.** Rotate through the library.
3. **Buttons use a rounder variant** (smaller differences between values) so
   they still feel like buttons. Cards use more extreme variants.
4. **Images inside cards don't need wobbly radius** — keep them rectangular.
   The wobbly card frame provides the organic shape.
5. **SVG elements**: Use `rx` and `ry` attributes for wobbly SVG shapes,
   or use `path` elements for fully custom hand-drawn outlines.
