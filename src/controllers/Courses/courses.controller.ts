import { Request, Response } from "express";
import { createCoursesService } from "../../services/Courses/createCourses.service";
import { readCoursesService } from "../../services/Courses/readCourses.service";
import { Courses } from "../../interfaces/courses.interfaces";
import { enrollUserService } from "../../services/userCourses/enrollUser.service";
import { deleteEnrollUserService } from "../../services/userCourses/deleteEnrollUser.service";
import { getUsersCoursesService } from "../../services/userCourses/getUsersCourses.service";

export const createCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const courseData = res.locals.validated;

  const course = await createCoursesService(courseData);

  return res.status(201).json(course);
};

export const readCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const allCourses: Courses[] = await readCoursesService();

  return res.status(200).json(allCourses);
};

export const enrollUserController = async (req: Request, res: Response): Promise<Response> => {
  const courseId = req.params.courseId;
  const userId = req.params.userId;

  const enrollUser = await enrollUserService(courseId, userId);

  return res.status(201).json(enrollUser);
};

export const deleteEnrollUserController = async (req: Request, res: Response): Promise<Response> => {
  const courseId = req.params.courseId;
  const userId = req.params.userId;

  const DeleteEnrollUser = await deleteEnrollUserService(courseId, userId);

  return res.status(204).json();
};

export const getUsersCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id

  const userCourses = await getUsersCoursesService(id)

  return res.status(200).json(userCourses);
};
