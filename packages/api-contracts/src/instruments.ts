import { z } from "zod";

export const assetTypeSchema = z.enum(["stock", "etf", "crypto"]);

export type AssetType = z.infer<typeof assetTypeSchema>;

export const quoteSchema = z.object({
  currentPrice: z.number(),
  change: z.number(),
  changePercent: z.number(),
  open: z.number(),
  previousClose: z.number(),
  dayHigh: z.number(),
  dayLow: z.number(),
  volume: z.number(),
});

export type Quote = z.infer<typeof quoteSchema>;

export const keyStatsSchema = z.object({
  marketCap: z.number(),
  peRatio: z.number().nullable(),
  eps: z.number().nullable(),
  dividendYield: z.number().nullable(),
  fiftyTwoWeekHigh: z.number(),
  fiftyTwoWeekLow: z.number(),
  averageVolume: z.number(),
});

export type KeyStats = z.infer<typeof keyStatsSchema>;

export const companyProfileSchema = z.object({
  sector: z.string(),
  industry: z.string(),
  country: z.string(),
  website: z.string(),
  employees: z.number(),
  description: z.string(),
});

export type CompanyProfile = z.infer<typeof companyProfileSchema>;

export const newsArticleSchema = z.object({
  id: z.string(),
  headline: z.string(),
  source: z.string(),
  publishedAt: z.string(),
  url: z.string(),
  summary: z.string(),
});

export type NewsArticle = z.infer<typeof newsArticleSchema>;

export const pricePointSchema = z.object({
  date: z.string(),
  open: z.number(),
  high: z.number(),
  low: z.number(),
  close: z.number(),
  volume: z.number(),
});

export type PricePoint = z.infer<typeof pricePointSchema>;

export const instrumentSummarySchema = z.object({
  id: z.uuid(),
  symbol: z.string(),
  name: z.string(),
  exchange: z.string(),
  currency: z.string(),
  assetType: assetTypeSchema,
  logoUrl: z.string(),
  quote: quoteSchema,
});

export type InstrumentSummary = z.infer<typeof instrumentSummarySchema>;

export const instrumentDetailSchema = instrumentSummarySchema.extend({
  keyStats: keyStatsSchema,
  about: companyProfileSchema,
  overview: z.string(),
  news: z.array(newsArticleSchema),
  priceHistory: z.array(pricePointSchema),
});

export type InstrumentDetail = z.infer<typeof instrumentDetailSchema>;

export const instrumentListResponseSchema = z.array(instrumentSummarySchema);
