import { Router } from "express";
import {
  createTutorAvailabilityController,
  bookSessionController,
  getSessionsByTutorIdController,
} from "../controllers/sessionsControllers";

const router = Router();

router.post("/newtutorslot", createTutorAvailabilityController);
router.post("/newsession", bookSessionController);
router.get("/alltutorsessions", getSessionsByTutorIdController);

export default router;
