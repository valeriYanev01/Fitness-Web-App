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
  },
  { timestamps: true }
);

const WorkoutModel = mongoose.model("userWorkout", workoutSchema);
export default WorkoutModel;
