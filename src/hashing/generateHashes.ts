import bcrypt from "bcrypt";

const generateHashes = async () => {
  const passwords = ["password123", "securepass456", "mypassword789"];
  const saltRounds = 10; // Number of salt rounds for bcrypt

  for (const password of passwords) {
    try {
      // Generate hash for each password
      const hash = await bcrypt.hash(password, saltRounds);
      console.log(`Password: ${password}, Hash: ${hash}`);
    } catch (error) {
      console.error("Error hashing password:", error);
    }
  }
};

// Call the function to generate hashes
generateHashes();
g
