# GETDRIP.DEV Website

A modern, mobile-friendly website for GETDRIP.DEV built with HTML, CSS, and JavaScript.

## Features

- **Home Page** - Hero section, how it works, skills preview, and social proof
- **Skills Library** - Browseable grid of design skills with filtering
- **Skill Detail Pages** - Full preview, copy commands, and detailed information
- **Documentation** - Quick start guide and platform-specific instructions
- **Copy to Clipboard** - One-click copy for all commands
- **Mobile Responsive** - Optimized for all screen sizes

## Getting Started

### Option 1: Serve from Root Directory (Recommended)

Using Python 3:
```bash
python -m http.server 8000
```

Using Node.js (http-server):
```bash
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser. The root `index.html` will automatically redirect to the site.

### Option 2: Serve from Basic Design Folder

Navigate to the `basic design` folder first:

Using Python 3:
```bash
cd "basic design"
python -m http.server 8000
```

Using Node.js (http-server):
```bash
cd "basic design"
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

### Option 2: Live Server (VS Code)

If you're using VS Code, install the "Live Server" extension and click "Go Live" in the status bar.

### Option 3: Direct File Opening

You can open `index.html` directly in your browser, but note that some features (like routing) may not work without a server.

## Project Structure

```
drip-site/
├── index.html              # Root redirect to basic design folder
├── basic design/
│   ├── index.html          # Home page
│   ├── skills.html         # Skills library page
│   ├── skill-detail.html   # Dynamic skill detail page
│   ├── docs.html          # Documentation page
│   ├── styles.css         # All styles
│   └── script.js          # JavaScript functionality
└── README.md              # This file
```

## Pages

- `index.html` - Home page
- `skills.html` - Skills library with filters
- `skill-detail.html?skill=[skill-name]` - Individual skill detail pages
- `docs.html` - Documentation and guides

## Skills

The website includes 8 sample skills:
- Retro Terminal
- Minimal Light
- Colorful Playful
- Dark Modern
- Neon Cyber
- Pastel Dream
- Monochrome
- Glassmorphism

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

## Development

The site uses vanilla JavaScript with no build process required. Simply edit the HTML, CSS, or JS files and refresh your browser.

## License

MIT License
