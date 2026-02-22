# SETUP — ART DECO SKILL

## 1. Install Dependencies

```bash
npm install lucide-react
```

---

## 2. Wire Up Fonts

Add to `<head>` (`index.html` for Vite, `layout.jsx` for Next.js):

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Marcellus&family=Josefin+Sans:wght@300;400&display=swap" rel="stylesheet">
```

---

## 3. Import globals.css

```js
import './skills/art-deco/integration/globals.css'
```

The crosshatch diagonal background texture is defined on `body` in globals.css.
This is the single most important visual element — without it the design
reads as generic dark mode, not Art Deco.

---

## 4. Merge Tailwind Config

Add the `theme.extend` block into your project's `tailwind.config.js`.

Key additions:
- `deco.*` color tokens
- `shadow-glow-*` utilities (never use built-in shadow-*)
- `font-display` (Marcellus), `font-sans` (Josefin Sans)
- `tracking-deco` (0.2em letter-spacing)
- Animation utilities

---

## 5. Verify

```jsx
export default function DecoTest() {
  return (
    <div style={{
      background: "#0A0A0A",
      backgroundImage: `
        repeating-linear-gradient(45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px),
        repeating-linear-gradient(-45deg, rgba(212,175,55,0.04) 0px, rgba(212,175,55,0.04) 1px, transparent 1px, transparent 24px)
      `,
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <div style={{
        background: "#141414", border: "1px solid rgba(212,175,55,0.3)",
        borderRadius: 0, padding: 48, maxWidth: 480,
        boxShadow: "0 0 20px rgba(212,175,55,0.2)",
        position: "relative",
      }}>
        {/* Corner brackets */}
        <div aria-hidden="true" style={{ position: "absolute", top: 8, left: 8, width: 16, height: 16, borderTop: "2px solid #D4AF37", borderLeft: "2px solid #D4AF37" }} />
        <div aria-hidden="true" style={{ position: "absolute", bottom: 8, right: 8, width: 16, height: 16, borderBottom: "2px solid #D4AF37", borderRight: "2px solid #D4AF37" }} />

        <h2 style={{ fontFamily: "'Marcellus', serif", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 28, color: "#D4AF37", marginBottom: 16 }}>
          Art Deco Skill
        </h2>
        <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: 16, color: "#F2F0E4", lineHeight: 1.7 }}>
          Crosshatch ✓ Marcellus ✓ Gold glow ✓ Corner brackets ✓ Zero radius ✓
        </p>
      </div>
    </div>
  );
}
```
