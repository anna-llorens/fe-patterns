import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addInstrumentToWatchlist } from "../api/watchlistApi";
import { watchlistQueryKey } from "./watchlistQueryKeys";

export function useAddToWatchlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (instrumentId: string) => addInstrumentToWatchlist(instrumentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: watchlistQueryKey });
    },
  });
}
