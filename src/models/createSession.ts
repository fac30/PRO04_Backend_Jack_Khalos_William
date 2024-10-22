import zubiDB from "src/database/db";

const insert = zubiDB.prepare(/*SQL*/ `
    INSERT INTO sessions (session_time, booking_status, fk_student_id, fk_tutor_id)
    VALUES (?, ?, ?, ?);
  `);
    