# EXAMPLES — README

## LandingPage.jsx — THE NORTH STAR

Study this file completely before building any page with the minimalist-monochrome skill.

**What to notice in each section:**

**Nav:** Playfair Display italic masthead logo. JetBrains Mono uppercase nav links.
4px black border-bottom — same rule that separates every section. The nav is
architecturally part of the page, not floating above it.

**Hero:** Headline at 9xl (`clamp(64px, 11vw, 160px)`). This is intentionally too big.
That's the point. The decorative element is a thick rule + small bordered square —
editorial punctuation, not an icon or illustration. The command line has a split
design: black filled `$` prompt + white bordered input area.

**Stats:** The only inverted section. Pure black background, white text, white
vertical line texture. Numbers in Playfair Display 9xl. Labels in JetBrains Mono 10px
at 40% opacity. This section is where the eye stops. One inverted section per page.

**Features:** 3×2 grid with shared borders — creates a unified panel, not separate cards.
Each cell inverts completely on hover (100ms linear). No icons — numbers `01`–`06`
in muted monospace serve as visual anchors. The Playfair Display italic title
closes the section heading.

**Pricing:** Featured plan (Pro) inverts at rest — black background, white text.
Other plans hover to inverted. Prices in Playfair Display 56px. Feature list uses
thin Lucide checkmarks (strokeWidth 1.5), never colored circles.

**Testimonials:** Oversized quotation mark at 6% opacity — graphic element, not decoration.
Quotes in Playfair Display italic with a 4px left border. Authors in 10px mono uppercase.
Section uses diagonal line texture.

**CTA:** Full black background with inverted vertical line texture. Headline at 9xl italic.
Two buttons — primary (white fill, black text) and secondary (outline, fills on hover).
8px ultra rule separates it from the footer.

---

## What Every Page Must Have Before Shipping

- [ ] Pure white `#FFFFFF` background — never off-white, never gray
- [ ] 4px black horizontal rules between ALL major sections
- [ ] At least one texture layer per section (lines, grid, or diagonal)
- [ ] Playfair Display for all headings — minimum 3xl
- [ ] JetBrains Mono for all labels, buttons, metadata, and eyebrows
- [ ] Zero border radius on every element
- [ ] Zero shadows anywhere
- [ ] Zero accent colors — only black and white
- [ ] One inverted (black bg) section per page — maximum one
- [ ] Feature cards/pricing tiers invert on hover (100ms linear)
- [ ] Buttons invert on hover (100ms linear)
- [ ] Nav links get border-bottom on hover (not text-decoration)
- [ ] Input borders thicken on focus (2px → 4px, bottom only)
- [ ] All interactive focus states use `3px solid #000` outline
- [ ] Headlines are bigger than they feel comfortable — push one size larger
