import { useAddToWatchlist } from "@/watchlist/hooks/useAddToWatchlist";
import { useRemoveFromWatchlist } from "@/watchlist/hooks/useRemoveFromWatchlist";
import { useWatchlist } from "@/watchlist/hooks/useWatchlist";
import "@/css/instrument-list-item.css";

type WatchlistStarButtonProps = {
  instrumentId: string;
  symbol: string;
  /** Larger star for instrument detail header */
  variant?: "list" | "header";
};

export const WatchlistStarButton = ({
  instrumentId,
  symbol,
  variant = "list",
}: WatchlistStarButtonProps) => {
  const { data: watchlist = [] } = useWatchlist();
  const addToWatchlist = useAddToWatchlist();
  const removeFromWatchlist = useRemoveFromWatchlist();

  const onWatchlist = watchlist.some(
    (item) =>
      item.id === instrumentId ||
      item.symbol.toUpperCase() === symbol.toUpperCase(),
  );
  const pending =
    addToWatchlist.isPending || removeFromWatchlist.isPending;

  return (
    <button
      type="button"
      className={[
        "instrument-list-item-star",
        variant === "header" ? "instrument-list-item-star--header" : "",
        onWatchlist ? "active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={
        onWatchlist ? "Remove from watchlist" : "Add to watchlist"
      }
      aria-pressed={onWatchlist}
      disabled={pending}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (onWatchlist) {
          removeFromWatchlist.mutate(instrumentId);
          return;
        }
        addToWatchlist.mutate(instrumentId);
      }}
    >
      {onWatchlist ? "★" : "☆"}
    </button>
  );
};
