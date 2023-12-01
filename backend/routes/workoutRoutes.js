import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getSingleWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const workoutRouter = express.Router();

workoutRouter.get("/", getAllWorkouts);

workoutRouter.get("/:id", getSingleWorkout);

workoutRouter.post("/", createWorkout);

workoutRouter.patch("/:id", updateWorkout);

workoutRouter.delete("/:id", deleteWorkout);

export default workoutRouter;
