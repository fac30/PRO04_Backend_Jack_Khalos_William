import express from "express";
import {
  loginController,
  authController,
  logoutController,
} from "../controllers/authControllers.js";
import passport from "passport";

const router = express.Router();

router.get("/auth", authController);
router.post("/auth/login", passport.authenticate("local"), loginController);
router.post("/auth/logout", logoutController);

export default router;
