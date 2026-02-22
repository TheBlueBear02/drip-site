/** @type {import('tailwindcss').Config} */

// ART DECO SKILL — Tailwind Config Extension
// Merge theme.extend into your existing tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // ── COLORS ────────────────────────────────────────────────────────────
      colors: {
        deco: {
          bg:       "#0A0A0A",
          card:     "#141414",
          fg:       "#F2F0E4",
          gold:     "#D4AF37",
          "gold-pale": "#F2E8C4",
          blue:     "#1E3D59",
          muted:    "#888888",
        },
      },

      // ── FONTS ─────────────────────────────────────────────────────────────
      fontFamily: {
        display: ["Marcellus", "Georgia", "serif"],
        sans:    ["Josefin Sans", "system-ui", "sans-serif"],
      },

      // ── BORDER RADIUS — Always 0 ──────────────────────────────────────────
      // Note: 'none' maps to 0px — this is the ONLY value to use
      borderRadius: {
        none: "0px",
        sm:   "2px", // Only for invisible softness
      },

      // ── BOX SHADOWS — Glows only, no drop shadows ─────────────────────────
      boxShadow: {
        "glow-xs": "0 0 8px rgba(212,175,55,0.15)",
        "glow-sm": "0 0 15px rgba(212,175,55,0.2)",
        "glow-md": "0 0 20px rgba(212,175,55,0.3)",
        "glow-lg": "0 0 25px rgba(212,175,55,0.4)",
        "glow-xl": "0 0 40px rgba(212,175,55,0.5)",
        "focus":   "0 0 0 2px #D4AF37, 0 0 0 4px #0A0A0A",
      },

      // ── LETTER SPACING ─────────────────────────────────────────────────────
      letterSpacing: {
        deco:    "0.2em",
        "deco-sm": "0.15em",
        "deco-xs": "0.1em",
      },

      // ── ANIMATIONS ────────────────────────────────────────────────────────
      animation: {
        "deco-fade-up":  "deco-fade-up 0.6s ease-out both",
        "glow-pulse":    "deco-glow-pulse 3s ease-in-out infinite",
      },

      keyframes: {
        "deco-fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "deco-glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 15px rgba(212,175,55,0.2)" },
          "50%":       { boxShadow: "0 0 25px rgba(212,175,55,0.4)" },
        },
      },

      // ── TRANSITION DURATIONS ──────────────────────────────────────────────
      transitionDuration: {
        quick:      "150ms",
        standard:   "300ms",
        theatrical: "500ms",
        cinematic:  "700ms",
      },
    },
  },
  plugins: [],
};
