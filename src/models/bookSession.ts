import zubiDB from "../database/db";

const book_session = zubiDB.prepare(/*SQL*/ `
    UPDATE sessions 
    SET booking_status = 'booked'
    WHERE session_time = ? AND fk_tutor_id = ?;    
  `);

const bookSession = (time: string, tutor: number) => {
  book_session.run(time, tutor);
};

export default bookSession;
