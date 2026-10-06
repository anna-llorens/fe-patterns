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

export function getInstrumentBySymbol(symbol: string): Instrument | undefined {
  return instruments.find((i) => i.symbol === symbol.toUpperCase());
}

export function getInstrumentDetail(symbol: string): InstrumentDetail | undefined {
  const base = getInstrumentBySymbol(symbol);
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
  
  export const instruments: Instrument[] = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      sector: "Technology",
      price: 182.45,
      dailyChange: 2.31,
      dailyChangePercent: 1.28,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      sector: "Technology",
      price: 421.18,
      dailyChange: -3.42,
      dailyChangePercent: -0.81,
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corporation",
      sector: "Technology",
      price: 193.67,
      dailyChange: 4.12,
      dailyChangePercent: 2.17,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      sector: "Consumer Discretionary",
      price: 226.34,
      dailyChange: 1.54,
      dailyChangePercent: 0.69,
    },
    {
      symbol: "META",
      name: "Meta Platforms Inc.",
      sector: "Technology",
      price: 612.72,
      dailyChange: -5.31,
      dailyChangePercent: -0.86,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      sector: "Communication Services",
      price: 198.43,
      dailyChange: 0.92,
      dailyChangePercent: 0.47,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      sector: "Automotive",
      price: 347.85,
      dailyChange: -8.24,
      dailyChangePercent: -2.31,
    },
    {
      symbol: "JPM",
      name: "JPMorgan Chase & Co.",
      sector: "Financials",
      price: 287.21,
      dailyChange: 1.88,
      dailyChangePercent: 0.66,
    },
    {
      symbol: "XOM",
      name: "Exxon Mobil Corporation",
      sector: "Energy",
      price: 118.64,
      dailyChange: -0.73,
      dailyChangePercent: -0.61,
    },
    {
      symbol: "JNJ",
      name: "Johnson & Johnson",
      sector: "Healthcare",
      price: 167.92,
      dailyChange: 0.48,
      dailyChangePercent: 0.29,
    },
  ];