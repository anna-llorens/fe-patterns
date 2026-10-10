import { InstrumentIcon } from "@/instruments/components/InstrumentIcon";
import type { InstrumentDetail } from "@/instruments/model/Instrument";

type InstrumentIdentityProps = {
  instrument: Pick<
    InstrumentDetail,
    "symbol" | "name" | "exchange" | "currency" | "about"
  >;
};

export function InstrumentIdentity({ instrument }: InstrumentIdentityProps) {
  return (
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
          {instrument.exchange} · {instrument.currency} ·{" "}
          {instrument.about.sector}
        </p>
      </div>
    </div>
  );
}
