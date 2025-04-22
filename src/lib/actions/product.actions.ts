"use server";

import { PrismaClient } from "../generated/prisma";
import { convertToPlainJsObject } from "../utils";

export const getLatestProducts = async () => {
  const prisma = new PrismaClient();
  try {
    const data = await prisma.product.findMany({
      take: 4,
      orderBy: {
        createdAt: "desc",
      },
    });
    await prisma.$disconnect();
    return convertToPlainJsObject(data);
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
    await prisma.$disconnect();
  }
};
