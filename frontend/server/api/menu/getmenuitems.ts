import { PrismaClient } from '@prisma/client'

export default eventHandler(async (event) => {
    const query = getQuery(event)
    const prisma = new PrismaClient()
    if (prisma.menuItem !== undefined) {
        const menuItems = await prisma.menuItem.findMany({
            orderBy: { updatedAt: 'asc' },
            include: {
              dropdown: true,  
            }
        })
        return menuItems
    }
    return null
})