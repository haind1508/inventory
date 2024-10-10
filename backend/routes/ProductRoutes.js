import ProductController from '../controllers/ProductController';
const express = require('express');
const router = express.Router();


router.get('/', ProductController.index);

router.post('/', ProductController.store);

const ProductRouter = router;

export default ProductRouter;
