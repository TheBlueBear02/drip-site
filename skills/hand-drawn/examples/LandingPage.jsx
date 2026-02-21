// HAND-DRAWN SKILL — LandingPage.jsx (North Star Example)
//
// Read this file completely before building any page.
//
// CHECKLIST — all must be present:
// [ ] #fdfbf7 warm paper background with dot-grid (radial-gradient)
// [ ] #2d2d2d pencil lead — all text, borders, shadows (never #000)
// [ ] Multi-value wobbly border-radius on every card, button, container
// [ ] Hard 4px offset shadows, zero blur (4px 4px 0px 0px #2d2d2d)
// [ ] Button press-flat: hover=2px shadow+translate, active=no shadow+full translate
// [ ] Kalam 700 on all headings
// [ ] Patrick Hand on all body text, buttons, labels
// [ ] Card rotation at rest (-1deg, 1deg, -2deg alternating)
// [ ] Card jiggle on hover (±1deg shift)
// [ ] Tape or tack decoration on feature cards
// [ ] SVG squiggle connecting steps in "How It Works"
// [ ] Post-it yellow (#fff9c4) on at least one card or tooltip
// [ ] Stat shapes: organic blob border-radius, not circles
// [ ] Dashed borders on secondary/decorative elements
// [ ] Decorative bouncing element (animate-hand-bounce)
// [ ] 100ms linear transitions — never 300ms+ ease-out

import { useState } from "react";
import {
  ArrowRight, Zap, Shield, Globe, Star, Pencil,
  Layout, Smile, CheckCircle, X, Menu,
} from "lucide-react";

// ── CONSTANTS ─────────────────────────────────────────────────────────────────

const C = {
  bg:        "#fdfbf7",
  fg:        "#2d2d2d",
  muted:     "#e5e0d8",
  accent:    "#ff4d4d",
  secondary: "#2d5da1",
  postit:    "#fff9c4",
  white:     "#ffffff",
};

const FONT_MARKER = "'Kalam', cursive";
const FONT_HAND   = "'Patrick Hand', cursive";

// Wobbly radius variants — rotate through, never repeat adjacent
const R = [
  "255px 15px 225px 15px / 15px 225px 15px 255px",
  "15px 255px 15px 225px / 225px 15px 255px 15px",
  "100px 20px 80px 20px / 20px 80px 20px 100px",
  "30px 200px 30px 200px / 200px 30px 200px 30px",
  "200px 30px 170px 30px / 30px 170px 30px 200px",
];

// ── SHARED MICRO-COMPONENTS ───────────────────────────────────────────────────

function PressButton({ children, variant = "primary", onClick, icon: Icon, size = "md", fullWidth }) {
  const [hov, setHov] = useState(false);
  const [pressed, setPressed] = useState(false);
  const heights = { sm: 44, md: 52, lg: 60, xl: 72 };
  const fonts   = { sm: 16, md: 18, lg: 20, xl: 22 };

  const bgs = {
    primary:   hov ? C.accent   : C.white,
    secondary: hov ? C.secondary: C.muted,
    accent:    hov ? "#e03d3d"  : C.accent,
  };
  const colors = {
    primary:   hov ? "#ffffff" : C.fg,
    secondary: hov ? "#ffffff" : C.fg,
    accent:    "#ffffff",
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        height: heights[size], padding: `0 ${heights[size] * 0.55}px`,
        background: bgs[variant] || bgs.primary,
        color: colors[variant] || colors.primary,
        border: "3px solid #2d2d2d",
        borderRadius: "100px 20px 80px 20px / 20px 80px 20px 100px",
        fontFamily: FONT_HAND, fontSize: fonts[size],
        cursor: "pointer", outline: "none",
        display: "inline-flex", alignItems: "center", gap: 8,
        width: fullWidth ? "100%" : undefined,
        justifyContent: fullWidth ? "center" : undefined,
        // THE PRESS-FLAT MECHANIC
        boxShadow: pressed ? "none" : hov ? "2px 2px 0px 0px #2d2d2d" : "4px 4px 0px 0px #2d2d2d",
        transform: pressed ? "translate(4px,4px)" : hov ? "translate(2px,2px)" : "none",
        transition: "all 100ms linear",
      }}
    >
      {children}
      {Icon && <Icon size={fonts[size]} strokeWidth={2.5} />}
    </button>
  );
}

