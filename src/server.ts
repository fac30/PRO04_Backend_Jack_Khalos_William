import express from "express";
import tutorsRoutes from "./routes/tutorsRoutes";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tutors", tutorsRoutes);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});

export default app;
