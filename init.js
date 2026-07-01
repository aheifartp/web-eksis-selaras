const fs = require('fs');
const path = require('path');

const files = {
  'package.json': `{
  "name": "eksisselaras",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1",
    "vite": "^5.2.0"
  }
}`,
  'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`,
  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
  'index.html': `<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eksis Selaras - Premium Furniture & Interior</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9f9",
        "background": "#f9f9f9",
        "surface-variant": "#e2e2e2",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#5d4210",
        "on-tertiary-container": "#303132",
        "surface-tint": "#785926",
        "inverse-on-surface": "#f0f1f1",
        "tertiary-container": "#989999",
        "outline": "#807568",
        "error-container": "#ffdad6",
        "surface-container-highest": "#e2e2e2",
        "primary-fixed": "#ffddae",
        "on-surface": "#1a1c1c",
        "secondary-fixed": "#e5e2e1",
        "primary": "#785926",
        "on-secondary-fixed": "#1c1b1b",
        "primary-fixed-dim": "#e9c083",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#d2c4b5",
        "secondary-fixed-dim": "#c8c6c5",
        "on-error": "#ffffff",
        "surface-dim": "#dadada",
        "on-error-container": "#93000a",
        "on-secondary-container": "#636262",
        "on-tertiary": "#ffffff",
        "surface-container": "#eeeeee",
        "tertiary-fixed": "#e2e2e2",
        "on-secondary": "#ffffff",
        "on-background": "#1a1c1c",
        "inverse-primary": "#e9c083",
        "on-surface-variant": "#4e453a",
        "inverse-surface": "#2f3131",
        "on-primary-container": "#442c00",
        "on-secondary-fixed-variant": "#474746",
        "secondary-container": "#e2dfde",
        "primary-container": "#b8935a",
        "surface-container-high": "#e8e8e8",
        "on-tertiary-fixed": "#1a1c1c",
        "on-primary-fixed": "#281800",
        "tertiary": "#5d5f5f",
        "on-tertiary-fixed-variant": "#454747",
        "tertiary-fixed-dim": "#c6c6c6",
        "surface": "#f9f9f9",
        "secondary": "#5f5e5e",
        "surface-container-low": "#f3f3f4"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      fontFamily: {
        "headline-md": ["Playfair Display", "serif"],
        "headline-lg": ["Playfair Display", "serif"],
        "headline-xl-mobile": ["Playfair Display", "serif"],
        "label-caps": ["Plus Jakarta Sans", "sans-serif"],
        "button": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl": ["Playfair Display", "serif"],
        "body-md": ["Plus Jakarta Sans", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-xl-mobile": ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "label-caps": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
        "button": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-xl": ["64px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
}`,
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply text-on-background bg-background font-body-md;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-headline-md text-on-surface;
  }
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f9f9f9;
}
::-webkit-scrollbar-thumb {
  background: #d2c4b5;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b8935a;
}`,
  'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
  'src/App.jsx': `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Placeholder Navbar */}
        <header className="p-4 border-b border-outline-variant flex items-center justify-between sticky top-0 bg-surface/90 backdrop-blur-sm z-50">
          <h1 className="text-2xl font-headline-md font-bold text-primary">Eksis Selaras</h1>
          <nav className="flex gap-4">
            <a href="/" className="font-button text-on-surface hover:text-primary transition-colors">Home</a>
            <a href="/about" className="font-button text-on-surface hover:text-primary transition-colors">About</a>
          </nav>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<div className="p-8">Welcome to Eksis Selaras</div>} />
            <Route path="/about" element={<div className="p-8">About Us</div>} />
          </Routes>
        </main>

        <footer className="p-4 border-t border-outline-variant text-center bg-on-surface text-on-primary">
          <p className="font-body-md text-sm">© 2026 Eksis Selaras. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;`
};

for (const [filepath, content] of Object.entries(files)) {
  const dir = path.dirname(filepath);
  if (dir !== '.') {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filepath, content);
}
console.log("Project files initialized.");
