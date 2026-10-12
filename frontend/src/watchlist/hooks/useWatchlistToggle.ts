import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addInstrumentToWatchlist,
  removeInstrumentFromWatchlist,
} from "../api/watchlistApi";
import { watchlistQueryKey } from "./watchlistQueryKeys";

export type WatchlistToggleInput = {
  instrumentId: string;
  onWatchlist: boolean;
};

export function useWatchlistToggle() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ instrumentId, onWatchlist }: WatchlistToggleInput) => {
      if (onWatchlist) {
        await removeInstrumentFromWatchlist(instrumentId);
        return;
      }
      await addInstrumentToWatchlist(instrumentId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: watchlistQueryKey });
    },
  });
}
