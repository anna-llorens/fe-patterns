import { z } from "zod";

export const addWatchlistInstrumentResponseSchema = z.object({
  ok: z.literal(true),
  alreadyExists: z.literal(true).optional(),
});

export type AddWatchlistInstrumentResult = z.infer<
  typeof addWatchlistInstrumentResponseSchema
>;
