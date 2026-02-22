# TOKENS — MOTION

## Theatrical and Mechanical. Like Elevator Doors.

Nothing organic or bouncy. Transitions are stage curtains, elevator grilles.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `quick` | 150ms | Color shifts, minor feedback |
| `standard` | 300ms | Buttons, links, borders |
| `theatrical` | 500ms | Card lifts, dramatic hovers |
| `cinematic` | 700ms | Hero entries, sunburst |

Easing: `ease-out` or `ease-in-out`. Never spring. Never linear.

---

## Core Patterns

### Card Lift
```
rest:   translateY(0), border 30% gold, glow-sm
hover:  translateY(-8px), border 100% gold, glow-lg
timing: 500ms ease-out
```

### Button Outline (default)
```
rest:   transparent bg, 2px gold border, gold text
hover:  gold bg, black text, glow-md
timing: 300ms ease-out
```

### Button Solid
```
rest:   gold bg, black text
hover:  pale-gold bg (#F2E8C4), glow-lg
timing: 300ms ease-out
```

### Corner Brackets
```
rest:   opacity 0.5
hover:  opacity 1.0
timing: 300ms ease-out
```

---

## Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
