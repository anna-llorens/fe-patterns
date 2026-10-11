import {
  instrumentListResponseSchema,
  type InstrumentSummary,
} from "@fe-patterns/api-contracts";
import { urlFor } from "../../api/apiConfig";

export type AddWatchlistInstrumentResult = {
  ok: true;
  alreadyExists?: true;
};

export async function getUserWatchlist(
  signal?: AbortSignal,
): Promise<InstrumentSummary[]> {
  const response = await fetch(urlFor("watchlistInstruments"), {
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch watchlist: ${response.status}`);
  }

  const data: unknown = await response.json();
  return instrumentListResponseSchema.parse(data);
}

export async function addInstrumentToWatchlist(
  instrumentId: string,
  signal?: AbortSignal,
): Promise<AddWatchlistInstrumentResult> {
  const response = await fetch(urlFor("watchlistInstruments"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ instrumentId }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Failed to add instrument to watchlist: ${response.status}`);
  }

  const data: unknown = await response.json();
  if (
    typeof data !== "object" ||
    data === null ||
    !("ok" in data) ||
    data.ok !== true
  ) {
    throw new Error("Invalid add-to-watchlist response");
  }

  return data as AddWatchlistInstrumentResult;
}

export async function removeInstrumentFromWatchlist(
  instrumentId: string,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch(urlFor("watchlistInstrument", { instrumentId }), {
    method: "DELETE",
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `Failed to remove instrument from watchlist: ${response.status}`,
    );
  }
}
