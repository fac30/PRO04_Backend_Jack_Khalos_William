import {
  getAllCoursesController,
  getCoursebyIdController,
} from "../controllers/coursesControllers.js";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const id = req.query.id;

  if (id) {
    return getCoursebyIdController(req, res);
  } else {
    return getAllCoursesController(req, res);
  }
});

export default router;
