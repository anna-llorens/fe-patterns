import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { Instrument } from "@prisma/client";
import type { MarketDataProvider } from "../market-data/marketData.types.js";
import {
  AmbiguousInstrumentSymbolError,
  MarketDataUnavailableError,
} from "./instrument.errors.js";
import { createInstrumentService } from "./instrument.service.js";
import type { InstrumentRepository } from "./instrument.repository.js";

const sampleInstrument: Instrument = {
  id: "inst-1",
  provider: "mock",
  providerInstrumentId: "AAPL",
  symbol: "AAPL",
  name: "Apple Inc.",
  assetType: "STOCK",
  exchange: "NASDAQ",
  currency: "USD",
  logoUrl: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

function createMockMarketData(
  overrides: Partial<MarketDataProvider> = {},
): MarketDataProvider {
  return {
    id: "mock",
    search: async () => [],
    getInstrumentProfile: async () => ({
      overview: "",
      keyStats: {
        marketCap: 0,
        peRatio: null,
        eps: null,
        dividendYield: null,
        fiftyTwoWeekHigh: 0,
        fiftyTwoWeekLow: 0,
        averageVolume: 0,
      },
      about: {
        sector: "",
        industry: "",
        country: "",
        website: "",
        employees: 0,
        description: "",
      },
    }),
    getQuotes: async () => new Map(),
    getPriceHistory: async () => [],
    getNews: async () => [],
    ...overrides,
  };
}

describe("InstrumentService", () => {
  it("throws AmbiguousInstrumentSymbolError when multiple local matches", async () => {
    const repository: InstrumentRepository = {
      findAll: async () => [],
      findLocalBySymbol: async () => [
        sampleInstrument,
        { ...sampleInstrument, id: "inst-2" },
      ],
      findById: async () => null,
    };
    const service = createInstrumentService(
      createMockMarketData(),
      repository,
    );

    await assert.rejects(
      () => service.getBySymbol("ABC"),
      AmbiguousInstrumentSymbolError,
    );
  });

  it("throws MarketDataUnavailableError when provider does not return quote", async () => {
    const repository: InstrumentRepository = {
      findAll: async () => [],
      findLocalBySymbol: async () => [sampleInstrument],
      findById: async () => null,
    };
    const service = createInstrumentService(
      createMockMarketData({
        getQuotes: async () => new Map(),
      }),
      repository,
    );

    await assert.rejects(
      () => service.getBySymbol("AAPL"),
      MarketDataUnavailableError,
    );
  });
});
