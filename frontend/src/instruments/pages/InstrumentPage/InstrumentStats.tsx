import { StatCard } from "@/instruments/components/StatCard";
import type { InstrumentDetail } from "@/instruments/model/Instrument";
import {
  formatMarketCap,
  formatVolume,
} from "@/instruments/utils/instrumentFormatters";

type InstrumentStatsProps = {
  instrument: InstrumentDetail;
};

const stats = [
  {
    label: "Market Cap",
    getValue: (instrument: InstrumentDetail) =>
      formatMarketCap(instrument.keyStats.marketCap),
  },
  {
    label: "P/E Ratio",
    getValue: (instrument: InstrumentDetail) =>
      instrument.keyStats.peRatio?.toFixed(1) ?? "—",
  },
  {
    label: "Dividend Yield",
    getValue: (instrument: InstrumentDetail) =>
      instrument.keyStats.dividendYield != null
        ? `${instrument.keyStats.dividendYield.toFixed(2)}%`
        : "—",
  },
  {
    label: "52W High",
    getValue: (instrument: InstrumentDetail) =>
      instrument.keyStats.fiftyTwoWeekHigh.toFixed(2),
  },
  {
    label: "52W Low",
    getValue: (instrument: InstrumentDetail) =>
      instrument.keyStats.fiftyTwoWeekLow.toFixed(2),
  },
  {
    label: "Volume",
    getValue: (instrument: InstrumentDetail) =>
      formatVolume(instrument.quote.volume),
  },
] satisfies Array<{
  label: string;
  getValue: (instrument: InstrumentDetail) => string;
}>;

export function InstrumentStats({ instrument }: InstrumentStatsProps) {
  return (
    <div className="instrument-stats">
      {stats.map(({ label, getValue }) => (
        <StatCard key={label} label={label} value={getValue(instrument)} />
      ))}
    </div>
  );
}
