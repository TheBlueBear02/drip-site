// ART DECO SKILL — Input.jsx + Badge
//
// WHY INPUTS LOOK THIS WAY:
// Underlined only — no box, no full border. The horizontal line references
// the ruled paper of Art Deco ledgers and the base of architectural columns.
// Transparent background — the crosshatch texture shows through.
// Focus: bottom border brightens to pale gold + subtle glow below.
// Font is Josefin Sans 300 — refined, geometric, precise.
// Labels are uppercase with 0.1em tracking — all-caps is mandatory.
// No rounded corners. Placeholders in pewter (#888).

import { useState } from "react";

const C = {
  bg:    "#0A0A0A",
  fg:    "#F2F0E4",
  gold:  "#D4AF37",
  pale:  "#F2E8C4",
  muted: "#888888",
};

export function Input({
  label, placeholder = "", value, onChange,
  type = "text", error, hint, required = false, disabled = false,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 400, fontSize: 11, letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: focused ? C.pale : C.muted,
          transition: "color 300ms ease-out",
        }}>
          {label}
          {required && <span style={{ color: C.gold, marginLeft: 4 }}>*</span>}
        </label>
      )}

      <div style={{ position: "relative" }}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%",
            height: 48,
            padding: "0 12px",
            fontSize: 15,
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.03em",
            color: C.fg,
            background: "transparent",
            border: "none",
            borderBottom: error
              ? "2px solid #E53E3E"
              : focused
              ? `2px solid ${C.pale}`
              : `2px solid ${C.gold}`,
            borderRadius: 0,
            outline: "none",
            boxShadow: focused
              ? "0 4px 12px rgba(212,175,55,0.2)"
              : "none",
            opacity: disabled ? 0.4 : 1,
            cursor: disabled ? "not-allowed" : "text",
            transition: "all 300ms ease-out",
          }}
        />
        {/* Decorative bottom corner accent on focus */}
        {focused && (
          <div aria-hidden="true" style={{
            position: "absolute", bottom: -2, right: 0,
            width: 8, height: 8,
            borderRight: `2px solid ${C.pale}`,
            borderTop: `2px solid ${C.pale}`,
            opacity: 0.6,
          }} />
        )}
      </div>

      {error && (
        <span style={{ fontSize: 12, color: "#E53E3E", letterSpacing: "0.05em", fontFamily: "'Josefin Sans', sans-serif" }}>
          {error}
        </span>
      )}
      {hint && !error && (
        <span style={{ fontSize: 12, color: C.muted, letterSpacing: "0.03em", fontFamily: "'Josefin Sans', sans-serif" }}>
          {hint}
        </span>
      )}
    </div>
  );
}

export function Textarea({ label, placeholder, value, onChange, rows = 4, error, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && (
        <label style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 400, fontSize: 11, letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: focused ? C.pale : C.muted,
          transition: "color 300ms ease-out",
        }}>
          {label}
          {required && <span style={{ color: C.gold, marginLeft: 4 }}>*</span>}
        </label>
      )}
      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: 15,
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300,
          color: C.fg,
          background: "rgba(255,255,255,0.02)",
          border: "1px solid",
          borderColor: focused ? C.gold : "rgba(212,175,55,0.25)",
          borderRadius: 0,
          outline: "none",
          resize: "vertical",
          boxShadow: focused ? "0 0 15px rgba(212,175,55,0.15)" : "none",
          transition: "all 300ms ease-out",
        }}
      />
      {error && <span style={{ fontSize: 12, color: "#E53E3E", fontFamily: "'Josefin Sans', sans-serif" }}>{error}</span>}
    </div>
  );
}

// ── BADGE ─────────────────────────────────────────────────────────────────────
// Precision geometric labels. Sharp corners (0px). All-caps. Architectural.
// Used for categories, tier labels, status indicators, section tags.

export function Badge({ children, variant = "gold" }) {
  const variants = {
    gold:    { bg: "rgba(212,175,55,0.12)", color: C.gold,    border: "1px solid rgba(212,175,55,0.4)" },
    solid:   { bg: C.gold,                 color: "#0A0A0A",  border: "none" },
    muted:   { bg: "rgba(136,136,136,0.1)", color: C.muted,   border: "1px solid rgba(136,136,136,0.3)" },
    blue:    { bg: "rgba(30,61,89,0.4)",   color: "#7EB3CC",  border: "1px solid rgba(30,61,89,0.8)" },
    outline: { bg: "transparent",          color: C.gold,     border: `1px solid ${C.gold}` },
  };
  const v = variants[variant] || variants.gold;

  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 12px",
      borderRadius: 0, // THE LAW
      background: v.bg, color: v.color, border: v.border,
      fontSize: 10,
      fontFamily: "'Josefin Sans', sans-serif",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "0.2em",
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Input label="Full Name" placeholder="Enter your name" required />
// <Input label="Email Address" type="email" hint="Members only" />
// <Input label="Invitation Code" error="Invalid code" />
// <Textarea label="Message" rows={5} />
//
// <Badge>Exclusive</Badge>
// <Badge variant="solid">Featured</Badge>
// <Badge variant="muted">Archive</Badge>
// <Badge variant="blue">New Member</Badge>
