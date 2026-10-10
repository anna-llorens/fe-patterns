import type { Response } from "express";
import {
  AmbiguousInstrumentSymbolError,
  InstrumentNotFoundError,
  MarketDataUnavailableError,
} from "./instrument.errors.js";

export function sendInstrumentServiceError(
  res: Response,
  error: unknown,
): boolean {
  if (error instanceof InstrumentNotFoundError) {
    res.status(404).json({ error: "Instrument not found" });
    return true;
  }
  if (error instanceof AmbiguousInstrumentSymbolError) {
    res.status(409).json({ error: "Ambiguous symbol", symbol: error.symbol });
    return true;
  }
  if (error instanceof MarketDataUnavailableError) {
    res.status(502).json({ error: "Market data unavailable" });
    return true;
  }
  return false;
}
