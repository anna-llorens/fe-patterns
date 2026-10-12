import type { InstrumentSummary } from "@/instruments/model/Instrument";
import { InstrumentListItem } from "./InstrumentListItem";

type InstrumentListProps = {
  instruments: InstrumentSummary[];
  showSector?: boolean;
};

export function InstrumentList({
  instruments,
  showSector = false,
}: InstrumentListProps) {
  return (
    <div className="instrument-list card">
      {instruments.map((instrument) => (
        <InstrumentListItem
          key={instrument.id}
          instrument={instrument}
          showSector={showSector}
        />
      ))}
    </div>
  );
}
