import { MemoryCache } from "../cache/memoryCache.js";
import {
  getProviderInstrumentKey,
  historyCacheKey,
  newsCacheKey,
  normalizeSearchQuery,
  profileCacheKey,
  quoteCacheKey,
  searchCacheKey,
} from "./keys.js";
import type {
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

const TTL_MS = {
  quote: 60_000,
  profile: 24 * 60 * 60_000,
  history: 6 * 60 * 60_000,
  news: 10 * 60_000,
  search: 5 * 60_000,
} as const;

export class CachedMarketDataProvider implements MarketDataProvider {
  constructor(
    private inner: MarketDataProvider,
    private cache = new MemoryCache(),
  ) {}

  get id(): string {
    return this.inner.id;
  }

  async search(query: string): Promise<ProviderSearchHit[]> {
    const normalized = normalizeSearchQuery(query);
    if (!normalized) {
      return [];
    }
    const key = searchCacheKey(this.inner.id, normalized);
    const cached = this.cache.get<ProviderSearchHit[]>(key);
    if (cached) {
      return cached;
    }
    const result = await this.inner.search(query);
    this.cache.set(key, result, TTL_MS.search);
    return result;
  }

  async getInstrumentProfile(
    ref: InstrumentReference,
  ): Promise<InstrumentProfileDto> {
    const key = profileCacheKey(ref);
    const cached = this.cache.get<InstrumentProfileDto>(key);
    if (cached) {
      return cached;
    }
    const result = await this.inner.getInstrumentProfile(ref);
    this.cache.set(key, result, TTL_MS.profile);
    return result;
  }

  async getQuotes(
    refs: InstrumentReference[],
  ): Promise<Map<ReturnType<typeof getProviderInstrumentKey>, QuoteDto>> {
    const result = new Map<
      ReturnType<typeof getProviderInstrumentKey>,
      QuoteDto
    >();
    const missingRefs: InstrumentReference[] = [];

    for (const ref of refs) {
      const key = getProviderInstrumentKey(ref);
      const cached = this.cache.get<QuoteDto>(quoteCacheKey(ref));
      if (cached) {
        result.set(key, cached);
      } else {
        missingRefs.push(ref);
      }
    }

    if (missingRefs.length > 0) {
      const fetched = await this.inner.getQuotes(missingRefs);
      for (const ref of missingRefs) {
        const key = getProviderInstrumentKey(ref);
        const quote = fetched.get(key);
        if (quote) {
          this.cache.set(quoteCacheKey(ref), quote, TTL_MS.quote);
          result.set(key, quote);
        }
      }
    }

    return result;
  }

  async getPriceHistory(
    ref: InstrumentReference,
    range: HistoryRange,
  ): Promise<PricePointDto[]> {
    const key = historyCacheKey(ref, range);
    const cached = this.cache.get<PricePointDto[]>(key);
    if (cached) {
      return cached;
    }
    const result = await this.inner.getPriceHistory(ref, range);
    this.cache.set(key, result, TTL_MS.history);
    return result;
  }

  async getNews(
    ref: InstrumentReference,
    options?: NewsOptions,
  ): Promise<NewsArticleDto[]> {
    const limit = options?.limit ?? DEFAULT_NEWS_LIMIT;
    const key = newsCacheKey(ref, limit);
    const cached = this.cache.get<NewsArticleDto[]>(key);
    if (cached) {
      return cached;
    }
    const result = await this.inner.getNews(ref, { limit });
    this.cache.set(key, result, TTL_MS.news);
    return result;
  }
}
