import {
  getAllTutorsController,
  getTutorbyIdController,
} from "../controllers/tutorsControllers";
import { Router } from "express";

const router = Router();

router.get("/", getAllTutorsController);
router.get("/:id", getTutorbyIdController);

export default router;
