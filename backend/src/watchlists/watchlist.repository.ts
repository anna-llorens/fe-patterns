import type { Instrument, Watchlist, WatchlistItem } from "@prisma/client";
import { prisma } from "../database/prisma.js";

export type WatchlistItemWithInstrument = WatchlistItem & {
  instrument: Instrument;
};

export const watchlistRepository = {
  findByUserId(userId: string): Promise<Watchlist | null> {
    return prisma.watchlist.findUnique({ where: { userId } });
  },

  findItemsWithInstruments(
    watchlistId: string,
  ): Promise<WatchlistItemWithInstrument[]> {
    return prisma.watchlistItem.findMany({
      where: { watchlistId },
      include: { instrument: true },
      orderBy: { addedAt: "asc" },
    });
  },

  addItem(watchlistId: string, instrumentId: string): Promise<WatchlistItem> {
    return prisma.watchlistItem.create({
      data: { watchlistId, instrumentId },
    });
  },

  removeItem(watchlistId: string, instrumentId: string): Promise<void> {
    return prisma.watchlistItem
      .delete({
        where: {
          watchlistId_instrumentId: { watchlistId, instrumentId },
        },
      })
      .then(() => undefined);
  },

  hasItem(watchlistId: string, instrumentId: string): Promise<boolean> {
    return prisma.watchlistItem
      .findUnique({
        where: {
          watchlistId_instrumentId: { watchlistId, instrumentId },
        },
      })
      .then((item) => item !== null);
  },
};