function WobblyCard({ children, bg = C.white, ri = 0, rotate = -1, shadow = "md", decoration, style: ext, interactive = true }) {
  const [hov, setHov] = useState(false);
  const shadows = { soft: "3px 3px 0px 0px rgba(45,45,45,0.1)", md: "4px 4px 0px 0px #2d2d2d", lg: "6px 6px 0px 0px #2d2d2d" };
  const hShadows = { soft: "6px 6px 0px 0px #2d2d2d", md: "6px 6px 0px 0px #2d2d2d", lg: "8px 8px 0px 0px #2d2d2d" };

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: bg,
        border: "2px solid #2d2d2d",
        borderRadius: R[ri % R.length],
        boxShadow: interactive && hov ? hShadows[shadow] : shadows[shadow],
        transform: interactive && hov
          ? `rotate(${rotate > 0 ? rotate + 1 : rotate - 1}deg) translateY(-2px)`
          : `rotate(${rotate}deg)`,
        transition: "all 100ms linear",
        ...ext,
      }}
    >
      {decoration === "tape" && (
        <div style={{
          position: "absolute", top: -12, left: "50%",
          transform: "translateX(-50%) rotate(-2deg)",
          width: 64, height: 24,
          background: "rgba(200,200,200,0.35)",
          border: "1px solid rgba(0,0,0,0.08)",
          pointerEvents: "none",
        }} />
      )}
      {decoration === "tack" && (
        <div style={{
          position: "absolute", top: -12, left: "50%",
          transform: "translateX(-50%)",
          width: 20, height: 20, borderRadius: "50%",
          background: C.accent, border: "3px solid #2d2d2d",
          pointerEvents: "none",
        }} />
      )}
      {children}
    </div>
  );
}

// ── PAPER GRAIN BACKGROUND ─────────────────────────────────────────────────────

