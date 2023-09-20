import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const getProducts = async(req, res) => {
    try {
        const response = await prisma.products.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message,
            data: []
        })
    }
}

export const getProductById = async(req, res) => {
    try {
        const response = await prisma.products.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
            data: []
        })
    }
}

export const createProduct = async(req, res) => {
    const { name, price } = req.body;
    try {
        const product = await prisma.products.create({
            data: {
                name: name,
                price: price
            }
        });

        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
            data: []
        })
    }
}

export const updateProduct = async(req, res) => {
    const { name, price } = req.body;
    try {
        const product = await prisma.products.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                price: price
            }
        });

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
            data: []
        })
    }
}

export const deleteProduct = async(req, res) => {
    try {
        const product = await prisma.products.delete({
            where: {
                id: Number(req.params.id)
            }
        });

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({
            status: false,
            message: error.message,
            data: []
        })
    }
}