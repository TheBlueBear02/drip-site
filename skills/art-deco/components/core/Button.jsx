// ART DECO SKILL — Button.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Buttons are precision instruments — architectural elements, not UI affordances.
// Sharp corners (border-radius: 0) — always. No exceptions.
// Default: transparent bg, 2px gold border, gold text. On hover: gold fills in, text goes black.
// Transition is 300ms ease-out — theatrical, not instant. A mechanical click.
// Glow intensifies on hover: simulates backlit neon signage.
// Letter spacing 0.2em on all-caps text — mandatory, not decorative.
// Lucide icons: strokeWidth={1} — thin, precise, architectural.

import { useState } from "react";

const C = {
  bg:    "#0A0A0A",
  card:  "#141414",
  fg:    "#F2F0E4",
  gold:  "#D4AF37",
  pale:  "#F2E8C4",
  blue:  "#1E3D59",
  muted: "#888888",
};

const VARIANTS = {
  default: {
    bg:       "transparent",
    bgHover:  C.gold,
    color:    C.gold,
    clrHover: C.bg,
    border:   `2px solid ${C.gold}`,
    glow:     "0 0 20px rgba(212,175,55,0.35)",
  },
  solid: {
    bg:       C.gold,
    bgHover:  C.pale,
    color:    C.bg,
    clrHover: C.bg,
    border:   "none",
    glow:     "0 0 25px rgba(212,175,55,0.5)",
  },
  outline: {
    bg:       "transparent",
    bgHover:  C.blue,
    color:    C.gold,
    clrHover: C.fg,
    border:   `1px solid ${C.gold}`,
    glow:     "0 0 15px rgba(212,175,55,0.2)",
  },
  ghost: {
    bg:       "transparent",
    bgHover:  "rgba(212,175,55,0.08)",
    color:    C.muted,
    clrHover: C.gold,
    border:   `1px solid rgba(212,175,55,0.2)`,
    glow:     "none",
  },
};

const SIZES = {
  sm: { height: 40, padding: "0 20px", fontSize: 12 },
  md: { height: 48, padding: "0 28px", fontSize: 13 },
  lg: { height: 56, padding: "0 36px", fontSize: 14 },
  xl: { height: 64, padding: "0 44px", fontSize: 15 },
};

export function Button({
  children,
  variant = "default",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  onClick,
}) {
  const [hov, setHov] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.default;
  const s = SIZES[size] || SIZES.md;

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHov(true)}
      onMouseLeave={() => setHov(false)}
      disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
        height: s.height, padding: s.padding,
        fontFamily: "'Josefin Sans', sans-serif",
        fontWeight: 400, fontSize: s.fontSize,
        textTransform: "uppercase", letterSpacing: "0.2em",
        borderRadius: 0, // THE LAW
        border: v.border,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.4 : 1,
        outline: "none",
        width: fullWidth ? "100%" : undefined,
        background: hov ? v.bgHover : v.bg,
        color: hov ? v.clrHover : v.color,
        boxShadow: hov ? v.glow : "none",
        transition: "all 300ms ease-out",
      }}
    >
      {Icon && iconPosition === "left"  && <Icon size={s.fontSize + 2} strokeWidth={1} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={s.fontSize + 2} strokeWidth={1} />}
    </button>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Button>Reserve Your Place</Button>
// <Button variant="solid" size="lg">Join The Society</Button>
// <Button variant="outline" icon={ArrowRight}>Explore Collection</Button>
// <Button variant="ghost">Learn More</Button>
