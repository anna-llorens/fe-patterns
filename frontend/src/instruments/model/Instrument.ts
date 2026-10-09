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

export type InstrumentDetail = Instrument & {
  exchange: string;
  marketCap: string;
  peRatio: number;
  dividendYield: number;
  week52High: number;
  week52Low: number;
  volume: string;
};
  