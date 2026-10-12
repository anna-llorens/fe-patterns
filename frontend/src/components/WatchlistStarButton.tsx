import { useWatchlistToggle } from "@/watchlist/hooks/useWatchlistToggle";
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
  variant = "list",
}: WatchlistStarButtonProps) => {
  const { data: watchlist = [] } = useWatchlist();
  const { mutate: toggle, isPending } = useWatchlistToggle();

  const onWatchlist = watchlist.some((item) => item.id === instrumentId);

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
      disabled={isPending}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle({ instrumentId, onWatchlist });
      }}
    >
      {onWatchlist ? "★" : "☆"}
    </button>
  );
};
