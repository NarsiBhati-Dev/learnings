import React from "react";

interface CoursePageParams {
  params: {
    courseId: string;
  };
}

const CoursePage = async ({ params }: CoursePageParams) => {
  const coursesId = (await params).courseId;
  return <div>CoursePage Course ID : {JSON.stringify(coursesId)}</div>;
};

export default CoursePage;
