import { Response, Request, NextFunction } from "express";

const loginController = (req: Request, res: Response) => {
  res.status(200).json({ message: "You successfully logged in." });

  return;
};

const authController = (req: Request, res: Response, next: Function) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({ message: "you are logged in" });
  } else {
    res.json({ message: "you are not logged in" });
  }
  return req.user;
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
