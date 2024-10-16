import express from "express";
import tutorsRoutes from "./routes/tutorsRoutes";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tutors", tutorsRoutes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

export default app;
