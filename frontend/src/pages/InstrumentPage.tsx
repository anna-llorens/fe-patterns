import { useState } from "react";
import { useParams } from "react-router-dom";
import { PriceChart } from "@/instruments/components/PriceChart";
import {
    getInstrumentDetail,
} from "@/data/instruments";
import { useInstruments } from "@/instruments/InstrumentsContext";
import { ExpandableText } from "@/components/ExpandableText";
import { Tabs } from "@/components/Tabs";
import { InstrumentIdentity } from "@/instruments/components/InstrumentIdentity";
import { PriceBlock } from "@/instruments/components/PriceBlock";
import { StatCard } from "@/instruments/components/StatCard";
import { WatchlistStarButton } from "@/components/WatchlistStarButton";
import "@/instrument-page.css";
import type { InstrumentDetail } from "@/instruments/model/Instrument";

const TABS = ["Overview", "News", "Key Stats", "About"] as const;

const TAB_FIELD = {
  Overview: "overview",
  News: "news",
  "Key Stats": "keyStats",
  About: "about",
} as const;

const STATS: {
  label: string;
  getValue: (instrument: InstrumentDetail) => string;
}[] = [
  { label: "Market Cap", getValue: (i) => i.marketCap },
  { label: "P/E Ratio", getValue: (i) => i.peRatio.toFixed(1) },
  {
    label: "Dividend Yield",
    getValue: (i) => `${i.dividendYield.toFixed(2)}%`,
  },
  { label: "52W High", getValue: (i) => i.week52High.toFixed(2) },
  { label: "52W Low", getValue: (i) => i.week52Low.toFixed(2) },
  { label: "Volume", getValue: (i) => i.volume },
];

export const InstrumentPage = () => {
    const { symbol = "" } = useParams();
    const { instruments, loading } = useInstruments();

    const instrument = getInstrumentDetail(instruments, symbol);

    const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");

    // Loading state
    if (loading) {
        return (
            <div className="instrument-page">
                <div className="instrument-page-content instrument-not-found">
                    <p>Loading…</p>
                </div>
            </div>
        );
    }

    const positive = instrument.dailyChange >= 0;

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

                <PriceBlock instrument={instrument} />

                <PriceChart
                    symbol={instrument.symbol}
                    price={instrument.price}
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
                    text={instrument[TAB_FIELD[tab]]}
                />
            </div>
        </div>
    );
};
