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


