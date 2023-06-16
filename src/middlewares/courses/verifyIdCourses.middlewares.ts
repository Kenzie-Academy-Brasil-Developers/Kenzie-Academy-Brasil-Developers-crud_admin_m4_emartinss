import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database";
import AppError from "../../error";

export const verifyIdPostCourses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const query: QueryResult = await client.query('SELECT * FROM "courses" WHERE "id" = $1;', [req.params.courseId]);

  if (query.rowCount === 0) {
    throw new AppError("User/course not found", 404);
  }

  return next();
};

export const verifyIdDeleteCourses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const query: QueryResult = await client.query('SELECT * FROM "users" WHERE "id" = $1;', [req.params.userId]);

  if (query.rowCount === 0) {
    throw new AppError("User/course not found", 404);
  }

  return next();
};
