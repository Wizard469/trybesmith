import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async insertProduct(req: Request, res: Response) {
    const { name, amount } = req.body;
    const newProduct = await this.productService.insertProduct(name, amount);

    res.status(201).json(newProduct);
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }
}
