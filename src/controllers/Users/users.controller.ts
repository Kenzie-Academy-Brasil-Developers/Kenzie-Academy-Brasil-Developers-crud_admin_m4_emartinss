import { Request, Response } from "express";
import { registerUserService } from "../../services/Users/registerUser.service";
import { UserReturn } from "../../interfaces/users.interfaces";
import { readUsersService } from "../../services/Users/readUsers.service";
import { listUserCoursesService } from "../../services/Users/listUserCourses.service";

export const registerUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser: UserReturn = await registerUserService(res.locals.validated);

  return res.status(201).json(newUser);
};

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn[] = await readUsersService();

  return res.status(200).json(user);
};

export const listUserCoursesController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;

  const allCourses = await listUserCoursesService(id);

  return res.status(200).json(allCourses);
};
