import { LayoutPage } from "@/components/LayoutPage";
import { InstrumentListItem } from "@/instruments/components/InstrumentListItem";
import { getInstrumentBySymbol } from "@/data/instruments";
import { useInstruments } from "@/instruments/InstrumentsContext";
import { useWatchlist } from "@/watchlist/WatchlistContext";

export const WatchlistPage = () => {
  const { symbols } = useWatchlist();
  const { instruments: all } = useInstruments();
  const instruments = symbols
    .map((symbol) => getInstrumentBySymbol(all, symbol))
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
