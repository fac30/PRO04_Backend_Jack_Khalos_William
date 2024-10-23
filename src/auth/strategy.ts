import passport, { use } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import getStudentByEmail from "../models/getPassword";

declare global {
  namespace Express {
    interface User {
      id: number;
      useremail: string;
    }
  }
}

passport.use(
  new LocalStrategy(
    {
      usernameField: "useremail",
    },
    async (
      useremail: string,
      password: string,
      done: (error: any, user?: Express.User | false) => void
    ) => {
      try {
        const user = await getStudentByEmail(useremail);
        if (!user) {
          throw new Error("User not found.");
        }
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
          throw new Error("Invalid password.");
        }
        const { id, email } = user;
        const User = { id, useremail: email };
        return done(null, User);
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

passport.serializeUser((User: Express.User, done) => {
  done(null, User);
});

passport.deserializeUser(async (User: Express.User, done) => {
  try {
    const findUser: any = await getStudentByEmail(User.useremail);
    if (!findUser) {
      throw new Error("User not found");
    }
    const { id, email } = findUser;
    const foundUser = { id, email };
    done(null, foundUser as any);
  } catch (err) {
    if (err instanceof Error) {
      done(err, null);
    } else {
      done("Incorrect credentials.", null);
    }
  }
});

export default passport;
