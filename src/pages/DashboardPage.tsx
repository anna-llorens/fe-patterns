import { InstrumentListItem } from "@/components/InstrumentListItem";
import { LayoutPage, LayoutPageSection } from "@/components/LayoutPage";
import { instruments } from "@/data/instruments";

export const DashboardPage = () => {
  return (
    <LayoutPage>
      <LayoutPageSection title="Trending">
        <div className="instrument-list card">
          {instruments.map((instrument) => (
            <InstrumentListItem
              key={instrument.symbol}
              instrument={instrument}
              showSector
            />
          ))}
        </div>
      </LayoutPageSection>
    </LayoutPage>
  );
};
