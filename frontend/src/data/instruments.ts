import type { Instrument, InstrumentDetail } from "@/instruments/model/Instrument";


function symbolSeed(symbol: string): number {
  return [...symbol].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}

export function getInstrumentBySymbol(
  instruments: Instrument[],
  symbol: string,
): Instrument | undefined {
  return instruments.find((i) => i.symbol === symbol.toUpperCase());
}

export function getInstrumentDetail(
  instruments: Instrument[],
  symbol: string,
): InstrumentDetail | undefined {
  const base = getInstrumentBySymbol(instruments, symbol);
  if (!base) return undefined;

  const seed = symbolSeed(base.symbol);
  const spread = 0.08 + (seed % 12) / 100;

  return {
    ...base,
    exchange: "NASDAQ",
    marketCap: `${(0.4 + (seed % 35) / 10).toFixed(2)}T`,
    peRatio: 12 + (seed % 28),
    dividendYield: (seed % 180) / 100,
    week52High: Number((base.price * (1 + spread)).toFixed(2)),
    week52Low: Number((base.price * (0.62 + (seed % 15) / 100)).toFixed(2)),
    volume: `${(8 + (seed % 85)).toFixed(1)}M`,
  };
}


