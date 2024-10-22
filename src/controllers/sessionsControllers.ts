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
  const changes = bookSession(dateTime, tutorID);
  if (changes > 0) {
    res.status(201).json({
      message: `Session booked successfully at ${dateTime} with tutor ${tutorID}`,
    });
  } else {
    res.status(404).json({
      message: `No session found for time: ${dateTime} and tutor ID: ${tutorID}, or it's already booked.`,
    });
  }
};

export { createTutorAvailabilityController, bookSessionController };
