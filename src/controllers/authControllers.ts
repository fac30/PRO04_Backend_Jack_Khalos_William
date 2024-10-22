import { Response, Request, NextFunction } from "express";
import passport from "passport";
import { Express } from "express"; // Import the Express namespace

const loginController = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Email and password are required." });
    return;
  }

  passport.authenticate(
    "local",
    { session: true },
    (err: any, user: Express.User | false, info: { message: string }) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }

      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Login successful", user });
      });
    }
  )(req, res, next);
};

// Middleware to check if user is authenticated
const isAuthenticated = (req: Request, res: Response, next: Function) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authenticated" });
};

export { loginController, isAuthenticated };
