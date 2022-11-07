import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IOrder[]> {
    const sql = `
    SELECT
      p.orderId AS id,
      o.userId,
      JSON_ARRAYAGG(p.id) AS productsIds
    FROM
      Trybesmith.Orders o
    INNER JOIN
      Trybesmith.Products p
    ON
      orderId = o.id
    GROUP BY
      orderId
    `;

    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(sql);

    return rows;
  }
}
