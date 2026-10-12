import { useState } from "react";
import { ExpandableText } from "@/components/ExpandableText";
import { Tabs } from "@/components/Tabs";
import type { InstrumentDetail } from "@/instruments/model/Instrument";
import {
  formatMarketCap,
  formatVolume,
} from "@/instruments/utils/instrumentFormatters";

const TABS = ["Overview", "News", "Key Stats", "About"] as const;

type InstrumentTab = (typeof TABS)[number];

type InstrumentTabsProps = {
  instrument: InstrumentDetail;
};

function getTabText(instrument: InstrumentDetail, tab: InstrumentTab): string {
  switch (tab) {
    case "Overview":
      return instrument.overview;

    case "News":
      return instrument.news
        .map(({ headline, summary }) => `${headline} — ${summary}`)
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
        .filter((value): value is string => Boolean(value))
        .join("\n");

    case "About":
      return instrument.about.description;
  }
}

export function InstrumentTabs({ instrument }: InstrumentTabsProps) {
  const [selectedTab, setSelectedTab] = useState<InstrumentTab>("Overview");

  return (
    <>
      <Tabs
        items={TABS}
        value={selectedTab}
        onChange={setSelectedTab}
        aria-label="Instrument details"
      />

      <ExpandableText
        className="instrument-overview"
        text={getTabText(instrument, selectedTab)}
      />
    </>
  );
}
