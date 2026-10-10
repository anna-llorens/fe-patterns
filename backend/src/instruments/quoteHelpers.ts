import type { Instrument } from "@prisma/client";
import { getProviderInstrumentKey } from "../market-data/keys.js";
import type { QuoteDto } from "../market-data/marketData.types.js";
import { MarketDataUnavailableError } from "./instrument.errors.js";
import { instrumentToReference } from "./instrumentReference.js";

export function requireQuote(
  instrument: Instrument,
  quotes: Map<string, QuoteDto>,
): QuoteDto {
  const ref = instrumentToReference(instrument);
  const quote = quotes.get(getProviderInstrumentKey(ref));
  if (!quote) {
    throw new MarketDataUnavailableError(
      ref.provider,
      ref.providerInstrumentId,
    );
  }
  return quote;
}

export function requireQuotesForInstruments(
  instruments: Instrument[],
  quotes: Map<string, QuoteDto>,
): void {
  for (const instrument of instruments) {
    requireQuote(instrument, quotes);
  }
}
