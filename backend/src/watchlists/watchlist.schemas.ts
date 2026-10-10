import { z } from "zod";

export const addWatchlistInstrumentBodySchema = z.object({
  instrumentId: z.string().uuid(),
});

export const watchlistInstrumentParamSchema = z.object({
  instrumentId: z.string().uuid(),
});
