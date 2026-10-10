# Backend

Express 5 API with Prisma + PostgreSQL. Application data lives in Postgres; quotes, profile, history, and news come from a `MarketDataProvider` (mock in dev) behind an in-memory cache decorator.

## Prerequisites

- Node.js 20+
- Docker (for PostgreSQL)

## Setup

```bash
# From repo root
docker compose up -d
cp backend/.env.example backend/.env
yarn install
yarn workspace backend db:migrate
yarn workspace backend db:seed
```

## Scripts

| Command | Description |
| -------- | ------------- |
| `yarn dev:backend` | Dev server with hot reload |
| `yarn workspace backend test` | Unit + HTTP tests (integration needs DB + seed) |
| `yarn workspace backend db:migrate` | Apply migrations |
| `yarn workspace backend db:seed` | Seed user, instruments, watchlist |

## Environment

See [`.env.example`](.env.example). `DEFAULT_USER_EMAIL` must match the seeded user.

## HTTP API

### Instruments (HTTP contract)

| Route | Meaning |
| ----- | ------- |
| `GET /api/instruments` | Local catalog (seeded `Instrument` rows) with live quotes. **502** if any quote is missing from the provider. |
| `GET /api/instruments/:symbol` | Detail assembled from DB + provider (profile, quote, history, news). Temporary symbol route; prefer `instrumentId` later. |

Symbol lookup is case-insensitive. **404** if not in catalog; **409** if multiple catalog rows share the symbol; **502** if the provider cannot supply required market data.

Provider `search()` exists for a future search API; it is not exposed over HTTP in v1.

### Watchlist (single watchlist per user in v1)

| Route | Body |
| ----- | ---- |
| `GET /api/watchlist` | Metadata |
| `GET /api/watchlist/instruments` | `InstrumentSummary[]` (same shape as the catalog endpoint) |
| `POST /api/watchlist/instruments` | `{ "instrumentId": "uuid" }` — **201** first add, **200** if already present |
| `DELETE /api/watchlist/instruments/:instrumentId` | **204** (idempotent if already removed) |

## Architecture

Services depend only on `MarketDataProvider`. The exported instance is `CachedMarketDataProvider(MockMarketDataProvider)`; services never call the cache directly. `InstrumentDetail` is aggregated in `InstrumentService` from separate provider calls with per-resource cache TTLs.
