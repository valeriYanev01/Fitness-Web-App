import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    day: {
      type: String,
    },
  },
  { timestamps: true }
);

export const workoutModel = mongoose.model("workouts", workoutSchema);
