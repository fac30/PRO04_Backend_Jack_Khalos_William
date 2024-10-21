import express from "express";
import loginController from "../controllers/authControllers.js"; // Adjust the path as necessary

const router = express.Router();

router.post("/", loginController);

export default router;
