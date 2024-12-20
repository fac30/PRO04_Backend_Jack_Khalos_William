import createTutorAvailability from "../models/createSession.js";
import { bookSession, findSession } from "../models/bookSession.js";
import { getSessionsByTutorId } from "../models/getSession.js";
import { Request, Response } from "express";
import { Session } from "../models/bookSession.js";

interface CreateAvailabilityRequest {
  start: string;
  end: string;
  tutorID: number;
}

const createTutorAvailabilityController = async (
  req: Request<{}, {}, CreateAvailabilityRequest>,
  res: Response
) => {
  const { start, end, tutorID } = req.body;

  if (!start || !end || !tutorID) {
    res.status(400).json({ message: "Please enter a date and time" });
  }

  try {
    await createTutorAvailability(start, end, tutorID);
    res.status(201).json({
      message: `Tutor availability created successfully, starting at ${start} and finishing at ${end}`,
    });
  } catch (error) {
    console.error("Error creating tutor availability:", error);
    throw new Error("Failed to create tutor availability");
  }
};

const bookSessionController = async (req: Request, res: Response) => {
  const { start, end, tutorID } = req.body;

  if (!start || !end || !tutorID) {
    res
      .status(400)
      .json({ message: "To book, please enter a date, time, and tutor" });
    return;
  }

  try {
    const session: Session | undefined = await findSession(start, end, tutorID);

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

const getSessionsByTutorIdController = async (req: Request, res: Response) => {
  const id: number = Number(req.query.id);

  try {
    const allSessions = await getSessionsByTutorId(id);

    if (allSessions.length < 1) {
      throw new Error(`No sessions found, does this tutor exist?`);
    }

    res.status(200).json(allSessions);
  } catch (error) {
    console.error("Error retrieving sessions:", error);
    res.status(401).json({
      message: `${error}`,
    });
  }
};

export {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
};
