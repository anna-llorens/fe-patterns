import { useParams } from "react-router-dom";
import { QueryContent } from "@/components/layouts/QueryContent";
import { LayoutPageFeedback } from "@/components/layouts/LayoutPageFeedback";
import { useInstrument } from "@/instruments/hooks/useInstrument";
import "@/css/instrument-page.css";
import { InstrumentDetails } from "./InstrumentDetails";

export const InstrumentPage = () => {
  const { symbol = "" } = useParams();
  const {
    data: instrument,
    isPending,
    error,
    refetch,
  } = useInstrument(symbol);

  return (
    <div className="instrument-page">
      <div className="instrument-page-content">
        <QueryContent
          isPending={isPending}
          error={error}
          onRetry={() => refetch()}
        >
          {!instrument ? (
            <LayoutPageFeedback
              variant="empty"
              title="Instrument not found"
              message={`No instrument was found for "${symbol}".`}
            />
          ) : (
            <InstrumentDetails instrument={instrument} />
          )}
        </QueryContent>
      </div>
    </div>
  );
};
