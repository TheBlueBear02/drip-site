// MINIMALIST MONOCHROME SKILL — Spinner.jsx
//
// WHY THIS LOOKS THE WAY IT DOES:
// Loading states in this system are still and structural — not animated dots,
// not spinning arcs. A simple blinking cursor (typewriter style) or a static
// "Loading." label with a thin border. The design system's restraint applies
// even to loading states. Nothing bounces. Nothing pulses colorfully.
//
// The one exception is a slow, dignified border rotation — 1 second linear,
// not 300ms bounce. Even the spinner has composure.

export function Spinner({ size = "md", label = "Loading" }) {
  const sizes = { sm: 20, md: 28, lg: 40 };
  const s = sizes[size];

  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
    }}>
      {/* Thin rotating square — architectural, not bubbly */}
      <div style={{
        width: s,
        height: s,
        border: "1px solid #E5E5E5",
        borderTop: "2px solid #000000",
        borderRadius: 0,
        animation: "mm-spin 1s linear infinite",
      }} />
      {label && (
        <span style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#525252",
        }}>
          {label}
        </span>
      )}
      <style>{`
        @keyframes mm-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

// ── PROGRESS BAR ─────────────────────────────────────────────────────────────
// A structural progress bar — thick black line filling a bordered track.
// No color. No gradient. No rounded ends. Just a line that grows.

export function ProgressBar({ value = 0, label }) {
  return (
    <div style={{ fontFamily: '"JetBrains Mono", monospace' }}>
      {(label !== undefined || value !== undefined) && (
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#525252",
        }}>
          {label && <span>{label}</span>}
          <span>{value}%</span>
        </div>
      )}
      {/* Track */}
      <div style={{
        height: 4,
        background: "#F5F5F5",
        border: "1px solid #E5E5E5",
        borderRadius: 0,
      }}>
        {/* Fill — pure black line */}
        <div style={{
          height: "100%",
          width: `${value}%`,
          background: "#000000",
          borderRadius: 0,
          transition: "width 200ms linear",
        }} />
      </div>
    </div>
  );
}

// ── USAGE EXAMPLES ────────────────────────────────────────────────────────────
// <Spinner size="md" label="Loading" />
// <Spinner size="sm" label="" />  ← spinner only, no label
// <ProgressBar value={65} label="Upload" />
// <ProgressBar value={100} />
