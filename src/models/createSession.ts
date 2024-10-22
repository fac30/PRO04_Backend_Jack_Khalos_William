import zubiDB from "../database/db";

const insertSession = zubiDB.prepare(/*SQL*/ `
    INSERT INTO sessions (session_time, booking_status, fk_student_id, fk_tutor_id)
    VALUES (?, 'open', NULL, ?);
  `);

const createTutorAvailability = (sessionTime: string, tutorID: number) => {
  insertSession.run(sessionTime, tutorID);
};

export default createTutorAvailability;
