import {
  getAllTutorsController,
  getTutorbyIdController,
} from "../controllers/tutorsControllers";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const id = req.query.id;

  if (id) {
    return getTutorbyIdController(req, res);
  } else {
    return getAllTutorsController(req, res);
  }
});

export default router;
