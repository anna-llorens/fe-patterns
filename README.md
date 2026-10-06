# fe-patterns

Frontend architecture patterns — React + TypeScript starter (Vite).

## Prerequisites

- Node.js 20+
- Yarn

## Setup

```bash
yarn install
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `yarn dev`      | Start dev server + HMR   |
| `yarn build`    | Typecheck and production build |
| `yarn preview`  | Preview production build |
| `yarn lint`     | Run ESLint               |

## Project layout

```text
src/
  components/   # shared UI (placeholder)
  pages/        # route-level views (placeholder)
  types/        # shared TypeScript types (placeholder)
  App.tsx       # root component
  main.tsx      # entry point
```

Path alias: `@/` → `src/` (see `vite.config.ts` and `tsconfig.app.json`).
