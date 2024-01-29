const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { userRouter } = require("./routes/userRoutes.js");
const { workoutRouter } = require("./routes/workoutRoutes.js");
const { productRouter } = require("./routes/productRouter.js");

dotenv.config();

const app = express();

const URI = process.env.URI || "mongodb://localhost:27017/myapp";
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// routes
app.use("/api/workouts", workoutRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`App is connected to DB running on port: ${PORT}`));
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
