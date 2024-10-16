import getTutorById from "../models/getTutor";
import { Response, Request } from "express";

const getTutorController = (req: Request, res: Response) => {
  const { id } = req.params; 
  const tutor = getTutorById(); 

  if (tutor) {
    res.json(tutor); 
  } else {
    res.status(404).json({ error: "Tutor not found" }); 
  }
};

export { getTutorController };
