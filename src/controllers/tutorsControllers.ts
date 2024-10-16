import { getTutorById } from "../models/getTutor";
import { Response, Request } from "express";

const getTutorController = (req: Request, res: Response) => {
  const id: number = Number(req.params);
  const tutor = getTutorById(id);

  if (tutor) {
    res.json(tutor);
  } else {
    res.status(404).json({ error: "Tutor not found" });
  }
};

export { getTutorController };
