import { QueryConfig, QueryResult } from "pg";
import { client } from "../../database";

export const deleteEnrollUserService = async (courseId: string, userId: string): Promise<QueryResult> => {
  const queryString = `UPDATE "userCourses" SET active = FALSE WHERE "courseId" = $1 AND "userId" = $2;`;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [courseId, userId],
  };
  const queryResult: QueryResult = await client.query(queryConfig);

  return queryResult;
};
