export type Instrument = {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  dailyChange: number;
  dailyChangePercent: number;
};

/** ponytail: static list until Twelve Data replaces this module */
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
