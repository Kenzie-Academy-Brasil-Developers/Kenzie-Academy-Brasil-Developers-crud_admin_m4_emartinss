import format from "pg-format";
import { client } from "../../database";
import { hash } from "bcryptjs";
import { UserReturn } from "../../interfaces/users.interfaces";
import { userReturn } from "../../schemas/users.schemas";

export const updateUsersService = async (userData: any, userId: string): Promise<UserReturn> => {
  if (userData.password) {
    userData.password = await hash(userData.password, 10);
  }
  const keys = Object.keys(userData);
  const values = Object.values(userData);

  const queryString: string = format('UPDATE "users" SET (%I) = ROW(%L) WHERE "id" = $1 RETURNING *;', keys, values);

  const QueryResult = await client.query(queryString, [userId]);

  return userReturn.parse(QueryResult.rows[0]);
};
