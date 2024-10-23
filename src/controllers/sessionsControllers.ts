import createTutorAvailability from "../models/createSession";
import { bookSession, findSession } from "../models/bookSession";
import { getSessionsByTutorId } from "../models/getSession";
import { Request, Response } from "express";
import { Session } from "../models/bookSession";

interface CreateAvailabilityRequest {
  start: string;
  end: string;
  tutorID: number;
}

const createTutorAvailabilityController = (
  req: Request<{}, {}, CreateAvailabilityRequest>,
  res: Response
) => {
  const { start, end, tutorID } = req.body;

  if (!start || !end || !tutorID) {
    res.status(400).json({ message: "Please enter a date and time" });
  }

  try {
    createTutorAvailability(start, end, tutorID);
    res
      .status(201)
      .json({
        message: `Tutor availability created successfully, starting at ${start} and finishing at ${end}`,
      });
  } catch (error) {
    console.error("Error creating tutor availability:", error);
    throw new Error("Failed to create tutor availability");
  }
};

const bookSessionController = (req: Request, res: Response) => {
  const { start, end, tutorID } = req.body;

  if (!start || !end || !tutorID) {
    res
      .status(400)
      .json({ message: "To book, please enter a date, time, and tutor" });
    return;
  }

  try {
    const session: Session | undefined = findSession(start, end, tutorID);

    if (!session) {
      throw new Error(
        `No session found for time: ${start} and tutor ID: ${tutorID}.`
      );
    }

    if (session.booking_status === "booked") {
      throw new Error(`Session is already booked`);
    }

    bookSession(session);
    res.status(201).json({
      message: `Session booked at ${start} until ${end} with tutor ID ${tutorID}`,
    });
  } catch (error) {
    console.error("Error booking session:", error);
    res.status(401).json({
      message: `${error}`,
    });
  }
};

const getSessionsByTutorIdController = (req: Request, res: Response) => {
  const id: number = Number(req.query.id);

  try {
    const allSessions = getSessionsByTutorId(id);

    if (allSessions.length < 1) {
      throw new Error(`No sessions found, does this tutor exist?`);
    }

    res.status(200).send(allSessions);
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    res.status(401).send({
      message: `${error}`,
    });
  }
};

export {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
};
