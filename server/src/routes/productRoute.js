import express  from 'express';
import { createProduct, getProduct, updateProduct } from '../controllers/productController.js';
import upload from '../middlewares/multerMiddleware.js';


const router = express.Router();

router.get('/product',getProduct);
router.post('/product/create',upload.single('image'),createProduct);
router.put('/product/:id',upload.single('image'),updateProduct);

export default router;