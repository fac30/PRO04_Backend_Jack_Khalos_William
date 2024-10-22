import express from "express";
import tutorsRoutes from "./routes/tutorsRoutes.js";
import subjectsRoutes from "./routes/subjectsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import passport from "passport";
import loadStrategy from "./auth/strategy.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(passport.initialize());
loadStrategy();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tutors", tutorsRoutes);
app.use("/subjects", subjectsRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
