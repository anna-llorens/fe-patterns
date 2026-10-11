import {
  instrumentDetailSchema,
  instrumentListResponseSchema,
  type InstrumentDetail,
  type InstrumentSummary,
} from "@fe-patterns/api-contracts";
import { urlFor } from "../../api/apiConfig";

export async function getInstruments(
  signal?: AbortSignal,
): Promise<InstrumentSummary[]> {
  const response = await fetch(urlFor("instruments"), {
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
  const response = await fetch(urlFor("instrument", { symbol }), { signal });

  if (!response.ok) {
    throw new Error(`Failed to fetch instrument: ${response.status}`);
  }

  const data: unknown = await response.json();
  return instrumentDetailSchema.parse(data);
}
