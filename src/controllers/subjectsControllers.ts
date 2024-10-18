import { getAllSubjects, getSubjectById } from "../models/getSubject.js";
import { Response, Request } from "express";

const getAllSubjectsController = (req: Request, res: Response) => {
  const subjects = getAllSubjects();
  if (subjects) {
    res.json(subjects);
  } else {
    res.status(404).json({ error: "All subjects not found" });
  }
};

const getSubjectbyIdController = (req: Request, res: Response) => {
  const id: number = Number(req.query.id);
  const subject = getSubjectById(id);

  if (subject) {
    res.json(subject);
  } else {
    res.status(404).json({ error: "Subject not found by id" });
  }
};

export { getAllSubjectsController, getSubjectbyIdController };