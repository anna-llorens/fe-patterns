import { Router } from "express";
import { createWatchlistController } from "./watchlist.controller.js";
import type { WatchlistService } from "./watchlist.service.js";

export function createWatchlistRouter(service: WatchlistService): Router {
  const router = Router();
  const controller = createWatchlistController(service);

  router.get("/", controller.getMetadata.bind(controller));
  router.get("/instruments", controller.listInstruments.bind(controller));
  router.post("/instruments", controller.addInstrument.bind(controller));
  router.delete(
    "/instruments/:instrumentId",
    controller.removeInstrument.bind(controller),
  );

  return router;
}
