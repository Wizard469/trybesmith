import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const route = Router();

const orderController = new OrderController();

route.get('/', orderController.getAll.bind(orderController));

const routes = route;

export default routes;