const DOT_BG = {
  backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);
  const [ctaH, setCtaH] = useState(false);
  const [ctaP, setCtaP] = useState(false);
  const links = ["Features", "Pricing", "Blog", "About"];

  return (
    <>
      <nav style={{
        borderBottom: "2px solid #2d2d2d",
        background: C.bg, ...DOT_BG,
        position: "sticky", top: 0, zIndex: 40,
        boxShadow: "0 2px 0px 0px #2d2d2d",
      }}>
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 24px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 26, color: C.fg, textDecoration: "none", transform: "rotate(-1deg)", display: "inline-block" }}>
            ✏️ Sketchpad
          </a>
          <div style={{ display: "flex", gap: 4 }}>
            {links.map(l => <NavLink key={l} href={`/${l.toLowerCase()}`}>{l}</NavLink>)}
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              onMouseEnter={() => setCtaH(true)}
              onMouseLeave={() => { setCtaH(false); setCtaP(false); }}
              onMouseDown={() => setCtaP(true)}
              onMouseUp={() => setCtaP(false)}
              style={{
                height: 46, padding: "0 22px",
                background: ctaP ? C.accent : ctaH ? C.accent : C.white,
                color: ctaH ? "#fff" : C.fg,
                border: "3px solid #2d2d2d",
                borderRadius: "100px 20px 80px 20px / 20px 80px 20px 100px",
                fontFamily: FONT_HAND, fontSize: 16, cursor: "pointer",
                boxShadow: ctaP ? "none" : ctaH ? "2px 2px 0 #2d2d2d" : "4px 4px 0 #2d2d2d",
                transform: ctaP ? "translate(4px,4px)" : ctaH ? "translate(2px,2px)" : "none",
                transition: "all 100ms linear",
              }}
            >
              Get started
            </button>
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: 44, height: 44,
                background: open ? C.fg : C.white,
                border: "2px solid #2d2d2d",
                borderRadius: "8px 2px 6px 2px / 2px 6px 2px 8px",
                cursor: "pointer",
                boxShadow: "2px 2px 0 #2d2d2d",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  width: 14, height: 2, background: open ? C.bg : C.fg,
                  display: "block",
                  transform: open
                    ? i === 0 ? "rotate(45deg) translate(4px,4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px,-4px)"
                    : "scaleX(0)"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                  transition: "all 100ms linear",
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div style={{ borderBottom: "2px solid #2d2d2d", background: C.bg, ...DOT_BG, padding: "20px 24px", zIndex: 39, position: "relative" }}>
          {links.map((l, i, arr) => (
            <a key={l} href={`/${l.toLowerCase()}`} style={{
              display: "block", padding: "14px 0",
              borderBottom: i < arr.length - 1 ? "2px dashed #e5e0d8" : "none",
              fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 28,
              color: C.fg, textDecoration: "none",
            }}>{l}</a>
          ))}
          <div style={{ marginTop: 20 }}>
            <PressButton fullWidth variant="accent" size="lg">Get started free</PressButton>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, children }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "8px 14px", fontFamily: FONT_HAND, fontSize: 16,
        color: C.fg, textDecoration: "none",
        borderBottom: hov ? "2px dashed #ff4d4d" : "2px solid transparent",
        transition: "all 100ms linear",
      }}
    >{children}</a>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ background: C.bg, ...DOT_BG, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>

        {/* Left */}
        <div>
          {/* Label badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: C.postit, border: "2px solid #2d2d2d",
            borderRadius: "30px 5px 25px 5px / 5px 25px 5px 30px",
            padding: "4px 16px", marginBottom: 20,
            boxShadow: "2px 2px 0 #2d2d2d", transform: "rotate(1deg)",
            fontFamily: FONT_HAND, fontSize: 15, color: C.fg,
          }}>
            ✨ Now in open beta!
          </div>

          <h1 style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 1.1, color: C.fg, marginBottom: 20 }}>
            Design tools that{" "}
            <span style={{ color: C.accent, textDecoration: "underline", textDecorationStyle: "wavy" }}>feel human</span>
          </h1>

          <p style={{ fontFamily: FONT_HAND, fontSize: 20, color: C.fg, lineHeight: 1.65, marginBottom: 32, opacity: 0.85 }}>
            Stop designing like a robot. Sketchpad brings back the joy of
            rough drafts, scribbled ideas, and happy accidents.
          </p>

          {/* CTA row + hand-drawn arrow */}
          <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
            <PressButton size="lg" icon={ArrowRight}>Start sketching</PressButton>
            <PressButton variant="secondary" size="lg">See examples</PressButton>
          </div>

          {/* Hand-drawn arrow annotation */}
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8, transform: "rotate(-1deg)" }}>
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
              <path d="M5 25 Q 20 5 55 15" stroke="#ff4d4d" strokeWidth="2" strokeDasharray="4 3" fill="none" strokeLinecap="round"/>
              <path d="M50 10 L55 15 L48 18" stroke="#ff4d4d" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
            <span style={{ fontFamily: FONT_HAND, fontSize: 14, color: C.accent, transform: "rotate(2deg)" }}>
              Free forever!
            </span>
          </div>
        </div>

        {/* Right — hero visual chaos zone */}
        <div style={{ position: "relative", height: 400 }}>
          {/* Main card */}
          <WobblyCard
            bg={C.white} ri={0} rotate={2} decoration="tape"
            style={{ position: "absolute", top: 20, left: 20, right: 0, padding: 28 }}
          >
            <div style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 18, color: C.fg, marginBottom: 16 }}>
              ✏️ Today's sketch
            </div>
            {["Wobbly borders ✓", "Hard shadows ✓", "Human fonts ✓"].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>
                <CheckCircle size={16} strokeWidth={2.5} color={C.secondary} />
                <span style={{ fontFamily: FONT_HAND, fontSize: 16, color: C.fg }}>{t}</span>
              </div>
            ))}
          </WobblyCard>

          {/* Second card — post-it */}
          <WobblyCard
            bg={C.postit} ri={2} rotate={-3} decoration="tack"
            style={{ position: "absolute", bottom: 20, left: 0, right: 60, padding: 24 }}
          >
            <div style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 16, color: C.fg, marginBottom: 8 }}>
              Remember!
            </div>
            <p style={{ fontFamily: FONT_HAND, fontSize: 15, color: C.fg, lineHeight: 1.5 }}>
              No straight lines. Embrace the wobble.
            </p>
          </WobblyCard>

          {/* Bouncing circle decoration */}
          <div style={{
            position: "absolute", top: -10, right: -10,
            width: 56, height: 56,
            border: "2px dashed #ff4d4d",
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 24, color: C.accent,
            animation: "hand-bounce 3s ease-in-out infinite",
          }}>
            ★
          </div>
          <style>{`@keyframes hand-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }`}</style>
        </div>
      </div>
    </section>
  );
}

