import { Request, Response } from "express";
import { createCoursesService } from "../../services/Courses/createCourses.service";

export const createCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const courseData = res.locals.validated;

  const course = await createCoursesService(courseData);

  return res.status(201).json(course);
};
