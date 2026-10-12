import { LayoutPage } from "@/components/layouts/LayoutPage";
import { LayoutPageFeedback } from "@/components/layouts/LayoutPageFeedback";
import { QueryContent } from "@/components/layouts/QueryContent";
import { InstrumentList } from "@/instruments/components/InstrumentList";
import { useWatchlist } from "@/watchlist/hooks/useWatchlist";

export const WatchlistPage = () => {
  const {
    data: instruments,
    isPending,
    error,
    refetch,
  } = useWatchlist();

  return (
    <LayoutPage>
      <QueryContent
        isPending={isPending}
        error={error}
        hasData={instruments !== undefined}
        onRetry={() => refetch()}
      >
        {(instruments ?? []).length === 0 ? (
          <LayoutPageFeedback
            variant="empty"
            message="No stocks yet. Use the star in search or on an instrument page to add one."
          />
        ) : (
          <InstrumentList instruments={instruments ?? []} />
        )}
      </QueryContent>
    </LayoutPage>
  );
};
