import express from 'express'
import multer from 'multer'
import { admin, permit, protect } from '../middleware/authMiddleware.js';
import { createProduct } from '../modules/products/productController.js';
import { EditFileName, ImageFileFilter } from '../utils/upload.js';

const productRouter = express.Router()
const maxSize = 10 * 1024 * 1024; // 10Mb

// multer upload storage
const storage = multer.diskStorage({
    destination: "./public/images/product",
    filename: EditFileName
})

const Upload = multer({
    storage: storage,
    fileFilter: ImageFileFilter,
    limits: {
        fileSize: maxSize
    }
})

productRouter.route('/product')
    .post(Upload.single('images'), createProduct)

export default productRouter