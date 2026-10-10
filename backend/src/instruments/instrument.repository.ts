import type { Instrument } from "@prisma/client";
import { prisma } from "../database/prisma.js";

export const instrumentRepository = {
  findAll(): Promise<Instrument[]> {
    return prisma.instrument.findMany({ orderBy: { symbol: "asc" } });
  },

  findLocalBySymbol(symbol: string): Promise<Instrument[]> {
    return prisma.instrument.findMany({
      where: { symbol: { equals: symbol, mode: "insensitive" } },
      take: 2,
    });
  },

  findById(id: string): Promise<Instrument | null> {
    return prisma.instrument.findUnique({ where: { id } });
  },
};

export type InstrumentRepository = typeof instrumentRepository;
