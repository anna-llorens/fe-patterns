import { Link } from "react-router-dom";
import type { InstrumentSummary } from "@/instruments/model/Instrument";
import { InstrumentIcon } from "@/instruments/components/InstrumentIcon";
import { WatchlistStarButton } from "@/components/WatchlistStarButton";
import "@/css/instrument-list-item.css";

type InstrumentListItemProps = {
  instrument: InstrumentSummary;
  showSector?: boolean;
  onNavigate?: () => void;
  /** Dark dropdown styling in search panel */
  variant?: "list" | "search";
};

export const InstrumentListItem = ({
  instrument,
  showSector = false,
  onNavigate,
  variant = "list",
}: InstrumentListItemProps) => {
  const { quote } = instrument;
  const positive = quote.changePercent >= 0;

  return (
    <div
      className={`instrument-list-item instrument-list-item--${variant}${
        showSector ? " instrument-list-item--with-sector" : ""
      }`}
    >
      <Link
        to={`/instruments/${instrument.symbol}`}
        className="instrument-list-item-link"
        onClick={onNavigate}
      >
        <InstrumentIcon
          symbol={instrument.symbol}
          tone={variant === "search" ? "search" : "default"}
        />
        <span className="instrument-list-item-text">
          <span className="instrument-list-item-symbol">{instrument.symbol}</span>
          <span className="instrument-list-item-name">{instrument.name}</span>
        </span>
        {showSector && (
          <span className="instrument-list-item-sector">
            {instrument.exchange}
          </span>
        )}
        <span className="instrument-list-item-quote">
          <span className="instrument-list-item-price">
            ${quote.currentPrice.toFixed(2)}
          </span>
          <span className={positive ? "positive" : "negative"}>
            {positive ? "+" : ""}
            {quote.changePercent.toFixed(2)}%
          </span>
        </span>
      </Link>
      <WatchlistStarButton
        instrumentId={instrument.id}
        symbol={instrument.symbol}
      />
    </div>
  );
};
