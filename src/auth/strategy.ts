import passport, { use } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import getStudentByEmail from "../models/getPassword";

declare global {
  namespace Express {
    interface User {
      id: number;
      email: string;
    }
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (
      email: string,
      password: string,
      done: (error: any, user?: Express.User | false) => void
    ) => {
      try {
        const user = await getStudentByEmail(email);
        if (!user) {
          throw new Error("User not found.");
        }
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
          throw new Error("Invalid password.");
        }
        /* const { id, email, full_name } = user;
        const User = { id, email, name: full_name }; */
        return done(null, user);
      } catch (err) {
        if (err instanceof Error) {
          done(err, false);
        } else {
          done("Incorrect credentials.", false);
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
    const user: any = await getStudentByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    /*  const { id, email } = findUser;
    const foundUser = { id, email }; */
    done(null, user);
  } catch (err) {
    if (err instanceof Error) {
      done(err, null);
    } else {
      done("Incorrect credentials.", null);
    }
  }
});

export default passport;
