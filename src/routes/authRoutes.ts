import express from "express";
import {loginController, logoutController } from "../controllers/authControllers";

const router = express.Router();

router.post("/login", (req, res, next) => loginController(req, res, next));

router.post("/logout", (req, res, next) => logoutController(req,res, next))

export default router;
