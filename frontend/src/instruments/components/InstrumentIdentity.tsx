import { InstrumentIcon } from "@/instruments/components/InstrumentIcon";
import type { InstrumentDetail } from "@/instruments/model/Instrument";

type InstrumentIdentityProps = {
  instrument: Pick<
    InstrumentDetail,
    "symbol" | "name" | "exchange" | "sector"
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
          {instrument.exchange} · USD · {instrument.sector}
        </p>
      </div>
    </div>
  );
}
