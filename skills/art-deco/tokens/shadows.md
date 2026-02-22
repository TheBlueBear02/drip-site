# TOKENS — SHADOWS & GLOWS

## Glows Simulate Neon. Never Drop Shadows.

1920s light sources glowed from within — cinema marquees, neon signs,
backlit panels. This system simulates that. Hard drop shadows are modern
and digital. Glows are theatrical and vintage.

---

## Glow Scale

| Token | CSS Value | Usage |
|---|---|---|
| `glow-xs` | `0 0 8px rgba(212,175,55,0.15)` | Subtle depth on cards |
| `glow-sm` | `0 0 15px rgba(212,175,55,0.2)` | Card rest state |
| `glow-md` | `0 0 20px rgba(212,175,55,0.3)` | Button hover |
| `glow-lg` | `0 0 25px rgba(212,175,55,0.4)` | Card hover, featured |
| `glow-xl` | `0 0 40px rgba(212,175,55,0.5)` | Hero elements, max drama |
| `glow-focus` | `0 0 0 2px #D4AF37, 0 0 0 4px #0A0A0A` | Keyboard focus ring |

---

## Interaction Pattern

```
Card rest:   border rgba(212,175,55,0.3) + glow-sm
Card hover:  border #D4AF37 (100%) + glow-lg + translateY(-4px)
Button rest: border #D4AF37 + transparent bg
Button hover: bg #D4AF37 + color #0A0A0A + glow-md
Input rest:  bottom-border #D4AF37
Input focus: bottom-border #F2E8C4 + glow below: 0 4px 10px rgba(212,175,55,0.2)
```

---

## Rules

