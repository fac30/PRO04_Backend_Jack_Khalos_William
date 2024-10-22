import express from "express";
import 
  {loginController,
  isAuthenticated,
 logoutController } from "../controllers/authControllers";

const router = express.Router();

router.post("/login", (req, res, next) => loginController(req, res, next));
router.get("/check-auth", isAuthenticated, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
  });
});

router.post("/logout", (req, res, next) => logoutController(req,res, next))

export default router;
