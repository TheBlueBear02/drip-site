// ART DECO SKILL — LandingPage.jsx (North Star Example)
//
// READ THIS COMPLETELY before building any page.
//
// MANDATORY CHECKLIST:
// [ ] #0A0A0A obsidian black background (never charcoal or dark gray)
// [ ] #F2F0E4 champagne cream for body text (never white)
// [ ] #D4AF37 metallic gold for all accents, borders, headings
// [ ] Crosshatch diagonal texture on every section background
// [ ] border-radius: 0 on every element — no exceptions
// [ ] Gold GLOWS (0 0 20px rgba(212,175,55,0.3)) — never drop shadows
// [ ] Marcellus + UPPERCASE + letter-spacing 0.2em on all headings
// [ ] Josefin Sans 300 for all body text
// [ ] Rotated diamond (rotate(45deg)) for icon containers
// [ ] Corner L-brackets on all cards (absolute positioned)
// [ ] Gold horizontal rules flanking section headings
// [ ] Card lift on hover (translateY -8px) at 500ms ease-out
// [ ] Border: 30% gold at rest → 100% gold on hover
// [ ] Roman numerals (I, II, III) for step numbers and tiers
// [ ] Sunburst radial gradient in hero section
// [ ] All section padding: py-32 minimum (128px)
// [ ] Thin accent line at very top of navbar (2px gold gradient)

import { useState } from "react";
import {
  Crown, Star, Diamond, ArrowRight, Shield,
  Award, Gem, BookOpen, Key, Users,
} from "lucide-react";

// ── CONSTANTS ─────────────────────────────────────────────────────────────────

const C = {
  bg:    "#0A0A0A",
  card:  "#141414",
  fg:    "#F2F0E4",
  gold:  "#D4AF37",
  pale:  "#F2E8C4",
  blue:  "#1E3D59",
  muted: "#888888",
};

const FONT_DISPLAY = "'Marcellus', Georgia, serif";
const FONT_BODY    = "'Josefin Sans', system-ui, sans-serif";

// Mandatory: crosshatch texture on ALL section backgrounds
const CROSSHATCH = {
  backgroundImage: `
    repeating-linear-gradient(45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px),
    repeating-linear-gradient(-45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px)
  `,
};

// ── SHARED COMPONENTS ─────────────────────────────────────────────────────────

function CornerBrackets({ hover, size = 14, inset = 8 }) {
  const op = hover ? 1 : 0.4;
  const s = { position: "absolute", width: size, height: size, opacity: op, transition: "opacity 300ms ease-out", pointerEvents: "none" };
  return (
    <>
      <div aria-hidden="true" style={{ ...s, top: inset, left: inset, borderTop: `1px solid ${C.gold}`, borderLeft: `1px solid ${C.gold}` }} />
      <div aria-hidden="true" style={{ ...s, bottom: inset, right: inset, borderBottom: `1px solid ${C.gold}`, borderRight: `1px solid ${C.gold}` }} />
    </>
  );
}

