import { Router } from 'express';
import productRoutes from './product.routes';
import userRoutes from './user.routes';

const route = Router();

route.use('/products', productRoutes);
route.use('/users', userRoutes);

const routes = route;

export default routes;
