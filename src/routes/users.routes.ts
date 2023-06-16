import { Router } from "express";
import { usersCreate } from "../schemas/users.schemas";
import validateBody from "../middlewares/validateBody.middlewares";
import { listUserCoursesController, readUsersController, registerUserController } from "../controllers/Users/users.controller";
import { verifyToken } from "../middlewares/verifyToken.middlewares";
import { VerifyUserToken } from "../middlewares/verifyUserToken.middlewares";
import { validateAdmin } from "../middlewares/validateAdmin.middlewares";
import { uniqueEmail } from "../middlewares/users/uniqueEmailVerify.middlewares";
import { verifyIdCourses } from "../middlewares/users/verifyIdCourses.middlewares";

export const usersRoutes: Router = Router();

usersRoutes.post("", validateBody(usersCreate), uniqueEmail, registerUserController);
usersRoutes.get("", verifyToken, validateAdmin, readUsersController);
usersRoutes.get("/:id/courses", verifyToken, validateAdmin,verifyIdCourses, VerifyUserToken, listUserCoursesController);
