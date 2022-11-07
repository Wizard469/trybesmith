import { IOrder } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}

  async getAll(): Promise<IOrder[]> {
    const Orders = await this.orderModel.getAll();

    return Orders;
  }
}
