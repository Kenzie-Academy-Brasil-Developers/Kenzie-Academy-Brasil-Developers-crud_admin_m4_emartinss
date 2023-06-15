import { z } from "zod";

export const courses = z.object({
  id: z.number().positive(),
  name: z.string().max(15).nonempty(),
  description: z.string().nonempty(),
});

export const coursesCreate = z.object({
  name: z.string().max(15).nonempty(),
  description: z.string().nonempty(),
});

