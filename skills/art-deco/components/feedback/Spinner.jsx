// ART DECO SKILL — Spinner.jsx + Alert + ProgressBar
//
// Loading and feedback states in Art Deco are theatrical, not functional.
// Spinners are rotating diamonds, not circles. Alerts are framed proclamations.
// Progress bars are precision instruments with gold fills and tick marks.

// ── SPINNER — Rotating diamond, not a circle ───────────────────────────────

const C = {
  bg: "#0A0A0A", card: "#141414", fg: "#F2F0E4",
  gold: "#D4AF37", pale: "#F2E8C4", muted: "#888888",
};

export function Spinner({ size = "md", label }) {
  const sizes = { sm: 28, md: 40, lg: 56 };
  const s = sizes[size] || sizes.md;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 14 }}>
      {/* Rotating diamond — not a circle */}
      <div style={{
        width: s, height: s,
        border: `1px solid rgba(212,175,55,0.2)`,
        borderTop: `1px solid ${C.gold}`,
        borderRight: `1px solid ${C.gold}`,
        transform: "rotate(45deg)",
        animation: "deco-spin 1.2s linear infinite",
        flexShrink: 0,
      }} />

      {label && (
        <span style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 300, fontSize: 12,
          textTransform: "uppercase", letterSpacing: "0.15em",
          color: C.muted,
        }}>
          {label}
        </span>
      )}

      <style>{`
        @keyframes deco-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── PROGRESS BAR — Precision instrument with tick marks ─────────────────────

export function ProgressBar({ value = 0, label, showPercent = true }) {
  return (
    <div style={{ fontFamily: "'Josefin Sans', sans-serif" }}>
      {(label || showPercent) && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          {label && (
            <span style={{
              fontFamily: "'Josefin Sans', sans-serif",
              fontSize: 10, textTransform: "uppercase",
              letterSpacing: "0.15em", color: C.muted,
            }}>
              {label}
            </span>
          )}
          {showPercent && (
            <span style={{
              fontFamily: "'Marcellus', serif",
              fontSize: 13, color: C.gold,
            }}>
              {value}%
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div style={{
        height: 4, borderRadius: 0,
        background: "rgba(212,175,55,0.1)",
        border: "1px solid rgba(212,175,55,0.15)",
        position: "relative", overflow: "hidden",
      }}>
        {/* Fill */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: `${value}%`,
          background: `linear-gradient(to right, ${C.gold}, ${C.pale})`,
          transition: "width 600ms ease-out",
          boxShadow: "0 0 8px rgba(212,175,55,0.4)",
        }} />
      </div>

      {/* Tick marks at 25% intervals */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        {[0, 25, 50, 75, 100].map(tick => (
          <div key={tick} style={{
            height: 4, width: 1,
            background: value >= tick ? C.gold : "rgba(212,175,55,0.2)",
            transition: "background 300ms",
          }} />
        ))}
      </div>
    </div>
  );
}

// ── ALERT — A framed proclamation ────────────────────────────────────────────

export function Alert({ type = "info", title, children, onDismiss }) {
  const types = {
    info:    { borderColor: "rgba(212,175,55,0.5)", iconColor: C.gold,    icon: "◆" },
    success: { borderColor: "rgba(212,175,55,0.8)", iconColor: C.pale,    icon: "◆" },
    warning: { borderColor: "rgba(212,175,55,0.6)", iconColor: C.gold,    icon: "▲" },
    error:   { borderColor: "rgba(220,80,80,0.5)",  iconColor: "#DC5050",  icon: "✕" },
  };
  const t = types[type] || types.info;

  return (
    <div style={{
      position: "relative",
      background: C.card,
      border: `1px solid ${t.borderColor}`,
      borderRadius: 0,
      padding: "20px 24px",
      boxShadow: `0 0 15px ${t.borderColor.replace("0.5", "0.1").replace("0.8", "0.15").replace("0.6", "0.1")}`,
      display: "flex", gap: 16, alignItems: "flex-start",
      fontFamily: "'Josefin Sans', sans-serif",
    }}>
      {/* Corner accent */}
      <div aria-hidden="true" style={{ position: "absolute", top: 6, left: 6, width: 10, height: 10, borderTop: `1px solid ${t.borderColor}`, borderLeft: `1px solid ${t.borderColor}` }} />

      {/* Geometric icon */}
      <div style={{
        color: t.iconColor, fontSize: 14, flexShrink: 0,
        fontFamily: "'Marcellus', serif", marginTop: 2,
      }}>
        {t.icon}
      </div>

      <div style={{ flex: 1 }}>
        {title && (
          <div style={{
            fontFamily: "'Marcellus', serif",
            fontWeight: 400, fontSize: 13,
            textTransform: "uppercase", letterSpacing: "0.15em",
            color: C.fg, marginBottom: children ? 6 : 0,
          }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{
            fontWeight: 300, fontSize: 14,
            color: C.muted, lineHeight: 1.65,
            letterSpacing: "0.02em",
          }}>
            {children}
          </div>
        )}
      </div>

      {onDismiss && (
        <button onClick={onDismiss} style={{
          background: "none", border: "none", cursor: "pointer",
          color: C.muted, fontSize: 14, padding: 2,
          fontFamily: "'Marcellus', serif",
          flexShrink: 0, marginTop: 1,
          transition: "color 200ms",
        }}
          onMouseEnter={e => e.target.style.color = C.gold}
          onMouseLeave={e => e.target.style.color = C.muted}
        >
          ✕
        </button>
      )}
    </div>
  );
}

// ── SKELETON — Gold shimmer loading placeholder ───────────────────────────────

export function Skeleton({ width = "100%", height = 20, style: ext }) {
  return (
    <div style={{
      width, height,
      borderRadius: 0,
      background: "linear-gradient(90deg, rgba(212,175,55,0.05) 25%, rgba(212,175,55,0.12) 50%, rgba(212,175,55,0.05) 75%)",
      backgroundSize: "200% 100%",
      animation: "deco-shimmer 2s linear infinite",
      border: "1px solid rgba(212,175,55,0.08)",
      ...ext,
    }}>
      <style>{`
        @keyframes deco-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Spinner size="md" label="Processing" />
// <Spinner size="lg" />
//
// <ProgressBar value={65} label="Collection Acquired" />
// <ProgressBar value={100} showPercent={false} />
//
// <Alert type="info" title="Members Only">This area requires an invitation.</Alert>
// <Alert type="success" title="Access Granted">Welcome to the society.</Alert>
// <Alert type="warning" title="Limited Availability" onDismiss={() => {}}>
//   Only 3 memberships remaining this season.
// </Alert>
//
// <Skeleton height={24} width="60%" />
// <Skeleton height={200} />
