import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    if (prisma.news !== undefined) {
        const news = await prisma.news.findMany({
            orderBy: { createdAt: 'desc' },
            take: 3,
        })
        return news
    }
    return null
})