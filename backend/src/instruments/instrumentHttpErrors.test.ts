import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  AmbiguousInstrumentSymbolError,
  MarketDataUnavailableError,
} from "./instrument.errors.js";
import { sendInstrumentServiceError } from "./instrumentHttpErrors.js";

function mockResponse() {
  let statusCode = 0;
  let body: unknown;
  const res = {
    status(code: number) {
      statusCode = code;
      return res;
    },
    json(payload: unknown) {
      body = payload;
      return res;
    },
  };
  return {
    res,
    getStatusCode: () => statusCode,
    getBody: () => body,
  };
}

describe("sendInstrumentServiceError", () => {
  it("maps AmbiguousInstrumentSymbolError to 409", () => {
    const mock = mockResponse();
    const handled = sendInstrumentServiceError(
      mock.res as never,
      new AmbiguousInstrumentSymbolError("ABC"),
    );
    assert.equal(handled, true);
    assert.equal(mock.getStatusCode(), 409);
    assert.deepEqual(mock.getBody(), {
      error: "Ambiguous symbol",
      symbol: "ABC",
    });
  });

  it("maps MarketDataUnavailableError to 502", () => {
    const mock = mockResponse();
    const handled = sendInstrumentServiceError(
      mock.res as never,
      new MarketDataUnavailableError("mock", "AAPL"),
    );
    assert.equal(handled, true);
    assert.equal(mock.getStatusCode(), 502);
    assert.deepEqual(mock.getBody(), { error: "Market data unavailable" });
  });
});
