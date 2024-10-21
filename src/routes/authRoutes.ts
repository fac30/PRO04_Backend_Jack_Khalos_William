import express from "express";
import loginController from "../controllers/authControllers";

const router = express.Router();

router.post("/", (req, res, next) => loginController(req, res, next));

export default router;
