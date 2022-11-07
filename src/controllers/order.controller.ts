import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  async getAll(_req: Request, res: Response) {
    const Orders = await this.orderService.getAll();

    res.status(200).json(Orders);
  }
}
