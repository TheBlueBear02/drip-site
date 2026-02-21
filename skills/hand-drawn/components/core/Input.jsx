// HAND-DRAWN SKILL — Input.jsx + Badge
//
// WHY INPUTS LOOK THIS WAY:
// Full box with wobbly borders — not just underlines. Feels like a field
// drawn on a form. White background, pencil border, Patrick Hand font.
// Focus: border turns blue pen (#2d5da1) + subtle ring. No standard outline.
// Badge: wobbly pill or tag shape. Hard shadow. Slight rotation for sticker feel.

import { useState } from "react";

export function Input({
  label, placeholder = "", value, onChange,
  type = "text", error, hint, required = false, disabled = false,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "'Patrick Hand', cursive" }}>
      {label && (
        <label style={{ fontSize: 16, color: "#2d2d2d", fontFamily: "'Kalam', cursive", fontWeight: 700 }}>
          {label}
          {required && <span style={{ color: "#ff4d4d", marginLeft: 4 }}>*</span>}
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
          width: "100%",
          height: 52,
          padding: "0 16px",
          fontSize: 18,
          fontFamily: "'Patrick Hand', cursive",
          color: "#2d2d2d",
          background: "#ffffff",
          border: error
            ? "2px solid #ff4d4d"
            : focused
            ? "2px solid #2d5da1"
            : "2px solid #2d2d2d",
          borderRadius: error
            ? "12px 3px 10px 3px / 3px 10px 3px 12px"
            : "12px 3px 10px 3px / 3px 10px 3px 12px",
          outline: "none",
          boxShadow: focused
            ? "0 0 0 3px rgba(45,93,161,0.15), 2px 2px 0px 0px #2d2d2d"
            : "2px 2px 0px 0px #2d2d2d",
          transition: "all 100ms linear",
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? "not-allowed" : "text",
        }}
      />

      {error && (
        <span style={{ fontSize: 14, color: "#ff4d4d", fontFamily: "'Patrick Hand', cursive" }}>
          ✗ {error}
        </span>
      )}
      {hint && !error && (
        <span style={{ fontSize: 14, color: "rgba(45,45,45,0.55)", fontFamily: "'Patrick Hand', cursive" }}>
          {hint}
        </span>
      )}
    </div>
  );
}

export function Textarea({ label, placeholder, value, onChange, rows = 4, error, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {label && (
        <label style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 16, color: "#2d2d2d" }}>
          {label}
          {required && <span style={{ color: "#ff4d4d", marginLeft: 4 }}>*</span>}
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
          padding: "12px 16px",
          fontSize: 18,
          fontFamily: "'Patrick Hand', cursive",
          color: "#2d2d2d",
          background: "#ffffff",
          border: focused ? "2px solid #2d5da1" : "2px solid #2d2d2d",
          borderRadius: "10px 3px 8px 3px / 3px 8px 3px 10px",
          outline: "none",
          resize: "vertical",
          boxShadow: focused
            ? "0 0 0 3px rgba(45,93,161,0.15), 2px 2px 0px 0px #2d2d2d"
            : "2px 2px 0px 0px #2d2d2d",
          transition: "all 100ms linear",
        }}
      />
      {error && <span style={{ fontSize: 14, color: "#ff4d4d" }}>✗ {error}</span>}
    </div>
  );
}

// ── BADGE / TAG ────────────────────────────────────────────────────────────────
// Wobbly bordered tags. Slight rotation for sticker feel.
// Used as category labels, status indicators, step markers.

export function Badge({ children, variant = "default", rotate = 0 }) {
  const variants = {
    default:   { bg: "#ffffff", color: "#2d2d2d", border: "2px solid #2d2d2d" },
    accent:    { bg: "#ff4d4d", color: "#ffffff",  border: "2px solid #2d2d2d" },
    secondary: { bg: "#2d5da1", color: "#ffffff",  border: "2px solid #2d2d2d" },
    postit:    { bg: "#fff9c4", color: "#2d2d2d",  border: "2px solid #2d2d2d" },
    muted:     { bg: "#e5e0d8", color: "#2d2d2d",  border: "2px solid #2d2d2d" },
    dashed:    { bg: "#ffffff", color: "#2d2d2d",  border: "2px dashed #2d2d2d" },
  };
  const v = variants[variant] || variants.default;

  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "4px 14px",
      borderRadius: "30px 5px 25px 5px / 5px 25px 5px 30px",
      background: v.bg, color: v.color, border: v.border,
      fontSize: 14,
      fontFamily: "'Patrick Hand', cursive",
      boxShadow: "2px 2px 0px 0px #2d2d2d",
      transform: rotate !== 0 ? `rotate(${rotate}deg)` : undefined,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Input label="Your name" placeholder="Write here..." required />
// <Input label="Email" type="email" error="Check that email!" />
// <Textarea label="Tell us about your project" rows={5} />
//
// <Badge>Category</Badge>
// <Badge variant="accent" rotate={-2}>New!</Badge>
// <Badge variant="postit" rotate={1}>★ Popular</Badge>
// <Badge variant="dashed">Coming soon</Badge>
