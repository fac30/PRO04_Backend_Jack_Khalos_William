import { Response, Request, NextFunction } from "express";
import passport from "passport";

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

const isAuthenticated = (req: Request, res: Response, next: Function) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Not authenticated" });
};

const logoutController = (req: Request, res: Response, next: NextFunction) =>{
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

export { loginController, isAuthenticated, logoutController };


