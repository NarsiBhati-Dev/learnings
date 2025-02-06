import React from "react";

type CoursesIdType = Promise<{ courseId: string }>;

interface CoursePageParams {
  params: CoursesIdType;
}

const CoursePage = async ({ params }: CoursePageParams) => {
  const coursesId = (await params).courseId;
  return <div>CoursePage Course ID : {JSON.stringify(coursesId)}</div>;
};

export default CoursePage;
