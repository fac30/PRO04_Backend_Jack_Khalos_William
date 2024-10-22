import createTutorAvailability from "../models/createSession";
import { bookSession, findSession } from "../models/bookSession";
import { getSessionsByTutorId } from "../models/getSession";
import { Request, Response } from "express";
import { Session } from "../models/bookSession";

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

const bookSessionController = (req: Request, res: Response): Response => {
  const { dateTime, tutorID } = req.body;
  if (!dateTime || !tutorID) {
    return res
      .status(400)
      .json({ message: "To book, please enter a date, time and tutor" });
  }

  const session = findSession(dateTime, tutorID) as Session | undefined;

  if (!session) {
    return res.status(404).json({
      message: `No session found for time: ${dateTime} and tutor ID: ${tutorID}.`,
    });
  }

  if (session.booking_status === "booked") {
    return res.status(401).json({
      message: `Session is already booked`,
    });
  } else {
    bookSession(session);
    return res.status(201).json({
      message: `Session booked`,
    });
  }
};

const getSessionsByTutorIdController = (req: Request, res: Response) => {
  const { tutorId } = req.body;
  const allSessions = getSessionsByTutorId(tutorId);
  if (!allSessions) {
    return res.status(404).json({
      message: `No sessions found.`,
    });
  } else {
    return res.status(201).send(allSessions);
  }
};

export {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
};
