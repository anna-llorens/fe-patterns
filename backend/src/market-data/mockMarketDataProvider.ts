import mockData from "../data/mock-instruments.json" with { type: "json" };
import { getProviderInstrumentKey } from "./keys.js";
import type {
  AssetTypeLiteral,
  HistoryRange,
  InstrumentProfileDto,
  InstrumentReference,
  MarketDataProvider,
  NewsArticleDto,
  NewsOptions,
  PricePointDto,
  ProviderSearchHit,
  QuoteDto,
} from "./marketData.types.js";
import { DEFAULT_NEWS_LIMIT } from "./marketData.types.js";

const MOCK_PROVIDER = "mock";

interface MockInstrumentEntry {
  symbol: string;
  name: string;
  exchange: string;
  currency: string;
  assetType: string;
  logoUrl: string;
  quote: {
    currentPrice: number;
    change: number;
    changePercent: number;
    open: number;
    previousClose: number;
    dayHigh: number;
    dayLow: number;
    volume: number;
  };
  keyStats: InstrumentProfileDto["keyStats"];
  about: InstrumentProfileDto["about"];
  overview: string;
  news: NewsArticleDto[];
  priceHistory: PricePointDto[];
}

function toAssetType(value: string): AssetTypeLiteral {
  if (value === "etf" || value === "crypto") {
    return value;
  }
  return "stock";
}

function toReference(entry: MockInstrumentEntry): InstrumentReference {
  return {
    provider: MOCK_PROVIDER,
    providerInstrumentId: entry.symbol,
    symbol: entry.symbol,
    assetType: toAssetType(entry.assetType),
    exchange: entry.exchange,
  };
}

function toQuoteDto(entry: MockInstrumentEntry): QuoteDto {
  return {
    price: entry.quote.currentPrice,
    change: entry.quote.change,
    changePercent: entry.quote.changePercent,
    open: entry.quote.open,
    high: entry.quote.dayHigh,
    low: entry.quote.dayLow,
    previousClose: entry.quote.previousClose,
    volume: entry.quote.volume,
    updatedAt: new Date().toISOString(),
  };
}

function filterHistoryByRange(
  history: PricePointDto[],
  range: HistoryRange,
): PricePointDto[] {
  if (range === "ALL") {
    return history;
  }
  const rangeDays: Record<Exclude<HistoryRange, "ALL">, number> = {
    "1D": 1,
    "1W": 7,
    "1M": 30,
    "3M": 90,
    "1Y": 365,
    "5Y": 365 * 5,
  };
  const days = rangeDays[range];
  const sorted = [...history].sort((a, b) => a.date.localeCompare(b.date));
  if (sorted.length === 0) {
    return sorted;
  }
  const lastDate = new Date(sorted[sorted.length - 1].date);
  const cutoff = new Date(lastDate);
  cutoff.setDate(cutoff.getDate() - days + 1);
  return sorted.filter((point) => new Date(point.date) >= cutoff);
}

export class MockMarketDataProvider implements MarketDataProvider {
  readonly id = MOCK_PROVIDER;

  private byKey = new Map<string, MockInstrumentEntry>();

  constructor() {
    for (const raw of mockData.instruments as MockInstrumentEntry[]) {
      const ref = toReference(raw);
      this.byKey.set(getProviderInstrumentKey(ref), raw);
    }
  }

  async search(query: string): Promise<ProviderSearchHit[]> {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return [];
    }

    return [...this.byKey.values()]
      .filter(
        (entry) =>
          entry.symbol.toLowerCase().includes(normalized) ||
          entry.name.toLowerCase().includes(normalized),
      )
      .map((entry) => ({
        reference: toReference(entry),
        name: entry.name,
        currency: entry.currency,
        logoUrl: entry.logoUrl,
      }));
  }

  async getInstrumentProfile(
    ref: InstrumentReference,
  ): Promise<InstrumentProfileDto> {
    const entry = this.byKey.get(getProviderInstrumentKey(ref));
    if (!entry) {
      throw new Error(`Instrument not found in mock provider: ${ref.symbol}`);
    }
    return {
      overview: entry.overview,
      keyStats: entry.keyStats,
      about: entry.about,
    };
  }

  async getQuotes(
    refs: InstrumentReference[],
  ): Promise<Map<ReturnType<typeof getProviderInstrumentKey>, QuoteDto>> {
    const quotes = new Map<
      ReturnType<typeof getProviderInstrumentKey>,
      QuoteDto
    >();
    for (const ref of refs) {
      const entry = this.byKey.get(getProviderInstrumentKey(ref));
      if (entry) {
        quotes.set(getProviderInstrumentKey(ref), toQuoteDto(entry));
      }
    }
    return quotes;
  }

  async getPriceHistory(
    ref: InstrumentReference,
    range: HistoryRange,
  ): Promise<PricePointDto[]> {
    const entry = this.byKey.get(getProviderInstrumentKey(ref));
    if (!entry) {
      throw new Error(`Instrument not found in mock provider: ${ref.symbol}`);
    }
    return filterHistoryByRange(entry.priceHistory, range);
  }

  async getNews(
    ref: InstrumentReference,
    options?: NewsOptions,
  ): Promise<NewsArticleDto[]> {
    const entry = this.byKey.get(getProviderInstrumentKey(ref));
    if (!entry) {
      throw new Error(`Instrument not found in mock provider: ${ref.symbol}`);
    }
    const limit = options?.limit ?? DEFAULT_NEWS_LIMIT;
    return entry.news.slice(0, limit);
  }
}
