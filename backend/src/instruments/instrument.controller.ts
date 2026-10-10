import type { Request, Response, NextFunction } from "express";
import { symbolParamSchema } from "./instrument.schemas.js";
import type { InstrumentService } from "./instrument.service.js";
import { sendInstrumentServiceError } from "./instrumentHttpErrors.js";

export function createInstrumentController(service: InstrumentService) {
  return {
    async list(_req: Request, res: Response, next: NextFunction) {
      try {
        res.json(await service.listLocalCatalog());
      } catch (error) {
        if (sendInstrumentServiceError(res, error)) {
          return;
        }
        next(error);
      }
    },

    async getBySymbol(req: Request, res: Response, next: NextFunction) {
      try {
        const { symbol } = symbolParamSchema.parse(req.params);
        res.json(await service.getBySymbol(symbol));
      } catch (error) {
        if (sendInstrumentServiceError(res, error)) {
          return;
        }
        next(error);
      }
    },
  };
}
