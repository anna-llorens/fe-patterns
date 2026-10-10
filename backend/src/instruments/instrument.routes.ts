import { Router } from "express";
import { createInstrumentController } from "./instrument.controller.js";
import type { InstrumentService } from "./instrument.service.js";

export function createInstrumentRouter(service: InstrumentService): Router {
  const router = Router();
  const controller = createInstrumentController(service);

  router.get("/", controller.list.bind(controller));
  router.get("/:symbol", controller.getBySymbol.bind(controller));

  return router;
}
