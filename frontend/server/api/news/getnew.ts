import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    if (query.url !== undefined && query.url !== null) {
        const newarticle = await prisma.news.findUnique({
            where: { url: query.url as string },
        })
        return newarticle
    }
})