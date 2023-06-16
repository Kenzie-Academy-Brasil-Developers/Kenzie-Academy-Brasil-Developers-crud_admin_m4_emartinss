import { NextFunction, Request, Response } from "express";
import { Users } from "../../interfaces/users.interfaces";
import { client } from "../../database";
import { QueryResult } from "pg";
import AppError from "../../error";

export const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email } = req.body;

  if (!email) {
    return next();
  }

  const query: QueryResult<Users> = await client.query('SELECT * FROM "users" WHERE "email" = $1;', [email]);

  if (query.rowCount != 0) {
    throw new AppError("Email already registered", 409);
  }

  return next();
};