1. **Zero blur on any non-glow shadow.** Only radial glows allowed.
2. **All glows use gold color value (#D4AF37).** Never generic black/gray shadows.
3. **Never Tailwind's built-in `shadow-*` utilities.** They use black/gray — cold.
4. **Glow intensifies on interaction.** Rest → hover = 0.2 → 0.4 opacity.
5. **Focus state uses ring, not glow.** `0 0 0 2px #D4AF37` ring for accessibility.

---

# TOKENS — MOTION

## Theatrical and Mechanical. Like Elevator Doors.

Nothing organic or bouncy. Transitions are stage curtains rising, mechanical
precision buttons engaging, elevator grilles sliding. Dramatic, satisfying.

---

## Duration Scale

| Token | Value | Usage |
|---|---|---|
| `quick` | 150ms | Minor feedback (color shifts) |
| `standard` | 300ms | Buttons, links, border transitions |
| `theatrical` | 500ms | Card lifts, reveals, dramatic hovers |
| `cinematic` | 700ms | Hero section entries, sunburst expand |

---

## Easing: `ease-out` or `ease-in-out`

Mechanical deceleration. Never bouncy (`spring`). Never linear (robotic).

---

## Core Patterns

### Card Hover
```
rest:    translateY(0), border rgba(212,175,55,0.3), glow-sm
hover:   translateY(-8px), border #D4AF37 (100%), glow-lg
timing:  500ms ease-out
```

### Button — Default (outline)
```
rest:    bg transparent, border #D4AF37 2px, color #D4AF37
hover:   bg #D4AF37, color #0A0A0A, glow-md
timing:  300ms ease-out
```

### Button — Solid
```
rest:    bg #D4AF37, color #0A0A0A
hover:   bg #F2E8C4 (pale gold), glow-lg
timing:  300ms ease-out
```

### Link Hover
```
rest:    color #888888
hover:   color #D4AF37, underline
timing:  200ms ease-out
```

### Corner Brackets
```
rest:    opacity 0.5
hover:   opacity 1.0
timing:  300ms ease-out
```

### Diamond Icon
```
rest:    background rgba(212,175,55,0.05)
hover:   background rgba(212,175,55,0.15), glow-sm
timing:  300ms ease-out
```

---

# TOKENS — SPACING

## Ceremonial Scale. Stage Presence.

Everything breathes. Generous vertical rhythms create architectural hierarchy.
Sections feel like floors of a building. Dividers act like columns.

---

## Scale

| Usage | Value | Tailwind |
|---|---|---|
| Between elements | 8–24px | `gap-2 gap-6` |
| Card padding | 32px | `p-8` |
| Section vertical | 128px | `py-32` |
| Hero padding | 160px+ | `py-40` |
| Heading margin | 64px | `mb-16` |
| Grid gaps | 32px | `gap-8` |

`py-32` (128px) is the minimum for any section. This generous space is
what gives Art Deco its "stage presence" — elements don't crowd each other.

---

## Container Widths

```
Max primary:   max-w-6xl (1152px) — most sections
Max wide:      max-w-7xl (1280px) — grids, testimonials
Max focused:   max-w-5xl (1024px) — hero, CTAs, testimonials
Max narrow:    max-w-3xl (768px) — centered text, FAQs
```

---

## Symmetry Rules

Art Deco layouts are symmetrical. Center everything:
- Hero text: `text-center`, margin auto
- Section headings: centered with balanced dividers
- Feature grids: even column counts (2, 3, not 5)
- CTA sections: stacked center-aligned

**Never:** off-center text blocks without a deliberate asymmetric intention.
**Always:** bilateral symmetry as the default composition.

---

# TOKENS — CHARTS & GRAPHS

## AGENT RULES FOR EXISTING CHARTS

If the project already has charts, restyle only. Do not rewrite logic, swap
libraries, or change component structure.

**May change:** Colors, fonts, border styles, container, tooltip, legend.
**Must not change:** Library, data logic, chart type, component names.

---

## Library: Recharts

```bash
npm install recharts
```

---

## Data Colors

| Token | Value | Usage |
|---|---|---|
| `data-1` | `#D4AF37` | Primary series — gold |
| `data-2` | `#F2E8C4` | Second series — pale gold |
| `data-3` | `#1E3D59` | Third series — midnight blue |
| `data-4` | `#888888` | Fourth series — pewter |
| `data-positive` | `#D4AF37` | Gains — gold |
| `data-negative` | `#888888` | Losses — pewter (never red) |
| `data-neutral` | `rgba(212,175,55,0.3)` | Flat — ghost gold |

---

## Chart Container

```jsx
<div style={{
  background: "#141414",
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: 0,
  boxShadow: "0 0 15px rgba(212,175,55,0.15)",
  padding: 32,
  position: "relative",
}}>
  {/* Corner brackets */}
  <div aria-hidden="true" style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "1px solid #D4AF37", borderLeft: "1px solid #D4AF37" }} />
  <div aria-hidden="true" style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "1px solid #D4AF37", borderRight: "1px solid #D4AF37" }} />

  <h3 style={{ fontFamily: "'Marcellus', serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: 16, color: "#D4AF37", marginBottom: 8 }}>
    CHART TITLE
  </h3>
  <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 13, color: "#888888", marginBottom: 24 }}>
    Subtitle / date range
  </p>
  {/* Chart here */}
</div>
```

---

## Tooltip

```jsx
<div style={{
  background: "#141414",
  border: "1px solid #D4AF37",
  borderRadius: 0,
  padding: "12px 16px",
  boxShadow: "0 0 15px rgba(212,175,55,0.3)",
  fontFamily: "'Josefin Sans', sans-serif",
}}>
  <div style={{ fontSize: 11, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{label}</div>
  <div style={{ fontFamily: "'Marcellus', serif", fontSize: 22, color: "#D4AF37" }}>{value}</div>
</div>
```

---

## Quick Reference

| Property | Value |
|---|---|
| Data primary | `#D4AF37` |
| Data secondary | `#F2E8C4` |
| Grid lines | `rgba(212,175,55,0.08)` |
| Axis labels | `#888888`, Josefin Sans 300, 11px |
| Tooltip bg | `#141414` |
| Tooltip border | `1px solid #D4AF37` |
| Border radius | `0px` everywhere |
| Font — titles | Marcellus, uppercase, 0.15em |
| Bar fill | `#D4AF37` at 80% |
| Line stroke | `#D4AF37`, 2px |
