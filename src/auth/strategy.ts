import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import getStudentByEmail from "../models/getPassword";

declare global {
  namespace Express {
    interface User {
      id: number;
      email: string;
      password_hash: string;
    }
  }
}

const loadStrategy = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
      },
      async (email, password, cb) => {
        try {
          const user = getStudentByEmail(email);
          if (!user) {
            return cb(null, false, {
              message: "Incorrect email or password.",
            });
          }

          const match = await bcrypt.compare(password, user.password_hash);
          if (!match) {
            return cb(null, false, {
              message: "Incorrect email or password.",
            });
          }

          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
      }
    )
  );

  passport.serializeUser((user: Express.User, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email: string, done) => {
    try {
      const user = getStudentByEmail(email);
      if (!user) {
        return done(new Error("User not found"));
      }
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};

export default loadStrategy;
