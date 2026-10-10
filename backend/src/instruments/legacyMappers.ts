import type { Instrument } from "@prisma/client";
import type {
  InstrumentProfileDto,
  NewsArticleDto,
  PricePointDto,
  QuoteDto,
} from "../market-data/marketData.types.js";
import type {
  LegacyInstrumentDetail,
  LegacyInstrumentSummary,
  LegacyQuote,
} from "./instrument.types.js";
import { prismaAssetTypeToLiteral } from "./instrumentReference.js";

function toLegacyQuote(quote: QuoteDto): LegacyQuote {
  return {
    currentPrice: quote.price,
    change: quote.change,
    changePercent: quote.changePercent,
    open: quote.open ?? quote.price,
    previousClose: quote.previousClose ?? quote.price,
    dayHigh: quote.high ?? quote.price,
    dayLow: quote.low ?? quote.price,
    volume: quote.volume ?? 0,
  };
}

function toLegacyAssetType(
  instrument: Instrument,
): LegacyInstrumentSummary["assetType"] {
  const literal = prismaAssetTypeToLiteral(instrument.assetType);
  if (literal === "stock") {
    return "stock";
  }
  return "stock";
}

export function toLegacyInstrumentSummary(
  instrument: Instrument,
  quote: QuoteDto,
): LegacyInstrumentSummary {
  return {
    symbol: instrument.symbol,
    name: instrument.name,
    exchange: instrument.exchange ?? "",
    currency: instrument.currency,
    assetType: toLegacyAssetType(instrument),
    logoUrl: instrument.logoUrl ?? "",
    quote: toLegacyQuote(quote),
  };
}

export function toLegacyInstrumentDetail(input: {
  instrument: Instrument;
  quote: QuoteDto;
  profile: InstrumentProfileDto;
  priceHistory: PricePointDto[];
  news: NewsArticleDto[];
}): LegacyInstrumentDetail {
  return {
    ...toLegacyInstrumentSummary(input.instrument, input.quote),
    keyStats: input.profile.keyStats,
    about: input.profile.about,
    overview: input.profile.overview,
    news: input.news,
    priceHistory: input.priceHistory,
  };
}
