import express from "express";
import {
  loginController,
  isAuthenticated,
} from "../controllers/authControllers";

const router = express.Router();

router.post("/", (req, res, next) => loginController(req, res, next));
router.get("/check-auth", isAuthenticated, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
});

export default router;
