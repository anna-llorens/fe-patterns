import type { User } from "@prisma/client";
import { config } from "../config.js";
import { prisma } from "../database/prisma.js";

export async function getDefaultUser(): Promise<User> {
  const user = await prisma.user.findUnique({
    where: { email: config.defaultUserEmail },
  });
  if (!user) {
    throw new Error(
      `Default user not found (${config.defaultUserEmail}). Run prisma db seed.`,
    );
  }
  return user;
}
