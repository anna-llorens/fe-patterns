import { useQuery } from "@tanstack/react-query";
import { getUserWatchlist } from "../api/watchlistApi";
import { watchlistQueryKey } from "./watchlistQueryKeys";

export function useWatchlist() {
  return useQuery({
    queryKey: watchlistQueryKey,
    queryFn: ({ signal }) => getUserWatchlist(signal),
    staleTime: 60_000,
  });
}
