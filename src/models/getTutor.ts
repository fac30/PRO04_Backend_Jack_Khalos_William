import zubiDB from "../database/db.js";

const tutors = zubiDB.prepare("SELECT * FROM tutors");

const allRows = tutors.all();

const getTutorById = (index: number) => {
  return allRows[index - 1];
};

const getAllTutors = () => {
  return allRows;
};

export { getAllTutors, getTutorById };
