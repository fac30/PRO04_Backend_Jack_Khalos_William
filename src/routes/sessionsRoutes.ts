import { Router } from "express";
import {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
} from "../controllers/sessionsControllers";

const router = Router();

router.post("/newslot", createTutorAvailabilityController);
router.post("/session", bookSessionController);
router.get("/tutorslots", getSessionsByTutorIdController);

export default router;
