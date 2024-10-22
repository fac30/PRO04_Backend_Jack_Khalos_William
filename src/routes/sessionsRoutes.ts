import { Router } from "express";
import { createTutorAvailabilityController } from "../controllers/sessionsControllers";

const router = Router();

router.get("/tutorslot", createTutorAvailabilityController);

export default router;
