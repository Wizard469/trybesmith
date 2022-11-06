import { Router } from 'express';
import productRoutes from './product.routes';

const route = Router();

route.use('/products', productRoutes);

const routes = route;

export default routes;
