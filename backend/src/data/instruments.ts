export type Instrument = {
  symbol: string;
  name: string;
  sector: string;
  price: number;
  dailyChange: number;
  dailyChangePercent: number;
  overview: string;
  news: string;
  keyStats: string;
  about: string;
};

function instrumentContent(
  name: string,
  symbol: string,
  sector: string,
): Pick<Instrument, "overview" | "news" | "keyStats" | "about"> {
  return {
    overview: `${name} operates in the ${sector} sector and is tracked in this demo as ${symbol}. The company profile here is placeholder copy for workshops: product mix, geographic exposure, and competitive positioning would normally come from a market-data vendor. Use this tab to validate layout, truncation, and tab switching before wiring live fundamentals.`,
    news: `Demo wire for ${symbol}: shares moved on mixed macro data and sector rotation headlines. Analyst notes in this sandbox cite supply-chain updates, regulatory chatter, and peer earnings—not real events. A second fake item mentions an institutional holder trimming exposure; a third references a product roadmap teaser ahead of the next earnings window.`,
    keyStats: `Sandbox key stats for ${name} (${symbol}): revenue growth (YoY) +8.4% demo, gross margin 42.1% demo, operating margin 18.6% demo, free cash flow $12.3B demo, debt/equity 0.54 demo, beta 1.12 demo, short interest 1.8% of float demo. Figures are illustrative only and do not match live filings.`,
    about: `${name} is a fictionalized profile entry for StockTrack training. Founded year, HQ city, and employee count are omitted on purpose. In production, this tab would summarize corporate history, leadership, and ESG highlights sourced from ${symbol}'s investor relations site and regulatory disclosures.`,
  };
}

/** ponytail: static list until Twelve Data replaces this module */
export const instruments: Instrument[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    sector: "Technology",
    price: 182.45,
    dailyChange: 2.31,
    dailyChangePercent: 1.28,
    ...instrumentContent("Apple Inc.", "AAPL", "Technology"),
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    sector: "Technology",
    price: 421.18,
    dailyChange: -3.42,
    dailyChangePercent: -0.81,
    ...instrumentContent("Microsoft Corporation", "MSFT", "Technology"),
  },
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    sector: "Technology",
    price: 193.67,
    dailyChange: 4.12,
    dailyChangePercent: 2.17,
    ...instrumentContent("NVIDIA Corporation", "NVDA", "Technology"),
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc.",
    sector: "Consumer Discretionary",
    price: 226.34,
    dailyChange: 1.54,
    dailyChangePercent: 0.69,
    ...instrumentContent("Amazon.com Inc.", "AMZN", "Consumer Discretionary"),
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc.",
    sector: "Technology",
    price: 612.72,
    dailyChange: -5.31,
    dailyChangePercent: -0.86,
    ...instrumentContent("Meta Platforms Inc.", "META", "Technology"),
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    sector: "Communication Services",
    price: 198.43,
    dailyChange: 0.92,
    dailyChangePercent: 0.47,
    ...instrumentContent("Alphabet Inc.", "GOOGL", "Communication Services"),
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    sector: "Automotive",
    price: 347.85,
    dailyChange: -8.24,
    dailyChangePercent: -2.31,
    ...instrumentContent("Tesla Inc.", "TSLA", "Automotive"),
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co.",
    sector: "Financials",
    price: 287.21,
    dailyChange: 1.88,
    dailyChangePercent: 0.66,
    ...instrumentContent("JPMorgan Chase & Co.", "JPM", "Financials"),
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil Corporation",
    sector: "Energy",
    price: 118.64,
    dailyChange: -0.73,
    dailyChangePercent: -0.61,
    ...instrumentContent("Exxon Mobil Corporation", "XOM", "Energy"),
  },
  {
    symbol: "JNJ",
    name: "Johnson & Johnson",
    sector: "Healthcare",
    price: 167.92,
    dailyChange: 0.48,
    dailyChangePercent: 0.29,
    ...instrumentContent("Johnson & Johnson", "JNJ", "Healthcare"),
  },
];
