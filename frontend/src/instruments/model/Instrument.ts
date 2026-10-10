export interface Quote {
  currentPrice: number;
  change: number;
  changePercent: number;
  open: number;
  previousClose: number;
  dayHigh: number;
  dayLow: number;
  volume: number;
}

export interface KeyStats {
  marketCap: number;
  peRatio: number | null;
  eps: number | null;
  dividendYield: number | null;
  fiftyTwoWeekHigh: number;
  fiftyTwoWeekLow: number;
  averageVolume: number;
}

export interface CompanyProfile {
  sector: string;
  industry: string;
  country: string;
  website: string;
  employees: number;
  description: string;
}

export interface NewsArticle {
  id: string;
  headline: string;
  source: string;
  publishedAt: string;
  url: string;
  summary: string;
}

export interface PricePoint {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface InstrumentSummary {
  symbol: string;
  name: string;
  exchange: string;
  currency: string;
  assetType: "stock";
  logoUrl: string;
  quote: Quote;
}

export interface InstrumentDetail extends InstrumentSummary {
  keyStats: KeyStats;
  about: CompanyProfile;
  overview: string;
  news: NewsArticle[];
  priceHistory: PricePoint[];
}
