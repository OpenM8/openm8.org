import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    if (prisma.footerItem !== undefined) {
        const footerItems = await prisma.footerItem.findMany({
            orderBy: { updatedAt: 'asc' },
            include: {
              subitems: true,  
              socials: true,
            }
        })
        return footerItems
    }
    return null
})