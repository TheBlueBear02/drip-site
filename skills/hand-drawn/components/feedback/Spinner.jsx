// HAND-DRAWN SKILL — Spinner.jsx + Alert + ProgressBar

// ── SPINNER — A wobbly rotating shape, not a clean ring ──────────────────────

export function Spinner({ size = "md", label, color = "#2d2d2d" }) {
  const sizes = { sm: 28, md: 40, lg: 56 };
  const s = sizes[size] || sizes.md;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      {/* Rotating square — mechanical like a drawing tool */}
      <div style={{
        width: s, height: s,
        border: `3px solid ${color}`,
        borderTopColor: "#ff4d4d",
        borderRadius: "4px 12px 4px 12px / 12px 4px 12px 4px",
        animation: "hand-spin 0.8s linear infinite",
        flexShrink: 0,
      }} />

      {label && (
        <span style={{
          fontFamily: "'Patrick Hand', cursive", fontSize: 16, color: "#2d2d2d",
        }}>
          {label}
        </span>
      )}

      <style>{`
        @keyframes hand-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── PROGRESS BAR — Drawn like a bar chart on graph paper ─────────────────────

export function ProgressBar({ value = 0, label, color = "#2d2d2d", showPercent = true }) {
  return (
    <div style={{ fontFamily: "'Patrick Hand', cursive" }}>
      {(label || showPercent) && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          {label && (
            <span style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 15, color: "#2d2d2d" }}>
              {label}
            </span>
          )}
          {showPercent && (
            <span style={{ fontSize: 15, color: "#2d2d2d" }}>{value}%</span>
          )}
        </div>
      )}

      {/* Track — wobbly bordered rectangle */}
      <div style={{
        height: 24,
        border: "2px solid #2d2d2d",
        borderRadius: "8px 2px 6px 2px / 2px 6px 2px 8px",
        background: "#fdfbf7",
        position: "relative", overflow: "hidden",
        boxShadow: "2px 2px 0px 0px #2d2d2d",
      }}>
        {/* Fill */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0,
          width: `${value}%`,
          background: color,
          borderRight: value < 100 ? "2px solid #2d2d2d" : "none",
          transition: "width 300ms linear",
        }} />
        {/* Pencil scribble texture inside fill */}
        {value > 10 && (
          <div style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: `${value}%`,
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.15) 4px, rgba(255,255,255,0.15) 5px)",
            pointerEvents: "none",
          }} />
        )}
      </div>
    </div>
  );
}

// ── ALERT — A sticky-note style message ──────────────────────────────────────

export function Alert({ type = "info", title, children, onDismiss }) {
  const types = {
    info:    { bg: "#ffffff", border: "#2d2d2d", icon: "💬", rotate: -1 },
    success: { bg: "#ffffff", border: "#2d2d2d", icon: "✓",  rotate: 1  },
    warning: { bg: "#fff9c4", border: "#2d2d2d", icon: "!",  rotate: -1 },
    error:   { bg: "#ffffff", border: "#ff4d4d", icon: "✗",  rotate: 1  },
  };
  const t = types[type] || types.info;

  return (
    <div style={{
      display: "flex", gap: 14, alignItems: "flex-start",
      background: t.bg,
      border: `2px solid ${t.border}`,
      borderRadius: "15px 255px 15px 225px / 225px 15px 255px 15px",
      padding: "16px 20px",
      boxShadow: `4px 4px 0px 0px ${t.border}`,
      transform: `rotate(${t.rotate}deg)`,
      fontFamily: "'Patrick Hand', cursive",
    }}>
      {/* Handwritten icon */}
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        border: `2px solid ${t.border}`,
        background: t.border === "#ff4d4d" ? "#ff4d4d" : "#fdfbf7",
        color: t.border === "#ff4d4d" ? "#ffffff" : "#2d2d2d",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 16,
        flexShrink: 0,
      }}>
        {t.icon}
      </div>

      <div style={{ flex: 1 }}>
        {title && (
          <div style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 16, color: "#2d2d2d", marginBottom: children ? 4 : 0 }}>
            {title}
          </div>
        )}
        {children && (
          <div style={{ fontSize: 15, color: "#2d2d2d", lineHeight: 1.5 }}>
            {children}
          </div>
        )}
      </div>

      {onDismiss && (
        <button onClick={onDismiss} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: "'Kalam', cursive", fontSize: 20, color: "#2d2d2d",
          padding: 0, lineHeight: 1,
        }}>✕</button>
      )}
    </div>
  );
}

// ── USAGE ─────────────────────────────────────────────────────────────────────
// <Spinner size="md" label="Drawing..." />
// <Spinner size="lg" color="#ff4d4d" />
//
// <ProgressBar value={72} label="Progress" color="#2d5da1" />
// <ProgressBar value={100} color="#ff4d4d" showPercent={false} />
//
// <Alert type="warning" title="Hold on!">Something needs your attention.</Alert>
// <Alert type="error" title="Uh oh" onDismiss={() => {}}>That didn't work.</Alert>
// <Alert type="success" title="Done!">Saved successfully.</Alert>