// ── FEATURES ──────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    { icon: Pencil, title: "Sketch mode", body: "Draw rough ideas directly in the browser. No perfectionism allowed.", postit: false, ri: 0, rot: -1 },
    { icon: Zap,    title: "Instant export", body: "One click to share your sketches as images, PDFs, or live links.", postit: true,  ri: 1, rot: 2  },
    { icon: Smile,  title: "Happy accidents", body: "Every 'mistake' is a feature. Randomness is part of the design process.", postit: false, ri: 2, rot: -2 },
  ];

  return (
    <section style={{ background: C.muted, ...DOT_BG, padding: "80px 24px", borderTop: "2px solid #2d2d2d", borderBottom: "2px solid #2d2d2d" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            display: "inline-block",
            background: C.accent, color: "#fff",
            border: "2px solid #2d2d2d", borderRadius: "30px 5px 25px 5px / 5px 25px 5px 30px",
            padding: "4px 16px", marginBottom: 16,
            boxShadow: "2px 2px 0 #2d2d2d", transform: "rotate(-1deg)",
            fontFamily: FONT_HAND, fontSize: 14,
          }}>
            Why it works
          </div>
          <h2 style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: "clamp(32px,5vw,56px)", color: C.fg, lineHeight: 1.1 }}>
            Tools that think like you do
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
          {features.map((f, i) => (
            <FeatureBlock key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ icon: Icon, title, body, postit, ri, rot }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        background: postit ? C.postit : C.white,
        border: "2px solid #2d2d2d",
        borderRadius: R[ri],
        padding: "32px 28px",
        boxShadow: hov ? "6px 6px 0px 0px #2d2d2d" : "4px 4px 0px 0px #2d2d2d",
        transform: hov
          ? `rotate(${rot > 0 ? rot + 1 : rot - 1}deg) translateY(-2px)`
          : `rotate(${rot}deg)`,
        transition: "all 100ms linear",
      }}
    >
      {/* Tape or tack */}
      {postit ? (
        <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", width: 20, height: 20, borderRadius: "50%", background: C.accent, border: "3px solid #2d2d2d" }} />
      ) : (
        <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%) rotate(-2deg)", width: 64, height: 24, background: "rgba(200,200,200,0.35)", border: "1px solid rgba(0,0,0,0.08)" }} />
      )}

      <div style={{
        width: 52, height: 52, borderRadius: "50%",
        border: "2px solid #2d2d2d", background: C.bg,
        boxShadow: "2px 2px 0 #2d2d2d",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 18,
      }}>
        <Icon size={24} strokeWidth={2.5} color={C.fg} />
      </div>

      <h3 style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 24, color: C.fg, marginBottom: 10 }}>
        {title}
      </h3>
      <p style={{ fontFamily: FONT_HAND, fontSize: 16, color: C.fg, lineHeight: 1.65, opacity: 0.85 }}>
        {body}
      </p>
    </div>
  );
}

