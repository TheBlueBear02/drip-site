# CHANGELOG — ART DECO SKILL

## v1.0.0 — Initial Release

### Files (22 total)

```
art-deco/
├── SKILL.md                          ← Entry point + The Three Laws
├── philosophy.md                     ← The Gatsby manifesto
├── skill.json                        ← CLI manifest
├── tokens/
│   ├── colors.md                     ← 4 materials: obsidian, cream, gold, blue
│   ├── typography.md                 ← Marcellus + Josefin Sans. UPPERCASE always.
│   ├── borders.md                    ← 0px radius. Corner brackets. Diamond frames.
│   ├── shadows.md                    ← Gold glows only. The press-flat mechanic.
│   ├── motion.md                     ← 300–500ms theatrical. Elevator doors.
│   ├── spacing.md                    ← py-32 minimum. Bilateral symmetry.
│   └── charts.md                     ← Post-it yellow tooltip → gold deco tooltip.
├── integration/
│   ├── globals.css                   ← Crosshatch mandatory. Corner bracket classes.
│   ├── tailwind.config.js            ← deco.* tokens, glow-* shadows, tracking-deco
│   └── setup.md                      ← Font wiring + verify snippet
├── components/
│   ├── core/Button.jsx               ← 4 variants, glow mechanic, 0px radius
│   ├── core/Input.jsx                ← Underline-only. Badge in geometric precision.
│   ├── display/Card.jsx              ← FeatureCard, PricingCard, TestimonialCard
│   ├── navigation/Navbar.jsx         ← Gold top line, scroll glow, mobile overlay
│   └── feedback/Spinner.jsx          ← Rotating diamond, gold shimmer, framed alert
├── examples/
│   ├── LandingPage.jsx               ← Full north star. All patterns present.
│   └── README.md                     ← Section annotations + pre-ship checklist
├── responsive/
│   └── breakpoints.md
└── meta/
    └── changelog.md
```

---

### Design Decisions

**Why Marcellus, not Playfair Display or Cormorant?**
Marcellus has Roman inscription letterforms — flat serifs with minimal thick/thin
contrast. This makes it read as ENGRAVED rather than printed, which is more
appropriate for Art Deco's architectural vocabulary. Playfair has beautiful contrast
but feels more Victorian-editorial. Cormorant is too delicate. Marcellus at
uppercase + 0.2em tracking reads as a nameplate on a skyscraper's façade.

**Why gold (#D4AF37) and not a brighter yellow-gold?**
#D4AF37 is "antique gold" — it has brown warmth rather than yellow purity. Brighter
yellows (like #FFD700) read as "sports trophy" or "warning label." #D4AF37 reads as
a worn coin, aged brass, 1920s jewellery. The subtle amber warmth against obsidian
black creates the specific patina that communicates "valuable heirloom," not "prize ribbon."

**Why glows and never drop shadows?**
Hard drop shadows require a directed light source. The 1920s lighting vocabulary
was backlighting, neon, and cinema marquees — light emanating from within or behind
objects, not cast from above. `box-shadow: 0 0 15px rgba(212,175,55,0.2)` simulates
this perfectly. It looks like a gold-framed object glowing under a spotlight rather
than sitting in sunlight. Drop shadows break the period metaphor completely.

**Why zero border-radius everywhere?**
The Art Deco movement was a direct rejection of Art Nouveau's organic curves.
Where Art Nouveau used flowing vines and natural forms, Art Deco responded with
hard geometry and mechanical precision. Even the smallest rounded corner (2px)
signals "modern SaaS" rather than "1925 luxury hotel." The geometric sharpness
is not optional — it IS the style.

**Why crosshatch texture is mandatory?**
Flat black (`#0A0A0A`) without texture reads as generic dark mode — the default
for thousands of products. The diagonal crosshatch at 4% gold opacity transforms
the background into something that evokes printed materials, etched metal, and
hatched engraving. It's barely perceptible individually but creates a subliminal
difference that makes the design feel physical rather than digital.

**Why Roman numerals?**
Arabic numerals are universal and timeless — they have no particular era association.
Roman numerals immediately signal "classical heritage, pre-modern." In the context
of a 1920s-inspired design, they reference Classical antiquity filtered through
Jazz Age aesthetics (the same fusion that gave us Egyptian motifs on skyscrapers).
I, II, III, IV in Marcellus is unmistakably Art Deco. 1, 2, 3, 4 in Marcellus
is just a fancy font.

---

### Differentiation vs Other Skills

| Aspect | Art Deco | Hand-Drawn | Botanical Organic | Linear Modern |
|---|---|---|---|---|
| Background | `#0A0A0A` + crosshatch | `#fdfbf7` + dot grid | `#F9F8F4` + grain | `#050506` near-black |
| Text | `#F2F0E4` cream | `#2d2d2d` pencil | `#2D3A31` forest | `#FFFFFF` white |
| Accent | `#D4AF37` metallic gold | `#ff4d4d` red marker | `#8C9A84` sage | Electric blue/purple |
| Border | 1px gold (30%→100%) | 2px pencil, wobbly | 1px stone, soft | 1px subtle glow |
| Shadow | Gold glow radial | Hard 4px offset flat | Soft diffused bloom | Electric glow |
| Button | Sharp rect, glow-fill | Oval wobbly, press-flat | Full pill, slow hover | Precise rect, glow |
| Radius | 0px always | Extreme multi-value | 24px / 9999px | 4–8px precise |
| Font | Marcellus + Josefin | Kalam + Patrick Hand | Playfair + Source Sans | Inter/Neue |
| Motion | 300–500ms theatrical | 100ms snap + jiggle | 500–700ms graceful | 200ms precise |
| Texture | Diagonal crosshatch gold | Dot-grid paper | SVG paper grain | Noise grain |
| Icons | strokeWidth 1 (thin) | strokeWidth 2.5–3 | strokeWidth 1.5 | strokeWidth 1–1.5 |
| Numbers | Roman numerals | Arabic, playful size | Arabic, restrained | Arabic, minimal |
| Vibe | 1920s luxury ballroom | Creative workshop | Botanical garden | Premium tech dark |
| For | Luxury brands, galleries | Creative tools, ed-tech | Wellness, artisanal | SaaS, fintech |
