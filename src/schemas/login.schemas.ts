import { z } from "zod";

export const login = z.object({
  email: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const loginToken = z.object({
  token: z.string(),
});
