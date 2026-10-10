import { LayoutPage } from "@/components/LayoutPage";
import { InstrumentListItem } from "@/instruments/components/InstrumentListItem";
import { useInstruments } from "@/instruments/hooks/useInstruments";
import type { InstrumentSummary } from "@/instruments/model/Instrument";
import { useWatchlist } from "@/watchlist/WatchlistContext";

export const WatchlistPage = () => {
  const { symbols } = useWatchlist();
  const { data: all = [] } = useInstruments();

  const instruments = symbols
    .map((symbol) =>
      all.find((i) => i.symbol.toUpperCase() === symbol.toUpperCase()),
    )
    .filter((i): i is InstrumentSummary => i !== undefined);

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
