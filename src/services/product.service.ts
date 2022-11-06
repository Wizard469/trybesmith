import { IProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/product.model';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) {}

  async insertProduct(name: string, amount: string): Promise<IProduct> {
    const newProduct = await this.productModel.insertProduct(name, amount);
    return newProduct;
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.productModel.getAll();

    return products;
  }
}
