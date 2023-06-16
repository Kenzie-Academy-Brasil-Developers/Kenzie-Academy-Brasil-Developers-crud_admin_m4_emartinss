import { NextFunction, Request, Response } from "express";
import AppError from "../error";
import { client } from "../database";

export const VerifyUserToken = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const { decoded } = res.locals;

  const userAdmin = await client.query(`SELECT * FROM users WHERE admin = true;`);

  if (decoded.sub !== req.params.id && userAdmin.rowCount === 0) {
    throw new AppError("Only the account owner can do this", 403);
  }

  return next();
};

