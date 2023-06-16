import format from "pg-format";
import { Courses, CoursesCreate } from "../../interfaces/courses.interfaces";
import { client } from "../../database";
import { QueryResult } from "pg";

export const createCoursesService = async (courseData: CoursesCreate):Promise<Courses> => {
  const keys = Object.keys(courseData);
  const values = Object.values(courseData);

  const queryString: string = format(`INSERT INTO courses(%I) VALUES (%L) RETURNING *`, keys, values);

  const queryResult: QueryResult<Courses> = await client.query(queryString);

  return queryResult.rows[0];
};
