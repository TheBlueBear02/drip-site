// ART DECO SKILL — Card.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Cards are framed exhibits — each one a miniature architectural facade.
// Background: #141414 rich charcoal against #0A0A0A page (depth through layering).
// Border: 1px gold at 30% opacity at rest → 100% on hover (ghost to full gold).
// Corner brackets at opposite corners — absolute-positioned L-shapes.
// Shadow is a GLOW (0 0 25px rgba(212,175,55,0.3)) — never a drop shadow.
// Card lifts -8px on hover — theatrical, mechanical, like an elevator rising.
// All card titles: Marcellus uppercase, gold color, 0.15em tracking.
// border-radius: 0 everywhere. Always. No exceptions.

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

// Reusable corner L-brackets
function CornerBrackets({ hover, size = 16, inset = 8, opacity = [0.4, 1] }) {
  const op = hover ? opacity[1] : opacity[0];
  const s = { position: "absolute", width: size, height: size, opacity: op, transition: "opacity 300ms ease-out" };

  return (
    <>
      <div aria-hidden="true" style={{ ...s, top: inset, left: inset, borderTop: `1px solid ${C.gold}`, borderLeft: `1px solid ${C.gold}` }} />
      <div aria-hidden="true" style={{ ...s, bottom: inset, right: inset, borderBottom: `1px solid ${C.gold}`, borderRight: `1px solid ${C.gold}` }} />
    </>
  );
}

// ── BASE CARD ─────────────────────────────────────────────────────────────────

export function Card({ children, hover: externalHov, className, style: ext, padding = 32, interactive = true }) {
  const [hov, setHov] = useState(false);
  const isHov = externalHov !== undefined ? externalHov : hov;

  return (
    <div
      onMouseEnter={() => interactive && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: C.card,
        border: `1px solid ${isHov ? C.gold : "rgba(212,175,55,0.25)"}`,
        borderRadius: 0,
        padding,
        boxShadow: isHov
          ? "0 0 25px rgba(212,175,55,0.3)"
          : "0 0 10px rgba(212,175,55,0.08)",
        transform: interactive && isHov ? "translateY(-8px)" : "none",
        transition: "all 500ms ease-out",
        ...ext,
      }}
    >
      <CornerBrackets hover={isHov} />
      {children}
    </div>
  );
}

// ── FEATURE CARD ──────────────────────────────────────────────────────────────
// Icon in rotated diamond. Marcellus title in gold. Josefin body in cream.

export function FeatureCard({ icon: Icon, title, body, romanNumeral }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: C.card,
        border: `1px solid ${hov ? C.gold : "rgba(212,175,55,0.25)"}`,
        borderRadius: 0,
        padding: 32,
        boxShadow: hov ? "0 0 25px rgba(212,175,55,0.25)" : "0 0 10px rgba(212,175,55,0.06)",
        transform: hov ? "translateY(-8px)" : "none",
        transition: "all 500ms ease-out",
      }}
    >
      <CornerBrackets hover={hov} />

      {/* Roman numeral (optional) */}
      {romanNumeral && (
        <div style={{
          fontFamily: "'Marcellus', serif",
          fontSize: 11, color: C.muted,
          textTransform: "uppercase", letterSpacing: "0.2em",
          marginBottom: 20,
        }}>
          {romanNumeral}
        </div>
      )}

      {/* Rotated diamond icon container — THE primary Art Deco motif */}
      {Icon && (
        <div style={{
          width: 56, height: 56,
          transform: "rotate(45deg)",
          border: `1px solid ${hov ? C.gold : "rgba(212,175,55,0.4)"}`,
          background: hov ? "rgba(212,175,55,0.12)" : "rgba(212,175,55,0.05)",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 32,
          boxShadow: hov ? "0 0 12px rgba(212,175,55,0.2)" : "none",
          transition: "all 300ms ease-out",
        }}>
          <div style={{ transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon size={22} strokeWidth={1} color={hov ? C.pale : C.gold} />
          </div>
        </div>
      )}

      {/* Gold horizontal rule under icon */}
      <div style={{
        height: 1, width: hov ? 48 : 24,
        background: C.gold, opacity: hov ? 0.8 : 0.4,
        marginBottom: 20,
        transition: "all 400ms ease-out",
      }} />

      <h3 style={{
        fontFamily: "'Marcellus', serif",
        fontWeight: 400, fontSize: 18, letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: C.gold, marginBottom: 12,
      }}>
        {title}
      </h3>

      <p style={{
        fontFamily: "'Josefin Sans', sans-serif",
        fontWeight: 300, fontSize: 15,
        color: C.muted, lineHeight: 1.75, letterSpacing: "0.03em",
      }}>
        {body}
      </p>
    </div>
  );
}

// ── PRICING CARD ──────────────────────────────────────────────────────────────
// Tier labeled with Roman numeral. Featured: solid gold border + glow.

