import { Router } from "express";
import { loginController } from "../controllers/login/login.controllers";
import { login } from "../schemas/login.schemas";
import validateBody from "../middlewares/validateBody.middlewares";

export const loginRoutes: Router = Router();

loginRoutes.post("", validateBody(login), loginController);
