# RESPONSIVE — HAND-DRAWN SKILL

## The Prime Directive: Keep the Wobble on Every Screen

The aesthetic must survive every screen size. Wobbly borders, hard shadows,
and handwritten fonts do NOT disappear on mobile. What changes: layout,
size, and which decorative elements are visible. What never changes: the
fundamental sketchy character.

---

## Breakpoints

| Name | px | When |
|---|---|---|
| base | 0px | Mobile first |
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Desktops |

---

## Typography Scaling

| Element | Mobile | Desktop |
|---|---|---|
| Hero h1 | `clamp(36px, 9vw, 72px)` | 72px |
| Section h2 | `text-4xl` (36px) | `text-5xl` (48px) |
| Subsection h3 | `text-2xl` (24px) | `text-3xl` (30px) |
| Body | `text-lg` (18px) | `text-xl` (20px) |
| Button | `text-lg` (18px) | `text-xl` or `text-2xl` |
| Badge/label | `text-sm` (14px) | `text-base` (16px) |
| Stat value | `text-3xl` (30px) | `text-5xl` (48px) |

---

## Layout Changes by Section

### Navbar
- Mobile: Logo + CTA button + hamburger (compact row)
- Mobile menu: Full-width overlay with dashed dividers between Kalam links
- Desktop: Logo + all links + CTA button inline

### Hero
- Mobile: Single column. Badge → headline → body → CTAs → visual cards stacked
- Desktop: `grid-cols-2` — text left, tilted cards right
- Floating annotation arrow: `hidden md:block`
- Bouncing star decoration: `hidden md:block`

### Features
- Mobile: `grid-cols-1` — all three cards stacked
- Desktop: `grid-cols-3` — three across
- Rotation maintained on all sizes
- Tape/tack decorations maintained on all sizes

### How It Works
- Mobile: `grid-cols-1` — steps stacked vertically
- Desktop: `grid-cols-3` — three across with squiggle connector
- SVG squiggle connector: `hidden md:block`
- Step blob numbers: slightly smaller on mobile (80px → 60px)

### Stats
- Mobile: `grid-cols-2` — 2×2 grid
- Desktop: `grid-cols-4` — single row
- Blob shapes: `h-24 w-24` mobile → `h-32 w-32` desktop

### Testimonial
- Mobile: Full width card, internal padding reduces
- Desktop: `max-w-2xl` centered

### Pricing
- Mobile: `grid-cols-1` — stacked
- Desktop: `grid-cols-3`
- Featured card scale: `md:scale-105` — only on desktop
- Dashed circle highlight: `hidden md:block`

### CTA Section
- Mobile: Stacked. Headline above. Buttons full-width.
- Desktop: Flex row, side-by-side

---

## Components

### Buttons
- All sizes: `min-height: 48px` (touch target)
- Mobile primary CTAs: `width: 100%`
- Press-flat mechanic: works on touch via `onTouchStart/End`
- Wobbly radius: maintained at all sizes

### Cards
- Rotation: maintained at all sizes (`rotate(-1deg)` still applies on mobile)
- Shadow: maintained (hard offset never removed for "performance")
- Padding: `p-6` mobile → `p-8` desktop
- Tape/tack decorations: maintained

### Inputs
- Height: `min-height: 52px` — touch-friendly
- `font-size: 16px` minimum — prevents iOS auto-zoom
- Wobbly radius: maintained

---

## What MUST NOT Change at Any Breakpoint

| Rule | Why |
|---|---|
| Multi-value wobbly border-radius | Single most important visual signature |
| Hard 4px offset shadows (zero blur) | Removing blur "fixes" the aesthetic completely |
| Kalam + Patrick Hand fonts | One line of Inter destroys the entire vibe |
| `#fdfbf7` warm paper | Never swap to white — it goes cold |
| `#2d2d2d` pencil lead | Never go pure black — it's too harsh |
| Dot-grid texture | Even on mobile the paper needs grain |
| Button press-flat mechanic | The interaction personality on all devices |
| Rotation at rest on cards | Slight tilts are maintained — never straightened |
| 100ms linear transitions | Speed is part of the personality |
