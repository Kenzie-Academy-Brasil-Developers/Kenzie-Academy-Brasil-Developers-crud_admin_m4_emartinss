import { QueryResult } from "pg";
import { client } from "../../database";
import { Courses } from "../../interfaces/courses.interfaces";

export const readCoursesService = async (): Promise<Courses[]> => {
  const queryString: string = `SELECT * FROM courses;`;

  const queryResult: QueryResult<Courses> = await client.query(queryString);

  return queryResult.rows;
};
