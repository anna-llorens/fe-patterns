import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { InstrumentListItem } from "@/components/InstrumentListItem";
import { type Instrument } from "@/data/instruments";
import { useInstruments } from "@/instruments/InstrumentsContext";
import "@/search.css";

const TOP_N = 3;
const RECENT_KEY = "fe-patterns-recent-searches";
const DEFAULT_TOP_SYMBOLS = ["AAPL", "TSLA", "MSFT"];
const DEFAULT_RECENT = ["AAPL", "TSLA", "NVDA", "MSFT", "GOOGL"];

function matchInstruments(
  instruments: Instrument[],
  query: string,
): Instrument[] {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  return instruments.filter(
    (i) =>
      i.symbol.toLowerCase().includes(term) ||
      i.name.toLowerCase().includes(term) ||
      i.sector.toLowerCase().includes(term),
  );
}

function loadRecent(): string[] {
  try {
    const stored = JSON.parse(localStorage.getItem(RECENT_KEY) ?? "[]");
    if (Array.isArray(stored) && stored.every((x) => typeof x === "string")) {
      return stored.slice(0, 8);
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_RECENT;
}

function saveRecent(symbols: string[]) {
  localStorage.setItem(RECENT_KEY, JSON.stringify(symbols.slice(0, 8)));
}

function topResultsForQuery(
  instruments: Instrument[],
  query: string,
): Instrument[] {
  if (!query.trim()) {
    return DEFAULT_TOP_SYMBOLS.map((symbol) =>
      instruments.find((i) => i.symbol === symbol),
    ).filter((i): i is Instrument => i !== undefined);
  }
  return matchInstruments(instruments, query);
}

export const Search = () => {
  const { instruments } = useInstruments();
  const shellRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [recent, setRecent] = useState(loadRecent);

  const allResults = topResultsForQuery(instruments, query);
  const visibleResults = showAll ? allResults : allResults.slice(0, TOP_N);
  const trimmedQuery = query.trim();

  const addRecent = (symbol: string) => {
    setRecent((prev) => {
      const next = [symbol, ...prev.filter((s) => s !== symbol)];
      saveRecent(next);
      return next;
    });
  };

  useEffect(() => {
    setShowAll(false);
  }, [query]);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!shellRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div className="search-shell" ref={shellRef}>
      <div className="search-field">
        <svg
          className="search-field-icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <Input
          type="search"
          placeholder="Search for a stock, e.g. AAPL, Tesla..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
        />
      </div>

      {open && (
        <div className="search-panel">
          <p className="search-section-label">Top results</p>
          {visibleResults.length === 0 ? (
            <p className="search-empty">No instruments found.</p>
          ) : (
            visibleResults.map((instrument) => (
              <InstrumentListItem
                key={instrument.symbol}
                instrument={instrument}
                variant="search"
                onNavigate={() => {
                  addRecent(instrument.symbol);
                  setOpen(false);
                }}
              />
            ))
          )}

          {trimmedQuery && allResults.length > TOP_N && !showAll && (
            <Button variant="link" onClick={() => setShowAll(true)}>
              View all results for &apos;{trimmedQuery}&apos; →
            </Button>
          )}

          <div className="search-recent">
            <p className="search-section-label">Recent searches</p>
            <div className="search-recent-tags">
              {recent.map((symbol) => (
                <Button
                  key={symbol}
                  variant="chip"
                  onClick={() => {
                    setQuery(symbol);
                    setOpen(true);
                  }}
                >
                  {symbol}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
