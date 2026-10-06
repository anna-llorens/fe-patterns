export const WATCHLIST_KEY = "fe-patterns-watchlist";

export function loadWatchlist(): string[] {
  try {
    const stored = JSON.parse(localStorage.getItem(WATCHLIST_KEY) ?? "[]");
    if (Array.isArray(stored) && stored.every((x) => typeof x === "string")) {
      return stored.map((s) => s.toUpperCase());
    }
  } catch {
    /* ignore */
  }
  return [];
}

export function saveWatchlist(symbols: string[]) {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(symbols));
}
