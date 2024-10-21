import zubiDB from "../database/db.js";

const subjects = zubiDB.prepare("SELECT * FROM subjects");

const allRows = subjects.all();

const getSubjectById = (index: number) => {
  return allRows[index - 1];
};

const getAllSubjects = () => {
  return allRows;
};

export { getAllSubjects, getSubjectById };
