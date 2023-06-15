import { z } from "zod";

export const allCoursesOfAUser = z.object({
  couseId: z.number(),
  courseName: z.string(),
  courseDescription: z.string(),
  userActiveInCourse: z.boolean(),
  userId: z.number(),
  userName: z.string(),
});

export const AllUsersLinkedToACourse = z.object({
  userId: z.number(),
  userName: z.string(),
  couseId: z.number(),
  courseName: z.string(),
  courseDescription: z.string(),
  userActiveInCourse: z.boolean(),
});
