import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Instrument } from "@/instruments/model/Instrument";

type InstrumentsContextValue = {
  instruments: Instrument[];
  loading: boolean;
  error: string | null;
};

const InstrumentsContext = createContext<InstrumentsContextValue | null>(null);

export function InstrumentsProvider({ children }: { children: ReactNode }) {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/instruments")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Instrument[]>;
      })
      .then((data) => {
        if (!cancelled) setInstruments(data);
      })
      .catch((e: unknown) => {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to load instruments");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <InstrumentsContext.Provider value={{ instruments, loading, error }}>
      {children}
    </InstrumentsContext.Provider>
  );
}

export function useInstruments() {
  const ctx = useContext(InstrumentsContext);
  if (!ctx) {
    throw new Error("useInstruments must be used within InstrumentsProvider");
  }
  return ctx;
}
