import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    const siteInfo = await prisma.siteInfo.findFirst()
    return siteInfo
})