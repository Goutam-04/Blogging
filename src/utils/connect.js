// this data is copied cuz i have not enough time to go through the whole documentation again

import { PrismaClient } from '@prisma/client'
let prisma
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma