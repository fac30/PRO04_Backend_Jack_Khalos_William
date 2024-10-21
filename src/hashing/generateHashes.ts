import bcrypt from "bcrypt";
import crypto from "crypto";

const generateHashes = async () => {
  const passwords = ["jj", "ww", "kk"];
  const saltRounds = 10;
  const hashes = [];

  for (const password of passwords) {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      hashes.push(hash);
      const salt = crypto.randomBytes(16).toString("hex"); // Generate random salt
      console.log(`Password: ${password}, Hash: ${hash}, Salt: ${salt}`);
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  }
  return hashes;
};

export default generateHashes();
