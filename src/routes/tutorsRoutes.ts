import {
  getAllTutorsController,
  getTutorbyIdController,
} from "../controllers/tutorsControllers.js";
import { Router } from "express";

const router = Router();

router.get("/tutors", async (req, res) => {
  const id = req.query.id;

  if (id) {
    return getTutorbyIdController(req, res);
  } else {
    return getAllTutorsController(req, res);
  }
});

export default router;
