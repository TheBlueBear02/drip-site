# TOKENS — SPACING

## Base Unit: 8px

Generous spacing. Dramatic negative space is active design in this system —
not emptiness, but breathing room that makes black elements heavier and more powerful.

---

## Spacing Scale

| Token | Value | Tailwind | Usage |
|---|---|---|---|
| `space-1` | 8px | `p-2` | Tight — label padding, inline gaps |
| `space-2` | 16px | `p-4` | Standard — small component padding |
| `space-3` | 24px | `p-6` | Card padding (standard) |
| `space-4` | 32px | `p-8` | Card padding (generous) |
| `space-5` | 48px | `p-12` | Section inner spacing |
| `space-6` | 64px | `p-16` | Between content blocks |
| `space-7` | 96px | `py-24` | Standard section vertical padding |
| `space-8` | 128px | `py-32` | Generous section vertical padding |
| `space-9` | 160px | `py-40` | Maximum — hero section padding |

---

## Layout Widths

| Token | Value | Usage |
|---|---|---|
| `max-w-content` | 1152px (`max-w-6xl`) | Standard content container |
| `max-w-narrow` | 768px | Text-heavy pages, editorial content |
| `max-w-wide` | 1440px | Full-width typographic statements |

---

## Section Spacing Rules

- Standard sections: `py-24` (96px) vertical padding
- Hero section: `py-40` (160px) vertical padding — maximum drama
- Between heading and body: `mb-8` (32px) — give headings room to breathe
- Between body and CTA: `mt-12` (48px) — generous separation
- Between section label and heading: `mb-6` (24px)

---

## Negative Space Rules

### The Bigger the Headline, the More Space It Needs
An 8xl headline needs at least 64px above and below it.
Crowding a large headline immediately reduces its power.

### Sections Must Not Touch Each Other's Content
The 4px horizontal rule between sections is structural.
Add padding above and below the rule — the rule is not the spacer, the padding is.

### Cards Need Internal Breathing Room
Minimum padding inside any card: 24px.
Preferred: 32px or 48px for cards with important content.
A card that feels tight looks cheap. Generous padding communicates luxury.

### Column Gaps Are Structural
In multi-column layouts, the gap between columns should be visible and deliberate.
Minimum column gap: 48px. For editorial layouts: 64px–96px.
