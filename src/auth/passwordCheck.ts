import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local"; // Use named import
import bcrypt from "bcrypt";
import crypto from "crypto";
import getStudentByEmail from "../models/getPassword";

// Configure the LocalStrategy for Passport
passport.use(
  new LocalStrategy(function verify(email, password, cb) {
    // Use your function to get the student by email
    const student = getStudentByEmail(email);

    if (!student) {
      return cb(null, false, { message: "Incorrect email or password." });
    }

    // Compare the provided password with the stored password hash
    crypto.pbkdf2(
      password,
      student.salt,
      310000,
      32,
      "sha256",
      function (err, hashedPassword) {
        if (err) {
          return cb(err);
        }
        if (
          !crypto.timingSafeEqual(
            Buffer.from(student.password_hash),
            hashedPassword
          )
        ) {
          return cb(null, false, { message: "Incorrect email or password." });
        }
        return cb(null, student); // User authenticated successfully
      }
    );
  })
);
