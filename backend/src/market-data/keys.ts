import type { InstrumentReference } from "./marketData.types.js";

export type ProviderInstrumentKey = `${string}:${string}`;

export function getProviderInstrumentKey(
  ref: InstrumentReference,
): ProviderInstrumentKey {
  return `${ref.provider}:${ref.providerInstrumentId}`;
}

export function quoteCacheKey(ref: InstrumentReference): string {
  return `quote:${ref.provider}:${ref.providerInstrumentId}`;
}

export function profileCacheKey(ref: InstrumentReference): string {
  return `profile:${ref.provider}:${ref.providerInstrumentId}`;
}

export function historyCacheKey(
  ref: InstrumentReference,
  range: string,
): string {
  return `history:${ref.provider}:${ref.providerInstrumentId}:${range}`;
}

export function newsCacheKey(ref: InstrumentReference, limit: number): string {
  return `news:${ref.provider}:${ref.providerInstrumentId}:${limit}`;
}

export function searchCacheKey(
  providerId: string,
  normalizedQuery: string,
): string {
  return `search:${providerId}:${normalizedQuery}`;
}

export function normalizeSearchQuery(query: string): string {
  return query.trim().toLowerCase();
}
