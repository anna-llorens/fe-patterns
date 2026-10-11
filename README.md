# fe-patterns

React frontend + TypeScript API for instrument patterns demo.

## Layout

```text
frontend/              Vite + React
backend/               Express 5, Prisma, PostgreSQL — see backend/README.md
packages/api-contracts Shared Zod HTTP types (@fe-patterns/api-contracts)
```

## Prerequisites

- Node.js 20+
- Yarn
- Docker (PostgreSQL for the backend)

## Setup

```bash
docker compose up -d
cp backend/.env.example backend/.env
yarn install
yarn db:migrate
yarn db:seed
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

| Command | Description |
| ------- | ----------- |
| `yarn dev:frontend` | Vite dev server |
| `yarn dev:backend` | API with hot reload |
| `yarn build:contracts` | Compile `@fe-patterns/api-contracts` |
| `yarn build` | Contracts, then frontend + backend |
| `yarn lint` | ESLint (frontend) |
| `yarn db:up` | Start Postgres (docker compose) |
| `yarn db:migrate` | Prisma migrate (backend workspace) |
| `yarn db:seed` | Seed demo user, instruments, watchlist |
| `yarn test:backend` | Backend HTTP contract tests |

## API notes

Full route list, status codes, and `curl` examples: [backend/README.md — HTTP API](backend/README.md#http-api).

- Catalog endpoints use seeded `Instrument` rows in Postgres plus live quotes from the mock provider — not the full market.
- Instrument search is not exposed on HTTP in v1; the provider layer implements `search()` for a later phase.
