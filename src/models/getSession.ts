import zubiDB from "../database/db";

const get_session_by_tutor_id = zubiDB.prepare(
  /*SQL */ `SELECT * FROM sessions WHERE fk_tutor_id = ?`
);

const getSessionByTutorId = (id: number) => {
  return get_session_by_tutor_id.run(id);
};

export { getSessionByTutorId };
