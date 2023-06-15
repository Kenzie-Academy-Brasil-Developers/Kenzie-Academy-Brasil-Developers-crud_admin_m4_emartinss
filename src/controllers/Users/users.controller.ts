import { Request, Response } from "express";
import { registerUserService } from "../../services/Users/registerUser.service";
import { Users, UserReturn } from "../../interfaces/users.interfaces";
import { readUsersService } from "../../services/Users/readUsers.service";
import { updateUsersService } from "../../services/Users/updateUsers.service";

export const registerUserController = async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body;

  const newUser: UserReturn = await registerUserService(res.locals.validated);

  return res.status(201).json(newUser);
};

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn[] = await readUsersService();

  return res.status(200).json(user);
};

export const updateUsersController = async (req: Request, res: Response): Promise<Response> => {
  const userData = res.locals.validated;
  const id = req.params.id;

  const updateUser = await updateUsersService(userData, id);

  return res.status(200).json(updateUser);
};
