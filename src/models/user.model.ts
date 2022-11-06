import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertUser(newUser: IUser): Promise<IUser> {
    const { username, classe, level, password } = newUser;
    const sql = 'INSERT INTO Trybesmith.Users(username, classe, level, password) VALUE(?, ?, ?, ?)';

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(sql, [username, classe, level, password]);

    return {
      id: insertId,
      username,
      classe,
      level,
    };
  }
}
