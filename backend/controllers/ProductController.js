import Product from '../models/Products';
import { error, success } from './http';
const Joi = require('joi');

const ProductController = {

    index: async (req, res) => {
        try {
            console.log(req.body)
            
            const products = await Product.findAll();
            return res.json(success(products));
        } catch (err) {
            return res.json(error(err.message, 501));
        }
    },

    store: async (req, res) => {
        try {
            console.log(req.body)

            const schema = Joi.object({
                name  : Joi.string().required().min(2).max(200),
                unit  : Joi.string().required().max(50),
                SKU   : Joi.string().allow(null, '').max(6),
                price : Joi.number().allow(0),
                expire: Joi.number().allow(0, null),
                remark: Joi.string().allow(null, '').max(1000),
            }).unknown();

            const validation = schema.validate(req.body);

            if (validation.error) {
                return res.json(error(validation.error.details[0].message))
            }

            const { name, unit, SKU, price, expire, remark } = req.body;

            const product = await Product.create({
                name  : name,
                unit  : unit,
                SKU   : SKU,
                price : price,
                expire: expire,
                remark: remark,
            });
            
            return res.json(success(product));
        } catch (err) {
            return res.json(error(err.message, 501));
        }
    }
};

export default ProductController;
