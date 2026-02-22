# TOKENS — CHARTS & GRAPHS

## AGENT RULES FOR EXISTING CHARTS

Restyle only. Never rewrite data logic, swap libraries, or change structure.
**May change:** Colors, fonts, container styling, tooltip, legend.
**Must not change:** Library, data, chart type, component names.

---

## Data Colors

| Token | Value | Usage |
|---|---|---|
| `data-1` | `#D4AF37` | Primary — gold |
| `data-2` | `#F2E8C4` | Secondary — pale gold |
| `data-3` | `#1E3D59` | Third — midnight blue |
| `data-4` | `#888888` | Fourth — pewter |
| `data-positive` | `#D4AF37` | Gains |
| `data-negative` | `#888888` | Losses (never red) |

---

## Chart Container

```jsx
<div style={{
  background: "#141414",
  border: "1px solid rgba(212,175,55,0.3)",
  borderRadius: 0,
  boxShadow: "0 0 15px rgba(212,175,55,0.15)",
  padding: 32, position: "relative",
}}>
  {/* Mandatory corner brackets */}
  <div aria-hidden="true" style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "1px solid #D4AF37", borderLeft: "1px solid #D4AF37" }} />
  <div aria-hidden="true" style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "1px solid #D4AF37", borderRight: "1px solid #D4AF37" }} />
  <h3 style={{ fontFamily: "'Marcellus', serif", textTransform: "uppercase", letterSpacing: "0.15em", fontSize: 16, color: "#D4AF37", marginBottom: 24 }}>
    CHART TITLE
  </h3>
  {/* Chart here */}
</div>
```

---

## Tooltip

```jsx
<div style={{
  background: "#141414", border: "1px solid #D4AF37", borderRadius: 0,
  padding: "12px 16px", boxShadow: "0 0 15px rgba(212,175,55,0.3)",
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
| Grid lines | `rgba(212,175,55,0.08)` — dashed |
| Axis labels | `#888888`, Josefin Sans 300 |
| Border radius | `0px` everywhere |
| Bar fill | `#D4AF37` at 80% |
| Line stroke | `#D4AF37`, 2px |
| Curve type | `linear` — geometric, not organic |
