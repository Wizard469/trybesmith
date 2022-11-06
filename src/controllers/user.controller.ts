import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async insertUser(req: Request, res: Response) {
    const token = await this.userService.insertUser(req.body);

    res.status(201).json({ token });
  }
}
