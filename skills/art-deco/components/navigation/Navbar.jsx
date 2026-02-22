// ART DECO SKILL — Navbar.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// The navbar is an architectural element — a building's cornice line.
// Solid black background with gold bottom border — the floor of the stage.
// Logo in Marcellus, gold, all-caps with wide tracking.
// Navigation links in Josefin Sans, all-caps, 0.15em tracking, pewter at rest → gold on hover.
// CTA button: outline gold, fills to gold on hover (full theatrical transition).
// Mobile menu opens as a full-screen architectural overlay — not a drawer.
// Scrolled state: subtle gold glow beneath the bar.

import { useState, useEffect } from "react";

const C = {
  bg:    "#0A0A0A",
  fg:    "#F2F0E4",
  gold:  "#D4AF37",
  pale:  "#F2E8C4",
  muted: "#888888",
};

const CROSSHATCH = {
  backgroundImage: `
    repeating-linear-gradient(45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px),
    repeating-linear-gradient(-45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px)
  `,
};

export function Navbar({ brand = "GATSBY", links = [], ctaLabel = "Enter", onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ctaH, setCtaH] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: C.bg,
        borderBottom: `1px solid ${scrolled ? C.gold : "rgba(212,175,55,0.3)"}`,
        boxShadow: scrolled ? "0 0 20px rgba(212,175,55,0.1)" : "none",
        transition: "all 400ms ease-out",
      }}>
        {/* Thin gold accent line at very top */}
        <div style={{ height: 2, background: `linear-gradient(to right, transparent, ${C.gold}, transparent)`, opacity: 0.6 }} />

        <div style={{
          maxWidth: 1152, margin: "0 auto", padding: "0 32px",
          height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo — Marcellus, gold, wide tracking */}
          <a href="/" style={{
            fontFamily: "'Marcellus', serif",
            fontWeight: 400, fontSize: 20, letterSpacing: "0.3em",
            textTransform: "uppercase", color: C.gold, textDecoration: "none",
          }}>
            {brand}
          </a>

          {/* Desktop nav links */}
          <div style={{ display: "flex", gap: 0, alignItems: "center" }}>
            {links.map((l, i) => (
              <NavLink key={i} href={l.href}>{l.label}</NavLink>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {/* CTA button */}
            <button
              onMouseEnter={() => setCtaH(true)}
              onMouseLeave={() => setCtaH(false)}
              onClick={onCtaClick}
              style={{
                height: 40, padding: "0 24px",
                background: ctaH ? C.gold : "transparent",
                color: ctaH ? C.bg : C.gold,
                border: `1px solid ${C.gold}`,
                borderRadius: 0,
                fontFamily: "'Josefin Sans', sans-serif",
                fontWeight: 400, fontSize: 11,
                textTransform: "uppercase", letterSpacing: "0.2em",
                cursor: "pointer", outline: "none",
                boxShadow: ctaH ? "0 0 15px rgba(212,175,55,0.3)" : "none",
                transition: "all 300ms ease-out",
              }}
            >
              {ctaLabel}
            </button>

            {/* Hamburger — geometric lines */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                width: 44, height: 44, background: "transparent",
                border: "1px solid rgba(212,175,55,0.3)", borderRadius: 0,
                cursor: "pointer", outline: "none",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 5,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block",
                  width: i === 1 ? 12 : 18, height: 1,
                  background: open ? C.gold : "rgba(212,175,55,0.7)",
                  transform: open
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                    : "scaleX(0)"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                  transition: "all 300ms ease-out",
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay — full-screen architectural */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 49,
          background: C.bg, ...CROSSHATCH,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          paddingTop: 72,
        }}>
          {/* Decorative sunburst behind center */}
          <div aria-hidden="true" style={{
            position: "absolute",
            width: 400, height: 400,
            background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }} />

          {links.map((l, i) => (
            <a key={i} href={l.href} style={{
              display: "block", padding: "20px 0",
              fontFamily: "'Marcellus', serif",
              fontWeight: 400, fontSize: 28,
              textTransform: "uppercase", letterSpacing: "0.3em",
              color: C.muted, textDecoration: "none",
              borderBottom: i < links.length - 1 ? "1px solid rgba(212,175,55,0.1)" : "none",
              width: 280, textAlign: "center",
              transition: "color 200ms ease-out",
            }}
              onMouseEnter={e => e.target.style.color = C.gold}
              onMouseLeave={e => e.target.style.color = C.muted}
            >
              {l.label}
            </a>
          ))}

          <button onClick={onCtaClick} style={{
            marginTop: 48, height: 52, padding: "0 40px",
            background: C.gold, color: C.bg,
            border: "none", borderRadius: 0, cursor: "pointer",
            fontFamily: "'Josefin Sans', sans-serif",
            fontWeight: 400, fontSize: 13,
            textTransform: "uppercase", letterSpacing: "0.25em",
          }}>
            {ctaLabel}
          </button>
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
        padding: "0 20px",
        fontFamily: "'Josefin Sans', sans-serif",
        fontWeight: 400, fontSize: 11,
        textTransform: "uppercase", letterSpacing: "0.15em",
        color: hov ? C.gold : C.muted, textDecoration: "none",
        transition: "color 200ms ease-out",
        borderRight: "1px solid rgba(212,175,55,0.1)",
        lineHeight: "72px",
      }}
    >
      {children}
    </a>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Navbar
//   brand="GATSBY"
//   links={[
//     { label: "Collection", href: "/collection" },
//     { label: "Society",    href: "/society" },
//     { label: "Provenance", href: "/provenance" },
//     { label: "Contact",    href: "/contact" },
//   ]}
//   ctaLabel="Enquire"
//   onCtaClick={() => {}}
// />
