import type { Quote } from "@/instruments/model/Instrument";

type PriceBlockProps = {
  quote: Quote;
};

export function PriceBlock({ quote }: PriceBlockProps) {
  const positive = quote.change >= 0;

  return (
    <div className="instrument-price-block">
      <p className="instrument-price">${quote.currentPrice.toFixed(2)}</p>
      <p className={`instrument-change ${positive ? "positive" : "negative"}`}>
        {positive ? "+" : ""}
        {quote.change.toFixed(2)} ({positive ? "+" : ""}
        {quote.changePercent.toFixed(2)}%)
      </p>
    </div>
  );
}
