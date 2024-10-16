import { getAllTutors, getTutorById } from "../models/getTutor";
import { Response, Request } from "express";

const getAllTutorsController = (req: Request, res: Response) => {
  const tutors = getAllTutors();
  if (tutors) {
    res.json(tutors);
  } else {
    res.status(404).json({ error: "Tutor not found" });
  }
};

const getTutorbyIdController = (req: Request, res: Response) => {
  const id: number = Number(req.params);
  const tutor = getTutorById(id);

  if (tutor) {
    res.json(tutor);
  } else {
    res.status(404).json({ error: "Tutor not found" });
  }
};

export { getAllTutorsController, getTutorbyIdController };
