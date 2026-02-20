# RESPONSIVE — BREAKPOINTS

## Breakpoint System

| Name | Min Width | Tailwind | Description |
|---|---|---|---|
| mobile | 0px | base | Single column, reduced type scale |
| md | 768px | `md:` | Tablet, 2 columns |
| lg | 1024px | `lg:` | Desktop, full layout |
| xl | 1280px | `xl:` | Wide, max containers |

## Mobile Adaptations

**Headlines**: Scale down dramatically on mobile.
- 9xl (160px) → 5xl (56px) on mobile
- 8xl (128px) → 4xl (40px) on mobile
- 7xl (96px) → 3xl (32px) on mobile
Use `clamp()` for smooth scaling: `clamp(48px, 10vw, 160px)`

**Section rules**: 4px black rules stay — they are structural, not decorative.
Never reduce rule weight on mobile.

**Feature grids**: `grid-cols-1` on mobile, `md:grid-cols-2`, `lg:grid-cols-3`

**Pricing grid**: Stack to single column on mobile. Featured plan loses its
at-rest inversion on mobile — all plans start white, all invert on tap.

**Nav**: Links hidden on mobile — show only logo and CTA button.
Add a simple text menu on tap (no hamburger icon — use "Menu" text label).

**Padding**: `px-6` on mobile (24px) vs `px-12` on desktop (48px).
Section vertical padding: `py-16` (64px) on mobile vs `py-24` (96px) on desktop.

**Touch targets**: All interactive elements minimum 44×44px.
Buttons must have `min-height: 44px` on mobile.

**The monochrome drama must survive on mobile.**
Do not default to generic mobile patterns. The 4px rules,
the Playfair Display headings, the inversion — all stay.
Only the scale reduces.
