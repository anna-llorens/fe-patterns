import mockData from "./mock-instruments.json" with { type: "json" };
import type { InstrumentsResponse, InstrumentSummary, InstrumentDetail } from "../model/Instrument.ts";

const response = mockData as InstrumentsResponse;

const instruments = response.instruments;

export function getInstruments(): InstrumentSummary[] {
  return instruments.map(
    ({
      symbol,
      name,
      exchange,
      currency,
      assetType,
      logoUrl,
      quote,
    }) => ({
      symbol,
      name,
      exchange,
      currency,
      assetType,
      logoUrl,
      quote,
    }),
  );
}

export function getInstrumentDetail(
  symbol: string,
): InstrumentDetail | undefined {
  return instruments.find(
    (instrument) =>
      instrument.symbol.toLowerCase() === symbol.toLowerCase(),
  );
}