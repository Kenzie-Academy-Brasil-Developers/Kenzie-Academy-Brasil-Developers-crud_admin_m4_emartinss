import { QueryResult } from "pg";
import { client } from "../../database";
import { userCourses } from "../../interfaces/usersCouses.interfaces";

export const listUserCoursesService = async (userId: string): Promise<userCourses[]> => {
  const queryString = `SELECT
  "co".id AS "courseId",
  "co".name AS "courseName",
  "co".description AS "courseDescription",
  "uc".active AS "userActiveInCourse",
  "us".id AS "userId",
  "us".name AS "userName"
FROM
  courses AS "co"
LEFT JOIN
  "userCourses" AS "uc" ON "co".id = "uc"."courseId"
LEFT JOIN
  users AS "us" ON "uc"."userId" = "us".id
WHERE
  "us".id = $1;

    `;

  const queryResult: QueryResult<userCourses> = await client.query(queryString, [userId]);

  return queryResult.rows;
};
