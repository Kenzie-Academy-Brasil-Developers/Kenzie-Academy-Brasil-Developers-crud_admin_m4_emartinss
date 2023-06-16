import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database";
import AppError from "../../error";

export const verifyIdCourses = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const query: QueryResult = await client.query(
    'SELECT * FROM "userCourses" WHERE "userId" = $1;',
    [req.params.id]
  );

  if (query.rowCount === 0) {
    throw new AppError("No course found", 404);
  }

  return next();
};