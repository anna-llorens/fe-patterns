import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { loadWatchlist, saveWatchlist } from "@/watchlist/watchlistStorage";

type WatchlistContextValue = {
  symbols: string[];
  add: (symbol: string) => void;
  remove: (symbol: string) => void;
  toggle: (symbol: string) => void;
  has: (symbol: string) => boolean;
};

const WatchlistContext = createContext<WatchlistContextValue | null>(null);

export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [symbols, setSymbols] = useState(loadWatchlist);

  const add = useCallback(
    (symbol: string) => {
      const s = symbol.toUpperCase();
      setSymbols((prev) => {
        if (prev.includes(s)) return prev;
        const next = [...prev, s];
        saveWatchlist(next);
        return next;
      });
    },
    [],
  );

  const remove = useCallback(
    (symbol: string) => {
      const s = symbol.toUpperCase();
      setSymbols((prev) => {
        const next = prev.filter((x) => x !== s);
        saveWatchlist(next);
        return next;
      });
    },
    [],
  );

  const toggle = useCallback(
    (symbol: string) => {
      const s = symbol.toUpperCase();
      setSymbols((prev) => {
        const next = prev.includes(s)
          ? prev.filter((x) => x !== s)
          : [...prev, s];
        saveWatchlist(next);
        return next;
      });
    },
    [],
  );

  const has = useCallback(
    (symbol: string) => symbols.includes(symbol.toUpperCase()),
    [symbols],
  );

  const value = useMemo(
    () => ({ symbols, add, remove, toggle, has }),
    [symbols, add, remove, toggle, has],
  );

  return (
    <WatchlistContext.Provider value={value}>{children}</WatchlistContext.Provider>
  );
};

export function useWatchlist() {
  const ctx = useContext(WatchlistContext);
  if (!ctx) {
    throw new Error("useWatchlist must be used within WatchlistProvider");
  }
  return ctx;
}
