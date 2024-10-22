import { Router } from "express";
import {
  createTutorAvailabilityController,
  bookSessionController,
} from "../controllers/sessionsControllers";

const router = Router();

router.get("/tutorslot", createTutorAvailabilityController);
router.get("/newsession", bookSessionController);

export default router;
