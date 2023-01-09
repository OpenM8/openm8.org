import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    if (prisma.devUpdates !== undefined) {
        const updates = await prisma.devUpdates.findMany({
            orderBy: { createdAt: 'desc' },
            take: 4,
        })
        return updates
    }
    return null
})