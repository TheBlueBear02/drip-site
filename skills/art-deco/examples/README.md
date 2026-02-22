# ART DECO — Examples Guide

## LandingPage.jsx — The North Star

The complete reference implementation. Every design pattern lives here.
Read it completely before building any new page or component.

---

## What to Notice in Each Section

### TOP ACCENT LINE (Navbar)
```jsx
<div style={{ height: 2, background: `linear-gradient(to right, transparent, #D4AF37 30%, #D4AF37 70%, transparent)`, opacity: 0.5 }} />
```
A thin gold gradient bar sits above the navbar content. Never a solid full-width line —
always faded at both ends, like a backlit cornice strip. This appears on every page load.

### NAVBAR
- Brand in Marcellus, uppercase, letterSpacing 0.35em — wider than body headings
- Nav links in Josefin Sans 11px, uppercase, 0.15em tracking, pewter → gold on hover
- Link separator: `1px solid rgba(212,175,55,0.1)` right border between items
- CTA button: thin gold border, fills solid gold on hover (300ms ease-out)
- Scrolled state: bottom border intensifies to full gold + gold glow below nav bar
- Mobile overlay: dark crosshatch full-screen, oversized Marcellus links, centered sunburst

### HERO
- Sunburst radial: `radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)` — centered behind content
- Vertical accent columns: absolute-positioned 1px gold gradient lines at ±340px from center
- Eyebrow: gold divider lines + "Est. MCMXXV" in 0.3em tracking — sets the era immediately
- Two-line headline: first line in cream, second in gold with text-shadow glow — maximum drama
- Diamond divider between headline and body: `rotate(45deg) border: 1px solid gold` flanked by lines
- Social proof uses Roman numerals (XII, XLVI, IV) in Marcellus — never Arabic numbers

### FEATURES (6-card grid)
- Roman numerals (I–VI) above each icon — tiny pewter text, 0.2em tracking
- Diamond icon container: `rotate(45deg)` outer wrapper + `rotate(-45deg)` inner content
- Expanding gold rule: `width: hov ? 40px : 20px` — grows on hover (400ms ease-out)
- Card border: 20% gold at rest → 100% gold on hover with glow bloom
- CardTitle in Marcellus gold, 0.15em tracking, uppercase — distinguishes from body
- Card lift: `translateY(-8px)` at 500ms ease-out — theatrical, not snappy

### HOW IT WORKS (4-column step layout)
- Large Roman numerals (I–IV) as step display — 48px Marcellus, 20% gold opacity at rest → full gold on hover
- Column separation via `borderRight: 1px solid rgba(212,175,55,0.12)` — architectural columns
- Section background: slightly darker `#080808` — creates depth between sections
- Each column has an expanding gold rule matching the feature card pattern

### PRICING (3-column)
- Roman numeral tier labels (I, II, III) — essential for Art Deco character
- Featured card: double border weight (2px vs 1px), gold background wash, slight scale (1.02)
- Diamond bullet points: `width: 6, height: 6, transform: rotate(45deg), background: #D4AF37`
- Price in Marcellus, 40px — the number itself is an architectural element
- Divider between label and price: narrow gold rule (40px wide)

### TESTIMONIALS
- Opening gold quote mark: 48px Marcellus, 0.25 opacity — ornamental, not functional
- Author initials in diamond container — same 45deg rotation as feature icons, smaller (36px)
- Quote in italic Josefin Sans 300 — the only italic in the system (for contrast)
- Card transition: border opacity 15% → 60% on hover (softer than feature cards)

### CTA SECTION
- Second sunburst radial — reuses the hero motif for visual bookending
- Three-part decorative divider: `line + diamond + line` before and after heading
- Split headline: cream first line + gold second line — repeats hero pattern for recognition
- Ghost button variant: pewter text/border, fills to gold on hover — secondary CTA

### FOOTER
- Brand repeated in Marcellus with roman-numeral year range: MCMXXV–MMXXV
- Column headers in Marcellus gold 11px, 0.2em tracking — architectural column labels
- Footer links in Josefin Sans 300, pewter → gold on hover (inline event handler)
- Copyright in Roman numeral year format
- Section borderTop: `1px solid rgba(212,175,55,0.1)` — never solid gold in footer

---

## SectionHeading Component — Always Use This

Every section uses the `SectionHeading` component (defined inline in LandingPage).
It provides:
1. Gold divider lines flanking the heading (gradient fade at each end)
2. Sub-rule: two short lines + rotated diamond accent between them
3. Optional subtitle in Josefin Sans 300 below

**Never write a raw `<h2>` in a section without the flanking dividers.**

---

## Pre-Ship Checklist

- [ ] `#0A0A0A` obsidian black background (never charcoal, never #111)
- [ ] `#F2F0E4` champagne cream text (never white #fff)
- [ ] `#D4AF37` metallic gold for all accents
- [ ] Crosshatch diagonal texture on EVERY section background
- [ ] `border-radius: 0` on every visible element — no exceptions
- [ ] Gold GLOWS `(0 0 Xpx rgba(212,175,55,Y))` — never drop shadows
- [ ] Marcellus on all headings, UPPERCASE, letter-spacing 0.2em+
- [ ] Josefin Sans 300 for all body text
- [ ] Corner L-brackets on all cards (position: absolute)
- [ ] Gold divider lines flanking every section heading
- [ ] Diamond icon containers (rotate 45deg) on all feature cards
- [ ] Expanding gold rule on feature card hover (20px → 40px)
- [ ] Roman numerals for step numbers and pricing tiers
- [ ] Sunburst radial gradient in hero (and CTA) section
- [ ] Thin gold accent line at very top of navbar
- [ ] Social proof uses Roman numerals in Marcellus
- [ ] Vertical architectural accent lines in hero section
- [ ] All section padding: py-32 minimum (128px)
- [ ] Lucide icons: strokeWidth={1} — thin, architectural
- [ ] No Tailwind `shadow-*` utilities — glow only
- [ ] Card lift on hover: translateY(-8px) at 500ms ease-out
- [ ] Border: rgba(212,175,55,0.2) at rest → #D4AF37 full on hover
