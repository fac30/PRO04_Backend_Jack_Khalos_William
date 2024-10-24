import { Response, Request, NextFunction } from "express";

const loginController = (req: Request, res: Response) => {
  if (req.user) {
    res.status(200).json({ ...req.user });
  } else {
    res.status(500).json({ message: "There was an error logging in." });
  }

  return;
};

const authController = (req: Request, res: Response, next: Function) => {
  console.log(req.user);
  console.log("");
  console.log(req.session);
  if (req.user) {
    res.status(200).json({ message: "you are logged in" });
  } else {
    res.json({ message: "you are not logged in" });
  }
  return;
};

const logoutController = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.status(401).json({ message: "You are not logged in." });
    return;
  } else {
    req.logOut((err) => {
      if (err) {
        res.status(400).json({ message: "There was an error logging out." });
        return;
      }
      res.status(200).json({ message: "You have successfully logged out." });
    });
  }
  return;
};

export { loginController, authController, logoutController };
