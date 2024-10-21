import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import zubiDB from "../database/db";
import getStudentByEmail from "../models/getPassword";

const checkPassword = () => {
  passport.use(
    new LocalStrategy(function verify(username, password, cb) {
      const dummy = "jack@zubi.com";
      try {
        const user = getStudentByEmail(dummy);
        if (!user) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        console.log(user);

        const match = bcrypt.compare(password, user.password_hash);
        if (!match) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        return cb(null, user);
      } catch (err) {
        return cb(err);
      }
    })
  );
};

export default checkPassword;
