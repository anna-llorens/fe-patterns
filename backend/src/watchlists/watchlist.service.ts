import type { MarketDataProvider } from "../market-data/marketData.types.js";
import { toLegacyInstrumentSummary } from "../instruments/legacyMappers.js";
import { instrumentToReference } from "../instruments/instrumentReference.js";
import { instrumentRepository } from "../instruments/instrument.repository.js";
import { requireQuote, requireQuotesForInstruments } from "../instruments/quoteHelpers.js";
import type { WatchlistInstrumentsResponse } from "../instruments/instrument.types.js";
import { getDefaultUser } from "../users/user.repository.js";
import { watchlistRepository } from "./watchlist.repository.js";

export function createWatchlistService(marketData: MarketDataProvider) {
  async function getWatchlistForDefaultUser() {
    const user = await getDefaultUser();
    const watchlist = await watchlistRepository.findByUserId(user.id);
    if (!watchlist) {
      throw new Error("Watchlist not found for default user. Run prisma db seed.");
    }
    return watchlist;
  }

  return {
    async getMetadata() {
      const watchlist = await getWatchlistForDefaultUser();
      return {
        id: watchlist.id,
        name: watchlist.name,
        createdAt: watchlist.createdAt.toISOString(),
        updatedAt: watchlist.updatedAt.toISOString(),
      };
    },

    async listInstruments(): Promise<WatchlistInstrumentsResponse> {
      const watchlist = await getWatchlistForDefaultUser();
      const items = await watchlistRepository.findItemsWithInstruments(
        watchlist.id,
      );
      const instruments = items.map((item) => item.instrument);
      const refs = instruments.map(instrumentToReference);
      const quotes = await marketData.getQuotes(refs);
      requireQuotesForInstruments(instruments, quotes);

      return instruments.map((instrument) =>
        toLegacyInstrumentSummary(
          instrument,
          requireQuote(instrument, quotes),
        ),
      );
    },

    async addInstrument(instrumentId: string): Promise<{ created: boolean }> {
      const watchlist = await getWatchlistForDefaultUser();
      const instrument = await instrumentRepository.findById(instrumentId);
      if (!instrument) {
        throw new WatchlistError("Instrument not found", 404);
      }
      const exists = await watchlistRepository.hasItem(
        watchlist.id,
        instrumentId,
      );
      if (exists) {
        return { created: false };
      }
      await watchlistRepository.addItem(watchlist.id, instrumentId);
      return { created: true };
    },

    async removeInstrument(instrumentId: string): Promise<void> {
      const watchlist = await getWatchlistForDefaultUser();
      const exists = await watchlistRepository.hasItem(
        watchlist.id,
        instrumentId,
      );
      if (!exists) {
        return;
      }
      await watchlistRepository.removeItem(watchlist.id, instrumentId);
    },
  };
}

export class WatchlistError extends Error {
  constructor(
    message: string,
    readonly statusCode: number,
  ) {
    super(message);
    this.name = "WatchlistError";
  }
}

export type WatchlistService = ReturnType<typeof createWatchlistService>;
