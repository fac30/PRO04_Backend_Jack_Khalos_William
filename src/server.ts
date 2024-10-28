import express from "express";
import routes from "./routes/indexRoutes.js";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import cookieParser from "cookie-parser";
import "./auth/strategy.js";
import cors from "cors";

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
app.use(cookieParser("zubiSecretKey"));
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
    methods: ["GET", "POST"],
  })
);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
