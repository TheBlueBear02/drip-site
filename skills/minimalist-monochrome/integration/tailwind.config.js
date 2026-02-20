/** @type {import('tailwindcss').Config} */

// MINIMALIST MONOCHROME SKILL — Tailwind Config Extension
// Merge theme.extend into your existing tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // ── COLORS ──────────────────────────────────────────────────────────────
      colors: {
        mm: {
          bg:           "var(--color-bg)",           // #FFFFFF
          fg:           "var(--color-fg)",           // #000000
          muted:        "var(--color-muted)",        // #F5F5F5
          "muted-fg":   "var(--color-muted-fg)",     // #525252
          border:       "var(--color-border)",       // #000000
          "border-light":"var(--color-border-light)",// #E5E5E5
          card:         "var(--color-card)",         // #FFFFFF
          ring:         "var(--color-ring)",         // #000000
        },
      },

      // ── FONTS ────────────────────────────────────────────────────────────────
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body:    ["Source Serif 4", "Georgia", "serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },

      // ── FONT SIZES — Dramatic editorial scale ─────────────────────────────
      fontSize: {
        "8xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
        "9xl": ["10rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },

      // ── BORDER RADIUS — Always 0 ─────────────────────────────────────────
      borderRadius: {
        none: "0px",
        sm:   "0px",
        md:   "0px",
        lg:   "0px",
        xl:   "0px",
        "2xl":"0px",
        "3xl":"0px",
        full: "0px", // Even "full" is 0px in this skill
      },

      // ── BORDERS ──────────────────────────────────────────────────────────────
      borderWidth: {
        "0":  "0px",
        "1":  "1px",
        "2":  "2px",
        "3":  "3px",
        "4":  "4px",
        "8":  "8px",
      },

      // ── SHADOWS — None ───────────────────────────────────────────────────
      boxShadow: {
        none: "none",
        // No other values — shadows don't exist in this skill
      },

      // ── TRANSITIONS ──────────────────────────────────────────────────────────
      transitionDuration: {
        "0":   "0ms",
        "100": "100ms",
        "200": "200ms",
      },
      transitionTimingFunction: {
        "mm": "linear", // The only easing in this skill
      },

      // ── LETTER SPACING ───────────────────────────────────────────────────────
      letterSpacing: {
        tighter: "-0.05em",
        tight:   "-0.025em",
        normal:  "0em",
        wide:    "0.05em",
        wider:   "0.08em",
        widest:  "0.12em",
      },
    },
  },
  plugins: [],
};
