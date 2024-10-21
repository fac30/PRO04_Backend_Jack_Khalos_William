import { Response, Request, NextFunction } from "express";
import passport from "passport";

type AuthHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

const loginController: AuthHandler = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required." });
    return;
  }

  passport.authenticate(
    "local",
    { session: false },
    (err: Error | null, user: any, info: { message: string }) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (!user) {
        res.status(401).json({ message: info.message });
        return;
      }
      res.status(200).json({ message: "Login successful", user });
    }
  )(req, res, next);
};

export default loginController;
