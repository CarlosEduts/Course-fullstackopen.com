import Header from "./Header";
import Content from "./Content";

const CoursesElement = ({ courses }) => {
  const coursesElement = [];
  for (var i = 0; i < courses.length; i++) {
    coursesElement.push(
      <>
        <Header course={courses[i]} />
        <Content parts={courses[i].parts} />
      </>
    );
  }

  return <>{coursesElement}</>;
};

const Course = ({ course }) => {
  return (
    <>
      <CoursesElement courses={course} />
    </>
  );
};

export default Course;
