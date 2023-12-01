import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import User from "./models/userModel.js";
import workoutRouter from "./routes/workoutRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.URI;

// workout routes
app.use("/api/workouts", workoutRouter);

// user routes

mongoose.connect(URI).then(() => {
  app.listen(PORT, () => console.log(`App is connected to DB running on port: ${PORT}`));
});
