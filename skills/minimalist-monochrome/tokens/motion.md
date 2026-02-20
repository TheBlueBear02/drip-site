# TOKENS — MOTION

## Motion Philosophy

This design system favors stillness over movement.
When motion exists, it is binary and immediate — like a light switch.
Not a dimmer. A switch.

The instant state change communicates decisiveness and confidence —
qualities central to the luxury editorial personality.
A button that slowly fades to inverted looks hesitant.
A button that inverts in 100ms looks authoritative.

**The test**: If an animation could appear on a generic startup website,
it is wrong for this skill. No bouncing. No floating. No parallax.
No slow fades. No easing curves that overshoot.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `instant` | 0ms | Button clicks, toggle states |
| `fast` | 100ms | Hover inversions, border thickening |
| `deliberate` | 200ms | Image scale on hover (blog cards only) |
| `never` | — | Anything longer than 200ms is not this skill |

---

## Easing

There is one easing value in this system: `linear`.

Not `ease`. Not `ease-in-out`. Not any cubic-bezier overshoot curve.
Linear motion matches the binary, architectural character of the design.

```css
transition-timing-function: linear;
```

For the rare 200ms image scale:
```css
transition-timing-function: ease-out; /* acceptable only for image scale */
```

---

## Interaction Patterns

### The Inversion — Primary Hover Pattern
The defining interaction of this skill. Background and text swap completely.

```css
/* Resting state */
background: #FFFFFF;
color: #000000;
border: 2px solid #000000;

/* Hover state */
background: #000000;
color: #FFFFFF;
border: 2px solid #000000; /* border stays — now white on black, still visible */

transition: background 100ms linear, color 100ms linear;
```

Applied to: feature cards, pricing tiers, secondary buttons.

### The Thicken — Input and Link Hover
Border weight increases without color change.

```css
/* Input focus */
border-bottom: 2px solid #000000; /* default */
border-bottom: 4px solid #000000; /* focus — thickens instantly */
transition: border-bottom-width 100ms linear;

/* Link hover */
border-bottom: 0px solid transparent; /* default */
border-bottom: 1px solid #000000;    /* hover — appears instantly */
```

### The Scale — Image Hover (blog cards only)
The only case where a 200ms transition is acceptable.
Image scales up slightly and loses grayscale filter.

```css
/* Image default */
transform: scale(1);
filter: grayscale(100%);

/* Image hover */
transform: scale(1.05);
filter: grayscale(0%);

transition: transform 200ms ease-out, filter 200ms ease-out;

/* Containing border also thickens */
border: 2px solid #000000; /* default */
border: 4px solid #000000; /* hover */
transition: border-width 100ms linear;
```

### The Appear — Navigation Underline
Nav links get an underline that appears on hover.

```css
/* Default */
border-bottom: 2px solid transparent;

/* Hover */
border-bottom: 2px solid #000000;

transition: border-color 100ms linear;
```

---

## What Must Never Be Animated

- Background gradients (there are none in this skill)
- Opacity fades for page sections (use instant appearance)
- Bouncing, spring, or overshoot motion
- Floating or parallax scrolling
- Rotating elements
- Skeleton loading pulses (use static placeholders)
- Any animation longer than 200ms
- Scale animations on anything except images
- Any animation that draws attention to itself

---

## CSS Implementation

```css
/* Standard hover transition */
.interactive {
  transition: background 100ms linear, color 100ms linear, border-color 100ms linear;
}

/* Focus states — no transition, instant */
.interactive:focus-visible {
  outline: 3px solid #000000;
  outline-offset: 3px;
}

/* Image hover — the exception */
.card-image {
  transition: transform 200ms ease-out, filter 200ms ease-out;
}
```
