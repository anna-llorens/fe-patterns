import { InstrumentList } from "@/instruments/components/InstrumentList";
import { LayoutPage } from "@/components/layouts/LayoutPage";
import { LayoutPageSection } from "@/components/layouts/LayoutPageSection";
import { QueryContent } from "@/components/layouts/QueryContent";
import { useInstruments } from "@/instruments/hooks/useInstruments";

export const DashboardPage = () => {
  const {
    data: instruments = [],
    isPending,
    error,
    refetch,
  } = useInstruments();

  return (
    <LayoutPage>
      <LayoutPageSection title="Trending">
        <QueryContent
          isPending={isPending}
          error={error}
          onRetry={() => refetch()}
        >
          <InstrumentList instruments={instruments} showSector />
        </QueryContent>
      </LayoutPageSection>
    </LayoutPage>
  );
};
