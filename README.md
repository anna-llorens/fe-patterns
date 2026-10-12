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

**API in Docker** (Postgres + backend on port 3001):

```bash
docker compose up -d --build
yarn db:seed   # once, against Postgres on localhost:5433
```

Stop the local `yarn dev:backend` if it is running — both bind port 3001.

**API on the host** (hot reload):

```bash
yarn dev:backend
```

Terminal — UI (proxies `/api` to port 3001):

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
| `yarn db:up` | Start Postgres + backend (`docker compose up -d`) |
| `docker compose up -d --build backend` | Rebuild and restart API container |
| `docker compose logs -f backend` | Follow API logs (timestamps, requests) |
| `yarn db:migrate` | Prisma migrate (backend workspace) |
| `yarn db:seed` | Seed demo user, instruments, watchlist |
| `yarn test:backend` | Backend HTTP contract tests |

## API notes

Full route list, status codes, and `curl` examples: [backend/README.md — HTTP API](backend/README.md#http-api).

- Catalog endpoints use seeded `Instrument` rows in Postgres plus live quotes from the mock provider — not the full market.
- Instrument search is not exposed on HTTP in v1; the provider layer implements `search()` for a later phase.
