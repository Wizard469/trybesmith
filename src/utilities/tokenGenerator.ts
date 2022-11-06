import JWT from 'jsonwebtoken';
import { IUser } from '../interfaces';

const jwt = {
  createToken: (data: IUser) => {
    const token = JWT.sign({ data }, process.env.JWT_SECRET as string, {
      expiresIn: '15d',
      algorithm: 'HS256',
    });
    return token;
  },
};

export default jwt;
