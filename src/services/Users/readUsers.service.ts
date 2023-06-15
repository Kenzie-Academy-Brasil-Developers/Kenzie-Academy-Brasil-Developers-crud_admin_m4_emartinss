import { QueryResult } from "pg";
import { client } from "../../database";
import { UserRead } from "../../interfaces/users.interfaces";
import { userRead } from "../../schemas/users.schemas";

export const readUsersService = async (): Promise<UserRead> => {
  const query: QueryResult<UserRead> = await client.query('SELECT * FROM "users";');

  return userRead.parse(query.rows);
};
