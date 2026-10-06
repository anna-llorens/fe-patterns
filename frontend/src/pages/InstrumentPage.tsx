import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PriceChart } from "@/components/PriceChart";
import {
    getInstrumentDetail,
    getPriceHistory,
} from "@/data/instruments";
import { useInstruments } from "@/instruments/InstrumentsContext";
import { Button } from "@/components/Button";
import { InstrumentIcon } from "@/components/InstrumentIcon";
import { WatchlistStarButton } from "@/components/WatchlistStarButton";
import "@/instrument-page.css";

const RANGES = ["1D", "1W", "1M", "3M", "1Y", "5Y", "ALL"] as const;
const TABS = ["Overview", "News", "Key Stats", "About"] as const;

export const InstrumentPage = () => {
    const { symbol = "" } = useParams();
    const { instruments, loading } = useInstruments();
    const instrument = getInstrumentDetail(instruments, symbol);
    const [range, setRange] = useState<(typeof RANGES)[number]>("1M");
    const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");
    const [expanded, setExpanded] = useState(false);

    const prices = useMemo(
        () =>
            instrument
                ? getPriceHistory(instrument.symbol, range, instrument.price)
                : [],
        [instrument, range],
    );

    if (loading) {
        return (
            <div className="instrument-page">
                <div className="instrument-page-content instrument-not-found">
                    <p>Loading…</p>
                </div>
            </div>
        );
    }

    if (!instrument) {
        return (
            <div className="instrument-page">
                <div className="instrument-page-content instrument-not-found">
                    <p>Instrument not found.</p>
                    <Link to="/">Back to search</Link>
                </div>
            </div>
        );
    }

    const positive = instrument.dailyChange >= 0;

    return (
        <div className="instrument-page">
            <div className="instrument-page-content">
                {/* <Link to="/" className="instrument-back">
        ← Back to search results
      </Link> */}

                <header className="instrument-header">
                    <div className="instrument-identity">
                        <InstrumentIcon
                            symbol={instrument.symbol}
                            size="detail"
                            tone="detail"
                        />
                        <div>
                            <h1 className="instrument-title">{instrument.symbol}</h1>
                            <p className="instrument-subtitle">{instrument.name}</p>
                            <p className="instrument-meta">
                                {instrument.exchange} · USD · {instrument.sector}
                            </p>
                        </div>
                    </div>
                    <div className="instrument-actions">
                        <WatchlistStarButton
                            symbol={instrument.symbol}
                            variant="header"
                        />
                    </div>
                </header>

                <div className="instrument-price-block">
                    <p className="instrument-price">${instrument.price.toFixed(2)}</p>
                    <p className={`instrument-change ${positive ? "positive" : "negative"}`}>
                        {positive ? "+" : ""}
                        {instrument.dailyChange.toFixed(2)} ({positive ? "+" : ""}
                        {instrument.dailyChangePercent.toFixed(2)}%)
                    </p>
                </div>

                <div className="instrument-ranges">
                    {RANGES.map((r) => (
                        <Button
                            key={r}
                            variant="pill"
                            active={range === r}
                            onClick={() => setRange(r)}
                        >
                            {r}
                        </Button>
                    ))}
                </div>

                <PriceChart prices={prices} positive={positive} />

                <div className="instrument-stats">
                    <div className="stat-card">
                        <p className="stat-label">Market Cap</p>
                        <p className="stat-value">{instrument.marketCap}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">P/E Ratio</p>
                        <p className="stat-value">{instrument.peRatio.toFixed(1)}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Dividend Yield</p>
                        <p className="stat-value">{instrument.dividendYield.toFixed(2)}%</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">52W High</p>
                        <p className="stat-value">{instrument.week52High.toFixed(2)}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">52W Low</p>
                        <p className="stat-value">{instrument.week52Low.toFixed(2)}</p>
                    </div>
                    <div className="stat-card">
                        <p className="stat-label">Volume</p>
                        <p className="stat-value">{instrument.volume}</p>
                    </div>
                </div>

                <div className="instrument-tabs">
                    {TABS.map((t) => (
                        <Button
                            key={t}
                            variant="tab"
                            active={tab === t}
                            onClick={() => setTab(t)}
                        >
                            {t}
                        </Button>
                    ))}
                </div>

                {tab === "Overview" && (
                    <>
                        <p className="instrument-overview">
                            {expanded
                                ? instrument.overview
                                : `${instrument.overview.slice(0, 120)}…`}
                        </p>
                        <Button
                            variant="ghost"
                            onClick={() => setExpanded((v) => !v)}
                        >
                            {expanded ? "Show less" : "Show more ⌄"}
                        </Button>
                    </>
                )}
                {tab !== "Overview" && (
                    <p className="instrument-overview">Demo content for {tab}.</p>
                )}
            </div>
        </div>
    );
};
