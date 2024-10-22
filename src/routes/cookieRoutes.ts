import { signedCookie } from "cookie-parser";
import express from "express";

/*
This is for a working example. Do not delete this.

Test cookies by running these in postman or via the vscode extension called thunderclient.

You can create a new test file and add it to gitignore to change the values in these routes to play around with it.

*/

const router = express.Router();

router.get("/cookies", (req, res) => {
  res.cookie("hello", "world", { maxAge: 600000, signed: true });
  console.log(req.session);
  console.log(req.session.id);
  req.session.visited = true;
  res.send({ message: "Hello" });
});

router.get("/cookies/response", (req, res) => {
  /* console.log(req.headers.cookie);
  console.log(req.cookies);
  console.log(req.signedCookies.hello);
  if (req.signedCookies.hello && req.signedCookies.hello === "world") {
    return res.send("Hi there");
  }
  return res.send("sorry wrong cookie"); */
  console.log(req.session);
  console.log(req.session.id);
  res.send("hello");
});

export default router;