export function PricingCard({ tier, romanNumeral, price, period = "/ month", description, features = [], featured = false, ctaLabel = "Select Tier" }) {
  const [hov, setHov] = useState(false);
  const [ctaH, setCtaH] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: featured ? "rgba(212,175,55,0.06)" : C.card,
        border: `${featured ? 2 : 1}px solid ${featured || hov ? C.gold : "rgba(212,175,55,0.25)"}`,
        borderRadius: 0,
        padding: 32,
        boxShadow: featured
          ? "0 0 40px rgba(212,175,55,0.2)"
          : hov ? "0 0 20px rgba(212,175,55,0.15)" : "none",
        transform: featured ? "scale(1.02)" : hov ? "translateY(-4px)" : "none",
        transition: "all 400ms ease-out",
        display: "flex", flexDirection: "column",
      }}
    >
      <CornerBrackets hover={hov || featured} opacity={featured ? [0.8, 1] : [0.3, 1]} />

      {/* Tier label */}
      <div style={{
        fontFamily: "'Josefin Sans', sans-serif",
        fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase",
        color: C.muted, marginBottom: 8,
      }}>
        {romanNumeral && (
          <span style={{ fontFamily: "'Marcellus', serif", fontSize: 12, color: C.gold, marginRight: 8 }}>
            {romanNumeral}
          </span>
        )}
        {tier}
      </div>

      {/* Gold divider */}
      <div style={{ height: 1, width: 48, background: C.gold, opacity: 0.5, marginBottom: 24 }} />

      {/* Price */}
      <div style={{ marginBottom: 8 }}>
        <span style={{
          fontFamily: "'Marcellus', serif",
          fontSize: 48, color: featured ? C.pale : C.gold,
          letterSpacing: "-0.02em",
        }}>
          {price}
        </span>
        <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 13, color: C.muted, marginLeft: 6, letterSpacing: "0.05em" }}>
          {period}
        </span>
      </div>

      <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: 14, color: C.muted, marginBottom: 24, lineHeight: 1.6 }}>
        {description}
      </p>

      {/* Feature list */}
      <ul style={{ flex: 1, listStyle: "none", padding: 0, marginBottom: 28 }}>
        {features.map((f, i) => (
          <li key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 10,
            paddingBottom: 10, marginBottom: 10,
            borderBottom: i < features.length - 1 ? "1px solid rgba(212,175,55,0.08)" : "none",
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 300, fontSize: 14, color: C.fg, lineHeight: 1.5,
          }}>
            {/* Diamond bullet */}
            <span style={{
              width: 6, height: 6, flexShrink: 0,
              transform: "rotate(45deg)",
              background: C.gold,
              marginTop: 5, opacity: 0.8,
            }} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onMouseEnter={() => setCtaH(true)}
        onMouseLeave={() => setCtaH(false)}
        style={{
          height: 48, width: "100%",
          background: ctaH
            ? featured ? C.pale : C.gold
            : featured ? C.gold : "transparent",
          color: ctaH ? C.bg : featured ? C.bg : C.gold,
          border: `2px solid ${C.gold}`,
          borderRadius: 0,
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 400, fontSize: 12,
          textTransform: "uppercase", letterSpacing: "0.2em",
          cursor: "pointer", outline: "none",
          boxShadow: ctaH ? "0 0 20px rgba(212,175,55,0.35)" : "none",
          transition: "all 300ms ease-out",
        }}
      >
        {ctaLabel}
      </button>
    </div>
  );
}

// ── TESTIMONIAL CARD ──────────────────────────────────────────────────────────

export function TestimonialCard({ quote, name, title, initials }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: C.card,
        border: `1px solid ${hov ? "rgba(212,175,55,0.6)" : "rgba(212,175,55,0.2)"}`,
        borderRadius: 0,
        padding: 32,
        boxShadow: hov ? "0 0 20px rgba(212,175,55,0.2)" : "none",
        transition: "all 400ms ease-out",
      }}
    >
      <CornerBrackets hover={hov} />

      {/* Opening gold quote mark */}
      <div style={{
        fontFamily: "'Marcellus', serif",
        fontSize: 56, lineHeight: 1, color: C.gold, opacity: 0.3,
        marginBottom: -16, userSelect: "none",
      }}>
        "
      </div>

      <p style={{
        fontFamily: "'Josefin Sans', sans-serif",
        fontWeight: 300, fontSize: 15, color: C.fg,
        lineHeight: 1.8, letterSpacing: "0.02em",
        fontStyle: "italic", marginBottom: 24,
      }}>
        {quote}
      </p>

      {/* Author row */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Initials in diamond */}
        <div style={{
          width: 40, height: 40,
          transform: "rotate(45deg)",
          border: `1px solid ${C.gold}`,
          background: "rgba(212,175,55,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0,
        }}>
          <span style={{
            transform: "rotate(-45deg)",
            fontFamily: "'Marcellus', serif",
            fontSize: 13, color: C.gold,
          }}>
            {initials}
          </span>
        </div>
        <div>
          <div style={{ fontFamily: "'Marcellus', serif", fontSize: 13, color: C.fg, letterSpacing: "0.1em", textTransform: "uppercase" }}>{name}</div>
          <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontSize: 11, color: C.muted, letterSpacing: "0.08em" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Card>General framed content</Card>
//
// <FeatureCard
//   icon={Crown} title="White Glove Service" romanNumeral="I"
//   body="Dedicated concierge available at every hour." />
//
// <PricingCard
//   tier="Patron" romanNumeral="II" price="$299" featured
//   description="For discerning collectors."
//   features={["Unlimited access", "Private viewing"]}
//   ctaLabel="Become a Patron" />
//
// <TestimonialCard
//   quote="An experience unlike any other." name="E. Blackwood"
//   title="Art Collector, New York" initials="EB" />
