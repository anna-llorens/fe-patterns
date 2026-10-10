import type { QuoteDto } from "../market-data/marketData.types.js";

export type InstrumentListItem = {
  quote: QuoteDto;
};

/** Matches frontend InstrumentSummary / InstrumentDetail (legacy HTTP contract). */
export interface LegacyQuote {
  currentPrice: number;
  change: number;
  changePercent: number;
  open: number;
  previousClose: number;
  dayHigh: number;
  dayLow: number;
  volume: number;
}

export interface LegacyInstrumentSummary {
  symbol: string;
  name: string;
  exchange: string;
  currency: string;
  assetType: "stock";
  logoUrl: string;
  quote: LegacyQuote;
}

export interface LegacyInstrumentDetail extends LegacyInstrumentSummary {
  keyStats: {
    marketCap: number;
    peRatio: number | null;
    eps: number | null;
    dividendYield: number | null;
    fiftyTwoWeekHigh: number;
    fiftyTwoWeekLow: number;
    averageVolume: number;
  };
  about: {
    sector: string;
    industry: string;
    country: string;
    website: string;
    employees: number;
    description: string;
  };
  overview: string;
  news: {
    id: string;
    headline: string;
    source: string;
    publishedAt: string;
    url: string;
    summary: string;
  }[];
  priceHistory: {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
  }[];
}

/** Legacy list shape for watchlist HTTP responses. */
export type WatchlistInstrumentsResponse = LegacyInstrumentSummary[];
