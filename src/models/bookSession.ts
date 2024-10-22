import zubiDB from "../database/db";

const book_session = zubiDB.prepare(/*SQL*/ `
    UPDATE sessions 
    SET booking_status = 'booked'
    WHERE session_time = ? AND fk_tutor_id = ? AND booking_status = 'open'    
  `);

const bookSession = (time: string, tutor: number) => {
  const result = book_session.run(time, tutor);
  return result.changes;
};

export default bookSession;
