import { Router } from "express";
import { usersCreate } from "../schemas/users.schemas";
import validateBody from "../middlewares/validateBody.middlewares";
import { readUsersController, registerUserController, updateUsersController } from "../controllers/Users/users.controller";
import { verifyToken } from "../middlewares/verifyToken.middlewares";

export const usersRoutes: Router = Router();

usersRoutes.post("", validateBody(usersCreate), registerUserController);
usersRoutes.get("", verifyToken, readUsersController);
usersRoutes.patch("/:id", validateBody(usersCreate), updateUsersController);
