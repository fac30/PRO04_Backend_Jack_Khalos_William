import { Response, Request, NextFunction } from "express";
import passport from "passport";
import { User } from "../models/getPassword.js";

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
    (err: Error | null, user: User, info: { message: string }) => {
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

const logoutController: AuthHandler = (req, res) =>{
  if(!req.isAuthenticated()){
    res.status(401).json({message: "Error logging out, user is not authenticated."})
    return 
  }

  req.logOut((err: unknown)=>{
    if(err instanceof Error) {
      res.status(500).json({message: err.message});
      return;
    } else {
      res.status(500).json({message: "Error occured during loging out."})
      return;
    }

    req.session.destroy((err: unknown | null) => {
      if(err instanceof Error) {
        res.status(500).json({message: err.message})
        return;
      } else {
        res.status(500).json({message:"Failed to end session."})
        return;
      }

      res.clearCookie('connect.sid', {path: '/'});
      res.status(200).json({message: "Successfully logged out"});
      return;
    });
  });
};

export {loginController, logoutController};
