// MINIMALIST MONOCHROME SKILL — Input.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Inputs use a bottom-border-only pattern — not a full box border.
// WHY: A full box border on an input looks like a form field from 2012.
// The bottom border only looks editorial — like a line on a form in a
// luxury hotel or a signature block in an architectural drawing.
//
// On focus, the border thickens from 2px to 4px. No color change.
// No glow. No ring. Just weight. The input announces itself through
// structural change, not color.
//
// Labels are always uppercase JetBrains Mono — they are metadata, not decoration.

import { useState } from "react";

export function Input({
  label,
  placeholder = "",
  value,
  onChange,
  type = "text",
  error,
  hint,
  disabled = false,
  required = false,
}) {
  const [focused, setFocused] = useState(false);

  const borderWidth = focused ? "4px" : "2px";
  const borderColor = error ? "#000000" : "#000000";

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}>
      {label && (
        <label style={{
          // WHY: Monospace uppercase labels read as field identifiers, not decorative text
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: error ? "#000000" : "#525252",
        }}>
          {label}
          {required && <span style={{ marginLeft: 4 }}>*</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          // WHY: Bottom border only — editorial line, not a box
          background: "transparent",
          border: "none",
          borderBottom: `${borderWidth} solid ${borderColor}`,
          borderRadius: 0,
          padding: "12px 0",
          fontSize: 16,
          fontFamily: '"Source Serif 4", serif',
          color: "#000000",
          outline: "none",
          width: "100%",
          opacity: disabled ? 0.4 : 1,
          cursor: disabled ? "not-allowed" : "text",
          transition: "border-bottom-width 100ms linear",
        }}
      />

      {error && (
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#000000",
        }}>
          {error}
        </span>
      )}
      {hint && !error && (
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          letterSpacing: "0.06em",
          color: "#525252",
        }}>
          {hint}
        </span>
      )}
    </div>
  );
}

// ── BADGE ─────────────────────────────────────────────────────────────────────
// MINIMALIST MONOCHROME SKILL — Badge.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Badges in this system are rectangular — never pills.
// They use black borders and monospace type.
// There are only two color states: black on white, and white on black (inverted).
// No accent colors. No colored backgrounds. Emphasis through inversion only.

export function Badge({ children, variant = "default" }) {
  const variants = {
    default:  { bg: "#FFFFFF", color: "#000000", border: "1px solid #000000" },
    inverted: { bg: "#000000", color: "#FFFFFF", border: "1px solid #000000" },
    muted:    { bg: "#F5F5F5", color: "#525252", border: "1px solid #E5E5E5" },
    outline:  { bg: "transparent", color: "#000000", border: "1px solid #000000" },
  };

  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: 0,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...v,
    }}>
      {children}
    </span>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Input label="Full name" placeholder="Your name" required />
// <Input label="Message" type="text" hint="Max 500 characters" />
// <Input label="Email" error="Invalid email address." />
//
// <Badge>New</Badge>
// <Badge variant="inverted">Featured</Badge>
// <Badge variant="muted">Archived</Badge>
// <Badge variant="outline">Draft</Badge>
