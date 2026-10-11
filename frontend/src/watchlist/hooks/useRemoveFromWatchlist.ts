import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeInstrumentFromWatchlist } from "../api/watchlistApi";
import { watchlistQueryKey } from "./watchlistQueryKeys";

export function useRemoveFromWatchlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (instrumentId: string) =>
      removeInstrumentFromWatchlist(instrumentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: watchlistQueryKey });
    },
  });
}
