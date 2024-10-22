import express from "express";
import {
  loginController,
  isAuthenticated,
  logoutController,
} from "../controllers/authControllers";

const router = express.Router();

router.get("/auth", isAuthenticated, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
});

router.post("/auth/login", (req, res, next) => loginController(req, res, next));
router.post("/auth/logout", (req, res, next) =>
  logoutController(req, res, next)
);

export default router;
