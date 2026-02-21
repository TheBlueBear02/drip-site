/** @type {import('tailwindcss').Config} */

// HAND-DRAWN SKILL — Tailwind Config Extension
// Merge theme.extend into your existing tailwind.config.js

module.exports = {
  theme: {
    extend: {
      // ── COLORS ────────────────────────────────────────────────────────────
      colors: {
        hand: {
          bg:        "#fdfbf7",
          fg:        "#2d2d2d",
          muted:     "#e5e0d8",
          accent:    "#ff4d4d",
          secondary: "#2d5da1",
          postit:    "#fff9c4",
          white:     "#ffffff",
        },
      },

      // ── FONTS ─────────────────────────────────────────────────────────────
      fontFamily: {
        marker: ["Kalam", "cursive"],
        hand:   ["Patrick Hand", "cursive"],
      },

      // ── BORDER RADIUS — Wobbly organic shapes ────────────────────────────
      borderRadius: {
        wobbly:   "255px 15px 225px 15px / 15px 225px 15px 255px",
        wobblyMd: "15px 255px 15px 225px / 225px 15px 255px 15px",
        wobblyLg: "100px 20px 80px 20px / 20px 80px 20px 100px",
        wobblyXl: "30px 200px 30px 200px / 200px 30px 200px 30px",
        wobblyFt: "200px 30px 170px 30px / 30px 170px 30px 200px",
      },

      // ── SHADOWS — Hard offset, zero blur ─────────────────────────────────
      boxShadow: {
        "hand-xs":   "2px 2px 0px 0px #2d2d2d",
        "hand-md":   "4px 4px 0px 0px #2d2d2d",
        "hand-lg":   "6px 6px 0px 0px #2d2d2d",
        "hand-xl":   "8px 8px 0px 0px #2d2d2d",
        "hand-soft": "3px 3px 0px 0px rgba(45,45,45,0.1)",
        "hand-hover": "2px 2px 0px 0px #2d2d2d",
      },

      // ── ANIMATIONS ────────────────────────────────────────────────────────
      animation: {
        "hand-bounce": "hand-bounce 3s ease-in-out infinite",
        "hand-wobble": "hand-wobble 4s ease-in-out infinite",
        "hand-fade-up": "hand-fade-up 0.3s linear both",
      },

      keyframes: {
        "hand-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        "hand-wobble": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%":       { transform: "rotate(2deg)" },
        },
        "hand-fade-up": {
          from: { opacity: "0", transform: "translateY(12px) rotate(1deg)" },
          to:   { opacity: "1", transform: "translateY(0) rotate(0deg)" },
        },
      },

      // ── TRANSITION DURATIONS ─────────────────────────────────────────────
      transitionDuration: {
        snap:   "100ms",
        bounce: "3000ms",
      },
    },
  },
  plugins: [],
};
