import createTutorAvailability from "../models/createSession";
import { Request, Response } from "express";

interface CreateAvailabilityRequest {
  dateTime: string;
  tutorID: number;
}

const createTutorAvailabilityController = (
  req: Request<{}, {}, CreateAvailabilityRequest>,
  res: Response
) => {
  const { dateTime, tutorID } = req.body;
  if (!dateTime || !tutorID) {
    res.status(400).json({ message: "Please enter a date and time" });
    return;
  }
  createTutorAvailability(dateTime, tutorID);
  res.status(201).json({ message: "Tutor availability created successfully" });
};

export { createTutorAvailabilityController };
