// MINIMALIST MONOCHROME SKILL — Card.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Cards in this system are bordered rectangles — nothing more.
// No shadow, no radius, no elevation. The border defines the space.
// On hover, the card inverts completely — this is the primary emphasis
// mechanism of the entire design system applied at component scale.
//
// The hover inversion happens at 100ms linear. It is immediate and decisive.
// The card does not lift, float, or scale. It flips. Like a printing plate.
//
// The featured/inverted variant is black at rest — it starts emphasized
// and is used sparingly (one per section, maximum).

import { useState } from "react";

export function Card({
  children,
  variant = "default",    // "default" | "inverted" | "borderless" | "muted"
  interactive = false,    // enables hover inversion
  padding = "32px",
  style: externalStyle,
}) {
  const [hovered, setHovered] = useState(false);

  const variants = {
    default: {
      rest:  { background: "#FFFFFF", color: "#000000", border: "1px solid #000000" },
      hover: { background: "#000000", color: "#FFFFFF", border: "1px solid #000000" },
    },
    inverted: {
      // WHY: Starts black — used for the single most important card per section
      rest:  { background: "#000000", color: "#FFFFFF", border: "none" },
      hover: { background: "#111111", color: "#FFFFFF", border: "none" },
    },
    borderless: {
      rest:  { background: "transparent", color: "#000000", border: "none" },
      hover: { background: "transparent", color: "#000000", border: "none" },
    },
    muted: {
      rest:  { background: "#F5F5F5", color: "#000000", border: "1px solid #E5E5E5" },
      hover: { background: "#000000", color: "#FFFFFF", border: "1px solid #000000" },
    },
  };

  const v = variants[variant] || variants.default;
  const currentStyle = interactive && hovered ? v.hover : v.rest;

  return (
    <div
      onMouseEnter={() => interactive && setHovered(true)}
      onMouseLeave={() => interactive && setHovered(false)}
      style={{
        borderRadius: 0,  // non-negotiable
        padding,
        ...currentStyle,
        transition: interactive
          ? "background 100ms linear, color 100ms linear, border-color 100ms linear"
          : "none",
        cursor: interactive ? "pointer" : "default",
        ...externalStyle,
      }}
    >
      {children}
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Card interactive>Standard card with hover inversion</Card>
// <Card variant="inverted">Featured/emphasized card — starts black</Card>
// <Card variant="borderless" padding="0">Content without borders</Card>
// <Card variant="muted">Subtle background card</Card>
