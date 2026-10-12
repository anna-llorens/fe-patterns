import { InstrumentListItem } from "@/instruments/components/InstrumentListItem";
import { LayoutPage } from "@/components/layouts/LayoutPage";
import { LayoutPageSection } from "@/components/layouts/LayoutPageSection";
import { useInstruments } from "@/instruments/hooks/useInstruments";

export const DashboardPage = () => {
  const { data: instruments = [], isLoading, error } = useInstruments();

  return (
    <LayoutPage>
      <LayoutPageSection title="Trending">
        {error ? (
          <p className="layout-page-muted">{error.message}</p>
        ) : isLoading ? (
          <p className="layout-page-muted">Loading…</p>
        ) : (
          <div className="instrument-list card">
            {instruments.map((instrument) => (
              <InstrumentListItem
                key={instrument.symbol}
                instrument={instrument}
                showSector
              />
            ))}
          </div>
        )}
      </LayoutPageSection>
    </LayoutPage>
  );
};
