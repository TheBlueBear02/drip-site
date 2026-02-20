// MINIMALIST MONOCHROME SKILL — LandingPage.jsx
// THE NORTH STAR EXAMPLE
//
// What to notice:
// - 4px black horizontal rules between EVERY section — the architectural spine
// - Oversized Playfair Display headlines — 7xl–9xl. Bigger than feels comfortable.
// - Every section has a subtle texture layer (horizontal lines, grid, diagonal)
// - The stats section is fully inverted — black background, white text
// - Feature cards invert completely on hover — 100ms, instant
// - Pricing featured tier inverts and extends vertically
// - Zero border radius everywhere
// - Zero shadows anywhere
// - Zero accent colors — black IS the accent
// - JetBrains Mono for all labels, metadata, and buttons
// - Source Serif 4 for all body text
// - Playfair Display italic for pull quotes and emphasis

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

// ── TOKENS ────────────────────────────────────────────────────────────────────
const t = {
  bg:     "#FFFFFF",
  fg:     "#000000",
  muted:  "#F5F5F5",
  mutedFg:"#525252",
  border: "#000000",
  light:  "#E5E5E5",
};

const FONTS = {
  display: '"Playfair Display", Georgia, serif',
  body:    '"Source Serif 4", Georgia, serif',
  mono:    '"JetBrains Mono", monospace',
};

