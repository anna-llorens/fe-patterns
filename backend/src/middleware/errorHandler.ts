import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { formatErrorLogLine } from "../logging/log.js";

export function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const route = `${req.method} ${req.originalUrl}`;

  if (error instanceof ZodError) {
    console.warn(formatErrorLogLine(route, "400 validation"), error.flatten());
    res.status(400).json({ error: "Invalid request", details: error.flatten() });
    return;
  }
  console.error(formatErrorLogLine(route, "500"), error);
  res.status(500).json({ error: "Internal server error" });
}
