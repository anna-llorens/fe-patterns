import cors from "cors";
import express from "express";
import { createMarketDataProvider } from "./market-data/index.js";
import { createInstrumentRouter } from "./instruments/instrument.routes.js";
import { createInstrumentService } from "./instruments/instrument.service.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { createWatchlistRouter } from "./watchlists/watchlist.routes.js";
import { createWatchlistService } from "./watchlists/watchlist.service.js";

export function createApp() {
  const app = express();
  const marketData = createMarketDataProvider();
  const instrumentService = createInstrumentService(marketData);
  const watchlistService = createWatchlistService(marketData);

  app.use(cors());
  app.use(express.json());

  app.use("/api/instruments", createInstrumentRouter(instrumentService));
  app.use("/api/watchlist", createWatchlistRouter(watchlistService));

  app.use(errorHandler);

  return app;
}
