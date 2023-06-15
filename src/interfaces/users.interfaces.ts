import { userReturn, users, usersCreate, userRead } from "../schemas/users.schemas";
import { z } from "zod";

export type Users = z.infer<typeof users>;

export type UsersCreate = z.infer<typeof usersCreate>;

export type UserReturn = z.infer<typeof userReturn>

export type UserRead = z.infer<typeof userRead>;

