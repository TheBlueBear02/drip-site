# TOKENS — SHADOWS

## Hard Offset. Zero Blur. Always.

The hard offset shadow is how this skill simulates physical paper layering.
It is NOT a lighting effect. There is no blur radius. No spread. Just a solid
rectangle offset behind an element, like a shadow cast by a bright overhead
lamp on a flat piece of paper.

---

## Shadow Scale

| Token | CSS Value | Usage |
|---|---|---|
| `shadow-xs` | `2px 2px 0px 0px #2d2d2d` | Inline badges, tight elements |
| `shadow-sm` | `3px 3px 0px 0px rgba(45,45,45,0.1)` | Subtle depth on cards |
| `shadow-md` | `4px 4px 0px 0px #2d2d2d` | Default buttons, cards |
| `shadow-lg` | `6px 6px 0px 0px #2d2d2d` | Featured/hero elements |
| `shadow-xl` | `8px 8px 0px 0px #2d2d2d` | Maximum drama elements |

---

## The Button Press Mechanic

This is the most important interaction in the system:

```
Rest:    box-shadow: 4px 4px 0px 0px #2d2d2d; transform: translate(0,0)
Hover:   box-shadow: 2px 2px 0px 0px #2d2d2d; transform: translate(2px,2px) — lifts
Active:  box-shadow: none;                     transform: translate(4px,4px) — presses flat
```

The button translates to where the shadow was. The paper presses onto the surface.
Active state: shadow disappears completely. The button is flush with the background.

---

## Card Shadow — Soft Variant

Cards use a softer version to avoid looking too heavy:
```
box-shadow: 3px 3px 0px 0px rgba(45,45,45,0.1)
```
On hover, cards increase shadow:
```
hover: box-shadow: 6px 6px 0px 0px #2d2d2d;  transform: translateY(-2px)
```

---

## Rules

1. **Zero blur. Always.** If you see a blur value, remove it.
2. **Only #2d2d2d for shadows.** Never rgba(0,0,0,...) — too cold.
3. **Direction: bottom-right only.** `4px 4px` — never top-left or centered.
4. **Never use Tailwind's built-in shadow utilities.** They have blur.
   Always use `shadow-[4px_4px_0px_0px_#2d2d2d]` custom utility.
5. **Active state kills shadow.** The press-flat mechanic requires
   `box-shadow: none` + `transform: translate(4px,4px)`.
