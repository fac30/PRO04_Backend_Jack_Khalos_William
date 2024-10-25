import {
  getAllSubjectsController,
  getSubjectbyIdController,
} from "../controllers/subjectsControllers";
import { Router } from "express";

const router = Router();

router.get("/subjects", async (req, res) => {
  const id = req.query.id;

  if (id) {
    return getSubjectbyIdController(req, res);
  } else {
    return getAllSubjectsController(req, res);
  }
});

export default router;
