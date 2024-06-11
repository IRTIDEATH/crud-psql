import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const getProducts = async () => {
    try {
        const res = await prisma.product.findMany({
            select: {
                id: true,
                title: true,
                price: true,
                brandId: true,
                brand: true,
            }
        })
        return res   
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}

export const getBrands = async () => {
    try {
        const res = await prisma.brand.findMany()
        return res
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}