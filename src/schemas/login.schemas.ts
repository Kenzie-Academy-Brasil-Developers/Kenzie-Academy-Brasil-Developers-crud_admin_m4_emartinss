import { z } from "zod";

export const login = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

