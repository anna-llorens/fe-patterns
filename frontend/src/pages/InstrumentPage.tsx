import { useState } from "react";
import { useParams } from "react-router-dom";
import { PriceChart } from "@/instruments/components/PriceChart";
import { useInstrument } from "@/instruments/hooks/useInstrument";
import { ExpandableText } from "@/components/ExpandableText";
import { Tabs } from "@/components/Tabs";
import { InstrumentIdentity } from "@/instruments/components/InstrumentIdentity";
import { PriceBlock } from "@/instruments/components/PriceBlock";
import { StatCard } from "@/instruments/components/StatCard";
import { WatchlistStarButton } from "@/components/WatchlistStarButton";
import "@/css/instrument-page.css";
import type { InstrumentDetail } from "@/instruments/model/Instrument";

const TABS = ["Overview", "News", "Key Stats", "About"] as const;

function formatMarketCap(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
  return `$${value.toLocaleString()}`;
}

function formatVolume(value: number): string {
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  return value.toLocaleString();
}

function tabText(
  instrument: InstrumentDetail,
  tab: (typeof TABS)[number],
): string {
  switch (tab) {
    case "Overview":
      return instrument.overview;
    case "News":
      return instrument.news
        .map((n) => `${n.headline} — ${n.summary}`)
        .join("\n\n");
    case "Key Stats":
      return [
        `Market cap: ${formatMarketCap(instrument.keyStats.marketCap)}`,
        instrument.keyStats.peRatio != null &&
          `P/E: ${instrument.keyStats.peRatio.toFixed(1)}`,
        instrument.keyStats.eps != null &&
          `EPS: ${instrument.keyStats.eps.toFixed(2)}`,
        instrument.keyStats.dividendYield != null &&
          `Dividend yield: ${instrument.keyStats.dividendYield.toFixed(2)}%`,
        `52-week range: ${instrument.keyStats.fiftyTwoWeekLow.toFixed(2)} – ${instrument.keyStats.fiftyTwoWeekHigh.toFixed(2)}`,
        `Avg volume: ${formatVolume(instrument.keyStats.averageVolume)}`,
      ]
        .filter(Boolean)
        .join("\n");
    case "About":
      return instrument.about.description;
  }
}

const STATS: {
  label: string;
  getValue: (instrument: InstrumentDetail) => string;
}[] = [
  {
    label: "Market Cap",
    getValue: (i) => formatMarketCap(i.keyStats.marketCap),
  },
  {
    label: "P/E Ratio",
    getValue: (i) =>
      i.keyStats.peRatio != null ? i.keyStats.peRatio.toFixed(1) : "—",
  },
  {
    label: "Dividend Yield",
    getValue: (i) =>
      i.keyStats.dividendYield != null
        ? `${i.keyStats.dividendYield.toFixed(2)}%`
        : "—",
  },
  {
    label: "52W High",
    getValue: (i) => i.keyStats.fiftyTwoWeekHigh.toFixed(2),
  },
  {
    label: "52W Low",
    getValue: (i) => i.keyStats.fiftyTwoWeekLow.toFixed(2),
  },
  {
    label: "Volume",
    getValue: (i) => formatVolume(i.quote.volume),
  },
];

export const InstrumentPage = () => {
  const { symbol = "" } = useParams();
  const { data: instrument, isLoading, error } = useInstrument(symbol);

  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");

  if (isLoading) {
    return (
      <div className="instrument-page">
        <div className="instrument-page-content instrument-not-found">
          <p>Loading…</p>
        </div>
      </div>
    );
  }

  if (error || !instrument) {
    return (
      <div className="instrument-page">
        <div className="instrument-page-content instrument-not-found">
          <p>{error?.message ?? "Instrument not found"}</p>
        </div>
      </div>
    );
  }

  const positive = instrument.quote.change >= 0;

  return (
    <div className="instrument-page">
      <div className="instrument-page-content">
        <header className="instrument-header">
          <InstrumentIdentity instrument={instrument} />
          <div className="instrument-actions">
            <WatchlistStarButton
              symbol={instrument.symbol}
              variant="header"
            />
          </div>
        </header>

        <PriceBlock quote={instrument.quote} />

        <PriceChart
          symbol={instrument.symbol}
          price={instrument.quote.currentPrice}
          positive={positive}
        />

        <div className="instrument-stats">
          {STATS.map(({ label, getValue }) => (
            <StatCard
              key={label}
              label={label}
              value={getValue(instrument)}
            />
          ))}
        </div>

        <Tabs
          items={TABS}
          value={tab}
          onChange={setTab}
          aria-label="Instrument details"
        />
        <ExpandableText
          className="instrument-overview"
          text={tabText(instrument, tab)}
        />
      </div>
    </div>
  );
};
