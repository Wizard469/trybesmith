import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import jwt from '../utilities/tokenGenerator';

export default class UserService {
  private jwt;

  constructor(private userModel = new UserModel(connection)) {
    this.jwt = jwt;
  }

  async insertUser(body: IUser): Promise<string> {
    const newUser = await this.userModel.insertUser(body);

    const token = this.jwt.createToken(newUser);

    return token;
  }
}
