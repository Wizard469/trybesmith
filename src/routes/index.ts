import { Router } from 'express';
import productRoutes from './product.routes';
import userRoutes from './user.routes';
import orderRoutes from './order.routes';

const route = Router();

route.use('/products', productRoutes);
route.use('/users', userRoutes);
route.use('/orders', orderRoutes);

const routes = route;

export default routes;
