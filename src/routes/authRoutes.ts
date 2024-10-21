import express from "express";
import loginController from "../controllers/authControllers";

const router = express.Router();

// Add the NextFunction parameter to match the controller signature
router.post("/", (req, res, next) => loginController(req, res, next));

export default router;
