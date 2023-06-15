import { Router } from "express";
import { usersCreate } from "../schemas/users.schemas";
import validateBody from "../middlewares/validateBody.middlewares";
import { listUserCoursesController, readUsersController, registerUserController } from "../controllers/Users/users.controller";
import { verifyToken } from "../middlewares/verifyToken.middlewares";

export const usersRoutes: Router = Router();

usersRoutes.post("", validateBody(usersCreate), registerUserController);
usersRoutes.get("", verifyToken, readUsersController);
usersRoutes.get("/:id/courses", listUserCoursesController);
