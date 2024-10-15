import getTutorById from "../models/getTutor";
import { Response, Request } from "express";

const getTutorController = (req: Request, res: Response) => {
  const { id } = req.params; // Extract the ID from the URL parameters
  const tutor = getTutorById(); // Convert to number if necessary

  if (tutor) {
    res.json(tutor); // Send the tutor object as a JSON response
  } else {
    res.status(404).json({ error: "Tutor not found" }); // Handle not found case
  }
};

export { getTutorController };
