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

export const coursesRoutes: Router = Router();

coursesRoutes.post("", verifyToken, validateBody(coursesCreate), createCoursesController);
coursesRoutes.get("", verifyToken, readCoursesController);
coursesRoutes.post("/:courseId/users/:userId", enrollUserController);
coursesRoutes.delete("/:courseId/users/:userId", deleteEnrollUserController);
coursesRoutes.get("/:id/users", getUsersCoursesController);
