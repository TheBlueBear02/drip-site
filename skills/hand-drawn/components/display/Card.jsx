// HAND-DRAWN SKILL — Card.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Cards are pieces of paper dropped on the notebook surface.
// Wobbly multi-value border-radius — no two cards use the same variant.
// Hard 4px shadow simulates the gap between paper layers.
// Slight rotation at rest feels hand-placed. More rotation on hover = jiggle.
// Decoration options: tape strip or thumbtack pin — physical fasteners.
// Post-it yellow background for feature/highlight cards.

import { useState } from "react";

// Wobbly radius variants — rotate through these, never repeat adjacent
const RADIUS_VARIANTS = [
  "255px 15px 225px 15px / 15px 225px 15px 255px",
  "15px 255px 15px 225px / 225px 15px 255px 15px",
  "100px 20px 80px 20px / 20px 80px 20px 100px",
  "30px 200px 30px 200px / 200px 30px 200px 30px",
  "200px 30px 170px 30px / 30px 170px 30px 200px",
];

export function Card({
  children,
  bg = "#ffffff",
  radiusVariant = 0,   // 0–4, pick different variants for adjacent cards
  decoration = "none", // "tape" | "tack" | "none"
  rotate = -1,         // degrees — tilt at rest
  shadow = "md",       // "soft" | "md" | "lg"
  interactive = true,
  padding = "28px",
  style: ext,
}) {
  const [hov, setHov] = useState(false);

  const shadows = {
    soft: "3px 3px 0px 0px rgba(45,45,45,0.1)",
    md:   "4px 4px 0px 0px #2d2d2d",
    lg:   "6px 6px 0px 0px #2d2d2d",
  };
  const hoverShadows = {
    soft: "6px 6px 0px 0px #2d2d2d",
    md:   "6px 6px 0px 0px #2d2d2d",
    lg:   "8px 8px 0px 0px #2d2d2d",
  };

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: bg,
        border: "2px solid #2d2d2d",
        borderRadius: RADIUS_VARIANTS[radiusVariant % RADIUS_VARIANTS.length],
        padding,
        boxShadow: interactive && hov ? hoverShadows[shadow] : shadows[shadow],
        transform: interactive && hov
          ? `rotate(${rotate + (rotate >= 0 ? 1 : -1)}deg) translateY(-2px)`
          : `rotate(${rotate}deg)`,
        transition: "all 100ms linear",
        ...ext,
      }}
    >
      {/* Tape decoration */}
      {decoration === "tape" && (
        <div style={{
          position: "absolute", top: -12, left: "50%",
          transform: "translateX(-50%) rotate(-2deg)",
          width: 64, height: 24,
          background: "rgba(200,200,200,0.35)",
          border: "1px solid rgba(0,0,0,0.1)",
          pointerEvents: "none",
        }} />
      )}
      {/* Tack decoration */}
      {decoration === "tack" && (
        <div style={{
          position: "absolute", top: -12, left: "50%",
          transform: "translateX(-50%)",
          width: 20, height: 20, borderRadius: "50%",
          background: "#ff4d4d", border: "3px solid #2d2d2d",
          pointerEvents: "none",
        }} />
      )}
      {children}
    </div>
  );
}

// ── FEATURE CARD ──────────────────────────────────────────────────────────────
// Post-it yellow, tack decoration, icon in rough circle.

export function FeatureCard({ icon: Icon, title, body, rotate = -1, radiusVariant = 0, postit = false }) {
  return (
    <Card
      bg={postit ? "#fff9c4" : "#ffffff"}
      radiusVariant={radiusVariant}
      decoration={postit ? "tack" : "tape"}
      rotate={rotate}
      shadow="md"
    >
      {/* Icon in rough circle */}
      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        border: "2px solid #2d2d2d",
        background: "#fdfbf7",
        boxShadow: "2px 2px 0px 0px #2d2d2d",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 16,
      }}>
        {Icon && <Icon size={24} strokeWidth={2.5} color="#2d2d2d" />}
      </div>

      <h3 style={{
        fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 22,
        color: "#2d2d2d", marginBottom: 10, lineHeight: 1.2,
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: "'Patrick Hand', cursive", fontSize: 16,
        color: "#2d2d2d", lineHeight: 1.65, opacity: 0.85,
      }}>
        {body}
      </p>
    </Card>
  );
}

// ── STAT CARD — Organic blob shapes for stats ─────────────────────────────────

export function StatCard({ value, label, bg = "#ffffff", rotate = 0 }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg,
        border: "2px solid #2d2d2d",
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        boxShadow: hov ? "6px 6px 0px 0px #2d2d2d" : "4px 4px 0px 0px #2d2d2d",
        width: 128, height: 128,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        transform: hov
          ? `rotate(${rotate + 2}deg)`
          : `rotate(${rotate}deg)`,
        transition: "all 100ms linear",
      }}
    >
      <div style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 32, color: "#2d2d2d", lineHeight: 1 }}>
        {value}
      </div>
      <div style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 13, color: "rgba(45,45,45,0.7)", marginTop: 4 }}>
        {label}
      </div>
    </div>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Card radiusVariant={0} rotate={-1} decoration="tape">Card content</Card>
// <Card radiusVariant={1} rotate={1} decoration="tack">Another card</Card>
// <Card radiusVariant={2} rotate={-2} bg="#fff9c4">Post-it card</Card>
//
// <FeatureCard icon={Zap} title="Fast as lightning" body="..." rotate={-1} />
// <FeatureCard icon={Star} title="Starred item" body="..." postit rotate={2} />
//
// <StatCard value="99%" label="Uptime" rotate={-2} />
// <StatCard value="10K" label="Users" bg="#fff9c4" rotate={1} />
