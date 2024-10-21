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
      console.log(`Password: ${password}, Hash: ${hash}`);
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  }
  return hashes;
};

export default generateHashes();
