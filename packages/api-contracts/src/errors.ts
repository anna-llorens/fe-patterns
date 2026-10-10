import { z } from "zod";

export const apiErrorSchema = z.object({
  error: z.string(),
});

export type ApiError = z.infer<typeof apiErrorSchema>;

export const ambiguousSymbolErrorSchema = apiErrorSchema.extend({
  symbol: z.string(),
});

export type AmbiguousSymbolError = z.infer<typeof ambiguousSymbolErrorSchema>;
