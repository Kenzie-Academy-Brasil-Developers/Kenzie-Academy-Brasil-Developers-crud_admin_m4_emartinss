import format from "pg-format";
import { Users, UsersCreate, UserReturn } from "../../interfaces/users.interfaces";
import { QueryResult } from "pg";
import { client } from "../../database";
import { hash } from "bcryptjs";
import { userReturn } from "../../schemas/users.schemas";

export const registerUserService = async (userData: UsersCreate): Promise<UserReturn> => {
  userData.password = await hash(userData.password, 10);

  const keys = Object.keys(userData);
  const values = Object.values(userData);

  const queryString: string = format(
    `
  INSERT INTO
  users(%I)
  VALUES
  (%L)
  RETURNING *;
  `,
    keys,
    values
  );

  const queryResult: QueryResult<Users> = await client.query(queryString);

  return userReturn.parse(queryResult.rows[0]);
};
