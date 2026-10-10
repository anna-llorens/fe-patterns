# Agent instructions

Project conventions for humans and AI when working in this repo.

## Array iteration

Use a **descriptive name** for each item. Do not use single-letter placeholders such as `i`, `r`, `p`, or `o` when the element has a clear domain meaning.

```typescript
// Good
instruments.map((instrument) => instrument.symbol);
priceHistory.filter((point) => point.close > 0);

// Avoid
instruments.map((i) => i.symbol);
CHART_RANGES.map((r) => ...);
```

Index-only loops where there is no domain object (e.g. numeric grid indices) may still use `index` or `i` if needed.

## Git commits

- **One line only** — no multi-paragraph bodies unless the user explicitly asks.
- Use `type(scope):` then a short summary focused on outcome, not a file list.
- **Scope:** `be` = `backend/`, `fe` = `frontend/`. Omit scope only for repo-wide changes (root scripts, workspaces, shared docs).

Examples (same message style, different scopes):

```text
feat(be): add GET /api/instruments/:symbol and nodemon dev reload
feat(fe): wire instrument page to React Query and API types
chore(be): bump express and align mock JSON schema
chore(fe): move page styles under css/
fix(be): return 404 when instrument symbol is unknown
fix(fe): show chart ranges that match available price history
feat: add yarn workspaces for frontend and backend
chore: update root README and AGENTS.md
```

Prefer **`feat(be):`** / **`feat(fe):`** for product behavior; **`chore(be):`** / **`chore(fe):`** for tooling and refactors; **`fix(be):`** / **`fix(fe):`** for bugs.
