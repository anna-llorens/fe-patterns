export type Instrument = {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  dailyChange: number;
  dailyChangePercent: number;
};

export type InstrumentDetail = Instrument & {
  exchange: string;
  marketCap: string;
  peRatio: number;
  dividendYield: number;
  week52High: number;
  week52Low: number;
  volume: string;
  overview: string;
};

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
    overview: `${base.name} operates in the ${base.sector} sector. This overview uses placeholder copy for the demo instrument detail view.`,
  };
}

/** ponytail: deterministic wiggle from symbol + range, not real market data */
export function getPriceHistory(
  symbol: string,
  range: string,
  endPrice: number,
): number[] {
  const counts: Record<string, number> = {
    "1D": 24,
    "1W": 7,
    "1M": 30,
    "3M": 12,
    "1Y": 12,
    "5Y": 20,
    ALL: 24,
  };
  const count = counts[range] ?? 30;
  const seed = symbolSeed(symbol + range);
  const start = endPrice * (0.92 + (seed % 8) / 100);
  const points: number[] = [];
  for (let i = 0; i < count; i++) {
    const t = i / Math.max(count - 1, 1);
    const wave =
      Math.sin(t * Math.PI * 2 + seed) * endPrice * 0.03 +
      Math.cos(t * Math.PI * 4) * endPrice * 0.015;
    points.push(start + (endPrice - start) * t + wave);
  }
  points[points.length - 1] = endPrice;
  return points;
}
