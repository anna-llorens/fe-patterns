import { useQuery } from "@tanstack/react-query";
import { getInstruments } from "../api/instrumentApi";

export function useInstruments() {
  return useQuery({
    queryKey: ["instruments"],
    queryFn: ({ signal }) => getInstruments(signal),
    staleTime: 60_000,
  });
}