import express from "express";
import tutorsRoutes from "./routes/tutorsRoutes.js";
import subjectsRoutes from "./routes/subjectsRoutes.js"
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/tutors", tutorsRoutes);
app.use("/subjects", subjectsRoutes)

app.listen(port,()=>{
    console.log(`Server started on port: ${port}`)
})
