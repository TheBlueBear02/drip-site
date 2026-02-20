# TOKENS — SHADOWS

## The Rule

**There are no shadows in this skill.**

Not subtle shadows. Not very light shadows. Not `box-shadow: 0 1px 2px rgba(0,0,0,0.05)`.
Zero shadows. None. This is non-negotiable.

---

## Why No Shadows

Shadows simulate depth — they suggest one object floating above another.
This design system creates depth through contrast, border weight, and inversion.

A card with a drop shadow says "I am elevated above the page."
A card with a thick black border says "I am defined, contained, architectural."
These communicate completely different personalities.

The moment you add a shadow, the design starts to look like a generic modern
website with the colors removed. The shadow is incompatible with the aesthetic.

---

## How Depth Is Created Without Shadows

### Method 1 — Border Weight Hierarchy
Heavier borders = more important elements.
```css
hairline:  1px solid #E5E5E5  /* Background separators */
thin:      1px solid #000000  /* Standard cards */
medium:    2px solid #000000  /* Emphasized cards */
thick:     4px solid #000000  /* Section rules */
ultra:     8px solid #000000  /* Maximum impact rules */
```

### Method 2 — Inversion
A black section on a white page creates maximum visual depth.
The most important element inverts. Nothing else needs to.

### Method 3 — Scale Contrast
A 128px headline next to 16px body text creates depth through scale.
The size difference communicates hierarchy without any shadows.

### Method 4 — Negative Space
Surrounding an element with whitespace isolates it, creating depth.
A card with generous padding and a thin border sits in space naturally.

---

## Focus States (Replacing Focus Rings)

The only "shadow-like" effect in this system is the focus outline.
It is not a shadow — it is a structural border.

```css
/* Button focus */
outline: 3px solid #000000;
outline-offset: 3px;

/* Input focus */
border-bottom-width: 4px; /* border thickens, no outline */

/* Interactive elements */
outline: 3px solid #000000;
outline-offset: 2px;
```

Always use `focus-visible` — not `focus` — to avoid showing outlines on mouse click.
