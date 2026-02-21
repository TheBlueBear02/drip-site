# TOKENS — MOTION

## Fast and Snappy. Then Jiggle.

Nothing in this system moves slowly or gracefully. Interactions are fast
(100ms), snappy, and slightly wobbly. The jiggle (rotation on hover) is
the signature motion — it feels like picking up a piece of paper.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `snap` | 100ms | All hover interactions — fast |
| `bounce` | 3000ms | Looping decorative element bounces |

**Nothing between 100ms and looping.** No 300ms card hovers. No 500ms
transitions. Hand-drawn design is immediate and playful, not luxurious.

---

## Easing: Linear or immediate

No `ease-out`. No `ease-in-out`. This is paper being picked up and put down.
Use `linear` or `transition-none` for the fastest interactions.

---

## Core Interaction Patterns

### Button Press-Flat (most important)
```
Rest:   shadow: 4px 4px 0 #2d2d2d; transform: translate(0)
Hover:  shadow: 2px 2px 0 #2d2d2d; transform: translate(2px,2px)
Active: shadow: none;              transform: translate(4px,4px)
Timing: 100ms linear
```

### Card Jiggle on Hover
```
Rest:   rotate(Xdeg) — whatever tilt was applied at rest
Hover:  rotate(Xdeg ± 1deg) — tilt slightly more
Timing: 100ms linear
```

### Blog Card Lift
```
Rest:   shadow: 3px 3px 0 rgba(45,45,45,0.1)
Hover:  shadow: 6px 6px 0 #2d2d2d; translateY(-2px)
Timing: 100ms linear
```

### Decorative Bounce (looping)
```css
@keyframes hand-bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-8px); }
}
.animate-hand-bounce { animation: hand-bounce 3s ease-in-out infinite; }
```

### Rotation Values at Rest
```
Cards:         rotate(-1deg) or rotate(1deg) or rotate(-2deg)
Decorative:    rotate(2deg) or rotate(-3deg)
Labels/Tags:   rotate(1deg) or rotate(-1deg)
```

---

## Rules

1. **100ms for everything interactive.** Not 200, not 300. Fast.
2. **Jiggle, don't slide.** Rotation change is more hand-drawn than translation.
3. **Button active kills shadow entirely.** Not reduces — eliminates.
4. **Decorative bounces are 3s slow loops.** Not the same as interaction speed.
5. **Reduced motion:** Remove bounce animations, keep instant state changes.

---

# TOKENS — SPACING

## Contained Like a Sketchbook Page

The layout feels like it lives within the bounds of a notebook page.
Not sprawling. Max width contained. Sections have generous rhythm.

---

## Scale

| Usage | Value | Tailwind |
|---|---|---|
| Between elements | 16–32px | `gap-4 gap-8` |
| Card internal padding | 24–32px | `p-6 p-8` |
| Section vertical padding | 80px | `py-20` |
| Grid gaps | 32px | `gap-8` |
| Max width | 1024px | `max-w-5xl` |
| Focused content | 768px | `max-w-3xl` |

`py-20` (80px) for every section — consistent vertical rhythm throughout.

---

## Container

```
Max width:  max-w-5xl (1024px) — "sketchbook page" width
Padding:    px-6 (mobile) → px-8 (desktop)
```

Narrower than typical (`max-w-7xl`). The contained feel is intentional —
everything feels like it fits on one spread of a large notebook.

---

## Rotation Grid

Elements get mild tilts at rest:
```
Cards:    -1deg or +1deg alternating — gentle lean
Sections: 0deg — structure stays level
Labels:   +1 to +2deg — slight lean like a sticker placed
Decor:    -2 to +3deg — more dramatic tilt for energy
```

On hover, the tilt shifts by ±1deg (jiggle).

---

## Overlap Strategy

Elements can overlap using absolute positioning and z-index:
```
Step numbers:     z-10, elevated above everything
Background SVGs:  z-0, below content
Decorative blobs: z-0, absolute positioned
Tape/tack decor:  absolute, top-edge of parent
```
