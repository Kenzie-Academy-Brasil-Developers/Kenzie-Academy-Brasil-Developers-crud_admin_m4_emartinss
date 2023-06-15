import { QueryResult, QueryResultRow } from "pg";
import { client } from "../../database";
import { Courses } from "../../interfaces/courses.interfaces";
import { allUsersCourse } from "../../interfaces/usersCouses.interfaces";

export const getUsersCoursesService = async (userId: string): Promise<allUsersCourse[]> => {
  const queryString: string = `SELECT
  "us".id AS "userId",
  "us".name AS "userName",
  "co".id AS "courseId",
  "co".name AS "courseName",
  "co".description AS "courseDescription",
  "uc".active AS "userActiveInCourse"
FROM
  "users" AS "us"
LEFT JOIN
  "userCourses" AS "uc" ON "us".id = "uc"."userId"
LEFT JOIN
  "courses" AS "co" ON "uc"."courseId" = "co".id
WHERE
  "co".id = $1;
    `;

  const queryResult: QueryResult<allUsersCourse> = await client.query(queryString, [userId]);

  return queryResult.rows;
};
