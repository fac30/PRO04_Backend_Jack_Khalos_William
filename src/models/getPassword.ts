import zubiDB from "../database/db";

const selectStudentByEmail = zubiDB.prepare(
  "SELECT id, full_name, email, password_hash FROM students WHERE email = ?"
);

const getStudentByEmail = (email: string) => {
  const student = selectStudentByEmail.get(email);
  console.log(student);
  return student;
};

getStudentByEmail("khalos@zubi.com");

export default getStudentByEmail;
