import type { Request, Response, NextFunction } from "express";
import {
  addWatchlistInstrumentBodySchema,
  watchlistInstrumentParamSchema,
} from "./watchlist.schemas.js";
import { sendInstrumentServiceError } from "../instruments/instrumentHttpErrors.js";
import type { WatchlistService } from "./watchlist.service.js";
import { WatchlistError } from "./watchlist.service.js";

export function createWatchlistController(service: WatchlistService) {
  return {
    async getMetadata(_req: Request, res: Response, next: NextFunction) {
      try {
        res.json(await service.getMetadata());
      } catch (error) {
        next(error);
      }
    },

    async listInstruments(_req: Request, res: Response, next: NextFunction) {
      try {
        res.json(await service.listInstruments());
      } catch (error) {
        if (sendInstrumentServiceError(res, error)) {
          return;
        }
        next(error);
      }
    },

    async addInstrument(req: Request, res: Response, next: NextFunction) {
      try {
        const body = addWatchlistInstrumentBodySchema.parse(req.body);
        const result = await service.addInstrument(body.instrumentId);
        if (result.created) {
          res.status(201).json({ ok: true });
          return;
        }
        res.status(200).json({ ok: true, alreadyExists: true });
      } catch (error) {
        if (error instanceof WatchlistError) {
          res.status(error.statusCode).json({ error: error.message });
          return;
        }
        next(error);
      }
    },

    async removeInstrument(req: Request, res: Response, next: NextFunction) {
      try {
        const { instrumentId } = watchlistInstrumentParamSchema.parse(
          req.params,
        );
        await service.removeInstrument(instrumentId);
        res.status(204).send();
      } catch (error) {
        if (error instanceof WatchlistError) {
          res.status(error.statusCode).json({ error: error.message });
          return;
        }
        next(error);
      }
    },
  };
}