// ── GLOBAL STYLES ─────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; border-radius: 0 !important; }
  body { background: #fff; color: #000; font-family: "Source Serif 4", Georgia, serif; -webkit-font-smoothing: antialiased; }
  ::selection { background: #000; color: #fff; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #fff; }
  ::-webkit-scrollbar-thumb { background: #000; }

  /* Texture patterns */
  .tx-lines { position: relative; }
  .tx-lines::before { content:''; position:absolute; inset:0; background-image:repeating-linear-gradient(0deg,transparent,transparent 1px,#000 1px,#000 2px); background-size:100% 4px; opacity:0.015; pointer-events:none; z-index:0; }
  .tx-grid::before { content:''; position:absolute; inset:0; background-image:linear-gradient(#00000008 1px,transparent 1px),linear-gradient(90deg,#00000008 1px,transparent 1px); background-size:40px 40px; pointer-events:none; z-index:0; }
  .tx-diag::before { content:''; position:absolute; inset:0; background-image:repeating-linear-gradient(45deg,transparent,transparent 40px,#00000008 40px,#00000008 42px); pointer-events:none; z-index:0; }
  .tx-inv::before { content:''; position:absolute; inset:0; background-image:repeating-linear-gradient(90deg,transparent,transparent 1px,#fff 1px,#fff 2px); background-size:4px 100%; opacity:0.03; pointer-events:none; z-index:0; }
  .tc { position: relative; z-index: 1; }

  @keyframes mm-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
`;

// ── SECTION RULE ──────────────────────────────────────────────────────────────
const Rule = ({ ultra }) => (
  <hr style={{ border: "none", borderTop: ultra ? "8px solid #000" : "4px solid #000", margin: 0 }} />
);

// ── LIFT BUTTON ───────────────────────────────────────────────────────────────
function Btn({ children, variant = "primary", inverted = false, onClick }) {
  const [h, setH] = useState(false);

  const styles = {
    primary: {
      rest:  { bg: "#000", color: "#fff", border: "2px solid #000" },
      hover: { bg: "#fff", color: "#000", border: "2px solid #000" },
    },
    secondary: {
      rest:  { bg: "transparent", color: inverted ? "#fff" : "#000", border: `2px solid ${inverted ? "#fff" : "#000"}` },
      hover: { bg: inverted ? "#fff" : "#000", color: inverted ? "#000" : "#fff", border: `2px solid ${inverted ? "#fff" : "#000"}` },
    },
  };

  const s = styles[variant];
  const cur = h ? s.hover : s.rest;

  return (
    <button onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} onClick={onClick}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "14px 28px",
        background: cur.bg, color: cur.color, border: cur.border,
        borderRadius: 0, cursor: "pointer",
        fontFamily: FONTS.mono, fontSize: 11, fontWeight: 500,
        letterSpacing: "0.12em", textTransform: "uppercase",
        transition: "background 100ms linear, color 100ms linear",
        outline: "none", whiteSpace: "nowrap",
      }}>
      {children}
    </button>
  );
}

// ── NAV ───────────────────────────────────────────────────────────────────────
function Nav() {
  const [hov, setHov] = useState(null);
  const links = ["Skills", "Docs", "Pricing", "GitHub"];

  return (
    <>
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 48px", background: t.bg,
        position: "sticky", top: 0, zIndex: 100,
      }}>
        <span style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 700, fontStyle: "italic" }}>Drip</span>
        <div style={{ display: "flex", gap: 40 }}>
          {links.map((l, i) => (
            <a key={l} href="#"
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{
                fontFamily: FONTS.mono, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: t.fg, textDecoration: "none",
                borderBottom: hov === i ? `2px solid ${t.fg}` : "2px solid transparent",
                paddingBottom: 2, transition: "border-color 100ms linear",
              }}>{l}</a>
          ))}
        </div>
        <Btn>Begin →</Btn>
      </nav>
      <Rule ultra />
    </>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="tx-lines" style={{ padding: "120px 48px 100px", position: "relative", overflow: "hidden" }}>
      <div className="tc" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Eyebrow */}
        <div style={{
          fontFamily: FONTS.mono, fontSize: 11, fontWeight: 500,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: t.mutedFg, marginBottom: 48,
        }}>
          Design Skills CLI — Public Beta
        </div>

        {/* Massive headline — typography as a graphic element */}
        <h1 style={{
          fontFamily: FONTS.display,
          fontSize: "clamp(64px, 11vw, 160px)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.05em",
          color: t.fg,
          marginBottom: 24,
        }}>
          Stop shipping<br />
          <em style={{ fontStyle: "italic" }}>generic.</em>
        </h1>

        {/* Decorative rule with square — editorial punctuation */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 48 }}>
          <div style={{ height: 4, background: t.fg, width: 80 }} />
          <div style={{ width: 12, height: 12, border: `2px solid ${t.fg}` }} />
        </div>

        <p style={{
          fontFamily: FONTS.body, fontSize: 20, lineHeight: 1.7,
          color: t.mutedFg, maxWidth: 560, marginBottom: 56,
        }}>
          Complete design systems for AI-built projects.
          One command places a full skill folder in your project.
          Your agent reads it. Every component — today and after — belongs to the same world.
        </p>

        {/* Command line */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 0,
          border: `2px solid ${t.fg}`, marginBottom: 48,
        }}>
          <span style={{
            fontFamily: FONTS.mono, fontSize: 14, fontWeight: 500,
            padding: "14px 24px", background: t.fg, color: "#fff",
            letterSpacing: "0.06em",
          }}>$</span>
          <span style={{
            fontFamily: FONTS.mono, fontSize: 14,
            padding: "14px 24px", letterSpacing: "0.04em",
          }}>npx getdrip add retro-terminal</span>
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Btn>Browse skills →</Btn>
          <Btn variant="secondary">Read the docs</Btn>
        </div>
      </div>
    </section>
  );
}

// ── STATS — Inverted section ──────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "12", label: "Design Skills" },
    { value: "15+", label: "Components Per Skill" },
    { value: "1", label: "Command to Install" },
    { value: "∞", label: "Style Consistency" },
  ];

  return (
    <>
      <Rule />
      {/* WHY: This entire section inverts — black background, white text.
          It is the single most emphatic section on the page.
          The inversion creates maximum contrast and stops the eye. */}
      <section className="tx-inv" style={{ background: t.fg, position: "relative" }}>
        <div className="tc" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "64px 48px",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.15)" : "none",
            }}>
              <div style={{
                fontFamily: FONTS.display,
                fontSize: "clamp(48px, 5vw, 80px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                marginBottom: 16,
              }}>{s.value}</div>
              <div style={{
                fontFamily: FONTS.mono, fontSize: 10, fontWeight: 500,
                letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Rule />
    </>
  );
}

// ── FEATURES ──────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { num: "01", title: "Complete design worlds", body: "Every skill ships with colors, typography, spacing, motion, and 15+ annotated components. The agent understands intent, not just code." },
    { num: "02", title: "One command install", body: "npx getdrip add places the skill folder exactly where it needs to be. Dependencies install automatically." },
    { num: "03", title: "Persistent context", body: "The skill stays in your project. Every future component the agent builds follows the same design language — today and always." },
    { num: "04", title: "Agent-native structure", body: "Skills are structured for AI reading. Philosophy before tokens. Tokens before components. Examples as the north star." },
    { num: "05", title: "Growing library", body: "Retro Terminal, Playful Geometric, Minimalist Monochrome. Brutalist, Swiss Grid, Glassmorphism coming." },
    { num: "06", title: "Works everywhere", body: "Lovable, Cursor, Claude Code, Bolt — wherever you vibe-code, the skill works the same." },
  ];

  return (
    <>
      <section className="tx-grid" style={{ padding: "96px 48px", position: "relative" }}>
        <div className="tc" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: t.mutedFg, marginBottom: 24 }}>
              What's inside
            </div>
            <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Everything your agent<br />
              <em style={{ fontStyle: "italic" }}>needs.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${t.border}` }}>
            {features.map((f, i) => {
              const [hov, setHov] = useState(false);
              return (
                <div key={i}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                  style={{
                    padding: "40px 36px",
                    // WHY: Full inversion on hover — the primary emphasis mechanism
                    background: hov ? t.fg : t.bg,
                    color: hov ? "#fff" : t.fg,
                    borderRight: (i % 3 < 2) ? `1px solid ${t.border}` : "none",
                    borderBottom: i < 3 ? `1px solid ${t.border}` : "none",
                    transition: "background 100ms linear, color 100ms linear",
                    cursor: "default",
                  }}>
                  <div style={{
                    fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.15em",
                    textTransform: "uppercase", marginBottom: 24,
                    color: hov ? "rgba(255,255,255,0.4)" : t.mutedFg,
                    transition: "color 100ms linear",
                  }}>{f.num}</div>
                  <h3 style={{
                    fontFamily: FONTS.display, fontSize: 22, fontWeight: 700,
                    letterSpacing: "-0.01em", lineHeight: 1.2, marginBottom: 16,
                  }}>{f.title}</h3>
                  <p style={{
                    fontFamily: FONTS.body, fontSize: 15, lineHeight: 1.7,
                    color: hov ? "rgba(255,255,255,0.75)" : t.mutedFg,
                    transition: "color 100ms linear",
                  }}>{f.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Rule />
    </>
  );
}

// ── PRICING ───────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      desc: "For getting started.",
      features: ["3 free skills", "npx getdrip add", "MIT license", "Community support"],
      featured: false,
    },
    {
      name: "Pro",
      price: "$12",
      period: "per month",
      desc: "For serious builders.",
      features: ["All 12+ skills", "Priority updates", "New skills first", "Commercial license", "Email support"],
      featured: true,
    },
    {
      name: "Team",
      price: "$39",
      period: "per month",
      desc: "For teams that ship.",
      features: ["Everything in Pro", "5 team members", "Shared skill config", "Slack support", "Custom skills (soon)"],
      featured: false,
    },
  ];

  return (
    <>
      <section className="tx-lines" style={{ padding: "96px 48px", position: "relative" }}>
        <div className="tc" style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 80 }}>
            <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: t.mutedFg, marginBottom: 24 }}>
              Pricing
            </div>
            <h2 style={{ fontFamily: FONTS.display, fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}>
              Start free.<br />
              <em style={{ fontStyle: "italic" }}>Upgrade when ready.</em>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${t.border}` }}>
            {plans.map((p, i) => {
              const [hov, setHov] = useState(false);
              // Featured card inverts at rest
              const isInverted = p.featured && !hov;
              const isHovInverted = !p.featured && hov;
              const bg = isInverted || isHovInverted ? t.fg : t.bg;
              const fg = isInverted || isHovInverted ? "#fff" : t.fg;
              const fgMuted = isInverted || isHovInverted ? "rgba(255,255,255,0.5)" : t.mutedFg;

              return (
                <div key={i}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                  style={{
                    padding: "48px 40px",
                    background: bg, color: fg,
                    borderRight: i < 2 ? `1px solid ${t.border}` : "none",
                    transition: "background 100ms linear, color 100ms linear",
                  }}>
                  {p.featured && (
                    <div style={{ fontFamily: FONTS.mono, fontSize: 9, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: fgMuted, marginBottom: 12 }}>
                      ★ Most Popular
                    </div>
                  )}
                  <div style={{ fontFamily: FONTS.display, fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontFamily: FONTS.body, fontSize: 13, color: fgMuted, marginBottom: 32 }}>{p.desc}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 40 }}>
                    <span style={{ fontFamily: FONTS.display, fontSize: 56, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1 }}>{p.price}</span>
                    <span style={{ fontFamily: FONTS.mono, fontSize: 10, color: fgMuted, letterSpacing: "0.08em", textTransform: "uppercase" }}>/{p.period}</span>
                  </div>

                  <button style={{
                    display: "block", width: "100%", padding: "13px 20px",
                    background: fg, color: bg,
                    border: `2px solid ${fg}`, borderRadius: 0,
                    fontFamily: FONTS.mono, fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    cursor: "pointer", marginBottom: 36,
                    transition: "background 100ms linear, color 100ms linear",
                  }}>
                    {p.name === "Free" ? "Start free →" : `Choose ${p.name} →`}
                  </button>

                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {p.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <Check size={14} strokeWidth={1.5} color={fg} style={{ marginTop: 3, flexShrink: 0 }} />
                        <span style={{ fontFamily: FONTS.body, fontSize: 14, color: fg, lineHeight: 1.5 }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Rule />
    </>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    { text: "The skill folder concept is brilliant. My agent now builds every new component in the same style without any extra prompting.", author: "Sarah K.", role: "Indie Hacker" },
    { text: "I was shipping generic purple-gradient UIs until I found Drip. The retro-terminal skill transformed my entire project.", author: "Marcus L.", role: "Vibe Coder" },
    { text: "One command and my Lovable project went from looking like every other AI app to something genuinely distinctive.", author: "Priya M.", role: "Founder" },
  ];

  return (
    <>
      <section className="tx-diag" style={{ padding: "96px 48px", position: "relative" }}>
        <div className="tc" style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: t.mutedFg, marginBottom: 80 }}>
            What people say
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 64 }}>
            {quotes.map((q, i) => (
              <div key={i}>
                {/* Oversized quotation mark — graphic element */}
                <div style={{
                  fontFamily: FONTS.display, fontSize: 120, lineHeight: 0.8,
                  color: t.fg, opacity: 0.06, marginBottom: 16, userSelect: "none",
                }}>"</div>
                <blockquote style={{
                  fontFamily: FONTS.display, fontSize: 18, fontStyle: "italic",
                  lineHeight: 1.6, color: t.fg, marginBottom: 32,
                  borderLeft: `4px solid ${t.fg}`, paddingLeft: 24,
                }}>
                  {q.text}
                </blockquote>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: t.fg }}>
                  {q.author}
                </div>
                <div style={{ fontFamily: FONTS.mono, fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: t.mutedFg, marginTop: 4 }}>
                  {q.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Rule />
    </>
  );
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <>
      <section className="tx-inv" style={{ background: t.fg, padding: "120px 48px", position: "relative" }}>
        <div className="tc" style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 48 }}>
            Begin now
          </div>
          <h2 style={{
            fontFamily: FONTS.display,
            fontSize: "clamp(48px, 8vw, 120px)",
            fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1,
            color: "#fff", marginBottom: 64,
          }}>
            Give your app<br />
            <em style={{ fontStyle: "italic" }}>the design<br />it deserves.</em>
          </h2>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn inverted>Browse skills →</Btn>
            <Btn variant="secondary" inverted>Read the docs</Btn>
          </div>
        </div>
      </section>
      <Rule ultra />
    </>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ padding: "40px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontFamily: FONTS.display, fontSize: 18, fontWeight: 700, fontStyle: "italic" }}>Drip</span>
      <span style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: t.mutedFg }}>
        © 2024 Drip — Give your app the design it deserves
      </span>
      <div style={{ display: "flex", gap: 32 }}>
        {["Skills", "Docs", "GitHub", "npm"].map(l => (
          <a key={l} href="#" style={{ fontFamily: FONTS.mono, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: t.mutedFg, textDecoration: "none", borderBottom: "1px solid transparent", transition: "border-color 100ms linear" }}
            onMouseEnter={e => e.target.style.borderBottomColor = t.mutedFg}
            onMouseLeave={e => e.target.style.borderBottomColor = "transparent"}>{l}</a>
        ))}
      </div>
    </footer>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function MinimalistLandingPage() {
  return (
    <>
      <style>{styles}</style>
      <div style={{ minHeight: "100vh", background: t.bg }}>
        <Nav />
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}
