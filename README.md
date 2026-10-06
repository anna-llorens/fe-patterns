# fe-patterns

React frontend + TypeScript API for instrument patterns demo.

## Layout

```text
frontend/   Vite + React
backend/    Express, GET /api/instruments (fake data → Twelve Data later)
```

## Prerequisites

- Node.js 20+
- Yarn

## Setup

```bash
yarn install
```

## Dev

Terminal 1 — API (port 3001):

```bash
yarn dev:backend
```

Terminal 2 — UI (proxies `/api` to the backend):

```bash
yarn dev:frontend
```

## Scripts (root)

| Command            | Description        |
| ------------------ | ------------------ |
| `yarn dev:frontend`| Vite dev server    |
| `yarn dev:backend` | API with hot reload |
| `yarn build`       | Build both workspaces |
| `yarn lint`        | ESLint (frontend)  |
