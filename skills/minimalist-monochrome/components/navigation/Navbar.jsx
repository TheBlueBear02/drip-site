// MINIMALIST MONOCHROME SKILL — Navbar.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The navbar has a 4px black bottom border — the same thick rule that separates
// every major section on the page. This makes the nav feel like it's part of
// the architectural page structure, not a floating element on top of it.
//
// The logo uses Playfair Display italic — the editorial serif in its most elegant form.
// WHY: The italic adds a sense of a masthead — like the title of a magazine.
//
// Nav links get an underline on hover (border-bottom, not text-decoration).
// The CTA button inverts on hover. Both interactions are 100ms linear.
//
// No hamburger menu icon — just stacked text links on mobile.

import { useState } from "react";

export function Navbar({
  brand = "Brand",
  links = [],
  ctaLabel = "Begin →",
  onCtaClick,
  sticky = true,
  inverted = false, // for dark header variant
}) {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

  const bg = inverted ? "#000000" : "#FFFFFF";
  const fg = inverted ? "#FFFFFF" : "#000000";
  const borderColor = inverted ? "#FFFFFF" : "#000000";

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 48px",
      background: bg,
      // WHY: 4px bottom border — same as section rules. Nav is part of the architecture.
      borderBottom: `4px solid ${borderColor}`,
      position: sticky ? "sticky" : "static",
      top: 0,
      zIndex: 100,
    }}>

      {/* LOGO — Playfair Display italic masthead style */}
      <span style={{
        fontFamily: '"Playfair Display", Georgia, serif',
        fontSize: 22,
        fontWeight: 700,
        fontStyle: "italic",
        color: fg,
        letterSpacing: "-0.01em",
        cursor: "pointer",
      }}>
        {brand}
      </span>

      {/* NAV LINKS */}
      {links.length > 0 && (
        <div style={{ display: "flex", gap: 40 }}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onMouseEnter={() => setHoveredLink(i)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: fg,
                textDecoration: "none",
                // WHY: border-bottom appears on hover — the "thicken" interaction pattern
                borderBottom: hoveredLink === i ? `2px solid ${fg}` : "2px solid transparent",
                paddingBottom: 2,
                transition: "border-color 100ms linear",
                cursor: "pointer",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      {/* CTA — primary button, inverts on hover */}
      <button
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
        onClick={onCtaClick}
        style={{
          background: ctaHovered ? bg : fg,
          color: ctaHovered ? fg : bg,
          border: `2px solid ${fg}`,
          borderRadius: 0,
          padding: "10px 24px",
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "background 100ms linear, color 100ms linear",
          outline: "none",
          whiteSpace: "nowrap",
        }}
      >
        {ctaLabel}
      </button>
    </nav>
  );
}

// ── ALERT ─────────────────────────────────────────────────────────────────────
// MINIMALIST MONOCHROME SKILL — Alert.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Alerts in this system don't use color for semantic meaning (no red errors, no green success).
// They use border weight and inversion. A critical alert inverts to black.
// A standard alert has a thick left border. A subtle alert has a hairline.
//
// WHY NO COLOR: Adding red for errors would break the monochrome system.
// The weight of the border and the inversion communicate severity instead.

export function Alert({ type = "info", title, children }) {
  const variants = {
    info: {
      bg: "#FFFFFF",
      color: "#000000",
      borderLeft: "4px solid #000000",
      padding: "16px 20px",
    },
    success: {
      bg: "#F5F5F5",
      color: "#000000",
      borderLeft: "4px solid #000000",
      padding: "16px 20px",
    },
    warning: {
      bg: "#FFFFFF",
      color: "#000000",
      borderLeft: "8px solid #000000",  // thicker = more urgent
      padding: "16px 20px",
    },
    error: {
      // WHY: Error inverts — black background communicates maximum urgency
      // without needing red
      bg: "#000000",
      color: "#FFFFFF",
      borderLeft: "none",
      padding: "16px 24px",
    },
  };

  const prefixes = {
    info:    "Note —",
    success: "Done —",
    warning: "Warning —",
    error:   "Error —",
  };

  const v = variants[type] || variants.info;

  return (
    <div style={{
      ...v,
      borderRadius: 0,
      fontFamily: '"Source Serif 4", serif',
    }}>
      {title && (
        <div style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 6,
          color: v.color,
          opacity: 0.6,
        }}>
          {prefixes[type]} {title}
        </div>
      )}
      {children && (
        <div style={{ fontSize: 15, color: v.color, lineHeight: 1.6 }}>
          {children}
        </div>
      )}
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Navbar brand="Drip" links={[{ label: "Skills", href: "/skills" }]} ctaLabel="Begin →" />
// <Navbar inverted brand="Drip" />  ← white text on black nav
//
// <Alert type="info" title="Update available">A new version is ready.</Alert>
// <Alert type="error" title="Failed">Your session has expired.</Alert>
// <Alert type="warning">You are approaching your usage limit.</Alert>
