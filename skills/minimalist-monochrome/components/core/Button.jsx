// MINIMALIST MONOCHROME SKILL — Button.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The primary button is pure black — no border, no radius, no shadow.
// It is the most direct expression of "black IS the accent" principle.
// On hover it inverts completely: black becomes white, white border appears.
// This 100ms inversion is instant and decisive — like a light switch.
//
// The label is always uppercase JetBrains Mono with wide tracking.
// WHY: It reads as a command, not a suggestion. "BEGIN." not "Begin now →"
//
// The secondary button is the inverse at rest: white with black border.
// On hover it fills black. Same inversion principle, opposite starting point.
//
// There is never a border radius. There is never a shadow.
// There is never an easing curve — 100ms linear only.

import { useState } from "react";

const TRANSITION = "background 100ms linear, color 100ms linear, border-color 100ms linear";

const variants = {
  primary: {
    rest: {
      background: "#000000",
      color: "#FFFFFF",
      border: "2px solid #000000",
    },
    hover: {
      background: "#FFFFFF",
      color: "#000000",
      border: "2px solid #000000",
    },
  },
  secondary: {
    rest: {
      background: "#FFFFFF",
      color: "#000000",
      border: "2px solid #000000",
    },
    hover: {
      background: "#000000",
      color: "#FFFFFF",
      border: "2px solid #000000",
    },
  },
  ghost: {
    // WHY: Ghost buttons look like text. No border, no fill.
    // Hover adds an underline — the subtlest possible emphasis.
    rest: {
      background: "transparent",
      color: "#000000",
      border: "2px solid transparent",
      textDecoration: "none",
    },
    hover: {
      background: "transparent",
      color: "#000000",
      border: "2px solid transparent",
      textDecoration: "underline",
    },
  },
  // Inverted variant — for use inside black sections
  "primary-inverted": {
    rest: {
      background: "#FFFFFF",
      color: "#000000",
      border: "2px solid #FFFFFF",
    },
    hover: {
      background: "#000000",
      color: "#FFFFFF",
      border: "2px solid #FFFFFF",
    },
  },
};

const sizes = {
  sm: { padding: "10px 20px", fontSize: "11px" },
  md: { padding: "14px 28px", fontSize: "12px" },
  lg: { padding: "18px 36px", fontSize: "13px" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  arrow = false,   // adds → suffix — use for directional CTAs
  disabled = false,
  onClick,
}) {
  const [hovered, setHovered] = useState(false);
  const v = variants[variant] || variants.primary;
  const s = sizes[size];
  const currentStyle = hovered ? v.hover : v.rest;

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      style={{
        // Shape — always rectangular
        borderRadius: 0,

        // Layout
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        whiteSpace: "nowrap",
        cursor: disabled ? "not-allowed" : "pointer",

        // Typography — always monospace, always uppercase
        // WHY: Labels in this system are commands, not invitations
        fontFamily: '"JetBrains Mono", monospace',
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        textDecoration: currentStyle.textDecoration || "none",

        // Sizing
        padding: s.padding,
        fontSize: s.fontSize,

        // Visual
        ...currentStyle,

        opacity: disabled ? 0.4 : 1,

        // Transition — linear only, 100ms maximum
        transition: TRANSITION,

        outline: "none",
        userSelect: "none",
      }}
    >
      {children}
      {arrow && <span style={{ marginLeft: 4 }}>→</span>}
    </button>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Button variant="primary" size="lg" arrow>Begin</Button>
// <Button variant="secondary">Learn more</Button>
// <Button variant="ghost">Read the full story</Button>
// <Button variant="primary-inverted">Enter</Button>  ← inside black sections
// <Button disabled>Unavailable</Button>
