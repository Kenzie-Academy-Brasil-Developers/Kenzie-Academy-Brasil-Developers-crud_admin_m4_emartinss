import { client } from "../../database";
import { QueryConfig, QueryResult } from "pg";
import { userCourses } from "../../interfaces/usersCouses.interfaces";

export const enrollUserService = async (courseId: string, userId: string): Promise<userCourses> => {
  console.log(userId)
  const queryString: string = `INSERT INTO "userCourses" ("courseId", "userId")
  VALUES ($1, $2);
  `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [courseId, userId],
  };

  const query: QueryResult<userCourses> = await client.query(queryConfig);
  return query.rows[0];
};
