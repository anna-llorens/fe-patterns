function env(name: "API_URL"): string | undefined {
  if (name === "API_URL") {
    return import.meta.env.VITE_API_URL;
  }
  return undefined;
}

const apiConfig = {
  baseUrls: {
    api: (env("API_URL") ?? "").replace(/\/$/, ""),
  },
  endpoints: {
    instrument: "/api/instruments/:symbol",
    instruments: "/api/instruments",
    watchlistInstrument: "/api/watchlist/instruments/:instrumentId",
    watchlistInstruments: "/api/watchlist/instruments",
  },
} as const;

export type ApiEndpoint = keyof typeof apiConfig.endpoints;

type EndpointParams = {
  instrument: { symbol: string };
  instruments: never;
  watchlistInstrument: { instrumentId: string };
  watchlistInstruments: never;
};

export function urlFor<E extends ApiEndpoint>(
  endpoint: E,
  ...params: EndpointParams[E] extends never
    ? []
    : [params: EndpointParams[E]]
): string {
  let path: string = apiConfig.endpoints[endpoint];
  const replacements = params[0];
  if (replacements) {
    for (const [key, value] of Object.entries(replacements)) {
      path = path.replace(`:${key}`, encodeURIComponent(String(value)));
    }
  }
  return `${apiConfig.baseUrls.api}${path}`;
}

export default apiConfig;
