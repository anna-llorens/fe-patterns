import type { Instrument } from "@prisma/client";
import type {
  InstrumentDetail,
  InstrumentSummary,
  Quote,
} from "@fe-patterns/api-contracts";
import type {
  InstrumentProfileDto,
  NewsArticleDto,
  PricePointDto,
  QuoteDto,
} from "../market-data/marketData.types.js";
import { prismaAssetTypeToLiteral } from "./instrumentReference.js";

export function toQuoteResponse(quote: QuoteDto): Quote {
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

export function toInstrumentSummaryResponse(
  instrument: Instrument,
  quote: QuoteDto,
): InstrumentSummary {
  return {
    id: instrument.id,
    symbol: instrument.symbol,
    name: instrument.name,
    exchange: instrument.exchange ?? "",
    currency: instrument.currency,
    assetType: prismaAssetTypeToLiteral(instrument.assetType),
    logoUrl: instrument.logoUrl ?? "",
    quote: toQuoteResponse(quote),
  };
}

export function toInstrumentDetailResponse(input: {
  instrument: Instrument;
  quote: QuoteDto;
  profile: InstrumentProfileDto;
  priceHistory: PricePointDto[];
  news: NewsArticleDto[];
}): InstrumentDetail {
  return {
    ...toInstrumentSummaryResponse(input.instrument, input.quote),
    keyStats: input.profile.keyStats,
    about: input.profile.about,
    overview: input.profile.overview,
    news: input.news,
    priceHistory: input.priceHistory,
  };
}
