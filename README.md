# fe-patterns

Proof of concept for **frontend architecture patterns in plain JavaScript**—no React, Angular, Vue, or similar frameworks. The goal is to show how familiar ideas (single-page apps, components, routing) look when you build them directly on the browser APIs and ES modules.

## What this demonstrates

- **Single-page application (SPA)** — One HTML shell (`index.html`) with a persistent header and a `#view` region that updates when you navigate. There is no full page reload when switching routes.
- **Component-based UI** — Reusable pieces under `src/components/` (e.g. header, links, buttons, titles). Each component is a small module that creates and returns DOM nodes.
- **Client-side routing** — `src/routes/` maps route names to page renderers and swaps content in the view container.
- **Pages** — Route-level screens in `src/pages/` that compose components and own page-specific behavior (e.g. local state on the home counter demo).

This is intentionally minimal: enough structure to discuss architecture and tradeoffs, not a production app or a homegrown framework.

## Project layout

```
src/
  index.html      # App shell
  index.js        # Bootstrap: header + initial route
  components/     # Reusable UI building blocks
  pages/          # Screen-level modules
  routes/         # Navigation and route → page mapping
```

## Running locally

Requires [Node.js](https://nodejs.org/).

```bash
yarn install   # or npm install
yarn dev       # or npm run dev
```

[Vite](https://vite.dev/) serves the app from `src/` (see `vite.config.js`). Open the URL shown in the terminal (typically `http://localhost:5173`).
