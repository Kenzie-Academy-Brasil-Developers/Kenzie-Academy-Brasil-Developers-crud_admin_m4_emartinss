import { z } from "zod";
import { courses, coursesCreate } from "../schemas/courses.schemas";

export type Courses = z.infer<typeof courses>;

export type CoursesCreate = z.infer<typeof coursesCreate>;
