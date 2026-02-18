# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

This is a single-page landing site for a pediatric physiotherapist (Fizjociocia — Marcelina Kochanowska). Built with **React 19 + TypeScript + Vite**, styled with **Tailwind CSS loaded via CDN** (not as a PostCSS plugin).

### Key architectural note — Tailwind via CDN

Tailwind is loaded from a CDN script tag in `index.html`, not installed as a package. The full theme config (custom colors, fonts, animations, keyframes) lives inside a `<script>` block in `index.html`. Custom utility classes (`scribble-border`, `floating-slow`, `floating-fast`, `text-outline`, `paper-texture`, etc.) are defined in a `<style type="text/tailwindcss">` block in the same file. **Do not look for a `tailwind.config.js` — it does not exist.**

### Custom design tokens (defined in `index.html`)

| Token | Value |
|---|---|
| `primary` | `#ffcccb` (pastel pink) |
| `pastel-mint` | `#b9f2e1` |
| `pastel-yellow` | `#fef3c7` |
| `pastel-blue` | `#bae6fd` |
| `soft-beige` | `#fdfaf6` |
| Font `display` | Playfair Display |
| Font `body` | Plus Jakarta Sans |
| Font `handwritten` | Kalam |

### Page structure (`App.tsx`)

Components are rendered top-to-bottom as page sections:

```
Navbar → Hero → About → Patients → Services → VisitProcess → Equipment → Stories → Contact → Footer
```

Each component lives in `components/`. All are self-contained functional components with no shared state or context.

### Path alias

`@/` resolves to the project root (configured in both `vite.config.ts` and `tsconfig.json`).

### Assets

Static images are served from `/assets/` (e.g., `/assets/fizjociocia_hero_3.webp`). All images are `.webp`.

### Environment variables

`GEMINI_API_KEY` from `.env.local` is exposed as `process.env.API_KEY` and `process.env.GEMINI_API_KEY` via Vite's `define` in `vite.config.ts`.
