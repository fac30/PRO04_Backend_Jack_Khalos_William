import express from "express";
import {
  loginController,
  isAuthenticated,
} from "../controllers/authControllers";

const router = express.Router();

router.post("/", (req, res, next) => loginController(req, res, next));
router.post("/auth", isAuthenticated);

export default router;
