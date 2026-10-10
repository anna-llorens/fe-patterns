import type {
  InstrumentDetail,
  InstrumentSummary,
} from "../model/Instrument";

export async function getInstruments(
  signal?: AbortSignal,
): Promise<InstrumentSummary[]> {
  const response = await fetch("/api/instruments", {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch instruments: ${response.status}`);
  }

  return response.json();
}

export async function getInstrument(
  symbol: string,
  signal?: AbortSignal,
): Promise<InstrumentDetail> {
  const response = await fetch(
    `/api/instruments/${encodeURIComponent(symbol)}`,
    { signal },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch instrument: ${response.status}`);
  }

  return response.json();
}