// ── HOW IT WORKS ──────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { n: "01", title: "Describe your idea", body: "Type a rough description or upload a napkin sketch." },
    { n: "02", title: "Sketch & iterate",   body: "The tool generates a wobbly draft. Edit anything live." },
    { n: "03", title: "Ship it",            body: "Export, embed, or share with a link. Done in minutes." },
  ];

  return (
    <section style={{ background: C.bg, ...DOT_BG, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <h2 style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: "clamp(32px,5vw,52px)", textAlign: "center", color: C.fg, marginBottom: 56 }}>
          How it works
        </h2>

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 40 }}>
          {/* SVG squiggle connector */}
          <svg
            style={{ position: "absolute", top: 32, left: "16.5%", width: "67%", pointerEvents: "none" }}
            viewBox="0 0 400 40" fill="none"
          >
            <path d="M10 20 Q 100 5 200 20 Q 300 35 390 20" stroke="#2d2d2d" strokeWidth="2" strokeDasharray="6 4" fill="none" strokeLinecap="round"/>
            <path d="M380 12 L390 20 L380 28" stroke="#2d2d2d" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>

          {steps.map((s, i) => (
            <div key={i} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              {/* Step number — organic blob */}
              <div style={{
                width: 72, height: 72, margin: "0 auto 24px",
                background: C.accent, color: "#fff",
                border: "2px solid #2d2d2d",
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                boxShadow: "4px 4px 0 #2d2d2d",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 22,
                transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
              }}>
                {s.n}
              </div>
              <h3 style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 22, color: C.fg, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: FONT_HAND, fontSize: 16, color: C.fg, lineHeight: 1.6, opacity: 0.8 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── STATS ─────────────────────────────────────────────────────────────────────

function Stats() {
  const stats = [
    { value: "10K+", label: "sketchers", bg: C.postit, rot: -2 },
    { value: "99%",  label: "happiness", bg: C.white,  rot: 1  },
    { value: "50ms", label: "to export", bg: C.white,  rot: -1 },
    { value: "∞",    label: "revisions", bg: C.postit, rot: 2  },
  ];

  return (
    <section style={{ background: C.muted, ...DOT_BG, borderTop: "2px solid #2d2d2d", borderBottom: "2px solid #2d2d2d", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {stats.map((s, i) => (
            <StatBlob key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlob({ value, label, bg, rot }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 128, height: 128,
        background: bg, border: "2px solid #2d2d2d",
        borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        boxShadow: hov ? "6px 6px 0 #2d2d2d" : "4px 4px 0 #2d2d2d",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center",
        transform: hov ? `rotate(${rot + 2}deg)` : `rotate(${rot}deg)`,
        transition: "all 100ms linear",
      }}
    >
      <div style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 32, color: C.fg, lineHeight: 1 }}>{value}</div>
      <div style={{ fontFamily: FONT_HAND, fontSize: 13, color: C.fg, opacity: 0.7, marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ── TESTIMONIAL ───────────────────────────────────────────────────────────────

function Testimonial() {
  return (
    <section style={{ background: C.bg, ...DOT_BG, padding: "80px 24px" }}>
      <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 28 }}>
          {Array(5).fill(0).map((_, i) => (
            <Star key={i} size={22} strokeWidth={0} fill={C.accent} />
          ))}
        </div>
        <WobblyCard bg={C.postit} ri={3} rotate={-1} decoration="tack" style={{ padding: "36px 40px" }}>
          <blockquote style={{
            fontFamily: FONT_HAND, fontSize: 22, color: C.fg,
            lineHeight: 1.55, fontStyle: "italic", marginBottom: 24,
          }}>
            "Finally a design tool that doesn't make me feel like I'm filling out a tax form.
            My best ideas come from Sketchpad's happy accidents."
          </blockquote>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%",
              background: C.secondary, border: "2px solid #2d2d2d",
              boxShadow: "2px 2px 0 #2d2d2d",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 18, color: "#fff",
            }}>M</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 16, color: C.fg }}>Maya Chen</div>
              <div style={{ fontFamily: FONT_HAND, fontSize: 14, color: C.fg, opacity: 0.6 }}>Product Designer, Figma</div>
            </div>
          </div>
        </WobblyCard>
      </div>
    </section>
  );
}

// ── CTA SECTION ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section style={{ background: C.fg, ...DOT_BG, padding: "80px 24px", borderTop: "2px solid #2d2d2d" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 40 }}>
        <div>
          <h2 style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: "clamp(32px,5vw,56px)", color: C.bg, lineHeight: 1.1, marginBottom: 12 }}>
            Ready to start <span style={{ color: C.postit }}>scribbling?</span>
          </h2>
          <p style={{ fontFamily: FONT_HAND, fontSize: 18, color: C.muted, lineHeight: 1.6 }}>
            Free forever. No credit card. Just ideas.
          </p>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <PressButton variant="accent" size="xl" icon={ArrowRight}>Start free today</PressButton>
          <PressButton size="xl">See examples</PressButton>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: C.muted, borderTop: "2px solid #2d2d2d", padding: "48px 24px" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
        <div style={{ fontFamily: FONT_MARKER, fontWeight: 700, fontSize: 22, color: C.fg, transform: "rotate(-1deg)" }}>
          ✏️ Sketchpad
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy", "Terms", "GitHub", "Twitter"].map(l => (
            <a key={l} href="#" style={{
              fontFamily: FONT_HAND, fontSize: 15, color: C.fg,
              textDecoration: "none",
              borderBottom: "2px dashed rgba(45,45,45,0.3)",
              transition: "all 100ms linear",
            }}>{l}</a>
          ))}
        </div>
        <div style={{ fontFamily: FONT_HAND, fontSize: 14, color: C.fg, opacity: 0.55 }}>
          Made with ✏️ © 2025 Sketchpad
        </div>
      </div>
    </footer>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div style={{ background: C.bg, ...DOT_BG, fontFamily: FONT_HAND }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonial />
      <CTASection />
      <Footer />
    </div>
  );
}
