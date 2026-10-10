import type { AssetType, Instrument } from "@prisma/client";
import type {
  AssetTypeLiteral,
  InstrumentReference,
} from "../market-data/marketData.types.js";

export function prismaAssetTypeToLiteral(assetType: AssetType): AssetTypeLiteral {
  switch (assetType) {
    case "ETF":
      return "etf";
    case "CRYPTO":
      return "crypto";
    default:
      return "stock";
  }
}

export function instrumentToReference(instrument: Instrument): InstrumentReference {
  return {
    provider: instrument.provider,
    providerInstrumentId: instrument.providerInstrumentId,
    symbol: instrument.symbol,
    assetType: prismaAssetTypeToLiteral(instrument.assetType),
    exchange: instrument.exchange ?? undefined,
  };
}
