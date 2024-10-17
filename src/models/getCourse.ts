import zubiDB from "../database/db.js";

const courses = zubiDB.prepare("SELECT * FROM courses");

const allRows = courses.all();

const getCourseById = (index: number) => {
  return allRows[index - 1];
};

const getAllCourses = () => {
  return allRows;
};

export { getAllCourses, getCourseById };
