# RESPONSIVE — ART DECO SKILL

## The Prime Directive: Preserve Grandeur at Every Viewport

The aesthetic must survive every screen size. Glows, gold borders, Marcellus
headings, crosshatch texture, and zero border-radius are non-negotiable at
all breakpoints. What changes: layout structure, font scale, and which
decorative elements render. What never changes: the fundamental Art Deco
character.

---

## Breakpoints

| Name | px | When |
|---|---|---|
| base | 0px | Mobile first |
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Desktops |
| xl | 1280px | Large desktops |

---

## Typography Scaling

| Element | Mobile | Desktop |
|---|---|---|
| Hero H1 | `clamp(36px, 7vw, 96px)` | 96px |
| Section H2 | `clamp(24px, 4vw, 48px)` | 48px |
| Subsection H3 | `text-xl` → `text-2xl` | 20–24px |
| Card title | 14–16px | 16–18px |
| Body | `text-base` (16px) | `text-lg` (18px) |
| Button | 11px | 12–13px |
| Caption | 10px | 11px |

All headings: always Marcellus, always uppercase, always tracking 0.2em+.
Never reduce tracking on mobile — it's structural, not decorative.

---

## Layout Changes by Section

### Navbar
- Mobile: Logo + CTA + hamburger (compact row, 60px height)
- Desktop: Logo + all links inline + CTA + hamburger
- Mobile menu: Full-screen architectural overlay — not a slide-in drawer
- Gold top accent line: maintained at all sizes

### Hero
- Mobile: Single column. All centered text. Vertical accent lines: hidden.
- Desktop: Same centered layout with vertical column accents.
- Sunburst radial: scale down on mobile (400px → 800px) but always present.
- Social proof: 2-column grid on mobile, 3-column inline on desktop.

### Features
- Mobile: `grid-cols-1` — cards stacked.
- Tablet: `grid-cols-2`.
- Desktop: `grid-cols-3`.
- Diamond icon containers: maintained at all sizes (52px → 44px on mobile).
- Corner brackets: maintained at all sizes.
- Rotation: maintained — never simplified on mobile.

### How It Works
- Mobile: `grid-cols-1` — steps stacked. Column separators hidden (borderRight removed).
- Tablet: `grid-cols-2`.
- Desktop: `grid-cols-4` — full row with column dividers.
- Roman numeral size: 40px mobile → 48px desktop.

### Pricing
- Mobile: `grid-cols-1` — all cards stacked at same scale.
- Tablet: `grid-cols-1` — still stacked (pricing needs focus).
- Desktop: `grid-cols-3` — side by side. Featured card at scale(1.02).

### Testimonials
- Mobile: `grid-cols-1`.
- Tablet: `grid-cols-2`.
- Desktop: `grid-cols-3`.

### CTA Section
- Mobile: Stacked. Full-width buttons.
- Desktop: Centered, constrained max-width.

### Footer
- Mobile: Stacked. Brand first, then nav columns, then legal.
- Desktop: Flex row with space-between.

---

## Components

### Buttons
- All sizes: `min-height: 48px` — touch target always met.
- Mobile: Often full-width (`width: 100%`) for primary CTA buttons.
- Gold glow on hover: maintained (visual feedback still works on touch via :active).
- Letter spacing: never reduced. 0.2em always.

### Cards
- Padding: `p-6` (24px) on mobile → `p-8` (32px) on desktop.
- Hover lift (translateY -8px): maintained on touch through :active state.
- Corner brackets: maintained at all sizes (size reduces: 14px → 10px).
- Gold border opacity transition: maintained.

### Inputs
- Height: `min-height: 48px` — touch target.
- `font-size: 16px` minimum — prevents iOS auto-zoom on focus.
- Bottom-only border: maintained. No boxing on mobile.

### Navbar (mobile specifics)
- Height: 60px mobile → 72px desktop.
- Logo tracking: reduce slightly (0.25em mobile vs 0.35em desktop).
- Hamburger: 44×44px touch target minimum.
- Mobile overlay: full viewport height, centered content, crosshatch texture.

---

## Decorative Elements by Breakpoint

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Crosshatch texture | ✓ Always | ✓ Always | ✓ Always |
| Sunburst radial | ✓ Smaller | ✓ | ✓ Full size |
| Vertical accent lines | ✗ Hidden | ✗ Hidden | ✓ Visible |
| Diamond icon containers | ✓ Smaller | ✓ | ✓ |
| Corner brackets | ✓ Smaller | ✓ | ✓ |
| Gold divider lines | ✓ Shorter | ✓ | ✓ Full 96px |
| How It Works connectors | ✗ Hidden | ✓ Partial | ✓ |
| Hero column accent lines | ✗ Hidden | ✗ Hidden | ✓ |

---

## What MUST NOT Change at Any Breakpoint

| Rule | Why |
|---|---|
| `border-radius: 0` | Rounded corners destroy the geometric identity |
| Marcellus uppercase headings | The typography IS the brand |
| Gold glows (not drop shadows) | Neon/backlit simulation is the era |
| `#0A0A0A` background + crosshatch | Flat black = generic dark mode |
| `#D4AF37` metallic gold | The only accent permitted |
| Josefin Sans 300 for body | Swap to system font = instant generic |
| Corner brackets on cards | The #1 visual recognition trigger |
| Roman numerals for numbers | Arabic numbers break the period feel |
| Letter-spacing 0.2em on headings | Tight tracking = wrong era entirely |
| Gold border on cards (even at 20%) | No border = generic charcoal card |
