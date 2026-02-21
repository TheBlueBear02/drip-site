# PHILOSOPHY — HAND-DRAWN

## The Reference World

Imagine a cork board covered in sticky notes, printed emails with red-pen
annotations, napkin sketches torn from a notebook, and hand-lettered labels.
Everything is slightly crooked. Shadows are cut-paper hard. Tape holds things
together. The whole board feels like it was assembled by a person who was
thinking out loud — impulsive, creative, human.

Now imagine building a software interface from that board.

That is this skill.

---

## Why This Aesthetic Exists

This is a rejection of the polished, optimized, A/B-tested interface.
Against:
- Perfect geometric rounded corners
- Soft Gaussian blur shadows that simulate physics
- Inter or DM Sans at 400 weight
- Flat white or flat dark backgrounds with no texture
- The feeling that a design system generated this, not a person

It says: digital things can look handmade. They can feel approachable and
unfinished — not as a failure, but as an invitation. When something looks
like a sketch, it says "this is a draft, you can interact with it, you can
change it, you are a collaborator not just a user."

---

## The Physics of This World

### Surfaces are paper and card stock, not glass
Background is `#fdfbf7` — warm paper with a slight yellow tint.
It has a dot-grid pattern (like Leuchtturm notebook paper) at low contrast.
Never flat white. Never gray. Warm paper.

### Borders are drawn, not rendered
No radius value is symmetric. The multi-value border-radius technique creates
organic shapes that look like they were drawn with a wobbly hand:
```
255px 15px 225px 15px / 15px 225px 15px 255px
```
Every card, button, and container has a different wobble. No two shapes
look exactly alike — just like two sticky notes never look the same.

### Shadows are cutouts, not lighting
A card with `box-shadow: 4px 4px 0px 0px #2d2d2d` looks like a piece of
paper dropped on a table and offset to the right. It's not simulating light.
It's simulating physical layering — one object on top of another.

**Zero blur always.** Blur simulates light physics. Hard offset simulates
physical stacking. This is a physical collage, not a 3D scene.

### Interaction is tactile
When a button is clicked, it presses flat — the shadow disappears and the
button translates to where the shadow was. The paper presses down onto the surface.

When hovering, the shadow reduces — the paper lifts slightly.

This is the opposite of neo-brutalism (which presses down by covering the shadow).
Here, the paper itself moves. Same visual result, different metaphor.

---

## The Color Strategy

**Four colors. That's it.**

| Token | Hex | Physical Object |
|---|---|---|
| Background | `#fdfbf7` | Warm notebook paper |
| Foreground | `#2d2d2d` | Soft pencil lead |
| Accent | `#ff4d4d` | Red correction marker |
| Secondary | `#2d5da1` | Blue ballpoint pen |
| Muted | `#e5e0d8` | Erased pencil / old paper |

**No grays.** Muted (`#e5e0d8`) is the "gray" of this system — but it
has warmth, like aged paper. Pure gray would break the physical metaphor.

**No gradients.** Paper doesn't gradient. Everything is flat.

**Post-it yellow:** `#fff9c4` — used specifically for feature card backgrounds
as a sticky-note treatment. Not a token color but a named use-case value.

---

## The Typography Mandate

**Kalam at 700** for all headings. It looks like a thick felt-tip marker.
Heavy strokes, slightly uneven letterforms, genuine hand-drawn character.

**Patrick Hand at 400** for all body text. Legible but undeniably handwritten.
It's what your smart friend's notes look like — not messy, but personal.

**Scale dramatically.** Headlines in this skill aren't just bigger — they
feel like someone emphasized them with a marker. 4xl to 6xl for major heads.
2xl to 3xl for subheads. The size contrast is part of the hand-emphasis feeling.

**Never Inter. Never Roboto. Never system-ui.** These fonts destroy the aesthetic
completely. One line of Inter in a hand-drawn interface is like a laser-printed
label in a handmade journal — it ruins the whole thing.

---

## Decorative Elements

These are what make the skill feel genuinely hand-crafted:

### Tape strips
```jsx
<div style={{
  position: "absolute", top: -12, left: "50%",
  transform: "translateX(-50%) rotate(-2deg)",
  width: 64, height: 24,
  background: "rgba(200, 200, 200, 0.35)",
  border: "1px solid rgba(0,0,0,0.1)",
}}>
```
A translucent gray rectangle rotated slightly. Looks like scotch tape.

### Thumbtack
```jsx
<div style={{
  position: "absolute", top: -12, left: "50%",
  transform: "translateX(-50%)",
  width: 20, height: 20, borderRadius: "50%",
  background: "#ff4d4d", border: "3px solid #2d2d2d",
}}>
```
A red circle with black border. Looks like a red pushpin.

### SVG squiggle connector (How It Works steps)
A hand-drawn wavy path connecting step numbers. Looks like someone drew
a connecting arrow between concepts on a whiteboard.

### Dashed-border overlays
`border-dashed border-2 border-[#ff4d4d]` circles or rectangles
placed around featured elements (popular pricing, highlighted feature).

---

## What Breaks This Aesthetic

| ❌ WRONG | ✓ RIGHT |
|---|---|
| `rounded-xl` on cards | Multi-value wobbly border-radius |
| `shadow-lg` (blurred) | `4px 4px 0px 0px #2d2d2d` hard offset |
| `font-family: Inter` | `font-family: 'Kalam'` or `'Patrick Hand'` |
| Pure black `#000000` | Pencil lead `#2d2d2d` |
| Pure white `#ffffff` backgrounds | Warm paper `#fdfbf7` with dot grid |
| `transition: all 500ms ease-out` | `transition: all 100ms` fast snap |
| `hover:rounded-xl` | `hover:rotate-1` or `hover:-rotate-2` |
| Soft button glow on hover | Hard offset reduces on hover (lift) |
| `ease-in-out` timing | `linear` or immediate — mechanical |
| Gray borders `#ccc` | Pencil lead `#2d2d2d` — same as text |
| Centered symmetric layouts | Slightly off-center, rotated elements |
| Uniform card sizes | Varied, overlapping, tilted cards |
