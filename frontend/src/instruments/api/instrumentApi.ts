import type { Instrument } from "../model/Instrument";

export async function getInstruments(
  signal?: AbortSignal
): Promise<Instrument[]> {
  const response = await fetch("/api/instruments", {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch instruments: ${response.status}`);
  }

  return response.json();
}