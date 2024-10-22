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
  }

  try {
    createTutorAvailability(dateTime, tutorID);
    res
      .status(201)
      .json({ message: "Tutor availability created successfully" });
  } catch (error) {
    console.error("Error creating tutor availability:", error);
    throw new Error("Failed to create tutor availability");
  }
};

const bookSessionController = (req: Request, res: Response) => {
  const { dateTime, tutorID } = req.body;

  if (!dateTime || !tutorID) {
    res
      .status(400)
      .json({ message: "To book, please enter a date, time, and tutor" });
  }

  try {
    const session: Session | undefined = findSession(dateTime, tutorID);

    if (!session) {
      throw new Error(
        `No session found for time: ${dateTime} and tutor ID: ${tutorID}.`
      );
    }

    if (session.booking_status === "booked") {
      throw new Error(`Session is already booked`);
    }

    bookSession(session);
    res.status(201).json({ message: `Session booked` });
  } catch (error) {
    console.error("Error booking session:", error);
    throw new Error("Failed to book session");
  }
};

const getSessionsByTutorIdController = (req: Request, res: Response) => {
  const { tutorId } = req.body;

  try {
    const allSessions = getSessionsByTutorId(tutorId);

    if (allSessions.length < 1) {
      throw new Error(`No sessions found, does this tutor exist?`);
    }

    res.status(200).send(allSessions);
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    throw new Error("Failed to retrieve sessions");
  }
};

export {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
};
