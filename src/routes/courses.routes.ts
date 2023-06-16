import { Router } from "express";
import {
  createCoursesController,
  deleteEnrollUserController,
  enrollUserController,
  getUsersCoursesController,
  readCoursesController,
} from "../controllers/Courses/courses.controller";
import validateBody from "../middlewares/validateBody.middlewares";
import { coursesCreate } from "../schemas/courses.schemas";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { validateAdmin } from "../middlewares/validateAdmin.middlewares";
import { verifyIdDeleteCourses, verifyIdPostCourses } from "../middlewares/courses/verifyIdCourses.middlewares";

export const coursesRoutes: Router = Router();

coursesRoutes.post("", verifyToken, validateAdmin, validateBody(coursesCreate), createCoursesController);
coursesRoutes.get("", readCoursesController);
coursesRoutes.post("/:courseId/users/:userId", verifyToken, validateAdmin, verifyIdPostCourses, enrollUserController);
coursesRoutes.delete("/:courseId/users/:userId", verifyToken, validateAdmin, verifyIdDeleteCourses, deleteEnrollUserController);
coursesRoutes.get("/:id/users", verifyToken, validateAdmin, getUsersCoursesController);
