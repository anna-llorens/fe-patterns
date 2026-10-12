import { getDefaultUser } from "../users/user.repository.js";

type LogUser = { id: string; email: string };

let logUser: LogUser | null = null;

export async function initLogUser(): Promise<void> {
  try {
    const user = await getDefaultUser();
    logUser = { id: user.id, email: user.email };
  } catch {
    logUser = null;
  }
}

function userLabel(): string {
  if (!logUser) return "user=?";
  return `user=${logUser.email} id=${logUser.id.slice(0, 8)}`;
}

const reset = "\x1b[0m";
const dim = "\x1b[2m";
const gray = "\x1b[90m";
const cyan = "\x1b[36m";
const green = "\x1b[32m";
const yellow = "\x1b[33m";
const red = "\x1b[31m";
const magenta = "\x1b[35m";
const blue = "\x1b[34m";

function colorsEnabled(): boolean {
  return (
    process.env.NO_COLOR === undefined &&
    process.stdout.isTTY === true &&
    process.env.NODE_ENV !== "test"
  );
}

function paint(code: string, text: string): string {
  return colorsEnabled() ? `${code}${text}${reset}` : text;
}

export function formatLocalTime(date = new Date()): string {
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

function methodColor(method: string): string {
  switch (method) {
    case "GET":
    case "HEAD":
      return green;
    case "POST":
      return yellow;
    case "DELETE":
      return red;
    case "PUT":
    case "PATCH":
      return blue;
    default:
      return cyan;
  }
}

function statusColor(status: number): string {
  if (status >= 500) return red;
  if (status >= 400) return yellow;
  if (status >= 300) return cyan;
  return green;
}

export function formatRequestLogLine(input: {
  method: string;
  url: string;
  status: number;
  durationMs: number;
  suffix?: string;
}): string {
  const time = paint(gray, formatLocalTime());
  const user = paint(magenta, userLabel());
  const method = paint(methodColor(input.method), input.method);
  const status = paint(statusColor(input.status), String(input.status));
  const duration = paint(dim, `${input.durationMs}ms`);
  const suffix = input.suffix ?? "";

  return `${time} ${user} ${method} ${input.url} → ${status} ${duration}${suffix}`;
}

export function formatMessageLogLine(message: string): string {
  const time = paint(gray, formatLocalTime());
  return `${time} ${message}`;
}

export function formatErrorLogLine(route: string, kind: string): string {
  const time = paint(gray, formatLocalTime());
  const user = paint(magenta, userLabel());
  const label = paint(red, kind);
  return `${time} ${user} ${label} ${route}`;
}
