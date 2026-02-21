# SETUP — HAND-DRAWN SKILL

## 1. Install Dependencies

```bash
npm install lucide-react
```

---

## 2. Wire Up Fonts

Add to your `<head>` (`index.html` for Vite, `layout.jsx` for Next.js):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&family=Patrick+Hand&display=swap" rel="stylesheet">
```

---

## 3. Import globals.css

```js
// Vite / CRA
import './skills/hand-drawn/integration/globals.css'

// Next.js App Router
import '@/skills/hand-drawn/integration/globals.css'
```

The dot-grid paper texture on `body` lives in globals.css. Without it,
the background is flat #fdfbf7 with no notebook grain.

---

## 4. Merge Tailwind Config

Add the `theme.extend` block from `tailwind.config.js` to your project config.

Key additions:
- `hand.*` colors
- `rounded-wobbly`, `rounded-wobblyMd`, etc. — the irregular border-radius values
- `shadow-hand-*` — hard offset zero-blur shadows
- `font-marker` (Kalam), `font-hand` (Patrick Hand)
- Animation utilities

---

## 5. Verify Setup

Paste this snippet. You should see warm paper background with dot grid,
Kalam marker heading, wobbly black-bordered card, hard offset shadow,
and a red button that presses flat on click:

```jsx
export default function HandTest() {
  const [pressed, setPressed] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div style={{
      background: "#fdfbf7",
      backgroundImage: "radial-gradient(#e5e0d8 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      minHeight: "100vh", padding: 48,
    }}>
      <div style={{
        background: "#ffffff",
        border: "2px solid #2d2d2d",
        borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
        boxShadow: "4px 4px 0px 0px #2d2d2d",
        padding: 32, maxWidth: 400,
        transform: "rotate(-1deg)",
      }}>
        <h2 style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: 28, color: "#2d2d2d", marginBottom: 12 }}>
          Hand-Drawn Skill ✓
        </h2>
        <p style={{ fontFamily: "'Patrick Hand', cursive", fontSize: 16, color: "#2d2d2d", marginBottom: 24 }}>
          Wobbly border ✓ Hard shadow ✓ Kalam ✓ Patrick Hand ✓ Dot grid ✓
        </p>
        <button
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => { setHov(false); setPressed(false); }}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          style={{
            background: pressed ? "#ff4d4d" : hov ? "#ff4d4d" : "#ffffff",
            color: hov ? "#ffffff" : "#2d2d2d",
            border: "3px solid #2d2d2d",
            borderRadius: "100px 20px 80px 20px / 20px 80px 20px 100px",
            padding: "12px 28px",
            fontFamily: "'Patrick Hand', cursive",
            fontSize: 18, cursor: "pointer",
            boxShadow: pressed ? "none" : hov ? "2px 2px 0px 0px #2d2d2d" : "4px 4px 0px 0px #2d2d2d",
            transform: pressed ? "translate(4px,4px)" : hov ? "translate(2px,2px)" : "none",
            transition: "all 100ms linear",
          }}
        >
          Press me flat!
        </button>
      </div>
    </div>
  );
}
```

---

## 6. Folder Location

```
your-project/
└── skills/
    └── hand-drawn/
```
