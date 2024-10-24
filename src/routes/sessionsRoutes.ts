import { Router } from "express";
import {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
} from "../controllers/sessionsControllers";

const router = Router();

router.post("/booking/newslot", createTutorAvailabilityController);
router.post("/booking/session", bookSessionController);
router.get("/booking/tutorslots", getSessionsByTutorIdController);

export default router;
