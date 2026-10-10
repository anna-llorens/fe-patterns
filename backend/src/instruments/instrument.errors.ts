export class InstrumentNotFoundError extends Error {
  constructor(public readonly symbol: string) {
    super("Instrument not found");
    this.name = "InstrumentNotFoundError";
  }
}

export class AmbiguousInstrumentSymbolError extends Error {
  constructor(public readonly symbol: string) {
    super("Ambiguous symbol");
    this.name = "AmbiguousInstrumentSymbolError";
  }
}

export class MarketDataUnavailableError extends Error {
  constructor(
    public readonly provider: string,
    public readonly providerInstrumentId: string,
  ) {
    super("Market data unavailable");
    this.name = "MarketDataUnavailableError";
  }
}
