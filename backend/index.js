import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { userRouter } from "./routes/userRoutes.js";
import { workoutRouter } from "./routes/workoutRoutes.js";
import { productRouter } from "./routes/produtRouter.js";

process.env.NODE_ENV = "production";

dotenv.config();

const app = express();

const URI = process.env.URI;
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({ windowMs: 1 * 60 * 1000, limit: 20 });

app.use(express.json());
app.use(cors());
app.use(compression());
app.use(
  helmet.contentSecurityPolicy({ directives: { "script-src": ["'self'", "code.jquery.com", "cdn.jsdeliver.net"] } })
);
app.use(limiter);

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
