import { useWatchlistToggle } from "@/watchlist/hooks/useWatchlistToggle";
import { useWatchlist } from "@/watchlist/hooks/useWatchlist";
import "./WatchlistStarButton.css";

type WatchlistStarButtonProps = {
  instrumentId: string;
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
        "watchlist-star-button",
        variant === "header" ? "watchlist-star-button--header" : "",
        onWatchlist ? "watchlist-star-button--on-watchlist" : "",
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
