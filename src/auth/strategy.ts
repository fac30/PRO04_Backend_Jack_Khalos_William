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
      async (email, password, callback) => {
        console.log(`email: ${email}`);
        console.log(`password: ${password}`);
        try {
          const user = await getStudentByEmail(email);
          if (!user) {
            throw new Error("Incorrect email or password.");
          }

          const match = await bcrypt.compare(password, user.password_hash);
          if (!match) {
            throw new Error("Invalid password.");
          }
          return callback(null, user);
        } catch (err) {
          if (err instanceof Error) {
            callback(err, undefined);
          } else {
            callback("Incorrect email or password.", undefined);
          }
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
