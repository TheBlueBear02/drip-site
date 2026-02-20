# SETUP — MINIMALIST MONOCHROME SKILL

## 1. Install Dependencies

```bash
npm install lucide-react
```

No animation libraries needed — all motion is CSS only (100ms linear transitions).
Tailwind CSS must already be installed.

---

## 2. Wire Up the Tailwind Config

Merge the `theme.extend` block from `integration/tailwind.config.js`
into your project's `tailwind.config.js`.

Key things added:
- `mm.*` color tokens
- `font-display` (Playfair Display), `font-body` (Source Serif 4), `font-mono` (JetBrains Mono)
- All border-radius values set to `0px`
- Extended `8xl` and `9xl` font sizes
- `transition-mm` linear easing utility

---

## 3. Import globals.css

**Next.js (App Router):**
```js
import '@/skills/minimalist-monochrome/integration/globals.css'
```

**Next.js (Pages Router):**
```js
import '../skills/minimalist-monochrome/integration/globals.css'
```

**Vite / CRA:**
```js
import './skills/minimalist-monochrome/integration/globals.css'
```

---

## 4. Verify Setup

```jsx
export default function SkillTest() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh", padding: "80px" }}>
      <hr style={{ border: "none", borderTop: "4px solid #000", marginBottom: "80px" }} />
      <h1 style={{
        fontFamily: "Playfair Display, serif",
        fontSize: "clamp(64px, 10vw, 128px)",
        fontWeight: 900,
        letterSpacing: "-0.05em",
        lineHeight: 1,
        marginBottom: "48px",
      }}>
        Design.
      </h1>
      <button style={{
        background: "#000",
        color: "#fff",
        border: "none",
        padding: "16px 32px",
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        cursor: "pointer",
        borderRadius: 0,
      }}>
        Begin →
      </button>
      <hr style={{ border: "none", borderTop: "4px solid #000", marginTop: "80px" }} />
    </div>
  )
}
```

You should see:
- Pure white background
- 4px black horizontal rules (not hairlines, not gray)
- Playfair Display rendering for the headline
- JetBrains Mono on the button label
- Zero border radius on the button
- No shadows anywhere

---

## 5. Folder Location

```
your-project/
└── skills/
    └── minimalist-monochrome/
```
