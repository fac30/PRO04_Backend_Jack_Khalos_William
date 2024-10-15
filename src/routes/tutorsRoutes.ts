import { getTutorController } from "../controllers/tutorsControllers";
import { Router } from "express";

const router = Router();

router.get("/", getTutorController);

export default router;
