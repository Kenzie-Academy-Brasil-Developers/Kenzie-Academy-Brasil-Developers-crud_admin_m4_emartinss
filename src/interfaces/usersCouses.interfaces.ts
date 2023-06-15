export interface userCourses {
  id: number;
  active: boolean;
  couseId: number;
  userId: number;
}

export interface allUsersCourse {
  userId: number;
  userName: string;
  couseId: number;
  courseName: string;
  courseDescription: string;
  userActiveInCourse: boolean;
}
