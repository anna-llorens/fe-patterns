function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const config = {
  port: Number(process.env.PORT) || 3001,
  databaseUrl: process.env.DATABASE_URL,
  defaultUserEmail: process.env.DEFAULT_USER_EMAIL ?? "demo@local.dev",
  marketDataProvider: process.env.MARKET_DATA_PROVIDER ?? "mock",
};

export function assertDatabaseConfigured(): void {
  required("DATABASE_URL");
}
