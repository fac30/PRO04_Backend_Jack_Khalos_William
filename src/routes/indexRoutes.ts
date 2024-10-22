import { Router } from "express";
import tutorRoutes from "./tutorsRoutes.js";
import subjectRoutes from "./subjectsRoutes.js";
import authRoutes from "./authRoutes.js";
import cookieRoutes from "./cookieRoutes.js";

const router = Router();

router.use(tutorRoutes);
router.use(subjectRoutes);
router.use(authRoutes);

router.use(cookieRoutes); // for learning purposes

export default router;
