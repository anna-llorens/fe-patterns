import type { NextFunction, Request, Response } from "express";
import { formatRequestLogLine } from "../logging/log.js";

const MUTATING_METHODS = new Set(["POST", "PUT", "PATCH", "DELETE"]);

function logSuffix(req: Request): string {
  const parts: string[] = [];

  if (MUTATING_METHODS.has(req.method)) {
    const body = req.body;
    if (body !== undefined && body !== null && typeof body === "object") {
      const keys = Object.keys(body as object);
      if (keys.length > 0) {
        parts.push(`body=${JSON.stringify(body)}`);
      }
    }
  }

  const contentLength = req.headers["content-length"];
  if (contentLength && !parts.some((part) => part.startsWith("body="))) {
    parts.push(`content-length=${contentLength}`);
  }

  return parts.length > 0 ? ` ${parts.join(" ")}` : "";
}

export function requestLogger(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (process.env.NODE_ENV === "test") {
    next();
    return;
  }

  const start = Date.now();
  res.on("finish", () => {
    const durationMs = Date.now() - start;
    console.log(
      formatRequestLogLine({
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        durationMs,
        suffix: logSuffix(req),
      }),
    );
  });
  next();
}
