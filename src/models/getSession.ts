import zubiDB from "../database/db.js";

const get_session_by_tutor_id = zubiDB.prepare(
  /*SQL */ `SELECT * FROM sessions WHERE fk_tutor_id = ?`
);

const getSessionsByTutorId = (id: number) => {
  return get_session_by_tutor_id.all(id);
};

export { getSessionsByTutorId };
