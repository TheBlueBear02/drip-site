# PHILOSOPHY — ART DECO

## The Reference World

Imagine the lobby of the Chrysler Building at midnight. The chevron tile
floor reflects the indirect lighting. Geometric brass grilles frame the
elevator doors. A stepped pyramid ceiling rises overhead, ringed with
murals of machines and eagles. Every surface has an opinion. Nothing is
accidental. The room announces: something important happens here.

Now imagine building a software interface from that lobby.

That is this skill.

---

## Why This Aesthetic Exists

This is a rejection of anonymous modernism. Against:
- Dark mode gray cards with subtle borders
- SF Pro or Inter at regular weight
- Rounded corners that soften every edge
- Drop shadows that simulate "depth"
- Neutral palettes that offend nobody

It says: the machine age was beautiful. Mathematical precision can be opulent.
A screen can feel like lacquered rosewood and polished brass rather than glass
and plastic. Design can announce rather than whisper.

---

## The Physics of This World

### Surfaces are black lacquer and gold leaf
Background is `#0A0A0A` — obsidian black, near absolute, with a diagonal
crosshatch texture at ~4% opacity (repeating gold lines at 45° and -45°).
This texture is what separates the design from generic dark mode.
Without it, the black is dead. With it, the black has depth.

Cards sit on this surface at `#141414` — a step lighter, like a black
velvet tray holding jewelry.

### Geometry is ornament
Every shape serves a structural AND decorative purpose simultaneously.
Diamond-rotated icon containers. Stepped corner brackets. Horizontal rule
dividers balanced on either side of headings. Double-line borders (frame
within frame). These aren't decorations added after the fact — they ARE
the design. Remove them and you have generic dark UI. Keep them and you
have 1925.

### Gold is used like a material, not a color
`#D4AF37` — metallic gold — appears only where it matters. It doesn't
flood the design. It accents: borders, headings, icon fills, button states,
divider lines, corner brackets. Every gold element is a deliberate decision.

Gold at 30% opacity for borders at rest. Gold at 100% on hover or active.
This transition from ghost to full gold is the primary interaction language
of this system.

### Glows simulate the era, not physics
The 1920s were the decade of neon and cinema marquees. Light sources were
theatrical — illuminated from within, glowing rather than casting.
`box-shadow: 0 0 15px rgba(212,175,55,0.2)` simulates a gold-lit element.
On hover: `0 0 25px rgba(212,175,55,0.4)`. This is NOT a physics simulation.
It's a material simulation. Never a hard drop shadow.

---

## The Color System

**Four core values. Nothing else.**

| Token | Hex | Material | Role |
|---|---|---|---|
| Background | `#0A0A0A` | Obsidian black | Canvas |
| Card | `#141414` | Rich charcoal | Card surfaces |
| Foreground | `#F2F0E4` | Champagne cream | All body text |
| Gold | `#D4AF37` | Metallic gold | Borders, headings, accents |
| Blue | `#1E3D59` | Midnight blue | Secondary states |
| Muted | `#888888` | Pewter | Secondary text |

**No other colors.** If you find yourself reaching for a teal, purple, or
warm orange — stop. The entire power of this palette is its restraint.
Gold on black needs nothing else to be luxurious.

---

## The Typography Mandate

**Marcellus** for all headings. Its Roman serif structures have architectural
gravity. It reads like an engraved nameplate, not a printed page.

**Josefin Sans** for all body text. Geometric, vintage, with Art Deco
proportions. Never Inter. Never system fonts. Never sans-serifs without character.

**All headings are uppercase with extreme tracking.**
`text-transform: uppercase; letter-spacing: 0.2em`
This is not decorative — it is structural. The wide tracking creates the
ceremonial pace that Art Deco typography demands. Remove it and Marcellus
becomes generic. Keep it and it becomes monumental.

**Scale is extreme.** Hero at 72–96px. Section heads at 48–56px.
Body at 18px. The gap between them is the drama.

---

## The Mandatory Decorations

### 1. Diagonal Crosshatch Background
```css
background-image:
  repeating-linear-gradient(45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px),
  repeating-linear-gradient(-45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px);
```
This must be on the page background. It is the difference between
a dark website and an Art Deco website.

### 2. Rotated Diamond Icon Containers
```jsx
<div style={{ transform: "rotate(45deg)", border: "1px solid #D4AF37", width: 56, height: 56 }}>
  <div style={{ transform: "rotate(-45deg)" }}>
    <Icon size={22} strokeWidth={1} />
  </div>
</div>
```
Icons sit in 45-degree rotated squares. Content counter-rotates.
This is the single most recognizable Art Deco UI motif.

### 3. Corner L-Brackets
Absolute-positioned 2-sided borders at card corners:
```jsx
<div style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37" }} />
<div style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37" }} />
```

### 4. Heading Dividers
Gold horizontal lines flanking section headings:
```jsx
<div style={{ display: "flex", alignItems: "center", gap: 16 }}>
  <div style={{ height: 1, width: 96, background: "#D4AF37", opacity: 0.6 }} />
  <h2>SECTION TITLE</h2>
  <div style={{ height: 1, width: 96, background: "#D4AF37", opacity: 0.6 }} />
</div>
```

### 5. Roman Numerals
Step numbers and tier labels use I, II, III, IV in Marcellus.
This is optional but strongly preferred for "How It Works" and pricing.

---

## What Breaks This Aesthetic

| ❌ WRONG | ✓ RIGHT |
|---|---|
| `rounded-lg` on cards | `border-radius: 0` always |
| `shadow-lg` drop shadows | `0 0 20px rgba(212,175,55,0.3)` glow |
| Inter or Roboto | Marcellus + Josefin Sans |
| Sentence case headings | UPPERCASE with `letter-spacing: 0.2em` |
| Blue or purple accents | Gold (#D4AF37) only |
| Soft hover transitions | Theatrical 300–500ms mechanical |
| Plain dark background | Crosshatch diagonal texture mandatory |
| Circular icon containers | 45-degree diamond containers |
| Arbitrary icon positions | Centered, symmetrical, architectural |
| Full-width horizontal rules | Short measured gold dividers (w-24) |
| Gradient backgrounds | Solid obsidian with subtle texture only |
| Bright saturated colors | Only black, cream, gold, midnight blue |
