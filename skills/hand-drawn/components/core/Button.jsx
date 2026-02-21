// HAND-DRAWN SKILL — Button.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Buttons use the wobbly multi-value border-radius — never `rounded-full` or `rounded-xl`.
// At rest: white background, pencil border, hard 4px offset shadow.
// On hover: fills with accent red, shadow reduces to 2px (paper lifts).
// On active: shadow disappears entirely, button translates to where shadow was (press-flat).
// Font is Patrick Hand — human and approachable, not corporate.
// Transition is 100ms linear — snappy, not luxurious.

import { useState } from "react";

const RADIUS = {
  primary:   "100px 20px 80px 20px / 20px 80px 20px 100px",
  secondary: "15px 100px 15px 80px / 80px 15px 100px 15px",
  outline:   "80px 15px 100px 15px / 15px 100px 15px 80px",
};

const VARIANTS = {
  primary: {
    bg:       "#ffffff",
    bgHover:  "#ff4d4d",
    color:    "#2d2d2d",
    clrHover: "#ffffff",
    border:   "3px solid #2d2d2d",
  },
  secondary: {
    bg:       "#e5e0d8",
    bgHover:  "#2d5da1",
    color:    "#2d2d2d",
    clrHover: "#ffffff",
    border:   "3px solid #2d2d2d",
  },
  accent: {
    bg:       "#ff4d4d",
    bgHover:  "#e03d3d",
    color:    "#ffffff",
    clrHover: "#ffffff",
    border:   "3px solid #2d2d2d",
  },
  ghost: {
    bg:       "transparent",
    bgHover:  "#e5e0d8",
    color:    "#2d2d2d",
    clrHover: "#2d2d2d",
    border:   "3px dashed #2d2d2d",
  },
};

const SIZES = {
  sm: { height: 40,  padding: "0 20px", fontSize: 16 },
  md: { height: 52,  padding: "0 28px", fontSize: 18 },
  lg: { height: 60,  padding: "0 36px", fontSize: 20 },
  xl: { height: 68,  padding: "0 44px", fontSize: 22 },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
  onClick,
}) {
  const [hov, setHov] = useState(false);
  const [pressed, setPressed] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const r = RADIUS[variant] || RADIUS.primary;

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => !disabled && setHov(true)}
      onMouseLeave={() => { setHov(false); setPressed(false); }}
      onMouseDown={() => !disabled && setPressed(true)}
      onMouseUp={() => setPressed(false)}
      disabled={disabled}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
        height: s.height, padding: s.padding,
        fontFamily: "'Patrick Hand', cursive",
        fontSize: s.fontSize,
        border: v.border,
        borderRadius: r,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        outline: "none",
        userSelect: "none",
        width: fullWidth ? "100%" : undefined,
        background: hov ? v.bgHover : v.bg,
        color: hov ? v.clrHover : v.color,
        // Shadow mechanics: rest=4px, hover=2px(lift), active=none(flat)
        boxShadow: pressed
          ? "none"
          : hov
          ? "2px 2px 0px 0px #2d2d2d"
          : "4px 4px 0px 0px #2d2d2d",
        // Transform mechanics: hover=slight shift, active=full shift to shadow pos
        transform: pressed
          ? "translate(4px, 4px)"
          : hov
          ? "translate(2px, 2px)"
          : "none",
        transition: "all 100ms linear",
      }}
    >
      {Icon && iconPosition === "left"  && <Icon size={s.fontSize} strokeWidth={2.5} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={s.fontSize} strokeWidth={2.5} />}
    </button>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Button>Get Started</Button>
// <Button variant="secondary">Learn More</Button>
// <Button variant="accent" size="lg">Try it Free</Button>
// <Button variant="ghost" icon={ArrowRight}>Read the docs</Button>
// <Button fullWidth size="xl">Join the waitlist</Button>
