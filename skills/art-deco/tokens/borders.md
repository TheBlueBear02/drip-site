# TOKENS — BORDERS & GEOMETRY

## Zero Radius. Everywhere.

Sharp angles are non-negotiable. Art Deco derives beauty from geometric
precision. Any rounded corner breaks the architectural metaphor.

---

## Border Rules

```
Standard card:       1px solid rgba(212,175,55,0.3)  — 30% gold at rest
Card on hover:       1px solid #D4AF37               — full gold
Button border:       2px solid #D4AF37               — always full gold
Input bottom:        2px solid #D4AF37               — bottom only
Section divider:     1px solid rgba(212,175,55,0.15)
Thin accent line:    1px solid #D4AF37               — decorative h-rules
```

Border-radius: `0px` everywhere. No exceptions.

---

## Corner L-Brackets (Mandatory on Cards)

Position at opposite corners. Top-left + bottom-right, or top-right + bottom-left:

```jsx
{/* Top-left bracket */}
<div aria-hidden="true" style={{
  position: "absolute", top: 8, left: 8, width: 16, height: 16,
  borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37",
  opacity: 0.5, transition: "opacity 300ms",
}} />

{/* Bottom-right bracket */}
<div aria-hidden="true" style={{
  position: "absolute", bottom: 8, right: 8, width: 16, height: 16,
  borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37",
  opacity: 0.5, transition: "opacity 300ms",
}} />
```

On card hover: opacity increases to 1.

---

## Diamond Icon Container

Icons in 45-degree rotated squares — the primary Art Deco motif:

```jsx
<div style={{
  transform: "rotate(45deg)",
  border: "1px solid #D4AF37",
  width: 56, height: 56,
  display: "flex", alignItems: "center", justifyContent: "center",
  background: "rgba(212,175,55,0.08)",
}}>
  <div style={{ transform: "rotate(-45deg)" }}>
    <Icon size={22} strokeWidth={1} color="#D4AF37" />
  </div>
</div>
```

---

## Heading Dividers

Short gold lines on either side of section headings:

```jsx
<div style={{ display: "flex", alignItems: "center", gap: 24, justifyContent: "center" }}>
  <div style={{ height: 1, width: 96, background: "linear-gradient(to right, transparent, #D4AF37)" }} />
  <h2>SECTION TITLE</h2>
  <div style={{ height: 1, width: 96, background: "linear-gradient(to left, transparent, #D4AF37)" }} />
</div>
```

These lines are NEVER full-width — always measured (w-16 to w-32).

---

## Double-Border Frame (Images)

Never use plain images. Always frame-within-frame:

```jsx
<div style={{ border: "1px solid rgba(212,175,55,0.5)", padding: 8 }}>
  <div style={{ border: "1px solid rgba(212,175,55,0.2)" }}>
    <img style={{ filter: "grayscale(60%)", display: "block" }} ... />
  </div>
</div>
```
