import { Router } from "express";
import {
  createTutorAvailabilityController,
  bookSessionController,
} from "../controllers/sessionsControllers";

const router = Router();

router.post("/tutorslot", createTutorAvailabilityController);
router.post("/newsession", bookSessionController);

export default router;
