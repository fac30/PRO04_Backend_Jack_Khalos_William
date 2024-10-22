import zubiDB from "../database/db";

interface Session {
  id: number;
  created_at: string;
  session_time: string;
  booking_status: string;
  fk_student_id: string;
  fk_tutor_id: string;
}

const find_session = zubiDB.prepare(
  `SELECT * FROM sessions WHERE session_time = ? AND fk_tutor_id = ?`
);

const book_session = zubiDB.prepare(/*SQL*/ `
  UPDATE sessions 
  SET booking_status = 'booked'
  WHERE id = ? 
`);

const findSession = (time: string, tutor: number): Session | undefined => {
  const result = find_session.get(time, tutor);
  return result as Session | undefined; 
};

const bookSession = (session: Session) => {
  return book_session.run(session.id);
};

export { bookSession, findSession, Session };
