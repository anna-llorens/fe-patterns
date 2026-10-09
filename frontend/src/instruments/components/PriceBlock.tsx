import type { Instrument } from "@/instruments/model/Instrument";

type PriceBlockProps = {
  instrument: Pick<Instrument, "price" | "dailyChange" | "dailyChangePercent">;
};

export function PriceBlock({ instrument }: PriceBlockProps) {
  const positive = instrument.dailyChange >= 0;

  return (
    <div className="instrument-price-block">
      <p className="instrument-price">${instrument.price.toFixed(2)}</p>
      <p className={`instrument-change ${positive ? "positive" : "negative"}`}>
        {positive ? "+" : ""}
        {instrument.dailyChange.toFixed(2)} ({positive ? "+" : ""}
        {instrument.dailyChangePercent.toFixed(2)}%)
      </p>
    </div>
  );
}
