import { AssetType, PrismaClient } from "@prisma/client";
import mockData from "../src/data/mock-instruments.json" with { type: "json" };

const prisma = new PrismaClient();

const DEFAULT_USER_EMAIL =
  process.env.DEFAULT_USER_EMAIL ?? "demo@local.dev";

const MOCK_PROVIDER = "mock";

function toAssetType(value: string): AssetType {
  switch (value.toLowerCase()) {
    case "etf":
      return AssetType.ETF;
    case "crypto":
      return AssetType.CRYPTO;
    default:
      return AssetType.STOCK;
  }
}

async function main() {
  const user = await prisma.user.upsert({
    where: { email: DEFAULT_USER_EMAIL },
    create: { email: DEFAULT_USER_EMAIL, displayName: "Demo User" },
    update: {},
  });

  const watchlist = await prisma.watchlist.upsert({
    where: { userId: user.id },
    create: { userId: user.id, name: "Default" },
    update: {},
  });

  const sampleSymbols = ["AAPL", "MSFT", "NVDA"];

  for (const entry of mockData.instruments) {
    const instrument = await prisma.instrument.upsert({
      where: {
        provider_providerInstrumentId: {
          provider: MOCK_PROVIDER,
          providerInstrumentId: entry.symbol,
        },
      },
      create: {
        provider: MOCK_PROVIDER,
        providerInstrumentId: entry.symbol,
        symbol: entry.symbol,
        name: entry.name,
        assetType: toAssetType(entry.assetType),
        exchange: entry.exchange,
        currency: entry.currency,
        logoUrl: entry.logoUrl,
      },
      update: {
        name: entry.name,
        exchange: entry.exchange,
        currency: entry.currency,
        logoUrl: entry.logoUrl,
        assetType: toAssetType(entry.assetType),
      },
    });

    if (sampleSymbols.includes(entry.symbol)) {
      await prisma.watchlistItem.upsert({
        where: {
          watchlistId_instrumentId: {
            watchlistId: watchlist.id,
            instrumentId: instrument.id,
          },
        },
        create: {
          watchlistId: watchlist.id,
          instrumentId: instrument.id,
        },
        update: {},
      });
    }
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
