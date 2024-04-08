// controllers/ProductController.ts
import { Request, Response } from 'express';
import Product, { IProduct } from '../models/product';

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, price } = req.body;
        const product: IProduct = new Product({ name, description, price });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
};
