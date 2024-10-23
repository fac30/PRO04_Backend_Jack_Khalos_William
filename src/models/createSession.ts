import zubiDB from "../database/db";

const insertSession = zubiDB.prepare(/*SQL*/ `
    INSERT INTO sessions (start, "end", booking_status, fk_student_id, fk_tutor_id)
    VALUES (?, ?, 'open', NULL, ?);
  `);

const createTutorAvailability = (
  start: string,
  end: string,
  tutorID: number
) => {
  insertSession.run(start, end, tutorID);
};

export default createTutorAvailability;
