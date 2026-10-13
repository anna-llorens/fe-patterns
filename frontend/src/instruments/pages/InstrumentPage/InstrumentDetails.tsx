import { WatchlistStarButton } from "@/watchlist/components/WatchlistStarButton";
import { InstrumentIdentity } from "@/instruments/components/InstrumentIdentity";
import { PriceBlock } from "@/instruments/components/PriceBlock";
import { PriceChart } from "@/instruments/components/PriceChart";
import type { InstrumentDetail } from "@/instruments/model/Instrument";
import { InstrumentStats } from "./InstrumentStats";
import { InstrumentTabs } from "./InstrumentTabs";

type InstrumentDetailsProps = {
  instrument: InstrumentDetail;
};

export function InstrumentDetails({ instrument }: InstrumentDetailsProps) {
  return (
    <>
      <header className="instrument-header">
        <InstrumentIdentity instrument={instrument} />

        <div className="instrument-actions">
          <WatchlistStarButton
            instrumentId={instrument.id}
            variant="header"
          />
        </div>
      </header>

      <PriceBlock quote={instrument.quote} />

      <PriceChart
        priceHistory={instrument.priceHistory}
        positive={instrument.quote.change >= 0}
      />

      <InstrumentStats instrument={instrument} />

      <InstrumentTabs instrument={instrument} />
    </>
  );
}
