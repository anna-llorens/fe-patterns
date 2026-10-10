import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import {
  instrumentDetailSchema,
  instrumentListResponseSchema,
} from "@fe-patterns/api-contracts";
import request from "supertest";
import { prisma } from "./database/prisma.js";
import { createApp } from "./app.js";

const hasDatabase = Boolean(process.env.DATABASE_URL);

describe("HTTP API", { skip: !hasDatabase && "DATABASE_URL not set" }, () => {
  const app = createApp();
  let sampleInstrumentId: string;

  before(async () => {
    const instrument = await prisma.instrument.findFirst({
      where: { symbol: "AAPL" },
    });
    assert.ok(instrument);
    sampleInstrumentId = instrument.id;
  });

  after(async () => {
    await prisma.$disconnect();
  });

  it("GET /api/instruments returns instrument catalog", async () => {
    const response = await request(app).get("/api/instruments");
    assert.equal(response.status, 200);
    assert.doesNotThrow(() =>
      instrumentListResponseSchema.parse(response.body),
    );
    assert.ok(response.body.length >= 10);
  });

  it("GET /api/instruments/:symbol returns detail or 404", async () => {
    const ok = await request(app).get("/api/instruments/AAPL");
    assert.equal(ok.status, 200);
    assert.doesNotThrow(() => instrumentDetailSchema.parse(ok.body));
    assert.equal(ok.body.symbol, "AAPL");

    const missing = await request(app).get("/api/instruments/NOTREAL");
    assert.equal(missing.status, 404);
  });

  it("GET /api/watchlist/instruments returns seeded items", async () => {
    const response = await request(app).get("/api/watchlist/instruments");
    assert.equal(response.status, 200);
    assert.doesNotThrow(() =>
      instrumentListResponseSchema.parse(response.body),
    );
    assert.ok(response.body.some((row: { symbol: string }) => row.symbol === "AAPL"));
  });

  it("POST and DELETE /api/watchlist/instruments", async () => {
    const jpm = await prisma.instrument.findFirst({ where: { symbol: "JPM" } });
    assert.ok(jpm);

    const add = await request(app)
      .post("/api/watchlist/instruments")
      .send({ instrumentId: jpm.id });
    assert.ok(add.status === 201 || add.status === 200);

    const duplicate = await request(app)
      .post("/api/watchlist/instruments")
      .send({ instrumentId: jpm.id });
    assert.equal(duplicate.status, 200);
    assert.equal(duplicate.body.alreadyExists, true);

    const remove = await request(app).delete(
      `/api/watchlist/instruments/${jpm.id}`,
    );
    assert.equal(remove.status, 204);

    const removeAgain = await request(app).delete(
      `/api/watchlist/instruments/${jpm.id}`,
    );
    assert.equal(removeAgain.status, 204);

    await request(app)
      .post("/api/watchlist/instruments")
      .send({ instrumentId: jpm.id });
  });

  it("POST /api/watchlist/instruments rejects unknown instrument", async () => {
    const response = await request(app)
      .post("/api/watchlist/instruments")
      .send({ instrumentId: "00000000-0000-4000-8000-000000000000" });
    assert.equal(response.status, 404);
  });

  it("uses sample instrument id from seed", async () => {
    assert.ok(sampleInstrumentId);
  });
});
