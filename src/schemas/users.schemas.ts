import { z } from "zod";

export const users = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  password: z.string().max(120).nonempty(),
  email: z.string().email().max(50),
  admin: z.boolean(),
});

export const usersCreate = z.object({
  name: z.string().max(50),
  email: z.string().email().max(50).nonempty(),
  password: z.string().max(120).nonempty(),
  admin: z
    .boolean()
    .optional()
    .default(() => false),
});

export const userReturn = users.omit({ password: true });
export const userRead = userReturn.array();
