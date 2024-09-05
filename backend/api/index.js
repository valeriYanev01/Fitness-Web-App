import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import { userRouter } from "../routes/userRoutes.js";
import { workoutRouter } from "../routes/workoutRoutes.js";
import { productRouter } from "../routes/produtRouter.js";

process.env.NODE_ENV = "production";

dotenv.config();

const app = express();

const URI = process.env.URI;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/workouts", workoutRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

mongoose
  .connect(URI, { retryWrites: false })
  .then(() => {
    app.listen(PORT, () => console.log(`App is connected to DB running on port: ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
