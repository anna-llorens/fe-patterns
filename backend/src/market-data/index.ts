import { CachedMarketDataProvider } from "./cachedMarketDataProvider.js";
import type { MarketDataProvider } from "./marketData.types.js";
import { MockMarketDataProvider } from "./mockMarketDataProvider.js";

export function createMarketDataProvider(): MarketDataProvider {
  const inner = new MockMarketDataProvider();
  return new CachedMarketDataProvider(inner);
}

export type { MarketDataProvider } from "./marketData.types.js";
