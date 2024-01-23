/* eslint-disable import/no-mutable-exports */
// eslint-disable-next-line import/no-extraneous-dependencies
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient | undefined;

if (process.env.NODE_ENV === 'development' || !prisma) {
  prisma = new PrismaClient();
}

export default prisma;
