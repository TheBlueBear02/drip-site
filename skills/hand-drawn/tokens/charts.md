# TOKENS — CHARTS & GRAPHS

## AGENT RULES FOR EXISTING CHARTS

If the project already has charts, restyle them only. Do not rewrite logic,
change data structures, swap libraries, or modify component file names.

**What you MAY change:** Bar colors, line colors, chart container card styling,
grid line opacity, tooltip background and font, legend font.

**What you MUST NOT change:** Chart library, data fetching/transformation,
chart type, component structure, business logic.

---

## Library

**Recommended:** Recharts (React)

```bash
npm install recharts
```

---

## Data Colors

| Token | Value | Usage |
|---|---|---|
| `data-1` | `#2d2d2d` | First series — pencil lead |
| `data-2` | `#ff4d4d` | Second series — red marker |
| `data-3` | `#2d5da1` | Third series — blue pen |
| `data-4` | `#e5e0d8` | Fourth series — muted paper |
| `data-5` | `#fff9c4` | Fifth series — post-it yellow |
| `data-positive` | `#2d5da1` | Gains — blue pen |
| `data-negative` | `#ff4d4d` | Losses — red marker |
| `data-neutral` | `#e5e0d8` | Flat — erased paper |

---

## Chart Container

```jsx
{/* Hard shadow card with wobbly border */}
<div style={{
  background: "#ffffff",
  border: "2px solid #2d2d2d",
  borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
  boxShadow: "4px 4px 0px 0px #2d2d2d",
  padding: "28px",
  transform: "rotate(-0.5deg)",
}}>
  {/* Title */}
  <h3 style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 22, color: "#2d2d2d", marginBottom: 6 }}>
    Chart Title
  </h3>
  <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 14, color: "rgba(45,45,45,0.6)", marginBottom: 20 }}>
    Subtitle or date range
  </p>
  {/* Chart here */}
</div>
```

---

## Typography in Charts

| Element | Font | Size | Notes |
|---|---|---|---|
| Chart title | Kalam 700 | 22px | Marker heading feel |
| Axis labels | Patrick Hand 400 | 12px | Hand-written feel |
| Tick values | Patrick Hand 400 | 12px | |
| Legend labels | Patrick Hand 400 | 13px | |
| Tooltip value | Kalam 700 | 20px | Large, reads like a note |
| Tooltip label | Patrick Hand 400 | 12px | |

---

## Grid & Axes

```
Grid lines:   rgba(45,45,45,0.08) — faint pencil lines
Style:        dashed (matches dashed aesthetic)
Axis lines:   rgba(45,45,45,0.2)
Zero line:    #2d2d2d — solid pencil line
```

Dashed grid lines reinforce the graph-paper/notebook aesthetic.

---

## Chart Types

### Bar Chart
```
Fill:         series color — solid, flat (no gradient)
Border:       1px solid #2d2d2d on bars (outlined feel)
Radius:       0px — square tops on bars (drawn, not rounded)
Hover:        slightly darker + small outline
```

### Line Chart
```
Stroke:       2.5px, series color
Dot:          show always (like plotted points on graph paper)
Dot size:     4px, filled
Curve:        linear — hand-drawn lines are straight segments
```

### Area Chart
```
Stroke:       2px, series color
Fill:         series color at 15% opacity — light shading
Curve:        linear
```

### Donut/Pie
```
No radius rounding on segments — raw pie slices
Stroke:       3px #fdfbf7 between segments (paper gap)
Center:       Kalam 700 for value, Patrick Hand for label
```

---

## Tooltip

```jsx
<div style={{
  background: "#fff9c4",      /* post-it yellow */
  border: "2px solid #2d2d2d",
  borderRadius: "8px 3px 6px 3px / 3px 6px 3px 8px",
  boxShadow: "3px 3px 0px 0px #2d2d2d",
  padding: "10px 14px",
  fontFamily: "'Patrick Hand', cursive",
  transform: "rotate(1deg)",
}}>
  <div style={{ fontSize: 11, color: "rgba(45,45,45,0.6)", marginBottom: 4 }}>{label}</div>
  <div style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 20, color: "#2d2d2d" }}>{value}</div>
</div>
```

Post-it yellow tooltip — feels like a sticky note annotation on the chart.

---

## Quick Reference

| Property | Value |
|---|---|
| Data color 1 | `#2d2d2d` |
| Data color 2 | `#ff4d4d` |
| Data color 3 | `#2d5da1` |
| Positive | `#2d5da1` |
| Negative | `#ff4d4d` |
| Grid lines | `rgba(45,45,45,0.08)` dashed |
| Tooltip bg | `#fff9c4` (post-it) |
| Container border | `2px solid #2d2d2d` |
| Container shadow | `4px 4px 0px 0px #2d2d2d` |
| Container radius | wobbly multi-value |
| Font — titles | Kalam 700 |
| Font — labels | Patrick Hand 400 |
| Bar tops | square (radius 0) |
| Line curve | linear (straight segments) |
