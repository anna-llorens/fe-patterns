import { LayoutPage } from "@/components/LayoutPage";
import { InstrumentListItem } from "@/instruments/components/InstrumentListItem";
import { useWatchlist } from "@/watchlist/hooks/useWatchlist";

export const WatchlistPage = () => {
  const { data: instruments = [], isPending, isError } = useWatchlist();

  if (isPending) {
    return (
      <LayoutPage>
        <p className="layout-page-muted">Loading watchlist…</p>
      </LayoutPage>
    );
  }

  if (isError) {
    return (
      <LayoutPage>
        <p className="layout-page-muted">Could not load watchlist.</p>
      </LayoutPage>
    );
  }

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
              key={instrument.id}
              instrument={instrument}
            />
          ))}
        </div>
      )}
    </LayoutPage>
  );
};
