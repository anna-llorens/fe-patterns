import { LayoutPage } from "@/components/LayoutPage";
import { InstrumentListItem } from "@/components/InstrumentListItem";
import { getInstrumentBySymbol } from "@/data/instruments";
import { useWatchlist } from "@/watchlist/WatchlistContext";

export const WatchlistPage = () => {
  const { symbols } = useWatchlist();
  const instruments = symbols
    .map((symbol) => getInstrumentBySymbol(symbol))
    .filter((i) => i !== undefined);

  return (
    <LayoutPage>
      {instruments.length === 0 ? (
        <p className="layout-page-muted">
          No stocks yet. Use the star in search or on an instrument page to add
          one.
        </p>
      ) : (
        <div className="instrument-list card">
          {instruments.map((instrument) => (
            <InstrumentListItem
              key={instrument.symbol}
              instrument={instrument}
            />
          ))}
        </div>
      )}
    </LayoutPage>
  );
};
