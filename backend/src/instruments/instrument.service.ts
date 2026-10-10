import type {
  InstrumentDetail,
  InstrumentSummary,
} from "@fe-patterns/api-contracts";
import { getProviderInstrumentKey } from "../market-data/keys.js";
import type { MarketDataProvider } from "../market-data/marketData.types.js";
import { DEFAULT_NEWS_LIMIT } from "../market-data/marketData.types.js";
import {
  AmbiguousInstrumentSymbolError,
  InstrumentNotFoundError,
  MarketDataUnavailableError,
} from "./instrument.errors.js";
import {
  toInstrumentDetailResponse,
  toInstrumentSummaryResponse,
} from "./instrumentResponse.mapper.js";
import { instrumentToReference } from "./instrumentReference.js";
import {
  instrumentRepository,
  type InstrumentRepository,
} from "./instrument.repository.js";
import {
  requireQuote,
  requireQuotesForInstruments,
} from "./quoteHelpers.js";

export function createInstrumentService(
  marketData: MarketDataProvider,
  repository: InstrumentRepository = instrumentRepository,
) {
  async function resolveUniqueBySymbol(symbol: string) {
    const matches = await repository.findLocalBySymbol(symbol);
    if (matches.length === 0) {
      throw new InstrumentNotFoundError(symbol);
    }
    if (matches.length > 1) {
      throw new AmbiguousInstrumentSymbolError(symbol);
    }
    return matches[0];
  }

  return {
    async listLocalCatalog(): Promise<InstrumentSummary[]> {
      const instruments = await repository.findAll();
      const refs = instruments.map(instrumentToReference);
      const quotes = await marketData.getQuotes(refs);
      requireQuotesForInstruments(instruments, quotes);

      return instruments.map((instrument) =>
        toInstrumentSummaryResponse(
          instrument,
          requireQuote(instrument, quotes),
        ),
      );
    },

    async getBySymbol(symbol: string): Promise<InstrumentDetail> {
      const instrument = await resolveUniqueBySymbol(symbol);
      const instrumentRef = instrumentToReference(instrument);

      const [quotes, profile, priceHistory, news] = await Promise.all([
        marketData.getQuotes([instrumentRef]),
        marketData.getInstrumentProfile(instrumentRef),
        marketData.getPriceHistory(instrumentRef, "ALL"),
        marketData.getNews(instrumentRef, { limit: DEFAULT_NEWS_LIMIT }),
      ]);

      const quote = quotes.get(getProviderInstrumentKey(instrumentRef));
      if (!quote) {
        throw new MarketDataUnavailableError(
          instrumentRef.provider,
          instrumentRef.providerInstrumentId,
        );
      }

      return toInstrumentDetailResponse({
        instrument,
        quote,
        profile,
        priceHistory,
        news,
      });
    },
  };
}

export type InstrumentService = ReturnType<typeof createInstrumentService>;
