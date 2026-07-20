import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

// PrismaClient uses a lazy getter pattern so the MariaDB adapter is ONLY
// instantiated on first actual use at runtime — never during `next build`
// static page collection, which has no database connection available.
//
// Learn more: https://pris.ly/d/help/next-js-best-practices

const globalForPrisma = global as unknown as { _prisma: PrismaClient | undefined }

function createPrismaClient(): PrismaClient {
  const adapter = new PrismaMariaDb(process.env.DATABASE_URL as string)
  return new PrismaClient({ adapter })
}

function getPrisma(): PrismaClient {
  if (!globalForPrisma._prisma) {
    globalForPrisma._prisma = createPrismaClient()
  }
  return globalForPrisma._prisma
}

// Use a Proxy so `prisma.anything` defers client creation until first call
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    return (getPrisma() as unknown as Record<string | symbol, unknown>)[prop]
  },
})
