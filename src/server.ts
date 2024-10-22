import express from "express";
import tutorsRoutes from "./routes/tutorsRoutes.js";
import subjectsRoutes from "./routes/subjectsRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import passport from "passport";
import loadStrategy from "./auth/strategy.js";
import session from "express-session";

dotenv.config();

const app = express();

app.use(
  session({
    secret: "zubiSecretKey", // Change this to a strong secret key
    resave: false, // Don't save session if not modified
    saveUninitialized: false, // Only save sessions when they are used
    cookie: {
      secure: false, // Set to `true` if using HTTPS
      maxAge: 24 * 60 * 60 * 1000, // 1-day cookie expiry
      sameSite: "strict",
      httpOnly: true,
    },
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
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
