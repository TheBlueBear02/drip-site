// HAND-DRAWN SKILL — Navbar.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Logo uses Kalam — a marker-pen brand name, not a clean wordmark.
// Nav links use Patrick Hand with a wavy underline on hover (dashed border-bottom).
// The CTA button uses the full wobbly button mechanic.
// Mobile: hamburger opens a stacked sheet with Kalam oversized links.
// The nav background is the warm paper color — no frosted glass.

import { useState } from "react";

export function Navbar({ brand = "Sketchy", links = [], ctaLabel = "Get Started", onCtaClick }) {
  const [open, setOpen] = useState(false);
  const [ctaP, setCtaP] = useState(false);
  const [ctaH, setCtaH] = useState(false);

  return (
    <>
      <nav style={{
        borderBottom: "2px solid #2d2d2d",
        background: "#fdfbf7",
        position: "sticky", top: 0, zIndex: 40,
        boxShadow: "0 2px 0px 0px #2d2d2d",
      }}>
        <div style={{
          maxWidth: 1024, margin: "0 auto", padding: "0 24px",
          height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo — Kalam with accent star, slight tilt */}
          <a href="/" style={{
            fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 26,
            color: "#2d2d2d", textDecoration: "none",
            transform: "rotate(-1deg)", display: "inline-block",
          }}>
            ✏️ {brand}
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {links.map((l, i) => (
              <NavLink key={i} href={l.href}>{l.label}</NavLink>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {/* CTA button — full wobbly press-flat mechanic */}
            <button
              onMouseEnter={() => setCtaH(true)}
              onMouseLeave={() => { setCtaH(false); setCtaP(false); }}
              onMouseDown={() => setCtaP(true)}
              onMouseUp={() => setCtaP(false)}
              onClick={onCtaClick}
              style={{
                background: ctaP ? "#ff4d4d" : ctaH ? "#ff4d4d" : "#ffffff",
                color: ctaH ? "#ffffff" : "#2d2d2d",
                border: "3px solid #2d2d2d",
                borderRadius: "100px 20px 80px 20px / 20px 80px 20px 100px",
                padding: "0 24px", height: 48,
                fontFamily: "'Patrick Hand', cursive", fontSize: 16,
                cursor: "pointer", outline: "none",
                boxShadow: ctaP ? "none" : ctaH ? "2px 2px 0px 0px #2d2d2d" : "4px 4px 0px 0px #2d2d2d",
                transform: ctaP ? "translate(4px,4px)" : ctaH ? "translate(2px,2px)" : "none",
                transition: "all 100ms linear",
              }}
            >
              {ctaLabel}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{
                width: 44, height: 44,
                background: open ? "#2d2d2d" : "#ffffff",
                border: "2px solid #2d2d2d",
                borderRadius: "8px 2px 6px 2px / 2px 6px 2px 8px",
                cursor: "pointer", outline: "none",
                boxShadow: "2px 2px 0px 0px #2d2d2d",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 5,
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  width: 16, height: 2,
                  background: open ? "#fdfbf7" : "#2d2d2d",
                  display: "block",
                  transform: open
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 2 ? "rotate(-45deg) translate(5px, -5px)"
                    : "scaleX(0)"
                    : "none",
                  transition: "all 100ms linear",
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderBottom: "2px solid #2d2d2d",
          background: "#fdfbf7",
          backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          padding: "24px",
          zIndex: 39, position: "relative",
        }}>
          {links.map((l, i, arr) => (
            <a key={i} href={l.href} style={{
              display: "block", padding: "16px 0",
              borderBottom: i < arr.length - 1 ? "2px dashed #e5e0d8" : "none",
              fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 28,
              color: "#2d2d2d", textDecoration: "none",
            }}>
              {l.label}
            </a>
          ))}
          <div style={{ marginTop: 20 }}>
            <button onClick={onCtaClick} style={{
              width: "100%", height: 56,
              background: "#ff4d4d", color: "#ffffff",
              border: "3px solid #2d2d2d",
              borderRadius: "100px 20px 80px 20px / 20px 80px 20px 100px",
              fontFamily: "'Patrick Hand', cursive", fontSize: 20,
              cursor: "pointer", boxShadow: "4px 4px 0px 0px #2d2d2d",
            }}>
              {ctaLabel}
            </button>
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
        padding: "8px 14px",
        fontFamily: "'Patrick Hand', cursive", fontSize: 16,
        color: "#2d2d2d", textDecoration: "none",
        borderBottom: hov ? "2px dashed #ff4d4d" : "2px solid transparent",
        transition: "all 100ms linear",
      }}
    >{children}</a>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Navbar
//   brand="Sketchpad"
//   links={[
//     { label: "Features", href: "/features" },
//     { label: "Pricing",  href: "/pricing" },
//     { label: "Blog",     href: "/blog" },
//   ]}
//   ctaLabel="Start free"
//   onCtaClick={() => {}}
// />
