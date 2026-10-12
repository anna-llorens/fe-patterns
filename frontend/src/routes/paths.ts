export const appPaths = {
  dashboard: "/",
  watchlist: "/watchlist",
  instrumentDetail: "/instruments/:symbol",
  instrument: (symbol: string) =>
    `/instruments/${encodeURIComponent(symbol)}`,
} as const;
