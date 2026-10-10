import { useQuery } from "@tanstack/react-query";
import { getInstrument } from "../api/instrumentApi";

export function useInstrument(symbol: string) {
  return useQuery({
    queryKey: ["instruments", symbol],
    queryFn: ({ signal }) => getInstrument(symbol, signal),
    enabled: Boolean(symbol),
    staleTime: 60_000,
  });
}
