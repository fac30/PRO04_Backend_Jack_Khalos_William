import zubiDB from "../database/db";

export interface User {
  id: number;
  full_name: string;
  email: string;
  password_hash: string;
}

const selectStudentByEmail = zubiDB.prepare(
  "SELECT id, full_name, email, password_hash FROM students WHERE email = ?"
);

const getStudentByEmail = (email: string): User | null => {
  const student = selectStudentByEmail.get(email) as User | undefined;
  return student || null;
};

getStudentByEmail("khalos@zubi.com");

export default getStudentByEmail;
