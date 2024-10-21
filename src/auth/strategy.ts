import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import getStudentByEmail from "../models/getPassword";

const loadStrategy = () => {
  passport.use(
    new LocalStrategy(async (username, password, cb) => {
      try {
        const user = getStudentByEmail(username);
        if (!user) {
          return cb(null, false, {
            message: "Incorrect username or password.",
          });
        }

        const match = await bcrypt.compare(password, user.password_hash);
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

export default loadStrategy;
