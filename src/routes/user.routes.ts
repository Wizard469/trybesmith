import { Router } from 'express';
import UserController from '../controllers/user.controller';

const route = Router();

const userController = new UserController();

route.post('/', userController.insertUser.bind(userController));

const routes = route;

export default routes;
