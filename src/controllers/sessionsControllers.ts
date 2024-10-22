import createTutorAvailability from "../models/createSession";
import bookSession from "../models/bookSession";
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

const bookSessionController = (req: Request, res: Response) => {
  const { dateTime, tutorID } = req.body;
  if (!dateTime || !tutorID) {
    res
      .status(400)
      .json({ message: "To book, please enter a date, time and tutor" });
    return;
  }
  bookSession(dateTime, tutorID);
  res.status(201).json({
    message: `Session booked successfully at ${dateTime} with tutor ${tutorID}`,
  });
};

export { createTutorAvailabilityController, bookSessionController };
