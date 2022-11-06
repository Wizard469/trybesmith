import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const route = Router();

const productController = new ProductController();

route.post('/', productController.insertProduct.bind(productController));
route.get('/', productController.getAll.bind(productController));

const routes = route;

export default routes;
