import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct } from '../interfaces';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertProduct(name: string, amount: string): Promise<IProduct> {
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUE (?, ?)';

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);

    return {
      id: insertId,
      name,
      amount,
    };
  }
}
