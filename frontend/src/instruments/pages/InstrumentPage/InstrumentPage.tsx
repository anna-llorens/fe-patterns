import { useParams } from "react-router-dom";
import { useInstrument } from "@/instruments/hooks/useInstrument";
import "@/css/instrument-page.css";
import { InstrumentDetails } from "./InstrumentDetails";

export const InstrumentPage = () => {
  const { symbol = "" } = useParams();
  const { data: instrument, isLoading, error } = useInstrument(symbol);

  if (isLoading) {
    return (
      <div className="instrument-page">
        <div className="instrument-page-content instrument-not-found">
          <p>Loading…</p>
        </div>
      </div>
    );
  }

  if (error || !instrument) {
    return (
      <div className="instrument-page">
        <div className="instrument-page-content instrument-not-found">
          <p>{error?.message ?? "Instrument not found"}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="instrument-page">
      <div className="instrument-page-content">
        <InstrumentDetails instrument={instrument} />
      </div>
    </div>
  );
};
