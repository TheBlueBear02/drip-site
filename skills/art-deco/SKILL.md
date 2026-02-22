---
name: art-deco
version: 1.0.0
stack: React + Tailwind CSS
category: luxury
mood: [opulent, geometric, theatrical, timeless, architectural]
---

# ART DECO SKILL — THE GATSBY AESTHETIC

Opulence, mathematical precision, and architectural grandeur. This skill
captures the Roaring Twenties — jazz-age prosperity expressed through hard
geometry, extreme contrast, and metallic gold on obsidian black. It's
"The Great Gatsby" meets Fritz Lang's "Metropolis": champagne towers in
skyscraper ballrooms, chrome elevator grilles, sunburst marquees.

This is maximalist restraint. Every element is intentional and ornamental,
yet precisely placed. Not for soft SaaS startups — for luxury brands,
premium services, cultural institutions, and products that want to feel
like heirlooms.

---

## HOW TO USE THIS SKILL

### STEP 1 — Read before you code
Read these files in order. Philosophy first.

1. `philosophy.md`          ← The Gatsby manifesto. Geometry, contrast, theatricality.
2. `tokens/colors.md`       ← Obsidian black, champagne cream, metallic gold. Nothing else.
3. `tokens/typography.md`   ← Marcellus headings, Josefin Sans body. ALL-CAPS always.
4. `tokens/borders.md`      ← 0px radius. Double frames. Corner embellishments.
5. `tokens/shadows.md`      ← Glows not shadows. Gold halos. No soft drops.
6. `tokens/motion.md`       ← Theatrical, mechanical. 300–500ms. Elevator doors.
7. `tokens/spacing.md`      ← py-32 sections. Symmetry. Verticality. Stage presence.

### STEP 2 — Integration
Follow `integration/setup.md`. Font imports, crosshatch background texture,
and the CSS custom property definitions must be in place before any component
will read as Art Deco. Without the background texture, the design is empty.

### STEP 3 — Study the north star
Read `examples/LandingPage.jsx` completely before building any page.
Diagonal crosshatch, sunburst radial, rotated diamond icons, corner
L-brackets, stepped dividers, Roman numerals — all must be present.

### STEP 4 — Build components
Every component file has WHY annotations. Read them before copying.

---

## THE THREE LAWS

### Law 1: Zero border-radius. Everywhere.
`border-radius: 0` on every container, button, card, and input. No exceptions.
The only softness permitted is `2px` in rare functional contexts.
Art Deco geometry demands sharp angles. A rounded corner breaks the entire
architectural metaphor. Even `rounded-sm` (4px) is forbidden.

### Law 2: Gold glows, never drop-shadows.
`box-shadow: 0 0 15px rgba(212,175,55,0.2)` — not `drop-shadow(4px 4px 8px rgba(0,0,0,0.5))`.
This simulates 1920s neon and backlit signage. On hover it intensifies:
`0 0 25px rgba(212,175,55,0.4)`. Hard drop shadows are modern and digital.
Glows are theatrical and vintage. Never use Tailwind's built-in `shadow-*`.

### Law 3: All-caps typography with extreme tracking.
Every heading: uppercase, `letter-spacing: 0.2em` minimum.
Marcellus for display. Josefin Sans for body.
No lowercase headings. No tight tracking on display text.
The scale contrast is extreme — hero text at 72–96px, body at 18px.
The drama is the point.

---

## WHAT YOU CAN OVERRIDE
- Specific corner embellishment positions (top-left/bottom-right vs opposite)
- Sunburst intensity (radial gradient opacity)
- Whether to use Roman numerals or styled Arabic numbers
- Glow radius (15px to 30px range)

## WHAT YOU MUST NEVER OVERRIDE
- **Border-radius**: Must be 0px everywhere visible. Non-negotiable.
- **Gold (#D4AF37)**: The primary accent. Never substitute with yellow, orange, or warm white.
- **Background (#0A0A0A)**: True near-black. Never charcoal or dark gray.
- **Gold glows**: Never switch to drop shadows. Glow or nothing.
- **Marcellus font for headings**: The Roman-serif shapes ARE the Art Deco identity.
- **All-caps headings**: Case is a design decision here. Never sentence case.
- **Crosshatch background texture**: Must always be present. Dead without it.
- **0px border-radius**: If you add rounding, the skill reads as generic dark UI.

---

## STACK REQUIREMENTS
- React 18+
- Tailwind CSS 3+
- Marcellus (Google Fonts, weight 400)
- Josefin Sans (Google Fonts, weight 300/400)
- Lucide React (strokeWidth 1 — thin, precise, architectural)
