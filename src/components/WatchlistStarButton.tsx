import { useWatchlist } from "@/watchlist/WatchlistContext";
import "@/instrument-list-item.css";

type WatchlistStarButtonProps = {
  symbol: string;
  /** Larger star for instrument detail header */
  variant?: "list" | "header";
};

export const WatchlistStarButton = ({
  symbol,
  variant = "list",
}: WatchlistStarButtonProps) => {
  const { toggle, has } = useWatchlist();
  const onWatchlist = has(symbol);

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
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(symbol);
      }}
    >
      {onWatchlist ? "★" : "☆"}
    </button>
  );
};
