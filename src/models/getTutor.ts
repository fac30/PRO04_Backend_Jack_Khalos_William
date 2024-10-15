import zubiDB from "../database/db";

// console.log(zubiDB);

const tutors = zubiDB.prepare("SELECT * FROM tutors");

const allRows = tutors.all();

// const getTutorById = (index: number) => {
//   return allRows[index - 1];
// };

const getTutorById = () => {
  return allRows;
};

// console.log(getTutorById(2));

export default getTutorById;
