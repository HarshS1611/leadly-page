
// routes/productRoutes.ts
import express from 'express';
import { createProduct, getAllProducts } from '../controllers/productController';

const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getAllProducts);

export default router;
