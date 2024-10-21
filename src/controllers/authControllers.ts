import { Response, Request, NextFunction } from "express";
import passport from "passport";

const loginController = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  passport.authenticate(
    "local",
    (err: Error | null, user: any, info: { message: string }) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      return res.status(200).json({ message: "Login successful", user });
    }
  )(req, res);
};

export default loginController;
