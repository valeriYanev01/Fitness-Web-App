import express from "express";
import {
  allWorkouts,
  createWorkout,
  deleteWorkout,
  singleWorkout,
  updateWorkout,
} from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", allWorkouts);
router.get("/:id", singleWorkout);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export { router as workoutRouter };
