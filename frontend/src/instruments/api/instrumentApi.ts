import {
  instrumentDetailSchema,
  instrumentListResponseSchema,
  type InstrumentDetail,
  type InstrumentSummary,
} from "@fe-patterns/api-contracts";

export async function getInstruments(
  signal?: AbortSignal,
): Promise<InstrumentSummary[]> {
  const response = await fetch("/api/instruments", {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch instruments: ${response.status}`);
  }

  const data: unknown = await response.json();
  return instrumentListResponseSchema.parse(data);
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

  const data: unknown = await response.json();
  return instrumentDetailSchema.parse(data);
}
