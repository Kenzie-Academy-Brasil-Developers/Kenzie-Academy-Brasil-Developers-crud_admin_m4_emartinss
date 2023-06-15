import { QueryResult } from "pg";
import { client } from "../../database";
import { login } from "../../interfaces/login.interfaces";
import { Users } from "../../interfaces/users.interfaces";
import AppError from "../../error";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const loginService = async (loginData: login) => {
  const queryString: QueryResult<Users> = await client.query('SELECT * FROM "users" WHERE "email" = $1;', [loginData.email]);

  if (queryString.rowCount === 0) {
    throw new AppError("email or password incorrect", 401);
  }

  const user: Users = queryString.rows[0];

  const samePassword: boolean = await compare(loginData.password, user.password);
  if (!samePassword) {
    throw new AppError("email or password incorrect", 401);
  }
  const token: string = sign({ email: user.email, admin: user.admin }, process.env.SECRET_KEY!, {
    subject: user.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return { token };
};