function SectionHeading({ children, subtitle, center = true }) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 64 }}>
      {/* Flanking gold dividers — mandatory */}
      <div style={{ display: "flex", alignItems: "center", gap: 24, justifyContent: center ? "center" : "flex-start", marginBottom: 16 }}>
        <div style={{ height: 1, width: 80, background: `linear-gradient(to right, transparent, ${C.gold})`, opacity: 0.6 }} />
        <h2 style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 400, fontSize: "clamp(28px, 4vw, 48px)",
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: C.fg, whiteSpace: "nowrap",
        }}>
          {children}
        </h2>
        <div style={{ height: 1, width: 80, background: `linear-gradient(to left, transparent, ${C.gold})`, opacity: 0.6 }} />
      </div>

      {/* Sub-rule */}
      <div style={{
        display: "flex", gap: 6, justifyContent: center ? "center" : "flex-start",
        marginBottom: subtitle ? 16 : 0,
      }}>
        <div style={{ width: 32, height: 1, background: C.gold, opacity: 0.5 }} />
        <div style={{ width: 6, height: 6, transform: "rotate(45deg)", background: C.gold, opacity: 0.7, marginTop: -3 }} />
        <div style={{ width: 32, height: 1, background: C.gold, opacity: 0.5 }} />
      </div>

      {subtitle && (
        <p style={{
          fontFamily: FONT_BODY, fontWeight: 300, fontSize: 16,
          color: C.muted, letterSpacing: "0.05em",
          maxWidth: 560, margin: center ? "16px auto 0" : "16px 0 0",
          lineHeight: 1.8,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function DecoButton({ children, variant = "default", size = "md", icon: Icon, onClick, fullWidth }) {
  const [hov, setHov] = useState(false);
  const [pressed, setPressed] = useState(false);
  const heights = { sm: 40, md: 48, lg: 56, xl: 64 };
  const fonts   = { sm: 11, md: 12, lg: 13, xl: 14 };

  const styles = {
    default: {
      bg:      hov ? C.gold : "transparent",
      color:   hov ? C.bg   : C.gold,
      border:  `2px solid ${C.gold}`,
      glow:    hov ? "0 0 20px rgba(212,175,55,0.4)" : "none",
    },
    solid: {
      bg:      hov ? C.pale : C.gold,
      color:   C.bg,
      border:  "none",
      glow:    hov ? "0 0 25px rgba(212,175,55,0.5)" : "0 0 10px rgba(212,175,55,0.2)",
    },
    outline: {
      bg:      hov ? C.blue : "transparent",
      color:   hov ? C.fg  : C.gold,
      border:  `1px solid ${C.gold}`,
      glow:    "none",
    },
    ghost: {
      bg:      hov ? "rgba(212,175,55,0.08)" : "transparent",
      color:   hov ? C.gold : C.muted,
      border:  "1px solid rgba(212,175,55,0.2)",
      glow:    "none",
    },
  };

  const s = styles[variant] || styles.default;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => { setHov(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        height: heights[size], padding: `0 ${heights[size] * 0.65}px`,
        background: s.bg, color: s.color, border: s.border,
        borderRadius: 0, cursor: "pointer", outline: "none",
        fontFamily: FONT_BODY, fontWeight: 400, fontSize: fonts[size],
        textTransform: "uppercase", letterSpacing: "0.2em",
        display: "inline-flex", alignItems: "center", gap: 10,
        width: fullWidth ? "100%" : undefined,
        justifyContent: fullWidth ? "center" : undefined,
        boxShadow: s.glow,
        transform: pressed ? "scale(0.98)" : "none",
        transition: "all 300ms ease-out",
      }}
    >
      {children}
      {Icon && <Icon size={fonts[size] + 2} strokeWidth={1} />}
    </button>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ctaH, setCtaH] = useState(false);
  const links = ["Collection", "Society", "Provenance", "Contact"];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 24), { passive: true });
  }

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: C.bg,
        borderBottom: `1px solid ${scrolled ? C.gold : "rgba(212,175,55,0.25)"}`,
        boxShadow: scrolled ? "0 0 20px rgba(212,175,55,0.1)" : "none",
        transition: "all 400ms ease-out",
      }}>
        {/* Thin gold top accent */}
        <div style={{ height: 2, background: `linear-gradient(to right, transparent, ${C.gold} 30%, ${C.gold} 70%, transparent)`, opacity: 0.5 }} />

        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 32px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontFamily: FONT_DISPLAY, fontSize: 20, letterSpacing: "0.35em", textTransform: "uppercase", color: C.gold, textDecoration: "none" }}>
            GATSBY
          </a>

          <div style={{ display: "flex" }}>
            {links.map(l => <NavLink key={l} href={`/${l.toLowerCase()}`}>{l}</NavLink>)}
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <button
              onMouseEnter={() => setCtaH(true)}
              onMouseLeave={() => setCtaH(false)}
              style={{
                height: 40, padding: "0 24px",
                background: ctaH ? C.gold : "transparent",
                color: ctaH ? C.bg : C.gold,
                border: `1px solid ${C.gold}`, borderRadius: 0,
                fontFamily: FONT_BODY, fontSize: 11,
                textTransform: "uppercase", letterSpacing: "0.2em", cursor: "pointer",
                boxShadow: ctaH ? "0 0 15px rgba(212,175,55,0.3)" : "none",
                transition: "all 300ms ease-out",
              }}
            >
              Enquire
            </button>
            <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ width: 44, height: 44, background: "transparent", border: "1px solid rgba(212,175,55,0.3)", borderRadius: 0, cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              {[0,1,2].map(i => (
                <span key={i} style={{ width: i===1?10:16, height: 1, background: C.gold, display: "block", opacity: i===1?0.6:1, transition: "all 300ms" }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 49, background: C.bg, ...CROSSHATCH, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 72 }}>
          <div aria-hidden style={{ position: "absolute", width: 400, height: 400, background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
          {links.map((l, i, arr) => (
            <a key={l} href={`/${l.toLowerCase()}`} style={{ display: "block", padding: "20px 0", fontFamily: FONT_DISPLAY, fontSize: 28, textTransform: "uppercase", letterSpacing: "0.3em", color: C.muted, textDecoration: "none", borderBottom: i<arr.length-1 ? "1px solid rgba(212,175,55,0.1)" : "none", width: 280, textAlign: "center", transition: "color 200ms" }}
              onMouseEnter={e=>e.target.style.color=C.gold}
              onMouseLeave={e=>e.target.style.color=C.muted}
            >{l}</a>
          ))}
          <div style={{ marginTop: 48 }}>
            <DecoButton variant="solid" size="lg">Request Invitation</DecoButton>
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
      style={{ padding: "0 18px", fontFamily: FONT_BODY, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: hov ? C.gold : C.muted, textDecoration: "none", lineHeight: "72px", borderRight: "1px solid rgba(212,175,55,0.1)", transition: "color 200ms" }}
    >{children}</a>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────

function Hero() {
  const [btnH, setBtnH] = useState(false);
  const [btn2H, setBtn2H] = useState(false);

  return (
    <section style={{ background: C.bg, ...CROSSHATCH, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "160px 32px 128px", position: "relative", overflow: "hidden" }}>

      {/* Sunburst radial — mandatory Art Deco focal point */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 800, height: 800,
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, rgba(212,175,55,0.03) 35%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Vertical accent lines — architectural columns */}
      {[-340, 340].map(x => (
        <div key={x} aria-hidden="true" style={{
          position: "absolute", top: 0, bottom: 0,
          left: `calc(50% + ${x}px)`, width: 1,
          background: `linear-gradient(to bottom, transparent, rgba(212,175,55,0.12), transparent)`,
          pointerEvents: "none",
        }} />
      ))}

      <div style={{ maxWidth: 800, textAlign: "center", position: "relative", zIndex: 1 }}>

        {/* Eyebrow tag */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ height: 1, width: 48, background: C.gold, opacity: 0.5 }} />
          <span style={{ fontFamily: FONT_BODY, fontSize: 10, textTransform: "uppercase", letterSpacing: "0.3em", color: C.gold }}>
            Est. MCMXXV
          </span>
          <div style={{ height: 1, width: 48, background: C.gold, opacity: 0.5 }} />
        </div>

        {/* Hero headline — maximum drama */}
        <h1 style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 400, fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 1.05, letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: C.fg, marginBottom: 8,
        }}>
          The Grand
        </h1>
        <h1 style={{
          fontFamily: FONT_DISPLAY,
          fontWeight: 400, fontSize: "clamp(48px, 8vw, 96px)",
          lineHeight: 1.05, letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: C.gold, marginBottom: 32,
          textShadow: "0 0 40px rgba(212,175,55,0.3)",
        }}>
          Society
        </h1>

        {/* Decorative diamond divider */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 32 }}>
          <div style={{ height: 1, width: 64, background: C.gold, opacity: 0.4 }} />
          <div style={{ width: 8, height: 8, transform: "rotate(45deg)", border: `1px solid ${C.gold}` }} />
          <div style={{ height: 1, width: 64, background: C.gold, opacity: 0.4 }} />
        </div>

        <p style={{
          fontFamily: FONT_BODY, fontWeight: 300, fontSize: 18,
          color: C.muted, lineHeight: 1.9, letterSpacing: "0.05em",
          marginBottom: 56, maxWidth: 520, margin: "0 auto 56px",
        }}>
          An exclusive enclave for the discerning collector. Where heritage
          meets aspiration, and every acquisition tells a story of enduring value.
        </p>

        {/* CTA pair */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <DecoButton variant="solid" size="lg" icon={ArrowRight}>Request Invitation</DecoButton>
          <DecoButton variant="outline" size="lg">View Collection</DecoButton>
        </div>

        {/* Social proof row */}
        <div style={{
          display: "flex", gap: 40, justifyContent: "center", marginTop: 64,
          paddingTop: 40, borderTop: "1px solid rgba(212,175,55,0.12)",
          flexWrap: "wrap",
        }}>
          {[["XII", "Private Acquisitions"], ["XLVI", "Years of Heritage"], ["IV", "Global Galleries"]].map(([n, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 32, color: C.gold, letterSpacing: "0.1em", marginBottom: 4 }}>{n}</div>
              <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: C.muted, textTransform: "uppercase", letterSpacing: "0.15em" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FEATURES ─────────────────────────────────────────────────────────────────

function Features() {
  const features = [
    { icon: Crown,  roman: "I",   title: "White Glove Curation",   body: "Every piece personally vetted by our principal advisors. Authenticity guaranteed through four centuries of expertise." },
    { icon: Shield, roman: "II",  title: "Private Acquisition",     body: "Discreet transactions handled with absolute confidentiality. Your portfolio, protected by our unbreakable covenant." },
    { icon: Gem,    roman: "III", title: "Heritage Authentication", body: "Provenance documentation spanning generations. Our scholars trace the lineage of every work in the collection." },
    { icon: Key,    roman: "IV",  title: "Members Access",          body: "Exclusive previews, private viewings, and first-right-of-acquisition on curated holdings before public offering." },
    { icon: Award,  roman: "V",   title: "Bespoke Commission",      body: "Work directly with our network of master craftsmen to commission singular pieces for your collection." },
    { icon: Users,  roman: "VI",  title: "The Inner Circle",        body: "Quarterly gatherings, salons, and private dinners for members to meet creators, scholars, and fellow collectors." },
  ];

  return (
    <section style={{ background: C.bg, ...CROSSHATCH, padding: "128px 32px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeading subtitle="Six pillars of the collector's experience, each refined through decades of practice.">
          Our Services
        </SectionHeading>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {features.map((f, i) => (
            <FeatureBlock key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlock({ icon: Icon, roman, title, body }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", background: C.card,
        border: `1px solid ${hov ? C.gold : "rgba(212,175,55,0.2)"}`,
        borderRadius: 0, padding: "32px 28px",
        boxShadow: hov ? "0 0 25px rgba(212,175,55,0.2)" : "0 0 8px rgba(212,175,55,0.06)",
        transform: hov ? "translateY(-8px)" : "none",
        transition: "all 500ms ease-out",
      }}
    >
      <CornerBrackets hover={hov} />

      {/* Roman numeral label */}
      <div style={{ fontFamily: FONT_DISPLAY, fontSize: 11, color: C.muted, letterSpacing: "0.2em", marginBottom: 20 }}>
        {roman}
      </div>

      {/* Rotated diamond icon — THE Art Deco signature */}
      <div style={{
        width: 52, height: 52, transform: "rotate(45deg)",
        border: `1px solid ${hov ? C.gold : "rgba(212,175,55,0.35)"}`,
        background: hov ? "rgba(212,175,55,0.1)" : "rgba(212,175,55,0.04)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: 28, boxShadow: hov ? "0 0 10px rgba(212,175,55,0.2)" : "none",
        transition: "all 300ms ease-out",
      }}>
        <div style={{ transform: "rotate(-45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={20} strokeWidth={1} color={hov ? C.pale : C.gold} />
        </div>
      </div>

      {/* Expanding gold rule */}
      <div style={{ height: 1, width: hov ? 40 : 20, background: C.gold, opacity: hov ? 0.8 : 0.4, marginBottom: 18, transition: "all 400ms ease-out" }} />

      <h3 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", color: C.gold, marginBottom: 12 }}>
        {title}
      </h3>
      <p style={{ fontFamily: FONT_BODY, fontWeight: 300, fontSize: 14, color: C.muted, lineHeight: 1.8, letterSpacing: "0.02em" }}>
        {body}
      </p>
    </div>
  );
}

// ── HOW IT WORKS ─────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { roman: "I",   title: "Application",  body: "Submit your letter of introduction. Accepted applicants receive a personal response within ten working days." },
    { roman: "II",  title: "Consultation", body: "Meet with our senior advisor for a private salon. We learn your taste, vision, and collecting philosophy." },
    { roman: "III", title: "Curation",     body: "Receive a bespoke selection curated specifically for your collection. No two proposals are alike." },
    { roman: "IV",  title: "Acquisition",  body: "Complete the arrangement with full discretion. Your new acquisition arrives with complete provenance documentation." },
  ];

  return (
    <section style={{ background: "#080808", ...CROSSHATCH, padding: "128px 32px", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <SectionHeading subtitle="The collector's journey, refined over four decades.">
          The Process
        </SectionHeading>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {steps.map((s, i) => (
            <StepBlock key={i} {...s} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBlock({ roman, title, body, isLast }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "32px 28px",
        borderRight: !isLast ? "1px solid rgba(212,175,55,0.12)" : "none",
        background: hov ? "rgba(212,175,55,0.03)" : "transparent",
        transition: "all 300ms ease-out",
        position: "relative",
      }}
    >
      {/* Roman numeral — large display */}
      <div style={{
        fontFamily: FONT_DISPLAY, fontSize: 48,
        color: hov ? C.gold : "rgba(212,175,55,0.2)",
        letterSpacing: "0.05em",
        lineHeight: 1, marginBottom: 20,
        transition: "color 400ms ease-out",
        textShadow: hov ? "0 0 20px rgba(212,175,55,0.3)" : "none",
      }}>
        {roman}
      </div>

      <div style={{ height: 1, width: 32, background: C.gold, opacity: hov ? 0.8 : 0.3, marginBottom: 16, transition: "all 300ms" }} />

      <h3 style={{ fontFamily: FONT_DISPLAY, fontSize: 14, letterSpacing: "0.2em", textTransform: "uppercase", color: hov ? C.pale : C.fg, marginBottom: 12, transition: "color 300ms" }}>
        {title}
      </h3>
      <p style={{ fontFamily: FONT_BODY, fontWeight: 300, fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
        {body}
      </p>
    </div>
  );
}

// ── PRICING ───────────────────────────────────────────────────────────────────

function Pricing() {
  const tiers = [
    {
      roman: "I", tier: "Associate", price: "$2,500", period: "/ annum",
      description: "Entry into the Society's public programme.",
      features: ["Seasonal exhibition access", "Society newsletter", "Member events", "Digital collection archive"],
    },
    {
      roman: "II", tier: "Fellow", price: "$12,000", period: "/ annum", featured: true,
      description: "Full membership with acquisition privileges.",
      features: ["Private previews", "Acquisition advisory", "Annual salon dinner", "Dedicated advisor", "Provenance research"],
    },
    {
      roman: "III", tier: "Patron", price: "Bespoke",
      description: "The pinnacle of collector membership.",
      features: ["All Fellow benefits", "Commission brokerage", "Estate planning", "International placement", "Legacy programme"],
    },
  ];

  return (
    <section style={{ background: C.bg, ...CROSSHATCH, padding: "128px 32px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <SectionHeading subtitle="Three tiers of membership, each conferring distinct privileges and access.">
          Membership
        </SectionHeading>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {tiers.map((t, i) => (
            <PricingBlock key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingBlock({ roman, tier, price, period, description, features, featured }) {
  const [hov, setHov] = useState(false);
  const [ctaH, setCtaH] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", background: featured ? "rgba(212,175,55,0.05)" : C.card,
        border: `${featured ? 2 : 1}px solid ${featured || hov ? C.gold : "rgba(212,175,55,0.2)"}`,
        borderRadius: 0, padding: "40px 32px",
        boxShadow: featured ? "0 0 40px rgba(212,175,55,0.2)" : hov ? "0 0 15px rgba(212,175,55,0.12)" : "none",
        transform: featured ? "scaleY(1.02)" : "none",
        transition: "all 400ms ease-out",
        display: "flex", flexDirection: "column",
      }}
    >
      <CornerBrackets hover={hov || featured} opacity={featured ? [0.7, 1] : [0.3, 1]} />

      <div style={{ fontFamily: FONT_BODY, fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: C.muted, marginBottom: 6 }}>
        <span style={{ fontFamily: FONT_DISPLAY, fontSize: 11, color: C.gold, marginRight: 8 }}>{roman}</span>{tier}
      </div>

      <div style={{ height: 1, width: 40, background: C.gold, opacity: 0.5, marginBottom: 24 }} />

      <div style={{ marginBottom: 8 }}>
        <span style={{ fontFamily: FONT_DISPLAY, fontSize: 40, color: featured ? C.pale : C.gold }}>{price}</span>
        {period && <span style={{ fontFamily: FONT_BODY, fontSize: 12, color: C.muted, marginLeft: 6 }}>{period}</span>}
      </div>

      <p style={{ fontFamily: FONT_BODY, fontWeight: 300, fontSize: 13, color: C.muted, marginBottom: 24, lineHeight: 1.7 }}>{description}</p>

      <ul style={{ flex: 1, listStyle: "none", padding: 0, marginBottom: 28 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", paddingBottom: 10, marginBottom: 10, borderBottom: i<features.length-1?"1px solid rgba(212,175,55,0.08)":"none", fontFamily: FONT_BODY, fontWeight: 300, fontSize: 13, color: C.fg, lineHeight: 1.5 }}>
            <span style={{ width: 6, height: 6, flexShrink: 0, transform: "rotate(45deg)", background: C.gold, marginTop: 4, opacity: 0.8 }} />
            {f}
          </li>
        ))}
      </ul>

      <button
        onMouseEnter={() => setCtaH(true)}
        onMouseLeave={() => setCtaH(false)}
        style={{
          height: 48, width: "100%",
          background: ctaH ? (featured ? C.pale : C.gold) : featured ? C.gold : "transparent",
          color: ctaH ? C.bg : featured ? C.bg : C.gold,
          border: `2px solid ${C.gold}`, borderRadius: 0,
          fontFamily: FONT_BODY, fontWeight: 400, fontSize: 11,
          textTransform: "uppercase", letterSpacing: "0.2em", cursor: "pointer",
          boxShadow: ctaH ? "0 0 20px rgba(212,175,55,0.35)" : "none",
          transition: "all 300ms ease-out",
        }}
      >
        Select Tier
      </button>
    </div>
  );
}

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────

function Testimonials() {
  const testimonials = [
    { quote: "Forty years of collecting, and never an experience to rival the Society's counsel. Each acquisition feels like the culmination of a life's education.", name: "Lord E. Blackwood", title: "Collector, London", initials: "EB" },
    { quote: "The provenance documentation alone is worth the membership. But the private salons, the relationships formed — that is truly irreplaceable.", name: "M. de Vries", title: "Art Patron, Amsterdam", initials: "MV" },
    { quote: "I came seeking a single piece. I stayed for the community of minds. The Society has transformed how I understand the role of the collector.", name: "C. Watanabe", title: "Principal, Tokyo", initials: "CW" },
  ];

  return (
    <section style={{ background: "#060606", ...CROSSHATCH, padding: "128px 32px", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <SectionHeading subtitle="From our members, in their own words.">
          Testimonials
        </SectionHeading>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {testimonials.map((t, i) => (
            <TestimonialBlock key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialBlock({ quote, name, title, initials }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", background: C.card,
        border: `1px solid ${hov ? "rgba(212,175,55,0.6)" : "rgba(212,175,55,0.15)"}`,
        borderRadius: 0, padding: 32,
        boxShadow: hov ? "0 0 20px rgba(212,175,55,0.15)" : "none",
        transition: "all 400ms ease-out",
      }}
    >
      <CornerBrackets hover={hov} />
      <div style={{ fontFamily: FONT_DISPLAY, fontSize: 48, lineHeight: 1, color: C.gold, opacity: 0.25, marginBottom: -12, userSelect: "none" }}>"</div>
      <p style={{ fontFamily: FONT_BODY, fontWeight: 300, fontSize: 14, color: C.fg, lineHeight: 1.85, fontStyle: "italic", marginBottom: 24, letterSpacing: "0.02em" }}>{quote}</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, transform: "rotate(45deg)", border: `1px solid ${C.gold}`, background: "rgba(212,175,55,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ transform: "rotate(-45deg)", fontFamily: FONT_DISPLAY, fontSize: 11, color: C.gold }}>{initials}</span>
        </div>
        <div>
          <div style={{ fontFamily: FONT_DISPLAY, fontSize: 12, color: C.fg, letterSpacing: "0.1em", textTransform: "uppercase" }}>{name}</div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 10, color: C.muted, letterSpacing: "0.08em" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}

// ── CTA SECTION ───────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section style={{ background: C.bg, ...CROSSHATCH, padding: "128px 32px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 32, height: 1, background: C.gold, opacity: 0.5, marginTop: 7 }} />
          <div style={{ width: 8, height: 8, transform: "rotate(45deg)", border: `1px solid ${C.gold}`, opacity: 0.8 }} />
          <div style={{ width: 32, height: 1, background: C.gold, opacity: 0.5, marginTop: 7 }} />
        </div>

        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.fg, marginBottom: 8 }}>
          Join The
        </h2>
        <h2 style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: 32, textShadow: "0 0 30px rgba(212,175,55,0.25)" }}>
          Grand Society
        </h2>

        <p style={{ fontFamily: FONT_BODY, fontWeight: 300, fontSize: 15, color: C.muted, lineHeight: 1.9, letterSpacing: "0.04em", marginBottom: 48 }}>
          Applications are reviewed quarterly. Membership is extended by invitation
          and is subject to approval by the Society's Board of Principals.
        </p>

        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <DecoButton variant="solid" size="xl" icon={ArrowRight}>Request Invitation</DecoButton>
          <DecoButton variant="ghost" size="xl">Download Prospectus</DecoButton>
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(212,175,55,0.2)", padding: "64px 32px 32px" }}>
      <div style={{ maxWidth: 1152, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 48, marginBottom: 48 }}>
          <div style={{ maxWidth: 280 }}>
            <div style={{ fontFamily: FONT_DISPLAY, fontSize: 20, letterSpacing: "0.35em", textTransform: "uppercase", color: C.gold, marginBottom: 12 }}>
              GATSBY
            </div>
            <div style={{ height: 1, width: 40, background: C.gold, opacity: 0.4, marginBottom: 16 }} />
            <p style={{ fontFamily: FONT_BODY, fontWeight: 300, fontSize: 13, color: C.muted, lineHeight: 1.8 }}>
              For the discerning collector since 1925. Heritage, authenticity, and absolute discretion.
            </p>
          </div>

          {[
            { title: "Society", links: ["Membership", "Collection", "Provenance", "Commission"] },
            { title: "About",   links: ["Our History", "The Board", "Advisors", "Press"] },
            { title: "Contact", links: ["Enquiries", "Applications", "Private Events", "Archive"] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: FONT_DISPLAY, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold, marginBottom: 20 }}>
                {col.title}
              </div>
              {col.links.map(l => (
                <a key={l} href="#" style={{ display: "block", fontFamily: FONT_BODY, fontWeight: 300, fontSize: 13, color: C.muted, textDecoration: "none", marginBottom: 12, letterSpacing: "0.05em", transition: "color 200ms" }}
                  onMouseEnter={e => e.target.style.color = C.gold}
                  onMouseLeave={e => e.target.style.color = C.muted}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(212,175,55,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(136,136,136,0.5)", letterSpacing: "0.08em" }}>
            © MCMXXV–MMXXV The Grand Society. All rights reserved.
          </div>
          <div style={{ fontFamily: FONT_BODY, fontSize: 11, color: "rgba(136,136,136,0.5)", letterSpacing: "0.08em" }}>
            Privacy · Terms · Accessibility
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── PAGE COMPOSITION ──────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <div style={{ background: C.bg }}>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
