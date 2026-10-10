import type { ProviderInstrumentKey } from "./keys.js";

export type AssetTypeLiteral = "stock" | "etf" | "crypto";

export interface InstrumentReference {
  provider: string;
  providerInstrumentId: string;
  symbol: string;
  assetType: AssetTypeLiteral;
  exchange?: string;
}

export interface QuoteDto {
  price: number;
  change: number;
  changePercent: number;
  open?: number;
  high?: number;
  low?: number;
  previousClose?: number;
  volume?: number;
  updatedAt: string;
}

export interface PricePointDto {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface KeyStatsDto {
  marketCap: number;
  peRatio: number | null;
  eps: number | null;
  dividendYield: number | null;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  averageVolume: number;
}

export interface CompanyProfileDto {
  sector: string;
  industry: string;
  country: string;
  website: string;
  employees: number;
  description: string;
}

export interface NewsArticleDto {
  id: string;
  headline: string;
  source: string;
  publishedAt: string;
  url: string;
  summary: string;
}

export interface InstrumentProfileDto {
  overview: string;
  keyStats: KeyStatsDto;
  about: CompanyProfileDto;
}

export interface NewsOptions {
  limit?: number;
}

export interface ProviderSearchHit {
  reference: InstrumentReference;
  name: string;
  currency: string;
  logoUrl?: string;
}

export type HistoryRange = "1D" | "1W" | "1M" | "3M" | "1Y" | "5Y" | "ALL";

export interface MarketDataProvider {
  readonly id: string;
  search(query: string): Promise<ProviderSearchHit[]>;
  getInstrumentProfile(ref: InstrumentReference): Promise<InstrumentProfileDto>;
  getQuotes(
    refs: InstrumentReference[],
  ): Promise<Map<ProviderInstrumentKey, QuoteDto>>;
  getPriceHistory(
    ref: InstrumentReference,
    range: HistoryRange,
  ): Promise<PricePointDto[]>;
  getNews(
    ref: InstrumentReference,
    options?: NewsOptions,
  ): Promise<NewsArticleDto[]>;
}

export const DEFAULT_NEWS_LIMIT = 10;
