import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    if (query.url !== undefined && query.url !== null) {
        const update = await prisma.devUpdates.findUnique({
            where: { url: query.url as string },
        })
        return update
    }
})