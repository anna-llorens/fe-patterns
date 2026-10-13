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

  addItem(
    watchlistId: string,
    instrumentId: string,
  ): Promise<{ created: boolean }> {
    return prisma.watchlistItem
      .createMany({
        data: [{ watchlistId, instrumentId }],
        skipDuplicates: true,
      })
      .then((result) => ({ created: result.count > 0 }));
  },

  removeItem(watchlistId: string, instrumentId: string): Promise<void> {
    return prisma.watchlistItem
      .deleteMany({
        where: { watchlistId, instrumentId },
      })
      .then(() => undefined);
  },
};
